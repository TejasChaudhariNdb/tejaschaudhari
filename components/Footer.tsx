import type { NextPage } from "next";

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
        <img
  src="/assets/github.webp"
  alt="tejas"
  onClick={() => window.open("https://github.com/TejasChaudhariNdb", "_blank")}
/>

          <img
            src="/assets/linkedin.webp"
            alt="tejas"
            onClick={() => window.open("https://www.linkedin.com/in/tejaschaudhari038/", "_blank")}
       
          />
          <img
            src="/assets/instagram.webp"
            alt="tejas"
            onClick={() => window.open("https://www.instagram.com/tejas_s_chaudhari/", "_blank")}
  
          />
          <img
            src="/assets/gmail.webp"
            alt="tejas"
            onClick={() => window.open("mailto:tejaschaudhari038@gmail.com", "_blank")}

          />
        </div>
      </div>
    </footer>
  );
};
