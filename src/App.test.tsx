/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import App from './App'
import {render, screen} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import {act} from 'react-dom/test-utils'

describe('testing math functions', () => {
  
  //it should - isto deve acontecer
  it('should add 1 to 2 and return 3', () => {
    let result = 1 + 2

    expect(result).toBe(3)
  })

  it('should multiply 5 by 3 and return 15', () => {
    let result = 5 * 3

    expect(result).toBe(15)
  })
})

describe ('testing App.tsx', () => {
  it('should have a container div', () => {

    const {container} = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )   
    expect(container.getElementsByClassName('container').length).toBeGreaterThan(0)
  })

  it('should have a "Cadastrar" button in Header', () => {
    render (
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  
    let button = screen.getByText('Cadastrar')
  
    expect(button).toBeInTheDocument()
  })

  it('should render NotFound component when entering a non existing route', () => {
    const {container} = render (
      <MemoryRouter initialEntries={['/blablabla']}> 
        <App />
      </MemoryRouter>
    )
      
    const h2 = container.getElementsByTagName('h2')[0]
    expect(h2.innerHTML).toBe('Página não encontrada')

    //const notFoundTextElement = screen.getByText('Página não encontrada')
    //expect(notFoundTextElement).toBeInTheDocument()
  })

  it('should go to the registration page when clicking on the register button', () => {
    
    const {container} = render (
      <MemoryRouter > 
        <App />
      </MemoryRouter>
    )

    act(()=> {
      let registerBtn = container
        .getElementsByClassName('headerRight')[0]
        .getElementsByTagName('a')[0]

      registerBtn.click()
    })
    
    const registrationTitle = screen.getByText('Cadastro de carro')

    expect(registrationTitle).toBeInTheDocument()
  
  })
})

export {}