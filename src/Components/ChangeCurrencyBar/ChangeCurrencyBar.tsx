
type Props = {
  changeCurrency: () => void
}

const ChangeCurrencyBar = ({changeCurrency}:Props) => {

  return (
    <div>
        <button onClick={changeCurrency} value='USD'>USD</button>
        <button onClick={changeCurrency} value='EUR'>EUR</button>
        <button onClick={changeCurrency} value='UAH'>UAH</button>
        <button onClick={changeCurrency} value='PLN'>PLN</button>
    </div>
  )
}

export default ChangeCurrencyBar