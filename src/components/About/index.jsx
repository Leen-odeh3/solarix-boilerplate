import React from 'react'
import './About.css'
import { company__photo } from '../../assets/index'
import { FaCheck } from 'react-icons/fa'
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about">
      <div className='container'>
        <div className="column company__photo">
          <img src={company__photo} alt="company__photo" />
        </div>

        <div className="column">
          <h3 className='sub_title'>With 7+ Years Experience</h3>
          <h1 className='sub__title'>
            Turning Your <span className='g-text'>Vision</span> into reality by focusing on the basics
          </h1>
          <p className="text_muted descriptions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fugit error, voluptas quod quidem obcaecati recusandae nulla rem, fuga ratione, blanditiis incidunt veniam similique temporibus assumenda repudiandae asperiores distinctio tenetur. </p>
          <div className='group'>
            <div className='row'>
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className='text__muted'>Consultation</p>
                <h3>Free</h3>
              </div>
            </div>

            <div className='row'>
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className='text__muted'>Exper</p>
                <h3>Engineer</h3>
              </div>
            </div>

            <div className='row'>
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className='text__muted'>Customer</p>
                <h3>Support</h3>
              </div>
            </div>

            <div className='row'>
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className='text__muted'>Quality</p>
                <h3>Service</h3>
              </div>
            </div>

            <div className="buttons__container">
              <Link to='project' smooth={true} className='btn'>Explore</Link>
              <Link to='contact' smooth={true} className='btn btn__primary'>Get a qoute</Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
