import { useState } from 'react'
import { InputBox } from '../components'
import useCurrency from '../hooks/useCurrency'

function App() {
  const [amount, setAmount] = useState();
  const [from , setFrom] = useState("usd");
  const [to , setTo] = useState("inr");
  const  [camount , setCamount] = useState();
  const currencyinfo = useCurrency(from);
  const options = Object.keys(currencyinfo);

  const convert = () =>{
    setCamount(amount * currencyinfo[to])
  }

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setCamount(amount)
    setAmount(camount)
  }

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4r5rYX-jmkZp6lUs-mciD1xlSJ0n7dx5uw&s')`,}}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <h1 className='mx-auto text-center font-bold text-3xl mb-3'>Currency Convertor</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                onCurrencyChange={(amount) => 
                                  setFrom(amount)
                                }
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={camount}
                                currencyOption={options}
                                onCurrencyChange={(currency) => 
                                  setTo(currency)
                                }
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
