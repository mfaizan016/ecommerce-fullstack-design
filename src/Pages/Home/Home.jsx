import { Row, Col, Card, Button, Input, Select, Statistic } from "antd";
import { Link } from "react-router-dom";
import {
  homeCategories,
  electronicsCategories,
  dealsProducts,
  recommendedProducts,
  suppliers,
} from "../../data/products";
import "./Home.css";
import { UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const { Countdown } = Statistic;

const menuCategories = [
  "Automobiles",
  "Clothes and wear",
  "Home interiors",
  "Computer and tech",
  "Tools, equipments",
  "Sports and outdoor",
  "Animal and pets",
  "Machinery tools",
  "More category",
];

const Home = () => {
  const [deadline] = useState(() => Date.now() + 1000 * 60 * 60 * 24 * 4);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const diff = deadline - Date.now();
      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calculateTime());
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);
  return (
    <div className="home-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <Row gutter={16}>
            <Col xs={24} md={4}>
              <div className="category-menu">
                {menuCategories.map((cat, index) => (
                  <Link
                    key={index}
                    to="/products"
                    className="category-menu-item"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </Col>
            <Col xs={24} md={14}>
              <div className="hero-banner">
                <div className="hero-content">
                  <h2>Latest trending</h2>
                  <h1>Electronic items</h1>
                  <Button size="large">Learn more</Button>
                </div>
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div className="hero-sidebar">
                <Card className="user-card">
                  <div className="user-info">
                    <UserOutlined
                      style={{
                        border: "#5f9cf7 solid 3px",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                    <div
                      className="user-text"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <p>Hi, user</p>
                      <p>let's get started</p>
                    </div>
                  </div>
                  <Button type="primary" block>
                    Join now
                  </Button>
                  <Button block style={{ marginTop: 8 }}>
                    Log in
                  </Button>
                </Card>
                <Card className="promo-card orange">
                  <p>Get US $10 off</p>
                  <p>with a new supplier</p>
                </Card>
                <Card className="promo-card teal">
                  <p>Send quotes with</p>
                  <p>supplier preferences</p>
                </Card>
              </div>
            </Col>
          </Row>
        </section>

        {/* Deals Section */}
        <section className="deals-section">
          <Card>
            <Row gutter={16}>
              <Col xs={24} md={4}>
                <div className="deals-info">
                  <h3>Deals and offers</h3>
                  <p>Hygiene equipments</p>
                  <div className="countdown-boxes">
                    <div className="countdown-box">
                      <span className="countdown-value">
                        {String(timeLeft.days).padStart(2, "0")}
                      </span>
                      <span className="countdown-label">Days</span>
                    </div>
                    <div className="countdown-box">
                      <span className="countdown-value">
                        {String(timeLeft.hours).padStart(2, "0")}
                      </span>
                      <span className="countdown-label">Hour</span>
                    </div>
                    <div className="countdown-box">
                      <span className="countdown-value">
                        {String(timeLeft.minutes).padStart(2, "0")}
                      </span>
                      <span className="countdown-label">Min</span>
                    </div>
                    <div className="countdown-box">
                      <span className="countdown-value">
                        {String(timeLeft.seconds).padStart(2, "0")}
                      </span>
                      <span className="countdown-label">Sec</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={20}>
                <div className="deals-products">
                  {dealsProducts.map((product, index) => (
                    <Link to="/products" key={index} className="deal-item">
                      <div className="deal-image">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <p>{product.name}</p>
                      <div className="discount-badge">
                        -{product.discount}%
                      </div>
                    </Link>
                  ))}
                </div>
              </Col>
            </Row>
          </Card>
        </section>

        {/* Home and Outdoor Section */}
        <section className="category-section">
          <Card>
            <Row gutter={0}>
              <Col xs={24} md={5}>
                <div className="category-info home-outdoor">
                  <h3>Home and outdoor</h3>
                  <Button size="medium">Source now</Button>
                </div>
              </Col>
              <Col xs={20} md={19}>
                <div className="category-grid">
                  {homeCategories.map((item, index) => (
                    <Link to="/products" key={index} className="category-item">
                      <div className="category-item-info">
                        <p className="category-item-name">{item.name}</p>
                        <p className="category-item-price">
                          From USD {item.price}
                        </p>
                      </div>
                      <img src={item.image} alt={item.name} />
                    </Link>
                  ))}
                </div>
              </Col>
            </Row>
          </Card>
        </section>

        {/* Consumer Electronics Section */}
        <section className="category-section">
          <Card>
            <Row gutter={0}>
              <Col xs={24} md={5}>
                <div className="category-info electronics">
                  <h3>Consumer electronics and gadgets</h3>
                  <Button >Source now</Button>
                </div>
              </Col>
              <Col xs={24} md={19}>
                <div className="category-grid">
                  {electronicsCategories.map((item, index) => (
                    <Link to="/products" key={index} className="category-item">
                      <div className="category-item-info">
                        <p className="category-item-name">{item.name}</p>
                        <p className="category-item-price">
                          From USD {item.price}
                        </p>
                      </div>
                      <img src={item.image} alt={item.name} />
                    </Link>
                  ))}
                </div>
              </Col>
            </Row>
          </Card>
        </section>

        {/* Send Quote Section */}
        <section className="quote-section">
          <div className="quote-banner">
            <div className="quote-info">
              <h2>An easy way to send requests to all suppliers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <Card className="quote-form">
              <h4>Send quote to suppliers</h4>
              <Input
                placeholder="What item you need?"
                style={{ marginBottom: 12 }}
              />
              <Input.TextArea
                placeholder="Type more details"
                rows={3}
                style={{ marginBottom: 12 }}
              />
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                <Input placeholder="Quantity" style={{ flex: 1 }} />
                <Select defaultValue="pcs" style={{ width: 80 }}>
                  <Select.Option value="pcs">Pcs</Select.Option>
                  <Select.Option value="kg">Kg</Select.Option>
                </Select>
              </div>
              <Button type="primary">Send inquiry</Button>
            </Card>
          </div>
        </section>

        {/* Recommended Section */}
        <section className="recommended-section">
          <h2>Recommended items</h2>
          <Row gutter={[16, 16]}>
            {recommendedProducts.map((product) => (
              <Col key={product.id} xs={12} sm={8} md={6} lg={4.8}>
                <Link to={`/product/${product.id}`}>
                  <Card className="recommended-card" hoverable>
                    <div className="recommended-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="recommended-info">
                      <span className="price">${product.price}</span>
                      <p className="name">{product.name}</p>
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </section>

        {/* Our Extra Services */}
        <section className="services-section">
          <h2>Our extra services</h2>
          <Row gutter={16}>
            {[
              {
                title: "Source from Industry Hubs",
                image:
                  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300",
              },
              {
                title: "Customize Your Products",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300",
              },
              {
                title: "Fast, reliable shipping by ocean or air",
                image:
                  "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=300",
              },
              {
                title: "Product monitoring and inspection",
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300",
              },
            ].map((service, index) => (
              <Col key={index} xs={12} md={6}>
                <Card className="service-card" hoverable>
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <p>{service.title}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Suppliers by Region */}
        <section className="suppliers-section">
          <h2>Suppliers by region</h2>
          <Row gutter={[16, 16]}>
            {suppliers.map((supplier, index) => (
              <Col key={index} xs={12} sm={8} md={4.8}>
                <div className="supplier-item">
                  <span className="flag">{supplier.flag}</span>
                  <div className="supplier-info">
                    <p className="country">{supplier.country}</p>
                    <p className="domain">{supplier.domain}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </div>
    </div>
  );
};

export default Home;
