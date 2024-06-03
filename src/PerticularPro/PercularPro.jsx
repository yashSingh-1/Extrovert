import React, { useState, useEffect } from "react";
import { client, urlFor } from "../sanitySetup";
import { useParams } from "react-router-dom";
import NavigationBar from "../Navigation/NavigationBar";
import "./PerticularPro.css";
import Footer from "../Footer/Footer";

const PercularPro = () => {
  const [blog, setBlog] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    // sanity query
    // GROQ Query
    client
      .fetch(
        `*[slug.current == $slug ]{
            productName,
            productImage,
            shortNote,
            data,
            originalPrice,
            discountedPrice
}`,
        { slug }
      )
      .then((data) => setBlog(data[0]))
      .catch(console.error);
  }, [slug]);

  return (
    <div>
      <NavigationBar />
      <div className="bg-too-boi">
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  Extrovert
                </h2>
                <h1 class="text-gray-100 text-3xl title-font font-medium mb-4">
                  {blog.productName}
                </h1>
                <div class="flex mb-4">
                  <a class="flex-grow text-indigo-200 border-b-2 border-indigo-300 py-2 text-lg px-1">
                    Description
                  </a>
                </div>
                <p class="leading-relaxed mb-4 text-gray-100">{blog.data}</p>
                <div class="flex border-t border-gray-200 py-2">
                  <span class="text-gray-100">Color</span>
                  <span class="ml-auto text-gray-100">Black</span>
                </div>
                <div class="flex border-t border-gray-200 py-2">
                  <span class="text-gray-100">Size</span>
                  <span class="ml-auto text-gray-100">Medium</span>
                </div>
                <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                  <span class="text-gray-100">Quantity</span>
                  <span class="ml-auto text-gray-100">1</span>
                </div>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-100">
                    {blog.discountedPrice}
                  </span>
                  {/* <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Shop Now
                  </button> */}
                {document.getElementById("rzp-button1")}
                  
                  <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              {blog.productImage && (
                <img
                  alt="ecommerce"
                  class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                  src={urlFor(blog.productImage)}
                />
              )}
            </div>
          </div>
        </section>
        {/* additional pictures section  */}
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-5 mx-auto">
            <div class="flex flex-col text-center w-full mb-5">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">
                Take a look at this beauty.
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                A folklore to wear with passion driving the fashion
                to the epitome while consdering the love of black for the people.
              </p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src="https://dummyimage.com/600x360"
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-green-500 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Shooting Stars
                    </h1>
                    <p class="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src="https://dummyimage.com/601x361"
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-green-500 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      The Catalyzer
                    </h1>
                    <p class="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src="https://dummyimage.com/603x363"
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-green-500 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      The 400 Blows
                    </h1>
                    <p class="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* policies */}
        <header class="text-gray-900 body-font">
        <div className="policy">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-100" href="/contactUs">Delivery Policy</a>
      <a class="mr-5 hover:text-gray-100" href="/policies">Privacy Policy</a>
      <a class="mr-5 hover:text-gray-100" href="/policies">Return Policy</a>
      
    </nav>
    
    
  </div>
  </div>
</header>
      </div>
      <Footer/>
    </div>
  );
};

export default PercularPro;
