const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: 1200,
        availability: "In stock"
    }
  return (
    <div>
        <h3>{product.name}</h3>
        <legend>${product.price}</legend>
        <p>{product.availability}</p>
    </div>
  )
}

export default ProductInfo