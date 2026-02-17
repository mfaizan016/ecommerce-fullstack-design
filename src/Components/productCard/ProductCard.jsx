// src/Components/ProductCard/ProductCard.jsx
import { Card, Rate, Button } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './Product.css'

const ProductCard = ({ product }) => {
  const { id, image, name, price, originalPrice, rating, orders, freeShipping, discount } = product

  return (
    <Link to={`/product/${id}`}>
      <Card className="product-card" hoverable>
        <div className="product-image-container">
          <img src={image} alt={name} className="product-image" />
          {discount && <span className="discount-badge">-{discount}%</span>}
          <Button 
            className="wishlist-btn" 
            icon={<HeartOutlined />} 
            shape="circle"
            onClick={(e) => e.preventDefault()}
          />
        </div>
        <div className="product-info">
          <div className="product-price">
            <span className="current-price">${price}</span>
            {originalPrice && <span className="original-price">${originalPrice}</span>}
          </div>
          <div className="product-rating">
            <Rate disabled defaultValue={rating} allowHalf style={{ fontSize: 14 }} />
            <span className="rating-value">{rating}</span>
          </div>
          <p className="product-name">{name}</p>
          {orders && <span className="product-orders">{orders} orders</span>}
          {freeShipping && <span className="free-shipping">Free Shipping</span>}
        </div>
      </Card>
    </Link>
  )
}

export default ProductCard