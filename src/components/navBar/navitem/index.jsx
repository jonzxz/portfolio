const NavigationItem = (props) => {

  return (
    <div className="navitem">
      <button onClick={props.handleClick}>{props.title}</button>
    </div>
  )
}

export default NavigationItem;