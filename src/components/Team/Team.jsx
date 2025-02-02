import React from "react";
import "./Team.css";
import { teams } from "../../data";
import { Link } from "react-scroll";

const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <h1 className="title">
          Our <span className="g-text">Teams</span>
        </h1>
        <p className="text__muted description">
          Meet our diverse team of creative minds and strategists - the driving force behind every project's success.
        </p>
        <div className="team__container">
          {teams.map((team, index) => (
            <div className="team__card" key={index}>
              <div className="profile__container">
                <img src={team.profile} alt={team.name} />
              </div>
              <div className="details">
                <h3>{team.name}</h3>
                <p className="text__muted">{team.title}</p>
              </div>
              <div className="social__container">
                {team.social.map((list, i) => (
                  <Link key={i} to={list.url} target="_blank" className="icon__container">
                    {list.icon}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
