import { Select, Button } from 'antd'
import './CartItem.css'

const CartItem = ({ item, onRemove, onSaveForLater, onQuantityChange }) => {
  const { id, image, name, size, color, material, seller, price, quantity } = item

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={image} alt={name} />
      </div>
      <div className="cart-item-info">
        <h4>{name}</h4>
        <p className="cart-item-details">
          {size && <span>Size: {size}</span>}
          {color && <span>Color: {color}</span>}
          {material && <span>Material: {material}</span>}
        </p>
        {seller && <p className="cart-item-seller">Seller: {seller}</p>}
        <div className="cart-item-actions">
          <Button type="link" danger onClick={() => onRemove(id)}>Remove</Button>
          <Button type="link" onClick={() => onSaveForLater(id)}>Save for later</Button>
        </div>
      </div>
      <div className="cart-item-right">
        <span className="cart-item-price">${price.toFixed(2)}</span>
        <Select
          value={quantity}
          onChange={(value) => onQuantityChange(id, value)}
          style={{ width: 80 }}
          options={[
            { value: 1, label: 'Qty: 1' },
            { value: 2, label: 'Qty: 2' },
            { value: 3, label: 'Qty: 3' },
            { value: 5, label: 'Qty: 5' },
            { value: 9, label: 'Qty: 9' },
          ]}
        />
      </div>
    </div>
  )
}

export default CartItem