import { Checkbox, Radio, Slider, Input, Button, Collapse, Divider } from 'antd'
import './FilterSidebar.css'

const { Panel } = Collapse

const categories = [
  'Mobile accessory',
  'Electronics',
  'Smartphones',
  'Modern tech',
]

const brands = [
  { label: 'Samsung', value: 'samsung' },
  { label: 'Apple', value: 'apple' },
  { label: 'Huawei', value: 'huawei' },
  { label: 'Pocco', value: 'pocco' },
  { label: 'Lenovo', value: 'lenovo' },
]

const features = [
  { label: 'Metallic', value: 'metallic' },
  { label: 'Plastic cover', value: 'plastic' },
  { label: '8GB Ram', value: '8gb' },
  { label: 'Super power', value: 'power' },
  { label: 'Large Memory', value: 'memory' },
]

const conditions = [
  { label: 'Any', value: 'any' },
  { label: 'Refurbished', value: 'refurbished' },
  { label: 'Brand new', value: 'new' },
  { label: 'Old items', value: 'old' },
]

const ratings = [5, 4, 3, 2]

const FilterSidebar = () => {
  return (
    <div className="filter-sidebar">
      <Collapse defaultActiveKey={['1', '2', '3', '4', '5', '6']} ghost expandIconPosition="end">
        <Panel header="Category" key="1">
          <ul className="category-list">
            {categories.map((cat, index) => (
              <li key={index}>{cat}</li>
            ))}
            <li className="see-all">See all</li>
          </ul>
        </Panel>
        <Divider />

        <Panel header="Brands" key="2">
          <Checkbox.Group className="filter-checkbox-group">
            {brands.map((brand) => (
              <Checkbox key={brand.value} value={brand.value}>
                {brand.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
          <a className="see-all">See all</a>
        </Panel>
        <Divider />

        <Panel header="Features" key="3">
          <Checkbox.Group className="filter-checkbox-group">
            {features.map((feature) => (
              <Checkbox key={feature.value} value={feature.value}>
                {feature.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
          <a className="see-all">See all</a>
        </Panel>
        <Divider />

        <Panel header="Price range" key="4">
          <Slider range defaultValue={[0, 999999]} max={999999} />
          <div className="price-inputs">
            <Input placeholder="Min" prefix="$" />
            <Input placeholder="Max" prefix="$" />
          </div>
          <Button className="apply-btn">Apply</Button>
        </Panel>
        <Divider />

        <Panel header="Condition" key="5">
          <Radio.Group className="filter-radio-group" defaultValue="any">
            {conditions.map((condition) => (
              <Radio key={condition.value} value={condition.value}>
                {condition.label}
              </Radio>
            ))}
          </Radio.Group>
        </Panel>
        <Divider />

        <Panel header="Ratings" key="6">
          <Checkbox.Group className="filter-checkbox-group rating-group">
            {ratings.map((rating) => (
              <Checkbox key={rating} value={rating}>
                <span className="rating-stars">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
              </Checkbox>
            ))}
          </Checkbox.Group>
        </Panel>
      </Collapse>
    </div>
  )
}

export default FilterSidebar