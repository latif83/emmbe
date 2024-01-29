"use client";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faEnvelopeOpen,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightLong,
  faBars,
  faBarsStaggered,
  faBuildingCircleCheck,
  faCalculator,
  faCircleCheck,
  faCircleInfo,
  faCog,
  faCompassDrafting,
  faEnvelopeOpenText,
  faHelmetSafety,
  faLayerGroup,
  faLightbulb,
  faPenRuler,
  faPhone,
  faPhoneSquare,
  faRightLong,
  faTruckRampBox,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { Banner } from "@/components/Banner/banner";
import { Header } from "@/components/Header/Header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <Banner />
      <section
        className={`grid md:grid-cols-3 grid-cols-1 sm:gap-4 gap-8 sm:px-12 px-5 py-7 bg-white ${styles.mission}`}
      >
        <div className="col-span-1 relative z-10 flex justify-center flex-col gap-4">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-yellow-500 font-bold mb-4"
          >
            OUR MISSION
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold"
          >
            QUALITY WORK IS OUR PRIORITY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            EMMBE Design and Construction Enterprise strives to advance Ghana's
            economy and society through sustainable infrastructure. We
            prioritize quality, cost-effectiveness, and first-className services
            for our customers.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: -100, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            type="button"
            className="text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 shadow-lg shadow-yellow-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            LEARN MORE
          </motion.button>
        </div>
        <div className="col-span-2 relative z-10 grid grid-cols-2 gap-2 relative">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={`col-span-1 bg-black ${styles.wImgCon} rounded overflow-hidden`}
          >
            <Image
              src="/img6.jpg"
              width={500}
              height={500}
              className={styles.wImg}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`col-span-1 bg-black ${styles.wImgCon} rounded overflow-hidden`}
          >
            <Image
              src="/img23.jpg"
              width={500}
              height={500}
              className={styles.wImg}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`col-span-1 bg-black ${styles.wImgCon} rounded overflow-hidden`}
          >
            <Image
              src="/img52.jpg"
              width={500}
              height={500}
              className={styles.wImg}
              style={{ objectPosition: "center" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={`col-span-1 bg-black ${styles.wImgCon} rounded overflow-hidden`}
          >
            <Image
              src="/img47.jpg"
              width={500}
              height={500}
              className={styles.wImg}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`${styles.wAbs} flex items-center justify-center`}
          >
            <div className="rounded-full bg-white sm:px-4 sm:py-12 px-4 py-3 text-center">
              <p className="sm:text-5xl text-3xl font-bold text-yellow-400">
                8+
              </p>
              <p className="sm:mt-2 sm:font-bold sm:text-sm text-xs hidden sm:block">
                Years of Experience
              </p>
              <p className="sm:mt-2 sm:font-bold sm:text-sm text-xs sm:hidden block">
                Years of
                <br />
                Experience
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="sm:px-12 px-5 grid grid-cols-2 gap-4 py-5">
        <div className="col-span-1 flex items-center">
            <p className="text-gray-600 text-lg font-bold">
              Explore our construction projects and witness the art of building
              dreams into reality.
            </p>
        </div>
        <div className="col-span-1">
          <video className="w-full h-[300px] object-cover rounded-lg" controls>
            <source src="/vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <section className="sm:px-12 px-5">
        <div className={`${styles.ww} flex items-center gap-2 p-5 py-10`}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={`relative z-10 ${styles.wwch1}`}
          >
            <h1 className="text-2xl font-bold">
              Building your visions. Creating reality.
            </h1>
            <p className="text-gray-600">
              With expertise in architectural and structural design, project
              estimation, construction, renovations, and more, we're committed
              to transforming your dreams into tangible reality. Explore our
              services and let's build together!
            </p>
            <button
              type="button"
              className="text-gray-900 bg-gradient-to-r mt-5 from-blue-200 via-blue-400 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex gap-2 items-center justify-center"
            >
              DISCOVER MORE
              <FontAwesomeIcon
                icon={faRightLong}
                width={20}
                height={20}
                className="text-lg"
              />
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className={`relative z-10 ${styles.wwch2}`}
            style={{ height: "300px" }}
          >
            <div
              className={`rounded relative bg-yellow-400 ${styles.wwIn}`}
              style={{ width: "100%", height: "120%" }}
            >
              {/* <video controls autoPlay style={{ width: '100%', height: '100%',objectFit:'cover' }}>
    <source src="/vid1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video> */}
              <Image
                src="/img22.jpg"
                className="relative z-10 rounded"
                width={500}
                height={500}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-yellow-400 sm:px-12 px-5 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white font-bold text-2xl mt-3"
        >
          We offer comprehensive services
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 sm:mt-10 mt-6"
        >
          <div className="col-span-1 shadow-lg p-5 rounded-lg bg-white flex flex-col justify-center items-center gap-4">
            <div>
              <span className="bg-black text-white inline-block rounded-full px-3 py-4">
                <FontAwesomeIcon
                  icon={faPenRuler}
                  width={30}
                  height={30}
                  className="text-2xl"
                />
              </span>
            </div>
            <div>
              <h1 className="text-lg">Architectural And Structural Drawings</h1>
            </div>
          </div>

          <div className="col-span-1 shadow-lg p-5 rounded-lg bg-white flex flex-col justify-center items-center gap-4">
            <div>
              <span className="bg-black text-white inline-block rounded-full px-3 py-4">
                <FontAwesomeIcon
                  icon={faBuildingCircleCheck}
                  width={30}
                  height={30}
                  className="text-2xl"
                />
              </span>
            </div>
            <div>
              <h1 className="text-lg">Building And Road Construction</h1>
            </div>
          </div>

          <div className="col-span-1 shadow-lg p-5 rounded-lg bg-white flex flex-col justify-center items-center gap-4">
            <div>
              <span className="bg-black text-white inline-block rounded-full px-3 py-4">
                <FontAwesomeIcon
                  icon={faHelmetSafety}
                  width={30}
                  height={30}
                  className="text-2xl"
                />
              </span>
            </div>
            <div>
              <h1 className="text-lg">Civil Engineering Works</h1>
            </div>
          </div>

          <div className="col-span-1 shadow-lg p-5 rounded-lg bg-white flex flex-col justify-center items-center gap-4">
            <div>
              <span className="bg-black text-white inline-block rounded-full px-3 py-4">
                <FontAwesomeIcon
                  icon={faCalculator}
                  width={30}
                  height={30}
                  className="text-2xl"
                />
              </span>
            </div>
            <div>
              <h1 className="text-lg">Project Estimation</h1>
            </div>
          </div>

          <div className="col-span-1 shadow-lg p-5 rounded-lg bg-white flex flex-col justify-center items-center gap-4">
            <div>
              <span className="bg-black text-white inline-block rounded-full px-3 py-4">
                <FontAwesomeIcon
                  icon={faCompassDrafting}
                  width={30}
                  height={30}
                  className="text-2xl"
                />
              </span>
            </div>
            <div>
              <h1 className="text-lg">Technical Assistant Consultancy</h1>
            </div>
          </div>

          <div className="col-span-1 shadow-lg p-5 rounded-lg bg-white flex flex-col justify-center items-center gap-4">
            <div>
              <span className="bg-black text-white inline-block rounded-full px-3 py-4">
                <FontAwesomeIcon
                  icon={faTruckRampBox}
                  width={30}
                  height={30}
                  className="text-2xl"
                />
              </span>
            </div>
            <div>
              <h1 className="text-lg">Construction Machinery</h1>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-3 flex items-center justify-center"
        >
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r mt-5 from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 shadow-lg shadow-lime-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex gap-2"
          >
            DISCOVER MORE
            <FontAwesomeIcon
              icon={faArrowRightLong}
              width={20}
              height={20}
              className="text-md ml-1"
            />
          </button>
        </motion.div>
      </section>
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white relative sm:px-12 px-5"
      >
        <div className="bg-yellow-400 p-5 absolute top-0 left-0 w-full z-0"></div>

        <div className="relative z-10 bg-white sm:p-12 border-4 border-yellow-400 p-5 rounded">
          <h1>WHY CHOOSE US</h1>
          <h1 className="text-xl font-bold">
            We Design The Future with Excellence
          </h1>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mt-3">
            <div className="col-span-1 flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faCircleCheck}
                width={30}
                height={30}
                className="text-lg text-yellow-500"
              />
              Building the future with ideas
            </div>
            <div className="col-span-1 flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faCircleCheck}
                width={30}
                height={30}
                className="text-lg text-yellow-500"
              />
              Designing future with excellence
            </div>
            <div className="col-span-1 flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faCircleCheck}
                width={30}
                height={30}
                className="text-lg text-yellow-500"
              />
              Discovering possibility concrete
            </div>
            <div className="col-span-1 flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faLayerGroup}
                width={30}
                height={30}
                className="text-lg text-yellow-500"
              />
              We Develop Unique Projects
            </div>
            <div className="col-span-1 flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faCog}
                width={30}
                height={30}
                className="text-lg text-yellow-500"
              />
              We Value Convenience and Functionality
            </div>
            <div className="col-span-1 flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faLightbulb}
                width={30}
                height={30}
                className="text-lg text-yellow-500"
              />
              We Offer Innovative Technologies
            </div>
          </div>
        </div>
        <div className="bg-yellow-400 p-5 absolute bottom-0 left-0 w-full z-0"></div>
      </motion.section>
      <section className="text-neutral-700 sm:px-12 px-5 py-10 bg-yellow-400">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto text-center md:max-w-xl lg:max-w-3xl"
        >
          <h3 className="mb-6 text-3xl font-bold">Testimonials</h3>
          <p className="mb-6 pb-2 md:mb-12 md:pb-0">
            Listen to the love from our valued customers who have experienced
            the excellence of EMMBE Design and Construction Enterprise. Read
            their testimonials and discover the satisfaction that comes from
            building dreams together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="grid gap-6 text-center md:grid-cols-3"
        >
          <div>
            <div className="block rounded-lg bg-white shadow-lg">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
                <img src="/avatar.png" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Mr.Martin Agyei</h4>
                <p>Osu - Ghana</p>
                <hr />
                <p className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  Exceptional work by EMMBE Design and Construction! The team
                  went above and beyond in turning our vision into reality. From
                  detailed architectural plans to flawless construction, their
                  professionalism and attention to detail were outstanding.
                  Highly recommend for anyone looking to build their dream home.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="block rounded-lg bg-white shadow-lg">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
                <img src="/avatar.png" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">
                  Mrs.Abena Lawson
                </h4>
                <p>Tema - Ghana</p>
                <hr />
                <p className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  Working with EMMBE was a pleasure. Their expertise in project
                  estimation and efficient construction management made our
                  commercial project a success. The team's dedication to quality
                  and meeting deadlines is commendable. I look forward to future
                  collaborations.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="block rounded-lg bg-white shadow-lg">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
                <img src="/avatar.png" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Mr.John Aseidu</h4>
                <p>Pokuase - Ghana</p>
                <hr />
                <p className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  EMMBE transformed our outdated space into a modern
                  masterpiece. The renovation process was smooth, and their
                  commitment to delivering top-notch craftsmanship was evident
                  throughout. The communication and transparency exhibited by
                  the team made the entire experience stress-free. Great job!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
