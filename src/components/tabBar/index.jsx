import TabItem from "./tabItem"
import './index.css'
import '../../css/utils.css'
import {useReducer} from  'react'

const TabBar = (props) => {
  let items = props.currentTabs
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const populateTabBar = () => {
    const handleClick = (item) => {
      props.setCurrentEditor(item)
      props.setSelected(item)
    }
  
    const handleClose = (item) => {
      for (let i = 0; i < props.currentTabs.length;  i++) {
        if (props.currentTabs[i] == item) {
          props.currentTabs.splice(i, 1)
          props.setCurrentTabs(props.currentTabs)
          if (props.currentTabs.length > 0) {
            props.setCurrentEditor(props.currentTabs[props.currentTabs.length-1])
            props.setSelected(props.currentTabs[props.currentTabs.length-1])
          } else {
            // TODO: default behavior to open readme again if everything is closed, find better solution for this
            props.setCurrentTabs(["README.md"])
            props.setCurrentEditor("README.md")
            props.setSelected("README.md")
          }
          items = props.currentTabs
        }
      }
      forceUpdate();
    }

    return (
      <div className="tabbar-inner">
        {items.map((item, k) => (
          <TabItem key={k} title={item} handleClick={ () => handleClick(item)} handleClose={ () => handleClose(item)} selected={props.selected}/>
        ))}
      </div>
    )
  }

  return (
    <div className="tabbar-background tabbar-pos">
      {populateTabBar()}
    </div>
  )
}

export default TabBar;