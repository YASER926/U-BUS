import React from "react";
import profilePic from "../images/prague-hop-on-hop-off-map.jpg"

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.

const LandingSection = () => (
  <div style={{height: '100%', width: '100%', margin: '10% 0px 0px 0px'}}>
    <img src={profilePic} alt="Logo" width={"100%"} height={"100%"} />
  </div>
  
);

export default LandingSection;
