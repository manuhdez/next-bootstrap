import { render, screen } from '@testing-library/react'
import Page from '../../pages'

describe('index page', () => {
  beforeEach(() => {
    render(<Page />)
  })

  test('can see the welcome message', () => {
    screen.getByRole('heading', { name: /welcome/i })
  })

  test('can see the counter', () => {
    screen.getByText(/count: \d+/i)
  })
})
