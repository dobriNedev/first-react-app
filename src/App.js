//import './App.css';
import EventContainer from "./components/eventContainer";
import EventShedule from "./components/EventShedule";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Navigation";
import Tickets from "./components/Tickets";


function App() {
  return (
    <div>
      <Nav />
      <Header />
      <EventContainer />
      <Tickets />
      <EventShedule />
      <Footer />
    </div>
    
  );
}

export default App;
