import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
      <footer className="flex justify-center items-center py-4 font-primary text-gray-700 dark:text-light">
        Built by
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
