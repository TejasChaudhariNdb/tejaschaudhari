import { useState ,useEffect} from "react";

export default function Positionsize() {
  const [accountBalance, setAccountBalance] = useState(15000);
  const [maxPercentageToLose, setMaxPercentageToLose] = useState(3);
  const [maximumRisk, setMaximumRisk] = useState(0);
  const [positionSize, setPositionSize] = useState(0);
  const [sharePrice, setSharePrice] = useState(110);
  const [stopLossPrice, setStopLossPrice] = useState(100);

  function calculatePositionSize() {
    // Calculate maximum risk and position size
    const maxRisk = accountBalance * (maxPercentageToLose / 100);
    const riskPerShare = sharePrice - stopLossPrice;
    const positionSize = Math.floor(maxRisk / riskPerShare);
    // const positionSize = Math.floor(maxRisk  / sharePrice);

    // Update state with calculated values
    setMaximumRisk(maxRisk.toFixed(2));
    setPositionSize(positionSize);
  }

useEffect(() => {

  calculatePositionSize()
}, [])


  return (
    <>
     <div className="Container_cal">
     <div>


      <h1>Position Size Calculator</h1>
      <form>
        <label htmlFor="account-balance">Capital for this trade</label>
        <input
          type="number"
          id="account-balance"
          name="account-balance"
          value={accountBalance}
          onChange={(e) => setAccountBalance(e.target.value)}
        />
    <label htmlFor="share-price">Share Buying Price:</label>
      <input
        type="number"
        id="share-price"
        name="share-price"
        value={sharePrice}
        onChange={(e) => setSharePrice(e.target.value)}
      />

<label htmlFor="max-percentage-to-lose">Stop Loss Price</label>
        <input
          type="number"
          id="max-percentage-to-lose"
          name="max-percentage-to-lose"
          value={stopLossPrice}
          onChange={(e) => setStopLossPrice(e.target.value)}
        />



        <label htmlFor="max-percentage-to-lose">Maximum Percentage% to Lose:</label>
        <input
          type="number"
          id="max-percentage-to-lose"
          name="max-percentage-to-lose"
          value={maxPercentageToLose}
          onChange={(e) => setMaxPercentageToLose(e.target.value)}
        />


        <input type="button" value="Calculate" onClick={calculatePositionSize} />
      </form>

      <div id="results">
        <p>
          Maximum Risk: ₹
          <span id="maximum-risk" className="risk">
            {maximumRisk}
          </span>
        </p>
        <p>
          Position Size:{" "}
          <span id="position-size" className="shares">
            {positionSize}
          </span>{" "}
          shares
        </p>
      </div>
      </div>
      </div>
      <style jsx>{`
   body {
    font-family: Arial, sans-serif;
    color: #333;
    background-color: #f7f7f7;
  }
  h1 {
    color: #2563eb;
  }
  form {
    margin: 20px 0;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  label {
    display: block;
    margin-bottom: 10px;
    color: #2563eb;
  }
  input[type="number"] {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  input[type="button"] {
    background-color: #2563eb;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
  }
  input[type="button"]:hover {
    background-color: #1c3fba;
  }

  #maximum-risk {
    color: #2563eb;
    font-weight: bold;
  }
    p {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .risk {
    color: #2563eb;
  }

  .shares {
    color: #2563eb;
  }
  #results{
        margin: 20px 0;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

          `}
          </style>
          </>
  )

        }