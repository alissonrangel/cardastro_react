/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import {CarList} from '.'; // . procura o index da pasta
import {render, screen} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'

describe('testing CarList', () => {

  it('should have a list of cars', () => {

    const {container} = render(
      <MemoryRouter>
        <CarList />
      </MemoryRouter>
    )

    const ListEl = container.getElementsByClassName('list')
    expect(ListEl.length).toBeGreaterThan(0)
  })

  it('should have 5 car in the list', () => {

    const {container} = render(
      <MemoryRouter>
        <CarList />
      </MemoryRouter>
    )

    const carsList = container.getElementsByClassName('carItem')
    expect(carsList.length).toEqual(5)
  })

})

export {}

