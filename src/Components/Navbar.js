import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items p-3 mt-3">
            <li className="nav-item btn btn-outline-dark">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Welcome
              </Link>
            </li>
            <li className="nav-item btn btn-outline-dark">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About me
              </Link>
            </li>
            <li className="nav-item btn btn-outline-dark">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Teaching Experience
              </Link>
            </li>
            <li className="nav-item btn btn-outline-dark">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Research experience
              </Link>
            </li>
            <li className="nav-item btn btn-outline-dark">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Research grants
              </Link>
              </li>

              <li className="nav-item btn btn-outline-dark">
              <Link
                activeClass="active"
                to="section6"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Publications
              </Link>

            </li>
            <li className="nav-item btn btn-outline-dark">
              <Link
                activeClass="active"
                to="section7"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Blog Articles
              </Link>


            </li>
            <li className="nav-item btn btn-outline-dark">
              <Link
                activeClass="active"
                to="section8"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Presentations and lectures
              </Link>


            </li>
            <li className="nav-item btn btn-outline-dark">
              <Link
                activeClass="active"
                to="section9"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Professional development
              </Link>


            </li>
            <li className="nav-item btn btn-outline-dark">
              <Link
                activeClass="active"
                to="section10"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CV & IELTS
              </Link>


            </li>

          </ul>
        </div>
      </nav>
    );
  }
}
