import { Route, Routes } from "react-router-dom"
import CounterPage from "./Pages/CounterPage"
import ExchangerPage from "./Pages/ExchangerPage"

const Main = () => {
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