import TopBar from "./Components/TopBar/TopBar";
import NavBar from "./Components/NavBar/NavBar";
import OfferBar from "./Components/OfferBar/Offer";
import MainContent from "./Components/MainContent/MainContent";




function App() {
  return (
    <>
      <div style={{position:"fixed"}} className="fixing-pos">
      <TopBar/>
      <NavBar/>
      <OfferBar/>
      <MainContent/>

      </div>
     
    </>
  );
}

export default App;
