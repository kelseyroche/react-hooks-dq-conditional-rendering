import React, {useState} from "react";


function MenuBar(props) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  // const [currentItem, setCurrentItem] = useState("Pokemon")
  const menuItems = [
    {item: "Profile", icon: "user large icon"},
    {item: "Photos", icon: "photo large icon"},
    {item: "Cocktails", icon: "cocktail large icon"},
    {item: "Pokemon", icon: "themeisle large icon"}
  ]


  return (
    <div className="ui four item menu">
    {menuItems.map((menuItem) => (
        <span
          key={menuItem.item}
          className={`item ${props.currentItem === menuItem.item ? "active" : ""}`}
          // onClick = {menuItemClick(menuItem.item)}
          onClick={() => props.menuItemClick(menuItem.item)}
        >
          <i className={menuItem.icon} />
        </span>
    ))}
     
    </div>


  );
}

export default MenuBar;
