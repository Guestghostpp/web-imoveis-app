import { RouterApp } from "./Router";
import { AppContextProvider } from "./context/AppContext";
import Global from "./styles/Global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AppContextProvider>
        <RouterApp />
      </AppContextProvider>
      <Global />
      <ToastContainer />
    </>
  );
}

export default App;
