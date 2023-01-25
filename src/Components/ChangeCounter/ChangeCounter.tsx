import { useState } from "react"

type Props = {}

const ChangeCounter = (props: Props) => {

    const [changeCount, setChangeCount] = useState<number>(0)

    const changeCounter = () => {
        setChangeCount((prevState) => prevState + 1)
    }

  return (
    <div>
        <button onClick={changeCounter}>change count ({changeCount})</button>
    </div>
  )
}

export default ChangeCounter