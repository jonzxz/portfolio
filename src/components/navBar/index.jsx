import NavigationItem from "./navitem";
import './index.css'
import '../../css/utils.css'

const NavigationBar = (props) => {
  
  const populateNavBar = () => {
    let items = props.items
    
    const handleClick = (item) => {
      props.setCurrentEditor(item)
      props.setSelected(item)
      if (!((Array.from(props.currentTabs)).includes(item))) {
        props.currentTabs.push(item)
      }
    }
    
    return (
      <div>
        {items.map((item, k) => (
          <NavigationItem key={k} title={item} handleClick={ () => handleClick(item)} selected={props.selected}/>
        ))}
      </div>
    )
  }
  
  return (
      <div className="navbar-background navbar-pos">
        <div className="navbar-headers unselectable">EXPLORER</div>
        <div className="navbar-headers navbar-profile unselectable">PROFILE [JONATHAN KERK]</div>
        {populateNavBar()};
      </div>
  )
}

export default NavigationBar;