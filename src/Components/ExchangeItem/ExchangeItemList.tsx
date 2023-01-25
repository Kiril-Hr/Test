import { useState } from "react"
import ExchangeItem from "./ExchangeItem"
import { exchangeItems, getPricesObject } from "./ExchangeItemsArray"

type Props = {
  newCurrency: string
}

type ItemsProps = {
    id: number,
    title: string,
    descr: string,
    price: number,
    currency: string,
}

const ExchangeItemList = ({newCurrency}:Props) => {

  const premanentPrices = getPricesObject(exchangeItems)
  const premanentPricesValues:any = Object.values(premanentPrices)

  let newPrice = newCurrency === 'USD' ? 1 : newCurrency === "EUR" ? 0.92 : newCurrency === "UAH" ? 37 : 4.34

  const [exchangeItemsArray, setExchangeItemsArray] = useState<ItemsProps[]>(exchangeItems)

  const [selectedItems, setSelectedItems] = useState({})

  const selectItem = (id:number, price:number) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [id]: price,
      }
    ))
  }

  const changeCurrency = (price:number) => {
    setExchangeItemsArray(exchangeItemsArray.map((item, i) => ({
      ...item,
      price: premanentPricesValues[i] * price,
      currency: newCurrency,
    })
  ))
  }

  let selectItemsId = Object.keys(selectedItems)

  let selectedPrices:any = []

  if (Object.values(selectedItems).length > 0) {
    for (let i = 0; i < exchangeItemsArray.length; i++) {
      for (let j = 0; j < selectItemsId.length; j++) {
        if (exchangeItemsArray[i].id == parseInt(selectItemsId[j])) selectedPrices.push(exchangeItemsArray[i].price)
      }
    }
  }
  
  let totalSelected

  let totalSelectedItems = () => selectedPrices.length > 0 ? totalSelected = selectedPrices.reduce((total:any, current:any) => total + current, 0) : 0
  
  totalSelectedItems()
  
  if (newCurrency !== exchangeItemsArray[0].currency) {
    changeCurrency(newPrice)
  }

  return (
    <>
      <div style={{display: 'flex', gap: '20px'}}>
          {exchangeItemsArray.map(({id, title, descr, price, currency}:ItemsProps) => (
              <ExchangeItem id={id} title={title} descr={descr} price={price} key={id} currency={currency} selectItem={selectItem} selectedItems={selectedItems}/>
            )
          )}
      </div>
      <div style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Total: {totalSelected !== undefined ? totalSelected : 0} {newCurrency}</div>
    </>
  )
}

export default ExchangeItemList