import "./App.css";
import AppRoute from "./AppRoute";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartProvider from "./helpers/CartProvider";
import FilterProvider from "./helpers/FilterProvider";
import WishProvider from "./helpers/WishProvider";

function App() {
  return (
    <>
      <ToastContainer transition={Slide} position="bottom-right" />

      <WishProvider>
        <FilterProvider>
          <CartProvider>
            <AppRoute />
          </CartProvider>
        </FilterProvider>
      </WishProvider>
    </>
  );
}

export default App;
