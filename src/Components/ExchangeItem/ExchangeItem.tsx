
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

  const disableButton = () => {
    let selectItemId = Object.keys(selectedItems)
    for (let i = 0; i < selectItemId.length; i++) {
      if (parseInt(selectItemId[i]) === id) {
        return true
      }
    }
    return false
  }

  return (
    <div>
        <h3>{title}</h3>
        <p>{descr}</p>
        <p>{currency} {price}</p>
        <button
          // disabled = {Object.keys(selectedItems).length > 0 ? disableButton() : false}
          onClick={() => selectItem(id, price)}
          >Buy
        </button>
    </div>
  )
}

export default ExchangeItem