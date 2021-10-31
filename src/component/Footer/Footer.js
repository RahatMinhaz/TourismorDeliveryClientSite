import { faFacebookSquare, faInstagramSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="left-container text-start">
                <div className="icons-container d-flex text-center ">
                    {/* Social Media Icon */}
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                  
                </div>
                    {/* Details and Contact Info */}
                
              </div>
            </div>
            <div className="col-lg-4">
            <h2>Pizza Paradise</h2>
              <div className="right-footer-container">  
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </div>
                  <div>
                    <h5>+880 15 2633 2548</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faMapMarker} />
                  </div>
                  <div>
                      {/* Address */}
                      
                    <p>
                        Road- 16, House- 05, Sector- 03
                      <br /> Uttara,Dhaka
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
            <p className="mt-5">
                  <small>Zemez © . All rights reserved.</small>
                </p>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Footer;