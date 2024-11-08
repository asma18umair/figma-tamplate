// src/app/page.tsx
import Image from 'next/image';

import 'animate.css/animate.min.css'; // Updated import statement

export default function Page() {
  return (
    
    <div className=" bg-yellow-300 ">
      <div className=" section">
        <nav className="navbar navbar-expand-lg text-black">
          <div className="">
            <div className=" navbar">
           
              <nav className= " bg-yellow-900 w-100 p-4">
            <div className="container-fluid mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-lg">
                <a className="navbar-brand me-5" href="#">
                <h1 className="animate__animated animate__backInLeft">
                  <Image className = "w-30 h-20 transition-transform duration-300 transform hover:scale-110"
                    src="/images/SiteLogo.png"
                    alt="Site Logo"
                   
                    width={200} // Adjust width as needed
                    height={100} // Adjust height as needed
                  />
                </h1>
              </a> 
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-white hover:bg-yellow-700 p-2 rounded">Home</a>
                    <a href="#" className="text-white hover:bg-yellow-700 p-2 rounded">About</a>
                    <a href="#" className="text-white hover:bg-yellow-700 p-2 rounded">Services</a>
                    <a href="#" className="text-white hover:bg-yellow-700 p-2 rounded">Contact</a>
                </div>
                <div className="md:hidden">
                    <button id="menu-btn" className="text-white focus:outline-none">
                        &#9776; {/* Hamburger Icon */}
                    </button>
                </div>
            </div>
            <div id="mobile-menu" className="md:hidden bg-blue-600 hidden">
                <a href="#" className="block text-white hover:bg-blue-700 p-2">Home</a>
                <a href="#" className="block text-white hover:bg-blue-700 p-2">About</a>
                <a href="#" className="block text-white hover:bg-blue-700 p-2">Services</a>
                <a href="#" className="block text-white hover:bg-blue-700 p-2">Contact</a>
            </div>
        </nav>
              {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className=" navbar-nav mb-2 mb-lg-0 ms-auto">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Gallery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ms-auto" href="#">
                      <Image
                        src="/images/button1.png"
                        alt="Button Image"
                        className="img-fluid"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Image
                        src="/images/social1.png"
                        alt="Social Image 1"
                        className="img-fluid"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src="/images/social2.png"
                        alt="Social Image 2"
                        className="img-fluid"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                      <Image
                        src="/images/social.png"
                        alt="Social Image 3"
                        className="img-fluid"
                        width={30} // Adjust width as needed
                        height={30} // Adjust height as needed
                      />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </nav>
        <div className="container align-items-center">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 col-md-12 col-sm-12">
              <h1 className='flex justify-center items-center  text-6xl mt-5 animate__animated animate__lightSpeedInRight'>Give robots a second chance</h1>
              <p className='mt-5 animate__animated animate__backInLeft'>
                We save 1 million robots from destruction every year and find a new home for them. Let's save
                the robots! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sit nisi eum culpa laboriosam aliquam consectetur. Impedit provident similique quas doloremque dolor rem minima quae id cupiditate perferendis, qui vero!
              </p>
              <button type="button" className="hover:bg-yellow-900 btn btn-warning btn-sm rounded-pill">
                <Image 
                  src="/images/button.png"
                  alt="Get Started Button"
                  className="  img-fluid animate__animated animate__bounce"
                  width={200}
                  height={100} 
                />
              </button>
            </div>
            <div className="flex justify-center items-center h-screen col-12 col-lg-6 col-md-12 col-sm-12">
              <Image
                src="/images/robot.png"
                className="img-fluid animate__animated animate__lightSpeedInRight"
                alt="Robot Image"
                width={500} // Adjust width as needed
                height={500} // Adjust height as needed
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
