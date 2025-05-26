import type { NextPage } from "next";
import Github from "../assets/github.webp";
import Linkedin from "../assets/linkedin.webp";
import Instagram from "../assets/instagram.webp";
import Gmail from "../assets/gmail.webp";
import Image from 'next/image';
export const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <div className="footer_copyright">
        <p className="footer_copyright_textOne">No &copy; copyright issues. </p>
        <p className="footer_copyright_textTwo">Feel free to copy. </p>
      </div>
      <div className="footer_socialMedia">
        <p>Connect with me !</p>
        <div className="footer_socialMedia_links">
        <Image
  src={Github}
  alt="tejas"
  width={40}
  height={40}
  onClick={() => window.open("https://github.com/TejasChaudhariNdb", "_blank")}
/>

          <Image
            src={Linkedin}
            alt="tejas"
            onClick={() => window.open("https://www.linkedin.com/in/tejaschaudhari038/", "_blank")}
            width={40}
            height={40}
          />
          <Image
            src={Instagram}
            alt="tejas"
            onClick={() => window.open("https://www.instagram.com/tejas_s_chaudhari/", "_blank")}
            width={40}
            height={40}
          />
          <Image
            src={Gmail}
            alt="tejas"
            onClick={() => window.open("mailto:tejaschaudhari038@gmail.com", "_blank")}
            width={40}
            height={40}
          />
        </div>
      </div>
    </footer>
  );
};
