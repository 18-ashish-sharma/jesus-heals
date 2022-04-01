/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card } from "react-bootstrap";
import Logo from "../images/cut.ico";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue, sw 54321, chandigarh</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210 0</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>kaushalprashansa@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src={Logo} className="img-fluid" alt="logo" />
                  </a>
                  <br />
                  <h4>Jesus Heals Physiotherapy</h4>
                </div>
                <div className="footer-text">
                  <p>
                    Recovery is indeed a manifestation of the law of nature,
                    efforts of patient and guidance from physical therapist or
                    rehabilitation specialist.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#">
                    <img
                      style={{
                        width: "36px",
                        height: "36px",
                        marginLeft: "5px",
                      }}
                      src="https://st3.zoom.us/static/94172/image/new/home/IconInstagram.png"
                      alt="Instagram"
                    />
                  </a>
                  <a href="#">
                    <img
                    style={{
                      width: "36px",
                      height: "36px",
                      marginLeft: "5px",
                    }}
                      src="https://st1.zoom.us/static/94172/image/new/home/IconFacebook.png"
                      alt="Facebook"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <Card className="caring" style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Hours</Card.Title>
                    <Card.Text>
                      Mon, Wed, Thursday
                      <br />
                      8am -7pm
                      <br />
                      Tuesday: 8am - 5pm
                      <br />
                      Friday: 8am - 5pm
                      <br />
                      Sat, Sun: Closed
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
