import ChangeCounter from "../Components/ChangeCounter/ChangeCounter"

type Props = {}

const CounterPage = (props: Props) => {
  return (
    <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
        <ChangeCounter />
        <ChangeCounter />
        <ChangeCounter />
    </div>
  )
}

export default CounterPage