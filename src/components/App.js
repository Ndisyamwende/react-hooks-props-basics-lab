import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
       {/* Pass user data to the Home component */}
       <Home name={user.name} city={user.city} />

{/* Pass bio, github, and linkedin to the About component */}
<About
  bio={user.bio}
  github={user.links.github}
  linkedin={user.links.linkedin}
/>
    </div>
  );
}

export default App;
