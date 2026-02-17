import { Input, Button, Row, Col } from 'antd'
import { FacebookFilled, TwitterCircleFilled, LinkedinFilled, InstagramFilled, YoutubeFilled } from '@ant-design/icons'
import { ShoppingCartOutlined } from '@ant-design/icons'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter-section">
        <div className="newsletter-container">
          <h3>Subscribe on our newsletter</h3>
          <p>Get daily news on upcoming offers from many suppliers all over the world</p>
          <div className="newsletter-form">
            <Input 
              placeholder="Email" 
              prefix={<span>✉️</span>}
              style={{ width: 300 }}
            />
            <Button type="primary">Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-container">
          <Row gutter={[48, 32]}>
            <Col xs={24} sm={12} md={6}>
              <div className="footer-brand">
                <div className="footer-logo">
                  <div className="logo-icon">
                    <ShoppingCartOutlined />
                  </div>
                  <span className="logo-text">Brand</span>
                </div>
                <p>Best information about the company goes here but now lorem ipsum is</p>
                <div className="social-icons">
                  <FacebookFilled />
                  <TwitterCircleFilled />
                  <LinkedinFilled />
                  <InstagramFilled />
                  <YoutubeFilled />
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <h4>About</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Find store</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Blogs</a></li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <h4>Partnership</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Find store</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Blogs</a></li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <h4>Information</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Money Refund</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <h4>For users</h4>
              <ul>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">My Orders</a></li>
              </ul>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <h4>Get app</h4>
              <div className="app-buttons">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <span>© 2023 Ecommerce.</span>
          <span>🇺🇸 English ▲</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer