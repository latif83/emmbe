"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "../Header/Header.module.css";
import Link from "next/link";

export const MNav = ({ page }) => {
  const [openMNav, setOpenMNav] = useState(false);

  return (
    <>
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
            className={`${
              page == "home" ? "text-black font-bold" : "text-gray-700"
            } hover:font-bold hover:text-black text-md`}
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className={`${
              page == "portfolio" ? "text-black font-bold" : "text-gray-700"
            } hover:font-bold hover:text-black text-md`}
          >
            Our Works
          </Link>
          <Link
            href="/about"
            className={`${
              page == "about" ? "text-black font-bold" : "text-gray-700"
            } hover:font-bold hover:text-black text-md`}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`${
              page == "services" ? "text-black font-bold" : "text-gray-700"
            } hover:font-bold hover:text-black text-md`}
          >
            Our Services
          </Link>
        </nav>
      )}
    </>
  );
};
