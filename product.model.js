const products = [
    {
        id: 'redshoe',
        description:'Red Shoe',
        price: 42.12,
        reviews:[],
     },
     {
       id:'bluejeans',
       description:'Blue Jeans',
       price: 55.12,
       reviews:[]
     }
  ];


    function getAllProducts(){
         return products;
    };

    function getProductsByPrice(min,max){
       return  products.filter((product)=>{
          return product.price >= min && product.price <= max;
         })       
    };

    function getProductById(id){
      return products.find((product)=>{
        return product.id === id;
      })
    }

    function addNewProduct(id,description,price){
      const newProdoct = {
        id,
        price,
        description,
        reviews:[]
      };

      products.push(newProdoct);
      return newProdoct;
    } 

    function addNewProductReview(id,rating,comment){
      const matchedProduct = getProductById(id);
      if(matchedProduct){
        const newProductReview = {
          rating,
          comment,
        }
        matchedProduct.reviews .push(newProductReview);
        return newProductReview;
      }
    
    };
       


module.exports = {
      getAllProducts,
      getProductsByPrice,
      getProductById,
      addNewProduct,
      addNewProductReview
    } 