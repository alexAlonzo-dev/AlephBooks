import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <footer className="flex justify-center items-center py-4 font-primary text-gray-700 dark:text-light">
        Built with{" "}
        <FontAwesomeIcon
          icon={faHeart}
          className="text-red-600 mx-1 animate-pulse"
          aria-hidden="true"
        />
        by
        <a
          className="text-primary dark:text-light font-semibold px-1 transition-colors duration-300 hover:text-dark dark:hover:text-lighter"
          href="https://www.instagram.com/aleph_.py/"
          target="__blank"
          rel="noreferrer"
        >
          Alex Alonzo
        </a>
      </footer>
    </>
  );
}

export default Footer;
