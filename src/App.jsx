import "./App.css";
import Porfile from "./assets/photo.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div className="max-w-4xl m-auto relative">
      <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Jayakarthikkumar Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                    PROJECTS
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">
                    TECHNOLOGIES
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer">
                   ABOUT ME
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm Jayakarthikkumar RD,</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">Fullstack developer</h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                Passionate Full Stack Developer with OOPs
 proficiency, excelling in freelancing to deliver
 precise web solutions. Committed to enhancing
 project efficiency and success by leveraging the
 distinctive Agile Methodology
                </p>
                <button 
  className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
  onClick={() => window.open('https://drive.google.com/file/d/1p7qRk4SMXcg4oGVq4rVPuzrCXCWUiKv0/view?usp=drivesdk')}
>
  Download Resume
</button>

              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px]" />
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
  <div className="container m-auto px-4 sm:py-12">
    <h2 className="text-2xl font-semibold">PROJECTS</h2>
    <div className="flex flex-col sm:flex-row gap-10 mt-11">
      <div className="border border-gray-500 rounded-md p-5 flex-1">
        <img src={Project4} className="w-full h-auto" />
        <h3 className="text-2xl font-semibold mt-8">
        VETRANS OUTREACH APP
        </h3>
        <p className="text-gray-400 text-sm mt-2">
        Manage Veterans Affairs in One place, access Faq to
provide quick & accurate responses, manage& track stock
levels for critical supplies and services for veterans , keep
up to date with the latest policy changes & documents.React js, Node js, Bootstrap,AWS S3, Express js, MongoDB.
        </p>
        <div className="flex mt-12 gap-2">
          {/* <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
            Live preview
          </button> */}
          <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
          onClick={() => window.open('https://github.com/JayaKarthikkumar/')}
          >
            Checkout github
          </button>
        </div>
      </div>
      <div className="border border-gray-500 rounded-md p-5 flex-1">
        <img src={Project2} className="w-full h-auto" />
        <h3 className="text-2xl font-semibold mt-8">
        BUS TICKETING 
        </h3>
        <p className="text-gray-400 text-sm mt-2">
        Bus-Ticketing-UI is a front-end application designed to facilitate bus ticket bookings. This project provides users with
         an intuitive interface to search for bus routes, select seats, and make reservations.
         React.js, Redux, React Router, Axios, Bootstrap, Node.js, Express.js, MongoDB, JSON Web Tokens (JWT).
        </p>
        <div className="flex gap-2 mt-12">
          {/* <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
            Live preview
          </button> */}
          <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
          onClick={() => window.open('https://github.com/JayaKarthikkumar/Bus-Ticketing-UI')}
          >
            Checkout github
          </button>
        </div>
      </div>
      <div className="border border-gray-500 rounded-md p-5 flex-1">
        <img src={Project1} className="w-full h-auto" />
        <h3 className="text-2xl font-semibold mt-8">
          ASSET PRO
        </h3>
        <p className="text-gray-400 text-sm mt-2">
        AssetPro is a front-end web application designed to manage assets and resources effectively. It features a clean and interactive user interface for navigating various sections
         such as dashboards, employee management, asset tracking, and department details.
          React.js, React Router, Context API, CSS, Bootstrap, Node js, PostgresSQL.
        </p>
        <div className="flex gap-4 mt-12">
          {/* <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
            Live preview
          </button>  */}
          <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
           onClick={() => window.open('https://github.com/JayaKarthikkumar/AssetPro-UI')}
          >
            Checkout github
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">JAVA SCRIPT</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                  CSS & Bootstrap
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React.js</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Redux</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[60%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Node.js</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">PostgresSQL</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[65%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Mongo DB</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Netlify
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Firebase
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Postman
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Diagramplus
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Swagger Ui
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Word Press
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2017</h3>
                <p>
                I completed my 10th standard at The AVS Matriculation School with a score of 82%.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2019</h3>
                <p>
                I completed my 12th standard at JKKN Matric Hr Sec School with a score of 62%.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                <p>
                I completed my Bachelor's degree in Computer Science and Engineering under Anna University in 2023, achieving a CGPA of 7.95.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>
                In 2023, after completing my exams, I joined Command HQ. I also had an internship during my college days. I am very interested in creating web applications, so I have chosen this as my career.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2025</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
  <a href="https://www.linkedin.com/in/jaya-karthik-kumar-rd-15a255253/" target="_blank" rel="noopener noreferrer">
    <img src={LinkedIn} className="w-5" alt="LinkedIn" />
  </a>
</li>

              <li>
                <a>
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  );
}

export default App;
