import  './index.css'

const NavigationItem = (props) => {

  return (
    <div className="navitem">
      <button className={props.selected == props.title ? "navbutton selected" : "navbutton"} onClick={props.handleClick}>{props.title}</button>
    </div>
  )
}

export default NavigationItem;