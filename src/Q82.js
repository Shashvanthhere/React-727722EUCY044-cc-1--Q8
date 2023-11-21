import React from 'react';

const ProductPage2 = () => {
  const products = [
    {
      name: 'Indoor Shoes (Yonex)',
      description: 'Description for Product 2',
      price: 29.99,
      minQuantity: 1,
      maxQuantity: 5,
      imgUrl: 'https://www.yonex.com/us/media/catalog/product/s/h/shbcfz3mex_007-1_1.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300',
    },
  ];

  return (
    <div>
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

export default ProductPage2;
