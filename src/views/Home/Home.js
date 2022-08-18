import { useState } from "react";
import './Home.css';

export default function Home() {
  const [Mobile, setMobile] = useState(false);
  const Navbar = () => {

    return (
      <>
        <header className="header">
          <div className="container d_flex">
            <div className="youfundrlogo">
              <h2>YouFundR</h2>
            </div>
            <div className="links">
              <ul
                className={
                  Mobile ? "nav-links-mobile" : "link f_flex uppercase"
                }
                onClick={() => setMobile(false)}
              >
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Prototype</a>
                </li>
                <li>
                  <button className="btn1">Connect</button>
                </li>
              </ul>

              <button className="toggle" onClick={() => setMobile(!Mobile)}>
                {Mobile ? (
                  <i className="fas fa-times close home-btn"></i>
                ) : (
                  <i className="fas fa-bars open"></i>
                )}
              </button>
            </div>
          </div>
        </header>
      </>
    );
  };
  const Hero = () => {
    return (
      <>
        <section className='hero' id='home'>
          <div className='container f_flex top'>
            <div className='left top'>
              <h3>WELCOME TO ORGANIC FUNDING</h3>
              <h1>
                Hi, We're <span>YOUFUNDR</span>
              </h1>
              <h2>
                INVESTING IN 
                <span>
                  {/* <Typewriter words={[" PEOPLE.", " DAOS.", " PROTOCOLS"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} /> */}
                </span>
              </h2>
  
              <p>We're a platform that allows individuals and communities to raise the needed capital they need to conquer the world, Our mission is simple, put the money back into the hands of the people</p>
  
              <button className="btn2">Get started</button>
  
              <div className='hero_btn d_flex'>
                <div className='col_1'>
                  <h4>FIND US AT</h4>
                  <div className='button'>
                    <button className='btn_shadow'>
                    <a href="https://github.com/youFundr"><i class="fa-brands fa-github"></i></a>
                    </button>
                    <button className='btn_shadow'>
                    <a href="https://twitter.com/YouFundR"><i class="fa-brands fa-twitter"></i></a>
                    </button>
                    <button className='btn_shadow'>
                      <i class='fab fa-linkedin-in'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </>
    )
  }
  return <>
   <Navbar></Navbar>;
   <Hero></Hero>
  </>
  
}
