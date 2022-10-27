import SocialsBar from "./components/socialBar"
import NavigationBar from "./components/navBar"
import TabBar from "./components/tabBar"
import Editor from "./components/editor"
import {useState} from 'react'

const Main = () => {
  const items = ["README.md", "ExecutiveSummary.md", "Qualifications.md", "JobExperience.md", "Contact.md"]
  const [selected, setSelected] = useState("README.md")
  const [currentEditor, setCurrentEditor] = useState("") 
  const [currentTabs, setCurrentTabs] = useState(["README.md"])
  return (
    <div>
      <SocialsBar/>
      <NavigationBar setCurrentEditor={setCurrentEditor} setCurrentTabs={setCurrentTabs} currentTabs={currentTabs} items={items} selected={selected} setSelected={setSelected}/>
      <TabBar setCurrentEditor={setCurrentEditor} currentTabs={currentTabs} setCurrentTabs={setCurrentTabs} selected={selected} setSelected={setSelected}/>
      <Editor currentEditor={currentEditor}/>
    </div>
  )
}

export default Main;