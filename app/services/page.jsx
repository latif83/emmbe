import { Header } from "@/components/Header/Header";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalculator,
    faCogs,
  faDraftingCompass,
  faHardHat,
  faStore,
  faTools,
  faUsersCog,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { Footer } from "@/components/Footer/Footer";

export default function Services() {
  return (
    <div>
      <Header page="services" />
      <div className={`${styles.ban} bg-gray-800`}>
        <div className={`py-12 sm:px-12 px-5 text-white relative z-10`}>
          <div className="border-l-4 px-3">
            <p className="font-light mt-2 text-gray-300 text-sm">
              WHAT WE OFFER
            </p>
            <h1 className="text-3xl font-bold">Our Services</h1>
          </div>
        </div>
      </div>

      <div className="my-5 sm:px-12 px-5">
        <h1 className="font-semibold">
          The enterprise offers comprehensive services which include:
        </h1>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mt-5">
          <div className="col-span-1 shadow-lg p-3 rounded-lg border">
            <div className="inline-flex mb-2 items-center justify-center bg-yellow-500 rounded-full p-2">
              <FontAwesomeIcon
                icon={faDraftingCompass}
                className="text-white text-lg"
                width={20}
                height={20}
              />
            </div>
            <h3 className="font-bold mb-3">
              Architectural And Structural Drawings{" "}
            </h3>
            <p>
              Crafting precise blueprints and structural designs for your
              vision.
            </p>
          </div>
          <div className="col-span-1 shadow-lg p-3 rounded-lg border">
            <div className="inline-flex mb-2 items-center justify-center bg-yellow-500 rounded-full p-2">
              <FontAwesomeIcon
                icon={faHardHat}
                className="text-white text-lg"
                width={20}
                height={20}
              />
            </div>
            <h3 className="font-bold mb-3">Building And Road Construction </h3>
            <p>
              Expertise in constructing durable buildings and roads for a
              sustainable future.
            </p>
          </div>
          <div className="col-span-1 shadow-lg p-3 rounded-lg border">
            <div className="inline-flex mb-2 items-center justify-center bg-yellow-500 rounded-full p-2">
              <FontAwesomeIcon
                icon={faCogs}
                className="text-white text-lg"
                width={20}
                height={20}
              />
            </div>
            <h3 className="font-bold mb-3">Civil Engineering Works </h3>
            <p>
            Comprehensive civil engineering solutions tailored to your project requirements.
            </p>
          </div>
          <div className="col-span-1 shadow-lg p-3 rounded-lg border">
            <div className="inline-flex mb-2 items-center justify-center bg-yellow-500 rounded-full p-2">
              <FontAwesomeIcon
                icon={faCalculator}
                className="text-white text-lg"
                width={20}
                height={20}
              />
            </div>
            <h3 className="font-bold mb-3">Project Estimation</h3>
            <p>
            Accurate project estimation services to guide your budget planning.
            </p>
          </div>
          <div className="col-span-1 shadow-lg p-3 rounded-lg border">
            <div className="inline-flex mb-2 items-center justify-center bg-yellow-500 rounded-full p-2">
              <FontAwesomeIcon
                icon={faUsersCog}
                className="text-white text-lg"
                width={20}
                height={20}
              />
            </div>
            <h3 className="font-bold mb-3">Technical Assistant Consultancy</h3>
            <p>
            Providing technical support and consultancy for seamless project execution.
            </p>
          </div>
          <div className="col-span-1 shadow-lg p-3 rounded-lg border">
            <div className="inline-flex mb-2 items-center justify-center bg-yellow-500 rounded-full p-2">
              <FontAwesomeIcon
                icon={faTools}
                className="text-white text-lg"
                width={20}
                height={20}
              />
            </div>
            <h3 className="font-bold mb-3">Hiring of Construction Machinery and Equipment</h3>
            <p>
            Efficient machinery and equipment rental services for construction needs.
            </p>
          </div>
          <div className="col-span-1 shadow-lg p-3 rounded-lg border">
            <div className="inline-flex mb-2 items-center justify-center bg-yellow-500 rounded-full p-2">
              <FontAwesomeIcon
                icon={faStore}
                className="text-white text-lg"
                width={20}
                height={20}
              />
            </div>
            <h3 className="font-bold mb-3">Sale of Building Materials</h3>
            <p>
            High-quality building materials available for purchase.
            </p>
          </div>
          <div className="col-span-1 shadow-lg p-3 rounded-lg border">
            <div className="inline-flex mb-2 items-center justify-center bg-yellow-500 rounded-full p-2">
              <FontAwesomeIcon
                icon={faWrench}
                className="text-white text-lg"
                width={20}
                height={20}
              />
            </div>
            <h3 className="font-bold mb-3">Alteration, Maintenance and Repair Works</h3>
            <p>
            Specialized in alterations, maintenance, and repair works for lasting results.
            </p>
          </div>
          <div className="col-span-1 shadow-lg p-3 rounded-lg border">
            <div className="inline-flex mb-2 items-center justify-center bg-yellow-500 rounded-full p-2">
              <FontAwesomeIcon
                icon={faFile}
                className="text-white text-lg"
                width={20}
                height={20}
              />
            </div>
            <h3 className="font-bold mb-3">Land Documentation Consultancy</h3>
            <p>
            Streamlining land documentation processes for a hassle-free experience.
            </p>
          </div>
        </div>
      </div>

<Footer />      
    </div>
  );
}
