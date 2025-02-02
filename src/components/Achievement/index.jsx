import React, { useState, useRef, useEffect } from 'react';
import './Achievement.css';
import { FaAward, FaDiagramProject, FaUsersLine } from 'react-icons/fa6';
import Odometer from 'react-odometerjs';
import { GiTeamIdea } from 'react-icons/gi';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Achievement = () => {
  const [clients, setclients] = useState(0);
  const [projects, setprojects] = useState(0);
  const [teams, setteams] = useState(0);
  const [awards, setawards] = useState(0);
  const container = useRef(null);

  const updatedata = () => {
    const timeout = setTimeout(() => {
      setclients(120);
      setprojects(150);
      setteams(44);
      setawards(89);
    }, 500);

    return () => clearTimeout(timeout);
  };

  const resetdata = () => {
    setclients(0);
    setprojects(0);
    setteams(0);
    setawards(0);
  };

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 4,
        onEnter: updatedata,
        onLeaveBack: resetdata,
      },
    });

    return () => {
      timeline.kill(); // cleanup the timeline when the component unmounts
    };
  }, []);

  return (
    <div className='achievement__container' ref={container}>
      <div className='container'>
        <div className='achievement'>
          <div className='icon__container'>
            <FaUsersLine />
          </div>
          <div className='details'>
            <div className='row'>
              <Odometer value={clients} className='title' />
              <h1 className='title'>K</h1>
            </div>
            <small className='text__muted'>Happy Customers</small>
          </div>
        </div>

        <div className='achievement'>
          <div className='icon__container'>
            <FaDiagramProject />
          </div>
          <div className='details'>
            <div className='row'>
              <Odometer value={projects} className='title' />
              <h1 className='title'>+</h1>
            </div>
            <small className='text__muted'>Completed Projects</small>
          </div>
        </div>

        <div className='achievement'>
          <div className='icon__container'>
            <GiTeamIdea />
          </div>
          <div className='details'>
            <div className='row'>
              <Odometer value={teams} className='title' />
              <h1 className='title'>+</h1>
            </div>
            <small className='text__muted'>Expert Workers</small>
          </div>
        </div>

        <div className='achievement'>
          <div className='icon__container'>
            <FaAward />
          </div>
          <div className='details'>
            <div className='row'>
              <Odometer value={awards} className='title' />
              <h1 className='title'>+</h1>
            </div>
            <small className='text__muted'>Awards Winning</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
