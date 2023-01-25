import ExchangeItemList from "../Components/ExchangeItem/ExchangeItemList"
import { useState } from "react"
import ChangeCurrencyBar from "../Components/ChangeCurrencyBar/ChangeCurrencyBar"


type Props = {}

const ExchangerPage = (props: Props) => {

  const [currentCurrency, setCurrentChange] = useState<string>('USD')


  const changeCurrency:any = (e:React.ChangeEvent<HTMLButtonElement>) => {
    setCurrentChange(() =>  e.target.value)
  }

  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '30px', flexDirection: 'column'}}>
      <ChangeCurrencyBar changeCurrency={changeCurrency}/>
      <ExchangeItemList newCurrency={currentCurrency}/>
    </div>
  )
}

export default ExchangerPage