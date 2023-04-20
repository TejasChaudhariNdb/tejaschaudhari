import { useState, useEffect } from "react";
import Head from "next/head";
import SEO from "@bradgarropy/next-seo"
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
    console.log(accountBalance / sharePrice);
    const positionSize = Math.floor(maxRisk / riskPerShare);
    const qytToBuy = Math.round(Math.min(accountBalance / sharePrice, positionSize));
    // const positionSize = Math.floor(maxRisk  / sharePrice);

    if (maxRisk > accountBalance) {
      setMaximumRisk(accountBalance);
    } else {
      setMaximumRisk(maxRisk.toFixed(2));
    }

    setPositionSize(qytToBuy);
  }

  useEffect(() => {
    calculatePositionSize();
  }, []);

  return (
    <>
      <Head>
        <title>Position Size Calculator Nifty & Bank , Stocks</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta name="author" content="Tejas Chaudhari" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.tejaschaudhari.com/stock/Positionsize"
          key="canonical"
        />
        <meta
          name="description"
          content="Use our Position Size and Risk Calculator to easily calculate the recommended lot size, using live market quotes, account equity, risk percentage and stop ..."
        />

        <meta property="og:title" content="Position Size Calculator Nifty & Bank Stocks" />
        <meta
          property="og:description"
          content="Use our Position Size and Risk Calculator to easily calculate the recommended lot size, using live market quotes, account equity, risk percentage and stop ..."
        />
        <meta property="og:type" content="website" />

        <meta name="Keywords" content="position size calculator, lot size calculator, Nifty lot size ,bank nifty lot size,india stock market stop loss , stock size ,forex lot size calculator,Tejas chauhdari , rachanaranade , forex position size calculator, position size calculator mt4, myfxbook position size calculator, forex lot calculator, myfxbook position size, forex lot size calculator mt4, position size calculator stocks, forex risk management calculator, forex calculators, myfxbook calculator" />

        <SEO
      title="Position Size Calculator Nifty & Bank , Stocks"
      description="Use our Position Size and Risk Calculator to easily calculate the recommended lot size, using live market quotes, account equity, risk percentage and stop ..."
      keywords="position size calculator, Nifty lot size ,bank nifty, lot size,india stock market stop loss , stock size , lot size calculator, forex lot size calculator, forex position size calculator, position size calculator mt4, myfxbook position size calculator, forex lot calculator,Tejas chauhdari , rachanaranade ,  myfxbook position size, forex lot size calculator mt4, position size calculator stocks, forex risk management calculator, forex calculators, myfxbook calculator"

    />
      </Head>
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
              onChange={e => setAccountBalance(e.target.value)}
            />
            <label htmlFor="share-price">Share Buying Price:</label>
            <input
              type="number"
              id="share-price"
              name="share-price"
              value={sharePrice}
              onChange={e => setSharePrice(e.target.value)}
            />

            <label htmlFor="max-percentage-to-lose">Stop Loss Price</label>
            <input
              type="number"
              id="max-percentage-to-lose"
              name="max-percentage-to-lose"
              value={stopLossPrice}
              onChange={e => setStopLossPrice(e.target.value)}
            />

            <label htmlFor="max-percentage-to-lose">Maximum Percentage% to Lose:</label>
            <input
              type="number"
              id="max-percentage-to-lose"
              name="max-percentage-to-lose"
              value={maxPercentageToLose}
              onChange={e => setMaxPercentageToLose(e.target.value)}
              max={102}
              min={0}
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
              Qyt:{" "}
              <span id="position-size" className="shares">
                {positionSize}
              </span>{" "}
              shares
            </p>
            <p>
              Nifty{" "}
              <span id="position-size" className="shares">
                {Math.floor(positionSize / 50)}
              </span>{" "}
              Bank Nifty{" "}
              <span id="position-size" className="shares">
                {Math.floor(positionSize / 25)}
              </span>
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="description">
        <p>
          One of the most important tools in a traders bag is risk management.{" "}
          <a href="#">Proper position sizing</a> is key to managing risk and to avoid blowing out
          your account on a single trade.
        </p>

        <p>
          With a few simple inputs, our position size calculator will help you find the approximate
          amount of currency units to buy or sell to control your maximum risk per position.
        </p>

        <p>
          To use the position size calculator, enter the currency pair you are trading, your account
          size, and the percentage of your account you wish to risk. Our position sizing calculator
          will suggest position sizes based on the information you provide.
        </p>

        <p>
          Calculating your position size correctly is very important, especially if you are pursuing
          a money management strategy The main idea behind these levels is the support and
          resistance values for a currency pair trend at which the most important breaks or bounces
          can appear. It is recommended to set your stop-loss, take-profit as well as stop and limit
          orders at these levels or around their values. This position-size calculator will organize
          your currency trading experience and will allow you to be in the market full-time.
        </p>
        <p>
          It takes smart choices to make smart money. Knowing your risk position is critical to
          establishing a winning Wall Street strategy. Our free position size calculator helps you
          make trading decisions based on intellect and not emotion. That’s how you trade like a
          pro. Chart Your Trade helps you identify your best opportunities, and the calculator helps
          you know how much and when to invest. Importantly, it also helps you know when to stop.
        </p>
        <p>
          Give it a try! Use the calculator to establish and understand your risk tolerance. Wall
          Street pros know exactly how much money they can afford to invest and how much they can
          afford to lose. That knowledge, combined with your Chart Your Trade benefits like knowing
          the hottest stock picks every month and the exact point to enter the market, will help you
          develop a winning strategy.
        </p>

        <hr />
        <br />
        <br />
        <br />
<h2>How to use the Position Size and Risk Calculator</h2>
       <br />
        <p>
          <strong>Instrument:</strong> Traders can select from major forex pairs, minors and
          exotics, several cryptocurrencies, such as BTC/USD, ETH/USD, LTCUSD, XLM/USD and XRP/USD,
          and a range of commodites, such as Gold, Silver and Oil. Lets choose, for our example,
          the USD/CAD pair.
          <br />
          <br />
          <strong>Deposit currency:</strong> The account base currency is important to assess the
          ideal lot size, as it takes into consideration the pip value and the market rate of the
          selected cross. We choose USD as our deposit currency, for this example.
          <br />
          <br />
          <strong>Stop-loss (pips):</strong> Traders should input the maximum number of pips willing
          to risk in a trade. For this example we will use 100 pips for our stop-loss.
          <br />
          <br />
          <strong>Account balance:</strong> Pretty straight forward, traders just need to input the
          account equity. For our example, we will type 2000.
          <br />
          <br />
          <strong>Risk:&nbsp;</strong>The crucial field of this Position Size and Risk Calculator!
          In this field traders can select from a <strong>risk percentage</strong> or any{" "}
          <strong>value in the account base currency</strong> ($2, $20, $40, etc). As a
          guideline,&nbsp;
          <a
            href="#"

          >
            professional traders do not risk more than 2% of the account equity per trade
          </a>
          . This money management rule allows traders to last longer in their trading careers, and
          eventually, also to recoup from previously losing trades. So, for our example, we will
          select 2% risk.
          <br />
          <br />
          Now, we hit the Calculate button.
          <br />
          <br />
          <strong>The results:</strong> The Position Size and Risk Calculator uses a market price
          live feed with the current interbank rate (in a 5-digit format) and it will display the
          selected currency pair price (in our example the USD/CAD price).
          <br />
          <br />
          In this case, using a stop-loss of 100 pips and risking 2% of our account equity, the
          recommended lot size would be <strong>0.05 lot</strong>. <br />
          <br />
          Next, the calculator displays the amount of units that the 0.05 lot represent;{" "}
          <strong>5,000 units</strong>, and finally the portion of the account equity at risk, or
          the value of the position, in our case, 40 USD.
          <br />

        </p>
      </div>

      <style jsx>
        {`
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
          #results {
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
  );
}
