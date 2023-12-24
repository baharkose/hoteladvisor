import AutProvider from "./context/AutProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <div>
        {/*  //- login kontrolü için sarmalama işlemi yaptık */}
        <AutProvider>
          <AppRouter />
        </AutProvider>
      </div>
    </>
  );
}

export default App;
