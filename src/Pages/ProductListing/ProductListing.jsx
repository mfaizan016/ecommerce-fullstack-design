import { useState } from 'react'
import { Row, Col, Select, Checkbox, Button, Tag, Pagination } from 'antd'
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { products } from '../../data/products'
import './ProductListing.css'
import FilterSidebar from '../../Components/FilterSidebar/FilterSidebar'
import ProductListItem from '../../Components/ProductListItem/ProductListItem'
import Breadcrumb from '../../Components/Breadcrumb/Breedcrumb'
import ProductCard from '../../Components/productCard/ProductCard'

const ProductListing = () => {
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [filters, setFilters] = useState({
    brands: [],
    features: [],
    priceRange: [0, 999999],
    condition: 'any',
    ratings: [],
  })
  const [activeTags, setActiveTags] = useState([])

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Clothings', path: '/products' },
    { label: "Men's wear", path: '/products' },
    { label: 'Summer clothing' },
  ]

  const handleTagClose = (tag) => {
    setActiveTags(activeTags.filter(t => t !== tag))
  }

  const handleClearAll = () => {
    setActiveTags([])
  }

  return (
    <div className="product-listing-page">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />
        
        <Row gutter={24}>
          <Col xs={24} md={6}>
            <FilterSidebar filters={filters} onFilterChange={setFilters} />
          </Col>
          <Col xs={24} md={18}>
            <div className="products-content">
              {/* Header */}
              <div className="products-header">
                <div className="products-count">
                  <span>12,911 items in </span>
                  <strong>Mobile accessory</strong>
                </div>
                <div className="products-controls">
                  <Checkbox>Verified only</Checkbox>
                  <Select defaultValue="featured" style={{ width: 150 }}>
                    <Select.Option value="featured">Featured</Select.Option>
                    <Select.Option value="newest">Newest</Select.Option>
                    <Select.Option value="price-low">Price: Low to High</Select.Option>
                    <Select.Option value="price-high">Price: High to Low</Select.Option>
                  </Select>
                  <div className="view-toggles">
                    <Button 
                      icon={<AppstoreOutlined />} 
                      type={viewMode === 'grid' ? 'primary' : 'default'}
                      onClick={() => setViewMode('grid')}
                    />
                    <Button 
                      icon={<UnorderedListOutlined />} 
                      type={viewMode === 'list' ? 'primary' : 'default'}
                      onClick={() => setViewMode('list')}
                    />
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {activeTags.length > 0 && (
                <div className="active-filters">
                  {activeTags.map(tag => (
                    <Tag key={tag} closable onClose={() => handleTagClose(tag)}>
                      {tag}
                    </Tag>
                  ))}
                  <Button type="link" onClick={handleClearAll}>Clear all filter</Button>
                </div>
              )}

              {/* Products Grid/List */}
              {viewMode === 'grid' ? (
                <Row gutter={[16, 16]}>
                  {products.map((product) => (
                    <Col key={product.id} xs={12} sm={8} md={8}>
                      <ProductCard product={product} />
                    </Col>
                  ))}
                </Row>
              ) : (
                <div className="products-list">
                  {products.map((product) => (
                    <ProductListItem key={product.id} product={product} />
                  ))}
                </div>
              )}

              {/* Pagination */}
              <div className="pagination-container">
                <Select defaultValue={10} style={{ width: 100 }}>
                  <Select.Option value={10}>Show 10</Select.Option>
                  <Select.Option value={20}>Show 20</Select.Option>
                  <Select.Option value={50}>Show 50</Select.Option>
                </Select>
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProductListing