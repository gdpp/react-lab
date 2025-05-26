const ProductList = () => {
    const products = [
        {id: 1, name: "Apple", price: 1.99},
        {id: 2, name: "Book", price: 10.99},
        {id: 3, name: "Computer", price: 100.99}
    ];

  return (
    <div>
        {products.map(({id, name, price}) => (
            <div key={id}>
                <h4>{name}</h4>
                <p>${price}</p>
            </div>
        ))}
    </div>
  )
}

export default ProductList