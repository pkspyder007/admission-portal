import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SideMenuData";

function Sidebar() {
  const [sidebar, setSidebar] = useState(
    window.innerWidth > 600 ? true : false
  );

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      
      <div className="sidebar">
        {window.innerWidth < 600 && (
          <a className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </a>
        )}
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" >
            {window.innerWidth < 600 && (
              <li className="sidebar-toggle">
                <a className="menu-bars" onClick={showSidebar}>
                  <AiIcons.AiOutlineClose />
                </a>
              </li>
            )}

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <span>
                   {item.icon}
                    <span>{item.title}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      
    </>
  );
}

export default Sidebar;
