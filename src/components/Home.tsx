import React from "react";
import "./Home.css";

interface HomeProps {
  title: string;
  subtitle: string;
  heroImage: string;
}

const Home: React.FC<HomeProps> = ({ title, subtitle }) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="hero-element">
          {title && <h1 className="hero-title">{title}</h1>}
          {subtitle && <h1 className="hero-subtitle">{subtitle}</h1>}
        </div>
      </div>
    </div>
  );
};

export default Home;
