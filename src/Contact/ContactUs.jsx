import React from "react";
import "./ContactUs.css";
import NavigationBar from "../Navigation/NavigationBar";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  return (
    <div className="bgBoy">
      <NavigationBar />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-200 text-lg title-font font-medium mb-2">
                Contacting Us
              </h2>
              <p class="leading-relaxed text-base">
                For any query : Contact US at{" "}
                <h5>@dobbyneedsclothes@gmail.com </h5>
              </p>
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-200 text-lg title-font font-medium mb-2">
                Delivery Query
              </h2>
              <p class="leading-relaxed text-base">
                Your parcel will be delivered within 10 days of you completing
                the order, so be worry free!.
              </p>
            </div>
            <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-200 text-lg title-font font-medium mb-2">
                Payment Partner
              </h2>
              <p class="leading-relaxed text-base">
                Razorpay is the trusted payment gateway partner we have to
                ensure your transactional safety through a trusted partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <p class="text-gray-200 mx-20">
        @Extrovert Contact us Last updated on Nov 20th 2023 You may contact
        us using the information below: Merchant Legal entity name: Extrovert
        Registered Address: ADA Colony, Naini Allahabad UTTAR PRADESH 211010
        Telephone No: E-Mail ID: dobbyneedsclothes@gmail.com
      </p>
      <Footer />
    </div>
  );
};

export default ContactUs;
