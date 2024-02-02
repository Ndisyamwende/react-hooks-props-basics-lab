import React from "react";
import Links from "./Links";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      {/* Use the <Links /> component and pass the github and linkedin props */}
      <Links
        github="https://github.com/your-github-username"
        linkedin="https://linkedin.com/in/your-linkedin-username"
      />
    </div>
  );
}

export default About;
