import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import { ISkills, IJobs, IProjects, Theme } from "../typings";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Jobs } from "../components/Jobs";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import ScrollUp from "../assets/scrollup.webp";

interface IHomeProps {
  jobs: IJobs[];
  projects: IProjects[];
  skills: ISkills[];
}

const Home: NextPage<IHomeProps> = ({ jobs, projects, skills }) => {
  const jobsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState<Theme>("light");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const data = localStorage.getItem("themeValue");
    setTheme(data === "light" || !data ? "light" : "dark");
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("themeValue", newTheme);
    setTheme(newTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavItemClick = (item: string) => {
    let scrollObject = {};
    switch (item) {
      case "about":
        scrollObject = {
          top: 0,
          behavior: "smooth",
        };
        break;

      case "jobs":
        scrollObject = {
          top: jobsRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      case "projects":
        scrollObject = {
          top: projectsRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      case "skills":
        scrollObject = {
          top: skillsRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      case "contact":
        scrollObject = {
          top: contactRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      default:
        break;
    }

    window.scrollTo(scrollObject);
  };

  return (
    <div>
      <Head>
        <link rel="canonical" href="https://tejaschaudhari.com" />
        <meta name="author" content="Tejas Chaudhari" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main data-theme={theme}>
        <Navbar onNavItemClick={handleNavItemClick} switchTheme={switchTheme} theme={theme} />

        <section className="about">
          <About />
        </section>

        <section className="jobs" ref={jobsRef}>
          <Jobs jobs={jobs} />
        </section>

        <section className="skills" ref={skillsRef}>
          <Skills skills={skills} />
        </section>

        <section className="projects" ref={projectsRef}>
          <Projects projects={projects} />
        </section>

        <section className="contact" ref={contactRef}>
          <Contact theme={theme} />
        </section>

        <Footer />

        {isVisible && (
          <img src={ScrollUp.src} alt="tejas" className="scroll-up" onClick={scrollToTop} />
        )}

        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
        />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const jobs: any[] = [
    {
      id: "cl3rpyik46rq60fpe4t256qddt",
      company: "SiteLucent",
      designation: "Full Stack Developer",
      companyLinkedin: "https://www.linkedin.com/company/sitelucent/",
      companyUrl: "https://www.sitelucent.com",
      from: "2024-11-1",
      to: null,
      logo: {
        url: "https://cdn.theorg.com/8d4c7bee-17a0-45e8-b92e-6290f873ba5a_medium.jpg",
      },
    },
    {
      id: "cl3rpyik46rq60fpe4t256qd1t",
      company: "DeskNow",
      designation: "Full Stack Developer",
      companyLinkedin: "https://www.linkedin.com/company/desknow",
      companyUrl: "https://www.desk-now.com/",
      from: "2021-11-1",
      to: "2024-10-1",
      logo: {
        url: "https://play-lh.googleusercontent.com/sEFlwIUv8Y6pYNi62Bs13JR6AMSnYAq2RZSrF4YfeEm1YwrMYuc-u6oc_e1XytQTQ7k",
      },
    },
    {
      id: "cl3rpyik46rq60fpe4t256qd2t",
      company: "NearDish",
      designation: "Software Engineer",
      companyLinkedin: "https://www.linkedin.com/company/neardish/",
      companyUrl: "https://neardish.in/",
      from: "2020-08-1",
      to: "2021-11-1",
      logo: {
        url: "./neardish.avif",
      },
    },
    {
      id: "cl3rpyik46rq60fpe4t256qd3t",
      company: "ÆTHER, INC",
      designation: "Software Engineer (Freelancing)",
      companyLinkedin: "https://www.linkedin.com/company/aetherearth/",
      companyUrl: "https://aeth.ca/",
      from: "2019-06-1",
      to: "2020-06-1",
      logo: {
        url: "./aeth.jfif",
      },
    },
    {
      id: "cl3rpww4z6t2b0co59yryrrpy",
      company: "Brackets Infinity",
      designation: "Web Developer",
      companyLinkedin: "https://www.linkedin.com/company/bracketsinfinity/",
      companyUrl: "https://www.bracketsinfinity.com/",
      from: "2017-03-03",
      to: "2019-06-18",
      logo: {
        url: "./brackerts.jfif",
      },
    },
    {
      id: "cl3rpww4z6t2b0co59yryrrpy",
      company: "KiranaZone",
      designation: "Web Developer",
      companyLinkedin: "https://www.linkedin.com/company/kiranazone/",
      companyUrl: "https://www.kiranazone.com/",
      from: "2017-01-08",
      to: "2019-12-08",
      logo: {
        url: "https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg",
      },
    },
  ];

  const projects: any[] = [
    {
      id: "cl3xef5xo0ciu0boesbgeqw60",
      title: "Slack Clone",
      uniqueId: 1,
      description: "Slack UI Clone built with React, TypeScript and Firebase.",
      demoLink: "https://slack-clone-hk-e1070.web.app/",
      githubLink: "https://github.com/iamhiman/slack-clone",
      techStack: [
        {
          text: "TypeScript",
        },
        {
          text: "React",
        },
        {
          text: "React Router",
        },
        {
          text: "MUI",
        },
        {
          text: "Styled Components",
        },
        {
          text: "Firebase",
        },
        {
          text: "All",
        },
      ],
      image: {
        url: "https://media.graphassets.com/F7KL6HATXCMZXnBftTRq",
      },
    },
    {
      id: "cl3y3cmdq0rqi0boepuv45gs2",
      title: "Kashkart",
      uniqueId: 2,
      description:
        "Mobile Responsive Single Page E-Commerce Website built with React Hooks,Context API, Custom Hooks and React-Router.",
      demoLink: "https://kashkart.netlify.app/",
      githubLink: "https://github.com/iamhiman/kashkart",
      techStack: [
        {
          text: "React",
        },
        {
          text: "React Router",
        },
        {
          text: "SCSS",
        },
        {
          text: "JSON",
        },
        {
          text: "All",
        },
      ],
      image: {
        url: "https://media.graphassets.com/Hqbk4A23SDeBlAY21VAf",
      },
    },
    {
      id: "cl3y3fnor0ryc0boerqosb6vh",
      title: "Crypto Money",
      uniqueId: 3,
      description:
        "Mobile Responsive Crypto Currency Tracker with pagination & search filter using React Hooks and CoinGecko API. ",
      demoLink: "https://crypto-money.netlify.app/",
      githubLink: "https://github.com/iamhiman/crypto-money",
      techStack: [
        {
          text: "React",
        },
        {
          text: "TypeScript",
        },
        {
          text: "CSS",
        },
        {
          text: "All",
        },
      ],
      image: {
        url: "https://media.graphassets.com/0ff4jhgOQrW9V34O2ki5",
      },
    },
    {
      id: "cl3y3kse70sra0bpl56dyxejz",
      title: "Power Note",
      uniqueId: 4,
      description: "Mobile responsive Notes Taking website to add, edit, delete and search notes. ",
      demoLink: "https://power-note.netlify.app/",
      githubLink: "https://github.com/iamhiman/power-note",
      techStack: [
        {
          text: "HTML",
        },
        {
          text: "CSS",
        },
        {
          text: "JavaScript",
        },
        {
          text: "All",
        },
      ],
      image: {
        url: "https://media.graphassets.com/eHz9x3RzROif95EH3QyN",
      },
    },
    {
      id: "cl3y3nvwo0swk0bpljsi7eizj",
      title: "Type Master",
      uniqueId: 5,
      description: "Mobile Responsive Javascript game to test your typing skills.",
      demoLink: "https://type-master.netlify.app/",
      githubLink: "https://github.com/iamhiman/type-master",
      techStack: [
        {
          text: "HTML",
        },
        {
          text: "CSS",
        },
        {
          text: "JavaScript",
        },
        {
          text: "All",
        },
      ],
      image: {
        url: "https://media.graphassets.com/nLtUBMQniKYLkvldsywe",
      },
    },
    {
      id: "cl3y3qukt0soy0boevj0ati56",
      title: "ResoExpo",
      uniqueId: 6,
      description:
        "Real Estate website to book Plots,Banquet Halls,Guest Rooms before big occasions with online payment facility.",
      demoLink: null,
      githubLink: "https://github.com/iamhiman/resoexpo-capstone",
      techStack: [
        {
          text: "HTML",
        },
        {
          text: "CSS",
        },
        {
          text: "JavaScript",
        },
        {
          text: "Ajax",
        },
        {
          text: "jQuery",
        },
        {
          text: "PHP",
        },
        {
          text: "MySQL",
        },
        {
          text: "All",
        },
      ],
      image: {
        url: "https://media.graphassets.com/1XvLsOMRFG2lh2NSc6Pw",
      },
    },
    {
      id: "cl3y3toky0tay0bplppsaiv15",
      title: "PHP CRUD",
      uniqueId: 7,
      description: "Web App to implement CRUD Operations using PHP in MySQL Database.",
      demoLink: null,
      githubLink: "https://github.com/iamhiman/php-CRUD",
      techStack: [
        {
          text: "PHP",
        },
        {
          text: "MySQL",
        },
        {
          text: "BootStrap",
        },
        {
          text: "All",
        },
      ],
      image: {
        url: "https://media.graphassets.com/ixSuN4zpTs6u1NREhX61",
      },
    },
    {
      id: "cl3y3vuh50sxj0boehyxfuo97",
      title: "Grocery Store",
      uniqueId: 8,
      description:
        "CLI based grocery store wriiten in C++ which prints bill after the shopping and uses File Handling Concepts to store and retrieve data.",
      demoLink: null,
      githubLink: "https://github.com/iamhiman/grocery-store",
      techStack: [
        {
          text: "C++",
        },
        {
          text: "All",
        },
      ],
      image: {
        url: "https://media.graphassets.com/g8zNmKSaS8WuG3zwcxk0",
      },
    },
  ];

  const skills: any[] = [
    {
      uniqueId: 1,
      skill: "C",
      id: "cl3xaypd808ha0boeta1zlnk8",
      proficient: true,
      fieldType: "Languages",
      image: {
        url: "https://media.graphassets.com/vG1ZegDSOSFqui71jKQb",
      },
      url: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    {
      uniqueId: 2,
      skill: "C++",
      id: "cl3xb0vgn08ki0boeuv9eq2d1",
      proficient: true,
      fieldType: "Languages",
      image: {
        url: "https://media.graphassets.com/staeFLKKSKK4sLXhXcbH",
      },
      url: "https://en.wikipedia.org/wiki/Cpercent2Bpercent2B",
    },
    {
      uniqueId: 3,
      skill: "JavaScript",
      id: "cl3xb84u408r70bplt1h2c6vc",
      proficient: true,
      fieldType: "Languages",
      image: {
        url: "https://media.graphassets.com/sQ6uEQTRuTpexUYrVCIA",
      },
      url: "https://en.wikipedia.org/wiki/JavaScript",
    },
    {
      uniqueId: 4,
      skill: "TypeScript",
      id: "cl3xb9ppc08un0boe7453x09a",
      proficient: true,
      fieldType: "Languages",
      image: {
        url: "https://media.graphassets.com/fWy4g0nISqOMbQhGj4eN",
      },
      url: "https://www.typescriptlang.org/",
    },
    {
      uniqueId: 7,
      skill: "Nextjs",
      id: "cl3xbn8e8097p0boef39v07r6",
      proficient: true,
      fieldType: "Frontend",
      image: {
        url: "https://media.graphassets.com/98TpDLZSDWou30OGbTfd",
      },
      url: "https://nextjs.org/",
    },
    {
      uniqueId: 5,
      skill: "React",
      id: "cl3xbfylx08zs0boea652f4gp",
      proficient: true,
      fieldType: "Frontend",
      image: {
        url: "https://media.graphassets.com/CDnSYAYHQLmVLCix0mc0",
      },
      url: "https://reactjs.org/",
    },
    {
      uniqueId: 5,
      skill: "Vue",
      id: "cl3xbfylxs08zs0boea652f4gp",
      proficient: true,
      fieldType: "Frontend",
      image: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/800px-Vue.js_Logo_2.svg.png",
      },
      url: "https://vuejs.org/",
    },
    {
      uniqueId: 6,
      skill: "Angular",
      id: "cl3xbl0nl094u0bpl6ytxv3l4",
      proficient: true,
      fieldType: "Frontend",
      image: {
        url: "https://web.dev/static/explore/angular/cover-wide.svg",
      },
      url: "https://v17.angular.io/docs",
    },
    {
      uniqueId: 6,
      skill: "Redux",
      id: "cl3xbl0nl094u0bpl6ytxv3l4",
      proficient: true,
      fieldType: "Frontend",
      image: {
        url: "https://media.graphassets.com/eBYTbBr6TjiL3QwFGpB8",
      },
      url: "https://redux.js.org/",
    },
    {
      uniqueId: 8,
      skill: "Storybook",
      id: "cl3xbpg1i09ao0bpl7n15kqcu",
      proficient: true,
      fieldType: "Frontend",
      image: {
        url: "https://media.graphassets.com/VIO1C9mT0OqnjbvTHB2L",
      },
      url: "https://storybook.js.org/",
    },
    {
      uniqueId: 9,
      skill: "React Router",
      id: "cl3xbr7cs09c20boelv6tuekf",
      proficient: true,
      fieldType: "Frontend",
      image: {
        url: "https://media.graphassets.com/sPnBXN2PTvOqcLTx14sM",
      },
      url: "https://reactrouter.com/",
    },
    {
      uniqueId: 10,
      skill: "Sass (SCSS)",
      id: "cl3xbzg7g09qo0boe9xy007wh",
      proficient: true,
      fieldType: "Frontend",
      image: {
        url: "https://media.graphassets.com/RI0hCnqnSZOxqGBYnpyn",
      },
      url: "https://sass-lang.com/",
    },
    {
      uniqueId: 15,
      skill: "Tailwind CSS",
      id: "cl3xcgk470a8r0boe3fthq8rj",
      proficient: true,
      fieldType: "UILibraries",
      image: {
        url: "https://media.graphassets.com/esurqzzPR2SHnffta0KD",
      },
      url: "https://tailwindcss.com/",
    },
    {
      uniqueId: 11,
      skill: "MUI",
      id: "cl3xc9fz909xq0bpls842bnzg",
      proficient: true,
      fieldType: "UILibraries",
      image: {
        url: "https://media.graphassets.com/N2y2n0F0TbAKs1wnjsyn",
      },
      url: "https://mui.com/",
    },
    {
      uniqueId: 12,
      skill: "Ant Design",
      id: "cl3xcc38o0a2o0boeagxh3ejm",
      proficient: true,
      fieldType: "UILibraries",
      image: {
        url: "https://media.graphassets.com/axE6VjhT1KwiR3UuBwNi",
      },
      url: "https://ant.design/",
    },
    {
      uniqueId: 13,
      skill: "Chakra UI",
      id: "cl3xcdekh0a1v0bplwdov0x7b",
      proficient: true,
      fieldType: "UILibraries",
      image: {
        url: "https://media.graphassets.com/w1aOEFM4QJeTsw9oeuxK",
      },
      url: "https://chakra-ui.com/",
    },
    {
      uniqueId: 14,
      skill: "Semantic UI React",
      id: "cl3xceskj0a6y0boeyv84sdds",
      proficient: true,
      fieldType: "UILibraries",
      image: {
        url: "https://media.graphassets.com/kPFKrzQMSnCAhwqquCdA",
      },
      url: "https://react.semantic-ui.com/",
    },
    {
      uniqueId: 16,
      skill: "Styled Components",
      id: "cl3xcj6os0ab30boem9l5ck4z",
      proficient: true,
      fieldType: "UILibraries",
      image: {
        url: "https://media.graphassets.com/mdvygiqjQyqXqUQ8Ao7V",
      },
      url: "https://styled-components.com/",
    },
    {
      uniqueId: 17,
      skill: "React Hook Form",
      id: "cl3xclrvs0adw0boeat9e6wrx",
      proficient: true,
      fieldType: "UILibraries",
      image: {
        url: "https://media.graphassets.com/DXxv71AQAGsmrrtUlhpg",
      },
      url: "https://react-hook-form.com/",
    },
    {
      uniqueId: 18,
      skill: "Jest",
      id: "cl3xcokwb0af60bpl9npzchg0",
      proficient: true,
      fieldType: "Testing",
      image: {
        url: "https://media.graphassets.com/caaOh9peTGW1zBnxMTmO",
      },
      url: "https://jestjs.io/",
    },
    {
      uniqueId: 19,
      skill: "React Testing Library",
      id: "cl3xcrpvl0aib0bplea1wc6e5",
      proficient: true,
      fieldType: "Testing",
      image: {
        url: "https://media.graphassets.com/Pkrk5IPsSG6cjHhaHaem",
      },
      url: "https://testing-library.com/",
    },
    {
      uniqueId: 20,
      skill: "Contentful",
      id: "cl3y4lo7l0u830boehzyulcvh",
      proficient: true,
      fieldType: "Headless CMS",
      image: {
        url: "https://media.graphassets.com/2SdmlPCDRm6rE2ZDdQAU",
      },
      url: "https://www.contentful.com/",
    },
    {
      uniqueId: 21,
      skill: "Strapi",
      id: "cl3y4p4l20utj0bpl6le3ayje",
      proficient: true,
      fieldType: "Headless CMS",
      image: {
        url: "https://media.graphassets.com/MdYy7BVRpSBmTVP8BIHw",
      },
      url: "https://strapi.io/",
    },
    {
      uniqueId: 22,
      skill: "Sanity",
      id: "cl3y4qwpm0uye0bplk3l9irur",
      proficient: true,
      fieldType: "Headless CMS",
      image: {
        url: "https://media.graphassets.com/AcEyUU9rR8G439VJz1CC",
      },
      url: "https://www.sanity.io/",
    },
    {
      uniqueId: 23,
      skill: "GraphCMS",
      id: "cl3y4s8vg0ulp0boej4n7g6e6",
      proficient: true,
      fieldType: "Headless CMS",
      image: {
        url: "https://media.graphassets.com/HMkI85yQ4OdrmGUD9Tuu",
      },
      url: "https://graphcms.com/",
    },
    {
      uniqueId: 24,
      skill: "Git",
      id: "cl3xcz81u0ary0boe4u2dpm42",
      proficient: true,
      fieldType: "Tools",
      image: {
        url: "https://media.graphassets.com/jv297qdRSyyrHNp7ZMpa",
      },
      url: "https://git-scm.com/",
    },
    {
      uniqueId: 25,
      skill: "Postman",
      id: "cl3xd0c1z0apw0bpl0ra9rt0v",
      proficient: true,
      fieldType: "Tools",
      image: {
        url: "https://media.graphassets.com/ykUOPOOtQruvS91IvJri",
      },
      url: "https://www.postman.com/",
    },
    {
      uniqueId: 26,
      skill: "Apollo Client",
      id: "cl3xd4sax0awe0bplpkt882jc",
      proficient: false,
      fieldType: null,
      image: {
        url: "https://media.graphassets.com/NjTUi572QeC6Qvkb2CNE",
      },
      url: "https://www.apollographql.com/",
    },
    {
      uniqueId: 27,
      skill: "GraphQL",
      id: "cl3xd6iif0b1l0boeowdd250s",
      proficient: false,
      fieldType: null,
      image: {
        url: "https://media.graphassets.com/LOSOP16TN2FxH1fVZzkW",
      },
      url: "https://graphql.org/",
    },
    {
      uniqueId: 28,
      skill: "Firebase",
      id: "cl3xd8jkb0b300bpl6c5dsl10",
      proficient: false,
      fieldType: null,
      image: {
        url: "https://media.graphassets.com/dy1ZIzE2RlratcMGHw1s",
      },
      url: "https://firebase.google.com/",
    },
    {
      uniqueId: 29,
      skill: "Express",
      id: "cl3xd9lmy0b570bpl4xe6d7v9",
      proficient: false,
      fieldType: null,
      image: {
        url: "https://media.graphassets.com/KZO8vVSTwKtws0t3F0K4",
      },
      url: "https://expressjs.com/",
    },
    {
      uniqueId: 30,
      skill: "Gulp",
      id: "cl3xdaorc0b7b0bpl7mvyb267",
      proficient: false,
      fieldType: null,
      image: {
        url: "https://media.graphassets.com/7SBAXUu2R2m2hncADccb",
      },
      url: "https://gulpjs.com/",
    },
    {
      uniqueId: 31,
      skill: "PHP",
      id: "cl3xdbrnk0b8h0boeexayrv8w",
      proficient: false,
      fieldType: null,
      image: {
        url: "https://media.graphassets.com/MeGYrbYkTHWqlGdO6v2i",
      },
      url: "https://www.php.net/",
    },
    {
      uniqueId: 32,
      skill: "MySQL",
      id: "cl3xddaor0bbx0bplh61iwgeo",
      proficient: false,
      fieldType: null,
      image: {
        url: "https://media.graphassets.com/qvkB3c1UTi66mI5yfRz8",
      },
      url: "https://en.wikipedia.org/wiki/MySQL",
    },
    {
      uniqueId: 33,
      skill: "Chart Js",
      id: "cl3y5duj10w160bpln2ezm8i9",
      proficient: true,
      fieldType: "UILibraries",
      image: {
        url: "https://media.graphassets.com/ZhM8LTzdRPCyjnXMiswK",
      },
      url: "https://www.chartjs.org/",
    },
  ];

  return {
    props: {
      jobs,
      projects,
      skills,
    },
    revalidate: 10,
  };
};
