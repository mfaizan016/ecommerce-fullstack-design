import { useState } from "react";
import { Row, Col, Card, Button, Input, Divider } from "antd";
import {
  ArrowLeftOutlined,
  SafetyCertificateOutlined,
  CustomerServiceOutlined,
  CarOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import {
  cartItems as initialCartItems,
  savedItems as initialSavedItems,
} from "../../data/cart";
import "./Cart.css";
import CartItem from "../../Components/CartItem/CartItem";
import SavedItem from "../../Components/SavedItem/SavedItem";

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [savedItems, setSavedItems] = useState(initialSavedItems);
  const [coupon, setCoupon] = useState("");

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const discount = 60.0;
  const tax = 14.0;
  const total = subtotal - discount + tax;

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleSaveForLater = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      setSavedItems([
        ...savedItems,
        { id: item.id, name: item.name, image: item.image, price: item.price },
      ]);
      setCartItems(cartItems.filter((item) => item.id !== id));
    }
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const handleMoveToCart = (id) => {
    const item = savedItems.find((item) => item.id === id);
    if (item) {
      setCartItems([
        ...cartItems,
        {
          ...item,
          quantity: 1,
          size: "medium",
          color: "blue",
          material: "Plastic",
          seller: "Default Seller",
        },
      ]);
      setSavedItems(savedItems.filter((item) => item.id !== id));
    }
  };

  const handleRemoveAll = () => {
    setCartItems([]);
  };

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="cart-title">My cart ({cartItems.length})</h1>

        <Row gutter={24}>
          <Col xs={24} md={18}>
            {/* Cart Items */}
            <Card className="cart-items-card">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={handleRemove}
                  onSaveForLater={handleSaveForLater}
                  onQuantityChange={handleQuantityChange}
                />
              ))}
              <div className="cart-actions">
                <Link to="/">
                  <Button type="primary" icon={<ArrowLeftOutlined />}>
                    Back to shop
                  </Button>
                </Link>
                <Button type="link" danger onClick={handleRemoveAll}>
                  Remove all
                </Button>
              </div>
            </Card>

            {/* Features */}
            <div className="cart-features">
              <div className="feature-item">
                <SafetyCertificateOutlined className="feature-icon" />
                <div>
                  <p className="feature-title">Secure payment</p>
                  <p className="feature-desc">Have you ever finally just</p>
                </div>
              </div>
              <div className="feature-item">
                <CustomerServiceOutlined className="feature-icon" />
                <div>
                  <p className="feature-title">Customer support</p>
                  <p className="feature-desc">Have you ever finally just</p>
                </div>
              </div>
              <div className="feature-item">
                <CarOutlined className="feature-icon" />
                <div>
                  <p className="feature-title">Free delivery</p>
                  <p className="feature-desc">Have you ever finally just</p>
                </div>
              </div>
            </div>
          </Col>
          {/* Saved for Later */}
          <Col xs={24} md={6}>
            {/* Coupon */}
            <Card className="coupon-card">
              <p>Have a coupon?</p>
              <div className="coupon-input">
                <Input
                  placeholder="Add coupon"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <Button>Apply</Button>
              </div>
            </Card>

            {/* Summary */}
            <Card className="summary-card">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row discount">
                <span>Discount:</span>
                <span>- ${discount.toFixed(2)}</span>
              </div>
              <div className="summary-row tax">
                <span>Tax:</span>
                <span>+ ${tax.toFixed(2)}</span>
              </div>
              <Divider />
              <div className="summary-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button type="primary" size="large" block>
                Checkout
              </Button>
              <div className="payment-icons">
                <img
                  src="https://img.icons8.com/color/48/visa.png"
                  alt="Visa"
                />
                <img
                  src="https://img.icons8.com/color/48/mastercard.png"
                  alt="Mastercard"
                />
                <img
                  src="https://img.icons8.com/color/48/paypal.png"
                  alt="Paypal"
                />
                <img
                  src="https://img.icons8.com/color/48/visa.png"
                  alt="Visa"
                />
                <img
                  src="https://img.icons8.com/color/48/apple-pay.png"
                  alt="Apple Pay"
                />
              </div>
            </Card>
          </Col>
          
          <Card className="saved-card">
            <h2 className="saved-title">Saved for later</h2>
            <Row gutter={16}>
              {savedItems.map((item) => (
                <Col key={item.id} xs={20} sm={10} md={6}>
                  <SavedItem item={item} onMoveToCart={handleMoveToCart} />
                </Col>
              ))}
            </Row>
          </Card>
        </Row>

        {/* Discount Banner */}
        <div className="discount-banner">
          <div className="banner-content">
            <h3>Super discount on more than 100 USD</h3>
            <p>Have you ever finally just write dummy info</p>
          </div>
          <Button type="primary" danger>
            Shop now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
