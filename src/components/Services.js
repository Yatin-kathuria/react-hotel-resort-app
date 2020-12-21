import React, { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

function Services() {
  const [services, setServices] = useState([
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, natus.",
    },
    {
      icon: <FaHiking />,
      title: "Endless hiking",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, natus.",
    },
    {
      icon: <FaShuttleVan />,
      title: "free shuttle",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, natus.",
    },
    {
      icon: <FaBeer />,
      title: "strongerst beer",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, natus.",
    },
  ]);

  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {services.map((service, index) => {
          const { icon, title, info } = service;
          return (
            <article key={index} className="service">
              <span>{icon}</span>
              <h6>{title}</h6>
              <p>{info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
