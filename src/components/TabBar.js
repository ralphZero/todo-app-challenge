import sheet from './TabBar.module.css';
import { NavLink } from 'react-router-dom'



const TabBar =  () => {
  return (
      <nav className={sheet.menu+' '+sheet.indicator}>
        <NavLink exact className={sheet.menuItem} activeClassName={sheet.active} to='/'>All</NavLink>
        <NavLink className={sheet.menuItem}  activeClassName={sheet.active}  to='/active'>Active</NavLink>
        <NavLink className={sheet.menuItem}  activeClassName={sheet.active}  to='/completed'>Completed</NavLink>
      </nav>
  )    
}
export default TabBar