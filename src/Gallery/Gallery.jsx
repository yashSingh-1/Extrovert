import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { client, urlFor } from "../sanitySetup";


const Gallery = () => {
  //calling the poster
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const query = '*[_type == "mainGallery"]';

    client.fetch(query).then((data) => {
      setPictures(data);
    });
  }, []);

  return (
    <div>
      
      <div className="bg-again-boi">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
          {pictures.map((pics) => (
            <div class="lg:w-2/3 mx-auto">
              
              <div class="flex flex-wrap w-full py-32 px-10 relative mb-4">
                {pics.productImage &&
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src={urlFor(pics.productImage)}
                />
                }
                <div class="text-center relative z-10 w-full">
                  <h2 class="text-2xl text-gray-100 font-medium title-font mb-2">
                    Dragonball z T-Shirt
                  </h2>
                  <p class="leading-relaxed">
                    Groove on Something you like.
                  </p>
                  <a class="mt-3 text-indigo-500 inline-flex items-center">
                    Coming Soon
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
                </div>
              </div>
              <div class="flex flex-wrap -mx-2">
                <div class="px-2 w-1/2">
                  <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  {pics.productImage2 &&
                    <img
                      alt="gallery"
                      class="w-full object-cover h-full object-center block  absolute inset-0"
                      src={urlFor(pics.productImage2)}
                    />
                  }
                    <div class="text-center relative z-10 w-full">
                      <h2 class="text-xl text-gray-100 font-medium title-font mb-2">
                        Shooting Stars
                      </h2>
                      <p class="leading-relaxed">
                        Something Vibey
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                      Coming Soon
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
                    </div>
                  </div>
                </div>
                <div class="px-2 w-1/2">
                  <div class="flex flex-wrap w-full sm:py-24 py-16 sm:px-10 px-6 relative">
                    {pics.productImage3 &&
                    <img
                      alt="gallery"
                      class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                      src={urlFor(pics.productImage3)}
                    />
                    }
                    <div class="text-center relative z-10 w-full">
                      <h2 class="text-xl text-gray-100 font-medium title-font mb-2">
                         Stars
                      </h2>
                      <p class="leading-relaxed">
                        Something trendy.
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                      Coming Soon
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </section>
       
      </div>
    </div>
  );
};

export default Gallery;
