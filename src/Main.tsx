import { Route, Routes } from "react-router-dom"
import Navigate from "./Components/Navigate/Navigate"
import CounterPage from "./Pages/CounterPage"
import ExchangerPage from "./Pages/ExchangerPage"


type Props = {}

const Main = (props: Props) => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<ExchangerPage />} />
            <Route path="counter" element={<CounterPage />} />
        </Routes>
    </div>
  )
}

export default Main