import type { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
interface INavbarProps {
  onNavItemClick: (item: string) => void;
  switchTheme: () => void;
  theme: string;
}

export const Navbar: NextPage<INavbarProps> = ({
  onNavItemClick = () => {},
  switchTheme = () => {},
  theme,
}) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="menu">
          <input
            className="check"
            type="checkbox"
            onChange={() => setShowSidebar(!showSidebar)}
            checked={showSidebar}
          />
          <div className={showSidebar ? "line line-1" : "line line1"}></div>
          <div className={showSidebar ? "line line-2" : "line line2"}></div>
          <div className={showSidebar ? "line line-3" : "line line3"}></div>
        </div>

        <p className="navbar_name">
          <span>Tejas Chaudhari</span>
          <img src={theme === "light" ? "/assets/sum.webp" : "/assets/moon.webp"} alt="tejas" onClick={switchTheme} />
        </p>
        <div className="navbar_list">
          <p className="navbar_list_item" onClick={() => onNavItemClick("about")}>
            About
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick("jobs")}>
            Work
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick("projects")}>
            Projects
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick("skills")}>
            Skills
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick("contact")}>
            Contact
          </p>
          <p className="navbar_list_item">
            <Link href="stock/Positionsize" className="navbar_list_item ">
              Position
            </Link>
          </p>

          <p className="navbar_list_item">
            <Link href="blog/" className="navbar_list_item ">
               Blogs
            </Link>
          </p>
        </div>
      </nav>

      <div className={showSidebar ? "sidebar active" : "sidebar"}>
        <p className="sidebar_item" onClick={() => onNavItemClick("about")}>
          About
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("jobs")}>
          Work
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("projects")}>
          Projects
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("skills")}>
          Skills
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("contact")}>
          Contact
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("contact")}>
          Contact
        </p>
      </div>
    </>
  );
};
