import { Breadcrumb as AntBreadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import './BreedCrumb.css'
const Breadcrumb = ({ items }) => {
  return (
    <AntBreadcrumb className="custom-breadcrumb" separator=">">
      {items.map((item, index) => (
        <AntBreadcrumb.Item key={index}>
          {item.path ? (
            <Link to={item.path}>{item.label}</Link>
          ) : (
            item.label
          )}
        </AntBreadcrumb.Item>
      ))}
    </AntBreadcrumb>
  )
}

export default Breadcrumb