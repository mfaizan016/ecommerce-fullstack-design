import { Dropdown, Space, Select } from 'antd'
import { MenuOutlined, DownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './Navbar.css'

const categories = [
  { key: 'automobiles', label: 'Automobiles' },
  { key: 'clothes', label: 'Clothes and wear' },
  { key: 'home', label: 'Home interiors' },
  { key: 'computer', label: 'Computer and tech' },
  { key: 'tools', label: 'Tools, equipments' },
  { key: 'sports', label: 'Sports and outdoor' },
  { key: 'animal', label: 'Animal and pets' },
  { key: 'machinery', label: 'Machinery tools' },
  { key: 'more', label: 'More category' },
]

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Dropdown
            menu={{ items: categories }}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <MenuOutlined />
                All category
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Link to="/hot-offers">Hot offers</Link>
          <Link to="/gift-boxes">Gift boxes</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/menu-item">Menu Item</Link>
          <Dropdown menu={{ items: [{ key: '1', label: 'Help 1' }] }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Help
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="navbar-right">
          <Select
            defaultValue="english"
            style={{ width: 120 }}
            variant="borderless"
            options={[
              { value: 'english', label: 'English, USD' },
              { value: 'spanish', label: 'Spanish, EUR' },
            ]}
          />
          <Select
            defaultValue="us"
            style={{ width: 100 }}
            variant="borderless"
            options={[
              { value: 'us', label: 'Ship to 🇺🇸' },
              { value: 'uk', label: 'Ship to 🇬🇧' },
            ]}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar