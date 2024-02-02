import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      
      {/* Display the Github link */}
      <a href={github} target="_blank" rel="noopener noreferrer">
        Github
      </a>
      
      {/* Display the LinkedIn link */}
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
  );
}

export default Links;
