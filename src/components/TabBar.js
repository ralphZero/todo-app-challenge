import sheet from './TabBar.module.css'

const TabBar =  ({active, onChanged}) => {

  const tabs = ['All', 'Active', 'Completed'];
  const lists = tabs.map((item, index) => {
    return active === index ? (
      <li onClick={() => {onChanged(index)}} key={index} className={sheet.menuItem+' '+sheet.active}>{item}</li>
    ) : (
      <li onClick={() => {onChanged(index)}}  key={index} className={sheet.menuItem}>{item}</li>
    )
  }); 

  return (
      <nav className={sheet.menu+' '+sheet.indicator}>
        {lists}
      </nav>
  )    
}
export default TabBar