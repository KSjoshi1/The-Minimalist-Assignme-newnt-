import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-container">
      <div className="to-container">
        <h1 className="heading">firefly</h1>
        <h2 className="heading-1">
          The choice is yours. <br />
          Because they don't have one. <br />
        </h2>
        <button className="button">QUICK VIEW</button>
      </div>
      <div className="Top-1">
        <h3 className="heading-3">
          <hr className="hh-1" />
          About
          <hr className="hh-2" />
        </h3>
      </div>
      <div className="p-1">
        <p className="description-1">
          Our products are crafted exclusively from the dreams and screams of
          young kids who wanted to show their mastery in their <br />
          chosen fields, but were directed towards a factory for daily wages.
          Each cracker bursts brighter than their lost smiles, and can <br />
          be heard louder than their cries for miles. Buy them, burst them, brag
          about them.
          <br />
        </p>
        <p className="description-2">
          The choice is yours. Because they don't have one.
        </p>
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="card-background-container bg-image-1"></div>
          <h4 className="card-heading-1">Raju Rassibomb</h4>
          <button className="custom-button-1">QUICK VIEW</button>
        </div>
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="card-background-container bg-image-2"></div>
          <h4 className="card-heading-1">Ladiyon ki Rani chani</h4>
          <div className="custom-button-1">QUICK VIEW</div>
        </div>
      </div>
      <hr className="hh-4" />
      <div className="body-container">
        <div className="card-1">
          <h1 className="heading-44">Follow us on</h1>
          <div className="body-0"></div>
          <div className="body-01"></div>
          <img src="../assets/images/imagesLOG1.png" className="log-1" />
          <img src="../assets/images/imagesLOG2.png" className="log-1" />
          <img src="../assets/images/imagesLG3.png" className="log-1" />
          <img src="../assets/images/imagesLOG4.png" className="log-1" />
          <img src="../assets/images/imagesLOG5.png" className="log-1" />
        </div>
      </div>
    </div>
  );
}

export default App;
