import React from 'react';
import './Footer.css';
import { Link } from 'react-scroll';
import Logo from '../Logo';
import {footer} from '../../data'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          {
            footer.map((link, index) => (
              <div className="column" key={index}>
                <h3 className="routes__name">{link.group}</h3>
                <div className="routes__container">
                  {
                    link.routes.map((route, index) => (
                      <Link className="route__item" to={route.id} key={index}>
                        <p className="name">{route.name}</p>
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))
          }

          <div className="column">
            <div className="new">
              <Logo />
              <div className="newsletter">
                <h3>Get weekly updates</h3>
                <div className="control__container">
                  <input type="email" className="control" placeholder="Enter your email" />
                  <button className="btn">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <h3>Copyright &copy; All rights reserved - 2025</h3>
          <p className="text__muted">Built with love by Leen Odeh</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
