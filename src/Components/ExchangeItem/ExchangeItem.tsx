
type Props = {
    id: number,
    title: string,
    descr: string,
    price: number,
    currency: string
    selectItem: (id:number, price:number) => void
    selectedItems: any
}

const ExchangeItem = ({id, title, descr, price, currency, selectItem, selectedItems}: Props) => {

  return (
    <div>
        <h3>{title}</h3>
        <p>{descr}</p>
        <p>{currency} {price}</p>
        <button
          onClick={() => selectItem(id, price)}
          >Buy
        </button>
    </div>
  )
}

export default ExchangeItem