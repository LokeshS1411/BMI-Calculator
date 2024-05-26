import { useState } from 'react'

import './App.css'


function App() {
  const [height, setHeight] = useState(" ");
  const [weight, setWeight] = useState(" ");
  const [bmi, setBmi] = useState("You see Your BMI value");
  const [bmistatus, setBmistatus] = useState("You can see your body status");

  const calculate = () => {
    if (height && weight) {
      const heightInmtr = height / 100;
      const bmivalue = weight / (heightInmtr * heightInmtr);
      setBmi(bmivalue.toFixed(2));
      if (bmivalue < 18.5) {
        setBmistatus("Low Weight")
      }
      else if (bmivalue >= 18.5 && bmivalue < 24.9) {
        setBmistatus("Normal Weight")
      }
      else if (bmivalue >= 25 && bmivalue < 29.9) {
        setBmistatus("Over Weight")
      }
      else if (bmivalue < Infinity) {
        setBmistatus("Obese")
      }
      else {
        setBmistatus("Enter Values in Numeric")
      }
    }
    else {
      setBmi(null);
      setBmistatus(" ");
    }

  };



  return (
    <>
      <div className="title">
        <h1>BMI CALCULATOR</h1>
      </div>
      <div className="bmi-container">
        <div className="box">
          <div className="box2">
            <div className="bmi-head">
              <h1>BMI CALCULATOR</h1>
            </div>

            <div className="data1">
              <label htmlFor="height" >Height (cm) :</label>
              <input type="text" id="height" value={height} onChange={(event) => setHeight(event.target.value)} />
            </div>
            <div className="data2">
              <label htmlFor="weight">Weight (Kg) :</label>
              <input type="text" id="weight" value={weight} onChange={(event) => setWeight(event.target.value)} />
            </div>
            <div className="btn">
              <button onClick={calculate}>Calculate BMI</button>
            </div>

            <div className="result">
              <p>Your BMI : <b>{bmi}</b></p>
              <p>Status :<b id='w1'>{bmistatus}</b> </p>
            </div>


          </div>
        </div>
      </div>

      <div className="para">
        <ul>
          <li>The greatest wealth is health. — Virgil
          </li>
          <li>Take care of your body. Its the only place you have to live. — Jim Rohn
          </li>
          <li>To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear. Buddha
          </li>
          <li>Health is not valued till sickness comes.- Thomas Fuller
          </li>
          <li>A healthy outside starts from the inside.— Robert Urich</li>
        </ul>
      </div>
    </>
  )
}

export default App
