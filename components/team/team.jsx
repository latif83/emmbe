import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./team.module.css";
import {
  faLocationDot,
  faPhone,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const TeamMembers = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Meet Our Crew
        </h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl">
          Explore our team of skilled construction workers, dedicated to
          building excellence on every project.
        </p>
      </div>
      <div className="grid gap-8 mb-6 lg:mb-16">
        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
          <img
            className={`object-cover block rounded-lg sm:rounded-none sm:rounded-l-lg ${styles.img}`}
            src="/CEO1.jpg"
            alt="Bonnie Avatar"
          />
          <div className="p-5">
            <h3 className="text-xl font-bold tracking-tight text-gray-900">
              <a href="#">Bernard Ankomah</a>
            </h3>
            <span className="text-gray-500">
              CEO
            </span>
            <p className="mt-3 mb-4 font-light text-gray-500">
              As the CEO and Quality Surveyor/Estimator at{" "}
              <b>EMMBE CONSTRUCTION</b>, I'm proud to lead a team dedicated to
              delivering exceptional construction projects. Our commitment to
              quality, innovation, and customer satisfaction drives everything
              we do. Together, we're building a better future, one project at a
              time.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-2 gap-y-6 justify-center">
              <div className="flex gap-4">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  shake
                  className="text-xl bg-yellow-400 text-gray-700 rounded-full p-3"
                />
                <div className="flex flex-col gap-2">
                  <Link
                    className="underline-offset-8 hover:text-red-400"
                    href="tel:+233507635008"
                  >
                    +233 507 635 008
                  </Link>
                  <Link
                    className="underline-offset-8 hover:text-red-400"
                    href="tel:+233241970156"
                  >
                    +233 241 970 156
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  flip
                  className="text-xl bg-yellow-400 text-gray-700 rounded-full p-3"
                />
                <div className="flex flex-col gap-2">
                  <Link href="mailto:bernardankomah88@gmail.com">
                  bernardankomah88@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  bounce
                  className="text-xl bg-yellow-400 text-gray-700 rounded-full p-3"
                />
                <div className="flex flex-col gap-2">
                  <Link href="mailto:emmanayaw@gmail.com">
                    Block A, SSNIT Flats, 10 Anaji Rd Takoradi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
          <img
            className={`object-cover block rounded-lg sm:rounded-none sm:rounded-l-lg ${styles.img}`}
            src="/CEO2.jpg"
            alt="Bonnie Avatar"
          />
          <div className="p-5">
            <h3 className="text-xl font-bold tracking-tight text-gray-900">
              <a href="#">Emmanuel Nketsiah</a>
            </h3>
            <span className="text-gray-500">CEO</span>
            <p className="mt-3 mb-4 font-light text-gray-500">
              As the CEO and Site Engineer, I am deeply committed to ensuring
              that every project we undertake reflects the highest standards of
              quality and safety. Our team's expertise and dedication drive us
              to innovate and excel in every aspect of construction. Together,
              we build not just structures, but legacies that endure for
              generations.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-2 gap-y-6 justify-center">
              <div className="flex gap-4">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  shake
                  className="text-xl bg-yellow-400 text-gray-700 rounded-full p-3"
                />
                <div className="flex flex-col gap-2">
                  <Link
                    className="underline-offset-8 hover:text-red-400"
                    href="tel:+233277155151"
                  >
                    +233 277 155 151
                  </Link>
                  <Link
                    className="underline-offset-8 hover:text-red-400"
                    href="tel:+233248347434"
                  >
                    +233 248 347 434
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  flip
                  className="text-xl bg-yellow-400 text-gray-700 rounded-full p-3"
                />
                <div className="flex flex-col gap-2">
                  <Link href="mailto:emmanayaw@gmail.com">
                    emmanayaw@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  bounce
                  className="text-xl bg-yellow-400 text-gray-700 rounded-full p-3"
                />
                <div className="flex flex-col gap-2">
                  <Link href="mailto:emmanayaw@gmail.com">
                    Block A, SSNIT Flats, 10 Anaji Rd Takoradi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
