import { Card, Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import './SavedItem.css'

const SavedItem = ({ item, onMoveToCart }) => {
  const { id, image, name, price } = item

  return (
    <Card className="saved-item">
      <div className="saved-item-image">
        <img src={image} alt={name} />
      </div>
      <div className="saved-item-info">
        <span className="saved-item-price">${price.toFixed(2)}</span>
        <p className="saved-item-name">{name}</p>
      </div>
      <Button 
        className="move-to-cart-btn"
        icon={<ShoppingCartOutlined />}
        onClick={() => onMoveToCart(id)}
      >
        Move to cart
      </Button>
    </Card>
  )
}

export default SavedItem