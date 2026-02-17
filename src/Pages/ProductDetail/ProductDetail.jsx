import { useState } from 'react'
import { Row, Col, Card, Button, Rate, Tabs, Tag } from 'antd'
import { HeartOutlined, CheckOutlined, GlobalOutlined, SafetyCertificateOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import './Productdetail.css'
import Breadcrumb from '../../Components/Breadcrumb/Breedcrumb'

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0)

  // Sample product data
  const product = {
    id: 1,
    name: 'Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    ],
    rating: 9.3,
    reviews: 32,
    sold: 154,
    inStock: true,
    prices: [
      { qty: '50-100 pcs', price: 98.00, highlight: true },
      { qty: '100-700 pcs', price: 90.00 },
      { qty: '700+ pcs', price: 78.00 },
    ],
    details: {
      price: 'Negotiable',
      type: 'Classic shoes',
      material: 'Plastic material',
      design: 'Modern nice',
    },
    customization: 'Customized logo and design custom packages',
    protection: 'Refund Policy',
    warranty: '2 years full warranty',
    supplier: {
      name: 'Guanjoi Trading LLC',
      location: 'Germany, Berlin',
      verified: true,
      worldwideShipping: true,
    },
    specs: [
      { key: 'Model', value: '#8786867' },
      { key: 'Style', value: 'Classic style' },
      { key: 'Certificate', value: 'ISO-898921212' },
      { key: 'Size', value: '34mm x 450mm x 19mm' },
      { key: 'Memory', value: '36GB RAM' },
    ],
    features: [
      'Some great feature name here',
      'Lorem ipsum dolor sit amet, consectetur',
      'Duis aute irure dolor in reprehenderit',
      'Some great feature name here',
    ],
  }

  const youMayLike = [
    { id: 1, name: 'Men Blazers Sets Elegant Formal', price: '$7.00 - $99.50', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=100' },
    { id: 2, name: 'Men Shirt Sleeve Polo Contrast', price: '$7.00 - $99.50', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100' },
    { id: 3, name: 'Apple Watch Series Space Gray', price: '$7.00 - $99.50', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=100' },
    { id: 4, name: 'Basketball Crew Socks Long Stuff', price: '$7.00 - $99.50', image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=100' },
    { id: 5, name: "New Summer Men's castrol T-Shirts", price: '$7.00 - $99.50', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100' },
  ]

  const relatedProducts = products.slice(0, 6)

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Clothings', path: '/products' },
    { label: "Men's wear", path: '/products' },
    { label: 'Summer clothing' },
  ]

  const tabItems = [
    {
      key: '1',
      label: 'Description',
      children: (
        <div className="description-tab">
          <p className="description-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <table className="specs-table">
            <tbody>
              {product.specs.map((spec, index) => (
                <tr key={index}>
                  <td className="spec-label">{spec.key}</td>
                  <td className="spec-value">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="features-list">
            {product.features.map((feature, index) => (
              <li key={index}>
                <CheckOutlined /> {feature}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    { key: '2', label: 'Reviews', children: <div>Reviews content</div> },
    { key: '3', label: 'Shipping', children: <div>Shipping content</div> },
    { key: '4', label: 'About seller', children: <div>About seller content</div> },
  ]

  return (
    <div className="product-detail-page">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />

        {/* Main Product Section */}
        <Card className="product-main-card">
          <Row gutter={24}>
            {/* Product Images */}
            <Col xs={24} md={8}>
              <div className="product-gallery">
                <div className="main-image">
                  <img src={product.images[selectedImage]} alt={product.name} />
                </div>
                <div className="thumbnail-list">
                  {product.images.map((img, index) => (
                    <div 
                      key={index} 
                      className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={img} alt={`${product.name} ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            {/* Product Info */}
            <Col xs={24} md={10}>
              <div className="product-info">
                <Tag color="green" className="stock-tag">
                  <CheckOutlined /> In stock
                </Tag>
                <h1 className="product-title">{product.name}</h1>
                <div className="product-meta">
                  <Rate disabled defaultValue={product.rating / 2} allowHalf />
                  <span className="rating-value">{product.rating}</span>
                  <span className="separator">•</span>
                  <span className="reviews">{product.reviews} reviews</span>
                  <span className="separator">•</span>
                  <span className="sold">{product.sold} sold</span>
                </div>

                <div className="price-tiers">
                  {product.prices.map((tier, index) => (
                    <div key={index} className={`price-tier ${tier.highlight ? 'highlight' : ''}`}>
                      <span className="tier-price">${tier.price.toFixed(2)}</span>
                      <span className="tier-qty">{tier.qty}</span>
                    </div>
                  ))}
                </div>

                <div className="product-details">
                  <Row>
                    <Col span={8} className="detail-label">Price:</Col>
                    <Col span={16} className="detail-value">{product.details.price}</Col>
                  </Row>
                  <Row>
                    <Col span={8} className="detail-label">Type:</Col>
                    <Col span={16} className="detail-value">{product.details.type}</Col>
                  </Row>
                  <Row>
                    <Col span={8} className="detail-label">Material:</Col>
                    <Col span={16} className="detail-value">{product.details.material}</Col>
                  </Row>
                  <Row>
                    <Col span={8} className="detail-label">Design:</Col>
                    <Col span={16} className="detail-value">{product.details.design}</Col>
                  </Row>
                  <Row>
                    <Col span={8} className="detail-label">Customization:</Col>
                    <Col span={16} className="detail-value">{product.customization}</Col>
                  </Row>
                  <Row>
                    <Col span={8} className="detail-label">Protection:</Col>
                    <Col span={16} className="detail-value">{product.protection}</Col>
                  </Row>
                  <Row>
                    <Col span={8} className="detail-label">Warranty:</Col>
                    <Col span={16} className="detail-value">{product.warranty}</Col>
                  </Row>
                </div>
              </div>
            </Col>

            {/* Supplier Card */}
            <Col xs={24} md={6}>
              <Card className="supplier-card">
                <div className="supplier-header">
                  <div className="supplier-avatar">R</div>
                  <div className="supplier-name">
                    <span>Supplier</span>
                    <strong>{product.supplier.name}</strong>
                  </div>
                </div>
                <div className="supplier-meta">
                  <p>🇩🇪 {product.supplier.location}</p>
                  {product.supplier.verified && (
                    <p><SafetyCertificateOutlined /> Verified Seller</p>
                  )}
                  {product.supplier.worldwideShipping && (
                    <p><GlobalOutlined /> Worldwide shipping</p>
                  )}
                </div>
                <Button type="primary" block>Send inquiry</Button>
                <Button block style={{ marginTop: 8 }}>Seller's profile</Button>
              </Card>
              <Button className="save-btn" icon={<HeartOutlined />}>
                Save for later
              </Button>
            </Col>
          </Row>
        </Card>

        {/* Description and You May Like */}
        <Row gutter={24} style={{ marginTop: 24 }}>
          <Col xs={24} md={18}>
            <Card>
              <Tabs defaultActiveKey="1" items={tabItems} />
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card title="You may like" className="you-may-like-card">
              {youMayLike.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="may-like-item">
                  <img src={item.image} alt={item.name} />
                  <div className="may-like-info">
                    <p className="may-like-name">{item.name}</p>
                    <span className="may-like-price">{item.price}</span>
                  </div>
                </Link>
              ))}
            </Card>
          </Col>
        </Row>

        {/* Related Products */}
        <section className="related-products">
          <h2>Related products</h2>
          <Row gutter={16}>
            {relatedProducts.map((product) => (
              <Col key={product.id} xs={12} sm={8} md={4}>
                <Link to={`/product/${product.id}`}>
                  <Card className="related-product-card" hoverable>
                    <div className="related-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <p className="related-name">{product.name}</p>
                    <span className="related-price">${product.price}-$40.00</span>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </section>

        {/* Discount Banner */}
        <div className="discount-banner">
          <div className="banner-content">
            <h3>Super discount on more than 100 USD</h3>
            <p>Have you ever finally just write dummy info</p>
          </div>
          <Button type="primary" danger>Shop now</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail