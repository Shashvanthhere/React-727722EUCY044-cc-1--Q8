import React from 'react';

const ProductPage = () => {
  const products = [
    {
      name: 'Indoor Shoes (LiNing)',
      description: 'Description for Product 1',
      price: 19.99,
      minQuantity: 1,
      maxQuantity: 10,
      imgUrl: 'https://strapiproduction-16636.kxcdn.com/uploads/1_9914711780/1_9914711780.jpg?width=256&quality=30',
    },
  ];

  return (
    <div style={{marginleft: '20px'}}>
      <h1>Indoor Shoes</h1>
      {products.map((product, index) => (
        <div key={index} className="product">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.minQuantity} - {product.maxQuantity}</p>
          <img src={product.imgUrl} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
