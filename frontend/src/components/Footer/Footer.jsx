import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer d-flex">
      <Container>
        <Row>
          <Col lg="5">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                “Travel is the only thing you buy that makes you richer”. We
                have been selling beautiful experiences for years through our
                state-of-the-art designed holiday packages and other essential
                travel services.
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="2" md="3">
            <h5 className="footer__link-title mb-4 ">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="2" md="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="5">
            <h5 className="footer__link-title ">Contact</h5>
            <ul className="contact-info ">
              <li>
                <i className="ri-map-pin-line"></i> Address: Bangalore, India
              </li>
              <li>
                <i className="ri-mail-line"></i> Email: bharath@gmail.com
              </li>
              <li>
                <i className="ri-phone-fill"></i> Phone: 7899676257
              </li>
            </ul>
          </Col>
          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {year}, design and develop by Bharath. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
