import SocialsBar from "./components/socialBar"
import NavigationBar from "./components/navBar"
import Editor from "./components/editor"
import {useState} from 'react'

const Main = (props) => {
  const [currentEditor, setCurrentEditor] = useState("") 
  return (
    <div>
      <SocialsBar/>
      <NavigationBar setCurrentEditor={setCurrentEditor}/>
      <Editor currentEditor={currentEditor}/>
    </div>
  )
}

export default Main;