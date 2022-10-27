import './index.css'
import JobExperience from '../jobExperience'
import Qualifications from '../qualifications'
import ExecutiveSummary from '../executiveSummary'
import Contact from '../contact'
import Readme from '../readme'

const Editor = (props) => {

  function switchPage() {
    console.log('IN SWITCH ' + props.currentEditor.slice(0, -3))
    switch(props.currentEditor.slice(0, -3)) {
      case 'JobExperience':
        return <JobExperience/>
      case 'ExecutiveSummary':
        return <ExecutiveSummary/>
      case 'Qualifications':
        return <Qualifications/>
      case 'Contact':
        return <Contact/>
      case 'README':
        return  <Readme/>
      default:
        return  <Readme/>
    }
  }

  return (
    <div className="editor-background editor-pos">
      {switchPage()}
    </div>
  )
}

export default Editor;