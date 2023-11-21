import React, { useState, useEffect } from "react";
import NavigationBar from "../Navigation/NavigationBar";
import "./HomePage.css";
import { client, urlFor } from "../sanitySetup";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const query = '*[_type == "product"][0..2]';

    client.fetch(query).then((data) => {
      setProduct(data);
    });
  }, []);

  //calling the poster 
  const [poster, setPoster] = useState([]);

  useEffect(() => {
    const query = '*[_type == "logo_poster"]';

    client.fetch(query).then((data) => {
      setPoster(data);
    });
  }, []);

//   calling top product
//calling the poster 
const [topProduct, setTopProduct] = useState([]);

useEffect(() => {
  const query = '*[_type == "topProduct"]';

  client.fetch(query).then((data) => {
    setTopProduct(data);
  });
}, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/allProducts");
  };

  return (
    <div>
      <NavigationBar />
      <div className="for-color">
        {poster.map((posty) => (

        
        <img
          className="image"
          src={urlFor(posty.poster)}
          alt="t-shirt sale"
          srcset=""
        />
        
        ))}
      </div>

      <div className="bg-boi">
        <section class="text-gray-100 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            {topProduct.map((pro) => (
                
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={urlFor(pro.productImage)}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-100 tracking-widest">
                  Extrovert
                </h2>
                <h1 class="text-gray-500 text-3xl title-font font-medium mb-1">
                  {pro.productName}
                </h1>
                <div class="flex mb-4">
                  <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a class="text-gray-100">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="text-gray-100">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="text-gray-100">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p class="leading-relaxed">
                  {pro.shortNote}
                </p>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div class="flex">
                    <span class="mr-3">Color</span>
                    <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button class="border-2 border-gray-300 ml-1 bg-gray-100 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div class="flex ml-6 items-center">
                    <span class="mr-3">Size</span>
                    <div class="relative">
                      <select class="rounded border appearance-none text-gray-900 border-gray-900 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-100">
                    {pro.discountedPrice}
                  </span>
                  <Link to={"product/" + pro.slug.current}>
                  <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    🛒BUY NOW
                  </button>
                  </Link>
                  
                </div>
              </div>
            </div>
            
            ))}
          </div>
        </section>
      </div>

      {/* //top Products */}
      <div>
        <div className="bg-too">
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-2 mx-auto">
                

                <div>
            <div class="flex flex-col">
                <div class="h-1 bg-gray-200 rounded overflow-hidden">
                  <div class="w-24 h-full bg-green-500"></div>
                </div>

                <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-5">
                  <h1 class="sm:w-2/5 text-gray-200 font-medium title-font text-2xl mb-2 sm:mb-0">
                    Locate your favourite T's in here!
                  </h1>
                  <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                    Very well, I promise. So, what did you get for me?" Angeline paused for a beat.
                     "Jeans." "What?" croaked Artemis. "And a T-shirt" 
                     
                  </p>
                </div>
              </div>

              <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              {product.map((things, index) => (
                <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div class="rounded-lg h-64 overflow-hidden">
                    {things.productImage &&
                    <img
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src={urlFor(things.productImage)}
                    />
                }
                  </div>
                  <h2 class="text-xl font-medium title-font text-gray-200 mt-5">
                    {things.productName}
                  </h2>
                  <p class="text-base leading-relaxed mt-2">
                    {things.data}
                  </p>
                  <Link to={"product/" + things.slug.current}>
                  <a class="text-gray-300 inline-flex items-center mt-3">
                    Buy Now
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  </Link>
                </div>
                ))}
                
            </div>
            </div>
            <button className="btn-allPro" onClick={handleClick}>
            Take a look at all our Products
          </button>
            </div>
          </section>
          
        </div>
      </div>
      <Gallery />
      <Footer />
    </div>
  );
};

export default HomePage;
