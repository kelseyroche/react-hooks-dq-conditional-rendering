import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */
    const [currentItem, setCurrentItem] = useState("Pokemon")


  let detailsToDisplay = <div>Hi, I'm a div!</div>;
  
  if (currentItem === "Profile") {
    detailsToDisplay = <Profile /> ;
  } else if (currentItem === "Photos") {
    detailsToDisplay = <Photos />
  } else if (currentItem === "Cocktails") {
    detailsToDisplay = <Cocktails />
  } else if (currentItem === "Pokemon") {
    detailsToDisplay = <Pokemon /> 
  }

  return (
    <div>
      <MenuBar  menuItemClick={setCurrentItem} currentItem={currentItem}/>
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;
