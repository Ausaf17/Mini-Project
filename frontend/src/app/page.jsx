'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';

const Home = () => {

  const [propertyList, setPropertyList] = useState([]);

  const router = useRouter();

  const fetchProperties = () => {
    axios.get('http://localhost:5000/property/getall')
      .then((result) => {
        console.table(result.data);
        setPropertyList(result.data)
      }).catch((err) => {
        console.log(err);

        if (err?.response?.status === 403) {
          toast.error('you are not authorized to view this page');

        }
      });
  }

  useEffect(() => {
    fetchProperties();

  }, [])


  return (
    <div><>

      <link
        rel="stylesheet"
        href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .work-sans {\n            font-family: 'Work Sans', sans-serif;\n        }\n                \n        #menu-toggle:checked + #menu {\n            display: block;\n        }\n        \n        .hover\\:grow {\n            transition: all 0.3s;\n            transform: scale(1);\n        }\n        \n        .hover\\:grow:hover {\n            transform: scale(1.02);\n        }\n        \n        .carousel-open:checked + .carousel-item {\n            position: static;\n            opacity: 100;\n        }\n        \n        .carousel-item {\n            -webkit-transition: opacity 0.6s ease-out;\n            transition: opacity 0.6s ease-out;\n        }\n        \n        #carousel-1:checked ~ .control-1,\n        #carousel-2:checked ~ .control-2,\n        #carousel-3:checked ~ .control-3 {\n            display: block;\n        }\n        \n        .carousel-indicators {\n            list-style: none;\n            margin: 0;\n            padding: 0;\n            position: absolute;\n            bottom: 2%;\n            left: 0;\n            right: 0;\n            text-align: center;\n            z-index: 10;\n        }\n        \n        #carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,\n        #carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,\n        #carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {\n            color: #000;\n            /*Set to match the Tailwind colour you want the active one to be */\n        }\n    "
        }}
      />



      <div
        className="carousel relative container mx-auto"
        style={{ maxWidth: 1600 }}
      >
        <div className="carousel-inner relative overflow-hidden w-full">
          {/*Slide 1*/}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            defaultChecked="checked"
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{ height: "50vh" }}
          >
            <div
              className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
              style={{
                backgroundImage:
                  'url("https://cdn.pixabay.com/photo/2020/06/25/10/21/architecture-5339245_960_720.jpg ")'
              }}
            >
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-white text-2xl my-4">
                    Luxury Apartments
                  </p>
                  <a
                    className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-white hover:border-black"
                    href="#"
                  >
                    View Property
                  </a>
                </div>
              </div>
            </div>
          </div>
          <label
            htmlFor="carousel-3"
            className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-2"
            className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          {/*Slide 2*/}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div
            className="carousel-item absolute opacity-0 bg-cover bg-right"
            style={{ height: "50vh" }}
          >
            <div
              className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
              style={{
                backgroundImage:
                  'url("https://cdn.pixabay.com/photo/2024/04/23/11/55/kitchen-8714865_1280.jpg ")'
              }}
            >
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-black text-2xl my-4">Furnished</p>
                  <a
                    className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                    href="#"
                  >
                    view properties
                  </a>
                </div>
              </div>
            </div>
          </div>
          <label
            htmlFor="carousel-1"
            className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-3"
            className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          {/*Slide 3*/}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{ height: "50vh" }}
          >
            <div
              className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom"
              style={{
                backgroundImage:
                  'url(" https://cdn.pixabay.com/photo/2021/02/02/18/46/city-5974876_960_720.jpg ")'
              }}
            >
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-black text-2xl my-4">
                    Residentials Areas
                  </p>
                  <a
                    className="text-xl inline-block no-underline border-b border-red-600 leading-relaxed hover:text-white hover:border-white"
                    href="#"
                  >
                    view properties
                  </a>
                </div>
              </div>
            </div>
          </div>
          <label
            htmlFor="carousel-2"
            className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-1"
            className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          {/* Add additional indicators for each slide*/}
          <ol className="carousel-indicators">
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-1"
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-2"
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-3"
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >
                •
              </label>
            </li>
          </ol>
        </div>
      </div>





      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <nav id="store" className="w-full z-30 top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <a
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                href="#"
              >
                Our Properties
              </a>

            </div>
          </nav>
          {
            propertyList.map(property => (
              <div key={property._id} className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                <Link href={'/view-properties/' + property._id}>
                  <img
                    className="hover:grow hover:shadow-lg h-48"
                    src={property.image}
                  />
                  <div className="pt-3 flex items-center justify-between">
                    <p className="">{property.title}</p>
                    <svg
                      className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                    </svg>
                  </div>
                  <p className="pt-1 text-gray-900">₹{property.price}</p>
                </Link>
              </div>
            ))
          }
        </div>
      </section>
      <section className="bg-white py-8">
        <div className="container py-8 px-6 mx-auto">
          <a
            className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
            href="#"
          >
            About
          </a>

          <p className="mb-8">

            Discover your dream property with ease. Our platform connects buyers, sellers, and renters in a seamless, user-friendly way. Explore listings, compare prices, and make informed decisions—all in one place. Whether you're looking to buy, sell, or rent, we've got you covered.


          </p>
        </div>
      </section>
      <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
        <div className="container flex px-3 py-8 ">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full lg:w-1/2 ">
              <div className="px-3 md:px-0">

                <p className="py-4">
                  © 2024 Modern Properties. All Rights Reserved.
                  Unauthorized use or duplication of content is prohibited. For inquiries, contact us at [support email].


                </p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right mt-6 md:mt-0">
              <div className="px-3 md:px-0">
                <h3 className="text-left font-bold text-gray-900">Social</h3>
                <div className="w-full flex items-center py-4 mt-0">
                  <a href="#" className="mx-2">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="mx-2">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="mx-2">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                  <a href="#" className="mx-2">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
    </div>
  )
}

export default Home;
