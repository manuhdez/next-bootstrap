import { cleanup, render, screen } from '@testing-library/react'
import event from '@testing-library/user-event'
import Counter from './Counter'

beforeEach(() => {
  render(<Counter />)
})

test('renders the current count', () => {
  const count = screen.getByText(/count:/i)
  expect(count).toBeInTheDocument()
  expect(count).toHaveTextContent(/count: 0/i)
})

test('user can increment the count', () => {
  const incrementButton = screen.getByRole('button', { name: /increment/i })
  event.click(incrementButton)
  event.click(incrementButton)

  screen.getByText(/count: 2/i)
})

test('user can decrement the count', () => {
  cleanup()
  render(<Counter initialCount={10} />)
  const decrementButton = screen.getByRole('button', { name: /decrement/i })
  event.click(decrementButton)
  screen.getByText(/count: 9/i)
})

test('count cannot have a negative value', () => {
  screen.getByText(/count: 0/i)

  const decrementButton = screen.getByRole('button', { name: /decrement/i })
  event.click(decrementButton)

  screen.getByText(/count: 0/i)
})
