import { Header } from "@/components/Header/Header";
import styles from "./page.module.css";
import { Footer } from "@/components/Footer/Footer";

export default function AboutUs() {
  return (
    <div>
      <Header page="about" />
      <div className={`${styles.ban} bg-gray-800`}>
        <div className={`py-12 sm:px-12 px-5 text-white relative z-10`}>
          <div className="border-l-4 px-3">
            <p className="font-light mt-2 text-gray-300 text-sm">WHO WE ARE</p>
            <h1 className="text-3xl font-bold">About Us</h1>
          </div>
        </div>
      </div>
      <div className="sm:px-12 px-5 py-5">
        {/* <h1 className="text-2xl font-bold">QUALITY WORK IS OUR PRIORITY</h1> */}
        <p className="mt-2">
          EMMBE Design and Construction Enterprise is a construction enterprise
          formed from the merger of Mensco Construction Company. The enterprise
          has successfully operated in Ghana for the past eight (8) years
          working on Architectural and Structural Drawings, Project Estimation,
          Building and Road Construction, Repairs, Renovation, Maintenance and
          Alteration works, Hire of Equipment and Technical Assistant
          Consultancy. The enterprise primarily focus is to set the standards
          for the local construction industry in terms of delivering
          high-quality projects within the project duration and with high
          consideration to the
        </p>

        <h3 className="text-LG font-semibold mt-5 mb-2">OUR OBJECTIVES</h3>

        <p>EMMBE Design and Construction Enterprise plans to:</p>
        <ul className="list-disc">
          <li>
            Assist the economic and social advancement of Ghana through the
            provision of sustainable buildings and other infrastructure that
            improves Ghana’s built environment.
          </li>
          <li>
            Provide quality works whilst considering value for money in the
            construction industry.
          </li>
          <li>Deliver first class services to our customers.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-5 mb-2">OUR VISION</h3>

        <p>
          EMMBE Design and Construction Enterprise vision is setting the
          standards for the local construction industry in terms of delivering
          high-quality projects within the project duration and with high
          consideration to the Client’s specifications and expectations.
        </p>

        <h3 className="text-LG font-semibold mt-5 mb-2">OUR MISSION</h3>

        <p>
          To provide quality services that exceeds the expectations of our
          prestigious customers.
        </p>

        <h3 className="text-lg font-semibold mt-5 mb-2">
          OUR MISSION STATEMENT
        </h3>

        <ul className="list-disc">
          <li>
            To become the customers’ most preferred choice by attaining
            excellence in quality and timely completed value added projects.
          </li>
          <li>
            To provide quick and quality Civil Engineering, Building & Road
            Construction, Architectural and Structural Drawings and Project
            Estimation to Individuals, Private and Public Institutions through
            qualified professionals to exceed clients’ expectations.
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}
