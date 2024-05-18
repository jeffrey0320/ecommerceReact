import cartIcon from "../images/icon-cart.svg";
import minusImg from "../images/icon-minus.svg";
import plusImg from "../images/icon-plus.svg";

const Footer = ({ quantity, setQuantity, setShow, setCartQuantity }) => {
  function handleMinus() {
    setQuantity(quantity - 1);

    if (quantity <= 0) {
      setQuantity(0);
    }
  }
  function handlePlus() {
    setQuantity(quantity + 1);
  }
  function handleCartBtn() {
    setShow(true);
    setCartQuantity(quantity);
  }

  return (
    <>
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
    </>
  );
};

export default Footer;
