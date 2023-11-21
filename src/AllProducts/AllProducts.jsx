import React, { useState, useEffect } from "react";
import NavigationBar from "../Navigation/NavigationBar";
import { client, urlFor } from "../sanitySetup";
import "./AllProducts.css"
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";


const AllProducts = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const query = '*[_type == "product"]';

    client.fetch(query).then((data) => {
      setProduct(data);
    });
  }, []);


  return (
    <div>
      <NavigationBar />
      <div className="bg-mane">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -mx-4 -mb-10 text-center">
              {product.map((value, index) => (

              
              <div class="sm:w-1/2 mb-10 px-4">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src={urlFor(value.productImage)}
                  />
                </div>
                <h2 class="title-font text-2xl font-medium text-gray-100 mt-6 mb-3">
                  {value.productName}
                </h2>
                <p class="leading-relaxed text-base">
                  {value.data}
                </p>
                <div className="price_bar">
                <h6 class="title-font  font-small text-gray-100 mt-0 mb-0 sm:w-1/2" style={{ textDecoration: "line-through" }}>
                  {value.originalPrice}
                </h6>
                <p class="title-font  font-small text-gray-100 mt-0 mb-0 sm:w-1/8">
                  Just {value.discountedPrice}
                </p>
                </div>
                <Link to={"product/" + value.slug.current}>
                <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                🛒SHOP NOW
                </button>
                </Link>
              </div>


              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default AllProducts;
