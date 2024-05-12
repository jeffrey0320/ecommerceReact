import "./App.css";
import hamburgerIcon from "./images/icon-menu.svg";
import logo from "./images/logo.svg";
import cartIcon from "./images/icon-cart.svg";
import profileIcon from "./images/image-avatar.png";
import sneakerImg from "./images/image-product-1.jpg";
import sneakerImg2 from "./images/image-product-2.jpg";
import sneakerImg3 from "./images/image-product-3.jpg";
import sneakerImg4 from "./images/image-product-4.jpg";
import minusImg from "./images/icon-minus.svg";
import plusImg from "./images/icon-plus.svg";
import rightArrow from "./images/icon-next.svg";
import leftArrow from "./images/icon-previous.svg";
import thumbnail from "./images/image-product-1-thumbnail.jpg";
import xMenu from "./images/icon-close.svg";
import trash from "./images/icon-delete.svg";
import { useState } from "react";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [arrIndex, setArrIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(quantity);
  const price = 125.0 * cartQuantity;

  const IMAGES = [sneakerImg, sneakerImg2, sneakerImg3, sneakerImg4];

  function handlePlus() {
    setQuantity(quantity + 1);
  }

  function handleMinus() {
    setQuantity(quantity - 1);

    if (quantity <= 0) {
      setQuantity(0);
    }
  }

  function handleNext() {
    const isLastSlide = arrIndex === IMAGES.length - 1;
    const newIndex = isLastSlide ? 0 : arrIndex + 1;
    setArrIndex(newIndex);
  }

  function handlePrevious() {
    const isFirstSlide = arrIndex === 0;
    const newIndex = isFirstSlide ? IMAGES.length - 1 : arrIndex - 1;
    setArrIndex(newIndex);
  }

  function handleCartBtn() {
    setShow(true);
    setCartQuantity(quantity);
  }

  function handleCartDisplay() {
    setShowCart(!showCart);
  }

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  function handleDeletion() {
    setCartQuantity(0);
  }

  return (
    <>
      <div className="header">
        <div className="logo-menu">
          <picture onClick={handleMenu}>
            <img src={hamburgerIcon} />
          </picture>
          <img src={logo} />
        </div>
        <div className="user-profile">
          <div className="cartDiv">
            <img src={cartIcon} onClick={handleCartDisplay} />
            {show && cartQuantity !== 0 ? (
              <div className="quantityCart">
                <p>{cartQuantity}</p>
              </div>
            ) : null}
            {showCart && (
              <div className="cartDisplay">
                <p>Cart</p>
                <hr />
                {cartQuantity === 0 ? (
                  <div className="emptyCart">
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <div className="cartInfo">
                    <div className="cartItems">
                      <img className="thumbnailImg" src={thumbnail} />
                      <p>Fall Limited Edition Sneakers</p>
                      <p>
                        $125.00 x {cartQuantity} <strong>${price}.00</strong>
                      </p>
                    </div>
                    <img src={trash} onClick={handleDeletion} />
                    <button className="cartCheckoutBtn">Checkout</button>
                  </div>
                )}
              </div>
            )}
          </div>
          <img className="profile-img" src={profileIcon} />
        </div>
      </div>
      <div className="body">
        <div className="imgButtons">
          <button onClick={handlePrevious}>
            <img src={leftArrow} onClick={handlePrevious} />
          </button>
          <button onClick={handleNext}>
            <img src={rightArrow} onClick={handleNext} />
          </button>
        </div>
        <img className="itemImg" src={IMAGES[arrIndex]} />
      </div>
      <div className="footer">
        <div className="sneakerInfo">
          <p className="imgCaption">sneaker company</p>
          <h1>Fall Limited Edition Sneakers</h1>
          <p className="mainP">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="price">
          <div className="priceDiscount">
            <p className="currentPrice">$125.00</p>
            <p className="discount">50%</p>
          </div>
          <p className="prevPrice">$250.00</p>
        </div>
        <div className="quantityBtn">
          <button className="minusBtn" onClick={handleMinus}>
            <img src={minusImg} />
          </button>
          <p className="itemNum">{quantity}</p>
          <button className="plusBtn" onClick={handlePlus}>
            <img src={plusImg} />
          </button>
        </div>
        <div className="cart">
          <button className="cartBtn" onClick={handleCartBtn}>
            <img src={cartIcon} />
            Add to cart
          </button>
        </div>
      </div>
      {showMenu ? (
        <>
          <div className="menu">
            <img src={xMenu} onClick={handleMenu} />
            <ul>
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
