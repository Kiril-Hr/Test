import { NavLink } from "react-router-dom"


type Props = {}

const Navigate = (props: Props) => {

  const style:Props = {
    width: '150px',
    height: '75px',
    lineHeight: '75px',
    background: 'green',
    color: 'white',
    textDecoration: 'none',
    textAlign: 'center',
    marginBottom: '150px',
  }

  return (
    <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
      <NavLink to='/' style={style}>Exchanger</NavLink>
      <NavLink to='/counter' style={style}>Counter</NavLink>
    </div>
  )
}

export default Navigate