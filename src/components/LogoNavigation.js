import { useState,useRef } from "react"
import logo from '../images/logo.svg'
import openMenuBar from '../images/icon-menu.svg'
import closeMenuBar from '../images/icon-close-menu.svg'
import arrowDown from '../images/icon-arrow-down.svg'
import toDoIcon from '../images/icon-todo.svg'
import calendarIcon from '../images/icon-calendar.svg'
import remindersIcon from '../images/icon-reminders.svg'
import planningIcon from '../images/icon-planning.svg'

const LogoNavigation = (props) => {

  const [displayOne,setDisplayOne] = useState('none');
  const [displayTwo,setDisplayTwo] = useState('none');
  const sitemap__subheadings_one = useRef(null);
  const sitemap__subheadings_two = useRef(null);

  const [arrowRotateOne,setArrowRotateOne] = useState('rotate(0deg)');
  const [arrowRotateTwo,setArrowRotateTwo] = useState('rotate(0deg)');
  const arrow_one = useRef(null);
  const arrow_two = useRef(null);

  const [sideBarSlide,setSideBarSlide] = useState('translateX(100%)');
  const sidebar_nav = useRef(null);


  const openCloseOne = () => {
    if (sitemap__subheadings_one.current.style.display === 'none') {
      setDisplayOne('flex');
      setArrowRotateOne('rotate(180deg)');
    }else{
      setDisplayOne('none');
      setArrowRotateOne('rotate(0deg)');
    }
  };

  const openCloseTwo = () => {
    if (sitemap__subheadings_two.current.style.display === 'none') {
      setDisplayTwo('flex');
      setArrowRotateTwo('rotate(180deg)');
    }else{
      setDisplayTwo('none');
      setArrowRotateTwo('rotate(0deg)');
    }
  };

  const openSidebarNav = () => {
    setSideBarSlide('translateX(0%)');
    props.openOverlay();
  };

  const closeSidebarNav = () => {
    setSideBarSlide('translateX(100%)');
    props.closeOverlay();
  };

  return (
    <div className="LogoNavigation">
      <div className="LogoNavigation-container">
        <img src={logo} className="logo" />
        <img src={openMenuBar} className="openMenuBar" onClick={openSidebarNav} />
      </div>
      <sidebar className="sidebar-nav" ref={sidebar_nav} style={{transform:sideBarSlide}} >
        <div className="closeMenu-container"><img src={closeMenuBar} alt="menu-close" className="closeMenuBar" onClick={closeSidebarNav}/></div>

        <ul className="sitemaps">

          <li className="sitemap">

            <div className="sitemap__heading" onClick={openCloseOne}>
              <p>Features</p>
              <img src={arrowDown} className="arrow" style={{transform:arrowRotateOne}}/>
            </div>

            <ul className="sitemap__subheadings" style={{display:displayOne}} ref={sitemap__subheadings_one} >
              <li className="sitemap__subheading"><img src={toDoIcon} className="todo-icon"/><a href="#" className="sitemap__subheading-text">Todo List</a></li>
              <li className="sitemap__subheading"><img src={calendarIcon} className="calendar-icon"/><a href="#"  className="sitemap__subheading-text">Calendar</a></li>
              <li className="sitemap__subheading"><img src={remindersIcon} className="reminders-icon"/><a href="#"  className="sitemap__subheading-text">Reminders</a></li>
              <li className="sitemap__subheading"><img src={planningIcon} className="planning-icon"/><a href="#" className="sitemap__subheading-text">Planning</a></li>
            </ul>

          </li>

          <li className="sitemap">
            <div className="sitemap__heading" onClick={openCloseTwo}>
                <p>Company</p>
                <img src={arrowDown} className="arrow" ref={arrow_two} style={{transform:arrowRotateTwo}} />
            </div>

            <ul className="sitemap__subheadings"  style={{display:displayTwo}} ref={sitemap__subheadings_two} >
              <li className="sitemap__subheading"><a href="#"  className="sitemap__subheading-text">History</a></li>
              <li className="sitemap__subheading"><a href="#"  className="sitemap__subheading-text">Our Team</a></li>
              <li className="sitemap__subheading"><a href="#"  className="sitemap__subheading-text">Blog</a></li>
            </ul>

          </li>

          <li className="sitemap"><p><a href="#">Careers</a></p></li>
          <li className="sitemap"><p><a href="#">About</a></p></li>
        </ul>
        <div className="ctas">
          <button className="ctas__login cta">Login</button>
          <button className="ctas__register cta">Register</button>
        </div>
      </sidebar>
    </div>
  )
}

export default LogoNavigation