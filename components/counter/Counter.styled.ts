import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #ccc;
  border-radius: 4px;

  width: fit-content;
  padding: 1.5rem;

  background: #fff;

  @media (prefers-color-scheme: dark) {
    background: #333;
    color: #fff;
  }
`

const CounterValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`

const CounterActions = styled.div`
  display: flex;
  justify-content: space-around;
`

const CounterButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
`

const Styled = {
  Container,
  CounterValue,
  CounterActions,
  CounterButton,
}

export default Styled
