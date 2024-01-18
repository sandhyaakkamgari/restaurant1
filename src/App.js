import CategoryDishes from "./components/CategoryDishes/CategoryDishes";
import MenuList from "./components/MenuList/MenuList";
import Navbar from "./components/Navigation/Navbar";
import Cart from "./context/CartCotext";
import "./App.css";

function App() {
  return (
    <div id="app">
      <Cart>
        <Navbar />
        <MenuList />
        <CategoryDishes />
      </Cart>
    </div>
  );
}

export default App;
