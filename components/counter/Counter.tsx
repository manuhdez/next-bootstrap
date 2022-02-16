import { useState } from 'react'
import S from './Counter.styled'

type Props = {
  initialCount?: number
}

const Counter = ({ initialCount = 0 }: Props) => {
  const [count, setCount] = useState(initialCount)

  const increment = () => setCount(count + 1)

  const decrement = () => {
    if (count === 0) return
    setCount(() => count - 1)
  }

  return (
    <S.Container>
      <S.CounterValue>Count: {count}</S.CounterValue>
      <S.CounterActions>
        <S.CounterButton onClick={decrement}>decrement</S.CounterButton>
        <S.CounterButton onClick={increment}>increment</S.CounterButton>
      </S.CounterActions>
    </S.Container>
  )
}

export default Counter
