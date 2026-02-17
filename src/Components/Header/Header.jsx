import { Input, Select, Button, Badge, } from 'antd'
import { UserOutlined, MessageOutlined, HeartOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './Header.css'

const { Option } = Select

const Header = () => {
  const selectBefore = (
    <Select defaultValue="all" style={{ width: 120 }}>
      <Option value="all">All category</Option>
      <Option value="electronics">Electronics</Option>
      <Option value="clothing">Clothing</Option>
      <Option value="home">Home</Option>
    </Select>
  )

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <ShoppingCartOutlined />
          </div>
          <span className="logo-text">Brand</span>
        </Link>

        <div className="search-container">
          <Input.Search
            placeholder="Search"
            enterButton={<Button type="primary">Search</Button>}
            addonBefore={selectBefore}
            size="large"
          />
        </div>

        <div className="header-actions">
          <Link to="/profile" className="header-action-item">
            <UserOutlined className="action-icon" />
            <span className="action-text">Profile</span>
          </Link>
          <Link to="/messages" className="header-action-item">
            <MessageOutlined className="action-icon" />
            <span className="action-text">Message</span>
          </Link>
          <Link to="/orders" className="header-action-item">
            <HeartOutlined className="action-icon" />
            <span className="action-text">Orders</span>
          </Link>
          <Link to="/cart" className="header-action-item">
            <Badge count={3} size="small">
              <ShoppingCartOutlined className="action-icon" />
            </Badge>
            <span className="action-text">My cart</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header