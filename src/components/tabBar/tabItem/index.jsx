import './index.css'

const TabItem = (props) => {
  return (
    <div className = {props.selected === props.title ? "tabitem selectedButton" : "tabitem"}>
      <button className="tabButton" onClick={props.handleClick}>{props.title}</button>
      <button onClick={props.handleClose}>×</button>
    </div>
  )
}

export default TabItem;