import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const catsUrl = "https://catfact.ninja/fact";
const dogsUrl = "https://dog.ceo/api/breeds/image/random";

function App() {
  const [cat, setCat] = useState({});
  const [dog, setDog] = useState({});
  const [next, setNext] = useState({});

  const getData = () => {
    try {
      axios.get(catsUrl).then((res) => setCat(res.data));
      axios.get(dogsUrl).then((res) => setDog(res.data));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleDeal = () => {
    const dataArr = { ...cat, ...dog };
    setNext(dataArr);
  };

  useEffect(() => {
    getData();
  }, [next]);

  return (
    <div className="App">
      <div className="app__main-block">
        <img className="img" src={dog?.message} alt="cat" />
        <p>{cat?.fact}</p>
        <button type="button" onClick={toggleDeal} className="btn">
          next fact
        </button>
      </div>
    </div>
  );
}

export default App;

// import "./App.css";

// const url = "https://www.boredapi.com/api/activity";

// function App() {
//   const [deal, setDeal] = useState(null);
//   const [nextDeal, setNextDeal] = useState();

//   const toggleDeal = () => {
//     setNextDeal(deal);
//   };

//   const getData = async () => {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       setDeal(data);
//       console.log(data);
//     } catch (error) {
//       console.error("ERROR:", error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, [nextDeal]);

//   // useEffect(() => {
//   //   fetch(url)
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setDeal(data);
//   //       console.log(data);
//   //     })
//   //     .catch((err) => err);
//   // }, [nextDeal]);

//   return (
//     <div className="App">
//       <div className="app__main-block">
//         <h4>Activity: {deal?.activity}</h4>
//         <p>Type: {deal?.type}</p>
//         <p>Participants: {deal?.participants}</p>
//         <p>Price: {deal?.price}</p>
//         {deal?.link === "" ? null : <p>Link: {deal?.link}</p>}

//         <button type="button" onClick={toggleDeal} className="btn">
//           next deal
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
