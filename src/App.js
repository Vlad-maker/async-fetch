import { useState, useEffect } from "react";
import "./App.css";

const url = "https://www.boredapi.com/api/activity";

function App() {
  const [deal, setDeal] = useState(null);
  const [nextDeal, setNextDeal] = useState();

  const toggleDeal = () => {
    setNextDeal(deal);
  };

  const getData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setDeal(data);
      console.log(data);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [nextDeal]);

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDeal(data);
  //       console.log(data);
  //     })
  //     .catch((err) => err);
  // }, [nextDeal]);

  return (
    <div className="App">
      <div className="app__main-block">
        <h4>Activity: {deal?.activity}</h4>
        <p>Type: {deal?.type}</p>
        <p>Participants: {deal?.participants}</p>
        <p>Price: {deal?.price}</p>
        {deal?.link === "" ? null : <p>Link: {deal?.link}</p>}

        <button type="button" onClick={toggleDeal} className="btn">
          next deal
        </button>
      </div>
    </div>
  );
}

export default App;
