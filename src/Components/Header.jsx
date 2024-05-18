import hamburgerIcon from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import profileIcon from "../images/image-avatar.png";
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import trash from "../images/icon-delete.svg";
import cartIcon from "../images/icon-cart.svg";
import { useState } from "react";

const Header = ({ cartQuantity, show, handleDeletion }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const price = 125.0 * cartQuantity;

  function handleCartDisplay() {
    setShowCart(!showCart);
  }

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="header">
      <div className="logo-menu">
        <picture onClick={handleMenu}>
          <img src={hamburgerIcon} />
        </picture>
        <img src={logo} />
        <div className="desktopMenu">
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
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
                  <div className="container">
                    <img className="thumbnailImg" src={thumbnail} />
                    <div className="cartItems">
                      <p className="item_name">Fall Limited Edition Sneakers</p>
                      <p className="item_description">
                        $125.00 x {cartQuantity}{" "}
                        <span className="priceTag">${price}.00</span>
                      </p>
                    </div>
                    <img
                      className="deleteIcon"
                      src={trash}
                      onClick={handleDeletion}
                    />
                  </div>
                  <button className="cartCheckoutBtn">Checkout</button>
                </div>
              )}
            </div>
          )}
        </div>
        <img className="profile-img" src={profileIcon} />
      </div>
    </div>
  );
};

export default Header;
