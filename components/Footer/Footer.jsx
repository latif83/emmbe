"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-gray-800 py-4 text-gray-100">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="w-full flex items-center justify-center xl:w-1/3">
              <a href="/" className="block w-56 mb-5 bg-white p-2">
                <Image src="/logo.png" width={200} height={200} />
              </a>
              {/* <p>
            EMMBE Design and Construction Enterprise, formed through the merger with Mensco Construction, excels in Ghana's construction industry. With an 8-year track record, it specializes in high-quality projects, emphasizing prompt delivery and excellence in architectural and structural services, project estimation, and various construction works.
            </p> */}
            </div>

            <div className="px-4 my-4 w-full xl:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-yellow-400">
                  Company
                </h2>
              </div>
              <ul className="leading-8">
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-yellow-600">Blog</h2>
            </div>
            <ul className="leading-8">
              <li><a href="#" className="hover:text-yellow-400">Getting Started With HTML and CSS</a></li>
              <li><a href="#" className="hover:text-yellow-400">What Is Flex And When to Use It?</a></li>
              <li><a href="#" className="hover:text-yellow-400">How TailwindCSS Can Help Your Productivity?</a></li>
              <li><a href="#" className="hover:text-yellow-400">5 Tips to Make Responsive Website</a></li>
              <li><a href="#" className="hover:text-yellow-400">See More</a></li>
            </ul>
          </div> */}
            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/3">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-yellow-400">
                  Connect With Us
                </h2>
              </div>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-yellow-400 hover:border-yellow-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-yellow-400 hover:border-yellow-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-yellow-400 hover:border-yellow-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-400 py-4 text-gray-700">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Copyright © 2023 EMMBEE. All Rights Reserved.
            </div>
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Made with ❤️ by Abdul-Latif.
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
