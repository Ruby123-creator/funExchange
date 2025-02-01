import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';
import { useProductsQuery } from '../../Framework/product';
import { FaStar } from "react-icons/fa6";
import { useFetchCatgeory, useProductByCategory } from '../../Framework/category';

const Home: React.FC = () => {
  const { data: products, isLoading, isError, error } = useProductsQuery();
  const { data: category} = useFetchCatgeory();
  const [sortOrder, setSortOrder] = useState<string>(''); // For sorting
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // For filtering
  const {data: ProductByCategory} = useProductByCategory(selectedCategory)
 console.log(ProductByCategory ,"wdjhedh")
  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (isError) {
    return <p>Error: {error?.message || 'Something went wrong!'}</p>;
  }

  // Sort products based on the selected order
  const sortedProducts = [...(products || [])].sort((a: Product, b: Product) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else if (sortOrder === 'desc') {
      return b.price - a.price;
    }
    return 0;
  });

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? sortedProducts.filter((product: Product) => product.category === selectedCategory)
    : sortedProducts;

 

  return (
    <div className="home-container">
      Fun Exchange
    </div>
  );
};

export default Home;
