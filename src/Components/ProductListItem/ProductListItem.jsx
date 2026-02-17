import { Card, Rate, Button } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './ProductListItem.css'

const ProductListItem = ({ product }) => {
  const { id, image, name, price, originalPrice, rating, orders, description, freeShipping } = product

  return (
    <Card className="product-list-item">
      <div className="list-item-content">
        <Link to={`/product/${id}`} className="list-item-image">
          <img src={image} alt={name} />
        </Link>
        <div className="list-item-info">
          <Link to={`/product/${id}`}>
            <h3 className="list-item-name">{name}</h3>
          </Link>
          <div className="list-item-price">
            <span className="current-price">${price}</span>
            {originalPrice && <span className="original-price">${originalPrice}</span>}
          </div>
          <div className="list-item-meta">
            <Rate disabled defaultValue={rating} allowHalf style={{ fontSize: 14 }} />
            <span className="rating-value">{rating}</span>
            <span className="separator">•</span>
            <span className="orders">{orders} orders</span>
            <span className="separator">•</span>
            {freeShipping && <span className="free-shipping">Free Shipping</span>}
          </div>
          <p className="list-item-description">{description}</p>
          <Link to={`/product/${id}`} className="view-details">View details</Link>
        </div>
        <Button 
          className="wishlist-btn" 
          icon={<HeartOutlined />} 
          shape="circle"
        />
      </div>
    </Card>
  )
}

export default ProductListItem