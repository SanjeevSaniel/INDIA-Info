import "./App.css";
import Navbar from "./component/Navbar";
import Context from "./component/Context";
import Routes from "./API/routes.json";

function App() {
  return (
    <>
      <Navbar />
      <Context routes={Routes} />
    </>
  );
}

export default App;
