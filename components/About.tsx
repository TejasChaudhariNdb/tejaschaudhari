import type { NextPage } from "next";
import github from "../assets/github.webp";
import linkedin from "../assets/linkedin.webp";
import instagram from "../assets/instagram.webp";
import gmail from "../assets/gmail.webp";

export const About: NextPage = () => {
  return (
    <>
      <div className="about_left">
        <h1 className="about_left_head">Hi, I&apos;m Tejas Chaudhari</h1>
        <p className="about_left_text">
          Hi! I am Tejas Chaudhari from Nandurbar, Maharashtra. I am Computer Science Engineering
          Graduate with Honours in Data Science. I am passionate about writing clean, efficient and
          optimized code. I wrote my First Program in VB in 2011.
        </p>
        <div className="about_left_socialMedia">
          <img
            src={github.src}
            alt="tejas"
            onClick={() => window.open("https://github.com/TejasChaudhariNdb", "_blank")}
          />
          <img
            src={linkedin.src}
            alt="tejas"
            onClick={() => window.open("https://www.linkedin.com/in/tejaschaudhari038/", "_blank")}
          />
          <img
            src={instagram.src}
            alt="tejas"
            onClick={() => window.open("https://www.instagram.com/tejas_s_chaudhari/", "_blank")}
          />
          <img
            src={gmail.src}
            alt="tejas"
            onClick={() => window.open("mailto:tejaschaudhari038@gmail.com", "_blank")}
          />
        </div>
        <div
          className="about_left_starme"
          onClick={() => window.open("https://github.com/TejasChaudhariNdb", "_blank")}
        >
          ⭐ Star Me On Github
        </div>
      </div>
      <div className="about_right">
        <div className="about_right_profilePic" />
      </div>
    </>
  );
};
