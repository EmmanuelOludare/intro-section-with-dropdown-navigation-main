import logo from '../images/logo.svg'
import menuBar from '../images/icon-menu.svg'
import arrowUp from '../images/icon-arrow-up.svg'
import arrowDown from '../images/icon-arrow-down.svg'
import toDoIcon from '../images/icon-todo.svg'
import calendarIcon from '../images/icon-calendar.svg'
import remindersIcon from '../images/icon-reminders.svg'
import planningIcon from '../images/icon-planning.svg'

const LogoNavigation = () => {
  return (
    <div className="LogoNavigation">
      <img src={logo} alt="logo" className="logo" />
      <img src={menuBar} alt="menu" className="menuBar" />
      <sidebar className="sidebar-nav">
        <ul className="sitemap__headings">
          <li className="sitemap">
            <div className="sitemap__heading">
              <h4>Features</h4>
              <img src={arrowDown} alt="arrow" className="arrow"/>
            </div>
            <ul className="sitemap__subheadings">
              <li><img src={toDoIcon} alt="todo-icon" className="todo-icon"/></li>
              <li><img src={calendarIcon} alt="calendar-icon" className="calendar-icon"/></li>
              <li><img src={remindersIcon} alt="reminders-icon" className="reminders-icon"/></li>
              <li><img src={planningIcon} alt="planning-icon" className="planning-icon"/></li>
            </ul>
          </li>

          <li className="sitemap">Company</li>
          <li className="sitemap">Careers</li>
          <li className="sitemap">About</li>
        </ul>
        <div className="ctas">
          <p className="ctas__login cta">Login</p>
          <p className="ctas__register cta">Register</p>
        </div>
      </sidebar>
    </div>
  )
}

export default LogoNavigation