const products = [
    { id: 1, sku: "abc", productName: "name 1", category: 1 },
    { id: 2, sku: "def", productName: "name 2", category: 2 },
    { id: 3, sku: "ghi", productName: "name 1", category: 2 },
    { id: 4, sku: "klm", productName: "name 1", category: 3 },
    { id: 5, sku: "xyz", productName: "name 1", category: 1 },
  ];
  
  const pricing = [
    { sku: "abc", price: 10 },
    { sku: "def", price: 20 },
    { sku: "ghi", price: 30 },
    { sku: "klm", price: 40 },
    { sku: "xyz", price: 50 },
  ];
  
  const categories = [
    { id: 1, name: "category 1" },
    { id: 2, name: "category 2" },
    { id: 3, name: "category 3" },
    { id: 4, name: "category 4" },
    { id: 5, name: "category 5" },
  ];
  
  // Function to merge the products with their corresponding pricing
  const mergeProductsWithPricing = (products, pricing) => {
    const priceMap = new Map(pricing.map(item => [item.sku, item.price]));
  
    return products.map(product => {
      const price = priceMap.get(product.sku) || 0; // Default price is 0 if not found
      return { ...product, price };
    });
  };
  const mergedProducts = mergeProductsWithPricing(products, pricing);
  console.log(mergedProducts);
  
  /* Output:
  [
    { id: 1, sku: 'abc', productName: 'name 1', category: 1, price: 10 },
    { id: 2, sku: 'def', productName: 'name 2', category: 2, price: 20 },
    { id: 3, sku: 'ghi', productName: 'name 1', category: 2, price: 30 },
    { id: 4, sku: 'klm', productName: 'name 1', category: 3, price: 40 },
    { id: 5, sku: 'xyz', productName: 'name 1', category: 1, price: 50 }
  ]
  */
  