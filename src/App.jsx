import "./App.css";
import { useState } from "react";
import xMenu from "./images/icon-close.svg";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(quantity);

  function handleDeletion() {
    setCartQuantity(0);
  }
  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <Header
        cartQuantity={cartQuantity}
        show={show}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        handleDeletion={handleDeletion}
      />
      <Body />
      <Footer
        quantity={quantity}
        showMenu={showMenu}
        setQuantity={setQuantity}
        setShow={setShow}
        setCartQuantity={setCartQuantity}
        setShowMenu={setShowMenu}
      />
      {showMenu ? (
        <>
          <div className="menu">
            <img src={xMenu} onClick={handleMenu} />
            <ul className="mobileMenu">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="overlay"></div>
        </>
      ) : null}
    </>
  );
}

export default App;
