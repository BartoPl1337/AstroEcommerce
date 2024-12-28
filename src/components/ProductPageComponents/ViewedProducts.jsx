import React, { useEffect } from 'react'
import { addVisitedProduct, getVisitedProducts } from '../../utlis/localStorage'

const ViewedProducts = ({products}) => {
const [visited, setVisited] = useState([])

useEffect(() => {
  const visitedId = getVisitedProducts()
  const visitedProducts = products.filter(product => visitedId.includes(product.id))
  setVisited(visitedProducts)
}, [products])

const visitProducts = (productId) => {
  addVisitedProduct(productId)
}
  return (
    <div className='grid grid-cols-3 gap-6'>
      {visited.map(product => (
        <div>
          {product.name}
        </div>
    ))}
    </div>
  )
}

export default ViewedProducts