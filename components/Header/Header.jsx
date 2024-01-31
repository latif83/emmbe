"use client";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faEnvelopeOpenText,
  faPhoneSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export const Header = ({page}) => {
  const [openMNav, setOpenMNav] = useState(false);

  return (
    <header className="bg-yellow-400 relative">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:px-12 px-5 py-2 bg-black border-dotted text-white sm:flex hidden justify-between"
      >
        <div className="flex gap-6">
          <Link href="/">
            <FontAwesomeIcon
              icon={faFacebook}
              width={20}
              height={20}
              className="text-sm hover:text-gray-400 transition duration-500 ease-in-out"
            />
          </Link>
          <Link href="/">
            <FontAwesomeIcon
              icon={faInstagram}
              width={20}
              height={20}
              className="text-sm hover:text-gray-400 transition duration-500 ease-in-out"
            />
          </Link>
          <Link href="/">
            <FontAwesomeIcon
              icon={faYoutube}
              width={20}
              height={20}
              className="text-sm hover:text-gray-400 transition duration-500 ease-in-out"
            />
          </Link>
        </div>

        <div className="flex gap-6">
          <Link
            className="flex gap-1 items-center hover:text-gray-400 duration-500 transition ease-in-out text-sm"
            href="/"
          >
            <FontAwesomeIcon
              icon={faPhoneSquare}
              width={20}
              height={20}
              className="text-sm"
            />
            0592032456
          </Link>

          <Link
            className="flex gap-1 items-center hover:text-gray-400 duration-500 transition ease-in-out text-sm"
            href="/"
          >
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              width={20}
              height={20}
              className="text-sm"
            />
            contact@embeeconstruction.com
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ position: "sticky", top: 0 }}
        className="md:px-12 px-2 py-1 flex justify-between items-center"
      >
        <Link href="/">
          <Image src="/logo.png" width={120} height={120} className="rounded" />
        </Link>
        <nav className="sm:flex gap-6 hidden">
          <Link
            href="/"
            className={`${page=='home' ? 'text-black font-bold' : 'text-gray-700'} text-md hover:font-bold hover:text-black`}
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className={`${page=='portfolio' ? 'text-black font-bold' : 'text-gray-700'} hover:font-bold hover:text-black text-md`}
          >
            Our Works
          </Link>
          <Link
            href="/about"
            className={`${page=='about' ? 'text-black font-bold' : 'text-gray-700'} hover:font-bold hover:text-black text-md`}
          >
            About Us
          </Link>
          <Link
           href="/services"
           className={`${page=='services' ? 'text-black font-bold' : 'text-gray-700'} hover:font-bold hover:text-black text-md`}
          >
            Our Services
          </Link>
        </nav>
        
        <button
          onClick={() => setOpenMNav(true)}
          type="button"
          className="rounded sm:hidden"
        >
          <FontAwesomeIcon
            icon={faBars}
            width={30}
            height={30}
            className="text-xl"
          />
        </button>
      </motion.div>
      {openMNav && (
          <nav
            className={`${styles.mbNavLinks} animate__animated animate__backInUp p-5 flex flex-col gap-6 text-black items-center font-bold text-lg bg-yellow-400`}
          >
            <div className="w-full flex justify-end">
              <FontAwesomeIcon
                onClick={() => setOpenMNav(false)}
                style={{ fontSize: "3em" }}
                className="mb-5"
                icon={faXmark}
                width={30}
                height={30}
                color="red"
              />
            </div>
            <Link
           href="/"
           className={`${page=='home' ? 'text-black font-bold' : 'text-gray-700'} hover:font-bold hover:text-black text-md`}
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className={`${page=='portfolio' ? 'text-black font-bold' : 'text-gray-700'} hover:font-bold hover:text-black text-md`}
          >
            Our Works
          </Link>
          <Link
            href="/about"
            className={`${page=='about' ? 'text-black font-bold' : 'text-gray-700'} hover:font-bold hover:text-black text-md`}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`${page=='services' ? 'text-black font-bold' : 'text-gray-700'} hover:font-bold hover:text-black text-md`}
          >
            Our Services
          </Link>
          </nav>
        )}
    </header>
  );
};
