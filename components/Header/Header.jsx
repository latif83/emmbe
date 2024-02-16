import {
  faFacebook,
  faInstagram,
  faTiktok,
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
import { MNav } from "../mNav/MNav";

export const Header = ({ page }) => {
  return (
    <header className="bg-yellow-400">
      <div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:px-12 px-5 py-2 bg-black border-dotted text-white sm:flex hidden justify-between"
      >
        <div className="flex gap-6">
          <Link href="https://web.facebook.com/emmbeconstruction1">
            <FontAwesomeIcon
              icon={faFacebook}
              width={20}
              height={20}
              className="text-sm hover:text-gray-400 transition duration-500 ease-in-out"
            />
          </Link>
          <Link href="https://www.tiktok.com/@emmbeconstruction1?is_from_webapp=1&sender_device=pc">
            <FontAwesomeIcon
              icon={faTiktok}
              width={20}
              height={20}
              className="text-sm hover:text-gray-400 transition duration-500 ease-in-out"
            />
          </Link>
          <Link href="https://www.youtube.com/channel/UCxTRirLa1FZd9sRjTRuaniA">
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
            href="tel:0248347434"
          >
            <FontAwesomeIcon
              icon={faPhoneSquare}
              width={20}
              height={20}
              className="text-sm"
            />
            0248347434
          </Link>

          <Link
            className="flex gap-1 items-center hover:text-gray-400 duration-500 transition ease-in-out text-sm"
            href="mailto:emmbeconstruction@gmail.com"
          >
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              width={20}
              height={20}
              className="text-sm"
            />
            emmbeconstruction@gmail.com
          </Link>
        </div>
      </div>
      <div
        className="md:px-12 px-2 py-1 flex justify-between items-center"
      >
        <Link href="/">
          <Image src="/logo.png" width={120} height={120} className="rounded" />
        </Link>
        <nav className="sm:flex gap-6 hidden">
          <Link
            href="/"
            className={`${
              page == "home" ? "text-black font-bold" : "text-gray-700"
            } text-md hover:font-bold hover:text-black`}
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
        <MNav />
      </div>
    </header>
  );
};
