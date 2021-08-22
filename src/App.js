import React, { useState } from "react";

function App() {
  // State to store value from the input field

  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");

  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      { percent: "5%", id: 0 },
      { percent: "10%", id: 1 },
      { percent: "15%", id: 2 },
      { percent: "25%", id: 3 },
      { percent: "50%", id: 4 },
    ],
  });

  function toggleActive(index) {
    changeState({ ...appState, activeObject: appState.objects[index] });
  }

  function toggleActiveStyles(index) {
    if (appState.objects[index] === appState.activeObject) {
      return "button-percent active";
    } else {
      return "button-percent";
    }
  }

  var percent;
  function calculation(index) {
    if (index === "5%") {
      percent = parseFloat(0.05).toFixed(2);
      setInputValue3(percent);
      setInputValue4("Custom");
    } else if (index === "10%") {
      percent = parseFloat(0.1).toFixed(2);
      setInputValue3(percent);
      setInputValue4("Custom");
    } else if (index === "15%") {
      percent = parseFloat(0.15).toFixed(2);
      setInputValue3(percent);
      setInputValue4("Custom");
    } else if (index === "25%") {
      percent = parseFloat(0.25).toFixed(2);
      setInputValue3(percent);
      setInputValue4("Custom");
    } else if (index === "50%") {
      percent = parseFloat(0.5).toFixed(2);
      setInputValue3(percent);
      setInputValue4("Custom");
    } else {
      setInputValue4("custom");
    }
  }
  const handleChangeCustomTip = (e) => {
    setInputValue4(e.target.value);
    setInputValue3(parseFloat(e.target.value / 100).toFixed(2));
    console.log(inputValue3);
    changeState({ ...appState, activeObject: appState.objects });
  };

  // Input Field handler
  const handleUserInput1 = (event) => {
    setInputValue1(event.target.value);
  };
  const handleUserInput2 = (event) => {
    setInputValue2(event.target.value);
  };
  const resetInputField1 = () => {
    setInputValue4("");
  };

  // Reset Input Field handler
  const resetInputField = () => {
    setInputValue1("");
    setInputValue2("");
    setInputValue4("");
  };
  var myNumberWithTwoDecimalPlaces = parseFloat(
    (inputValue1 * inputValue3) / inputValue2
  ).toFixed(2);
  var myNumberWithTwoDecimalPlaces1 = parseFloat(
    (inputValue1 * inputValue3) / inputValue2 + inputValue1 / inputValue2
  ).toFixed(2);

  return (
    <div className="container">
      <div class="box-1 padding">
        <h4>Bill</h4>
        <div className="row" style={{ marginBottom: "40px" }}>
          <span class="bg-dollar-sign">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17">
              <path
                fill="#9EBBBD"
                d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
              />
            </svg>
          </span>

          <input
            type="number"
            id="bill"
            name="bill"
            value={inputValue1}
            min="1"
            onChange={handleUserInput1}
            className="input-text"
            placeholder="0"
          ></input>
        </div>
        <h4>Select Tip %</h4>
        <div className=" container-tip" style={{ marginBottom: "30px" }}>
          {appState.objects.map((elements, index) => (
            <button
              key={index}
              className={toggleActiveStyles(index)}
              onClick={() => {
                toggleActive(index);
                calculation(elements.percent);
                resetInputField1();
              }}
              value={index}
            >
              {elements.percent}{" "}
            </button>
          ))}

          <input
            type="number"
            id="tip"
            onChange={handleChangeCustomTip}
            min="1"
            value={inputValue4}
            placeholder="Custom"
            className="input-text-1"
          />
        </div>
        <h4>Number of People</h4>
        <div className=" row margin-bottom">
          <span class="bg-dollar-sign">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16">
              <path
                fill="#9EBBBD"
                d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"
              />
            </svg>
          </span>
          <input
            type="number"
            id="people"
            name="people"
            value={inputValue2}
            min="1"
            onChange={handleUserInput2}
            className="input-text"
            placeholder="0"
          ></input>
        </div>
      </div>
      <div className="box-1 padding-2">
        <div className="inner-box">
          <div className="row between" style={{ marginBottom: "50px" }}>
            <ul>
              <li>
                <h4>Tip Amount</h4>
                <p>/ person</p>
              </li>
            </ul>

            <input
              type="number"
              class="input-readonly"
              onChange={myNumberWithTwoDecimalPlaces}
              value={myNumberWithTwoDecimalPlaces}
              placeholder="0.00"
              readOnly
            ></input>
          </div>
          <div className="row between" style={{ marginBottom: "30%" }}>
            <ul>
              <li>
                <h4>Total</h4>
                <p>/ person</p>
              </li>
            </ul>
            <input
              type="number"
              class="input-readonly"
              onChange={myNumberWithTwoDecimalPlaces1}
              value={myNumberWithTwoDecimalPlaces1}
              placeholder="0.00"
              readOnly
            ></input>
          </div>
          <button
            type="reset"
            class="reset"
            onClick={resetInputField}
            disabled={
              inputValue1 !== "" || inputValue4 !== "" || inputValue2 !== ""
                ? false
                : true
            }
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
