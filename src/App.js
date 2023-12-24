import Navbar from "./components/Navbar"
import Hotels from "./pages/Hotels";

function App() {
  return (
    <>
    <div>
      <Navbar/>
      <h1 className="text-blue-400 text-lg">Hotel Advisor</h1>
      <Hotels/>
    </div>
    
    </>
  );
}

export default App;
