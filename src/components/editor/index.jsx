import './index.css'
import JobExperience from '../jobExperience'
import Education from '../education'
import ExecutiveSummary from '../executiveSummary'

const Editor = (props) => {

  function switchPage() {
    console.log('IN SWITCH ' + props.currentEditor)
    switch(props.currentEditor) {
      case 'JobExperience':
        return <JobExperience/>
      case 'ExecutiveSummary':
        return <ExecutiveSummary/>
      case 'Education':
        return <Education/>
      default:
        // TODO: what to put here
        return <JobExperience/>
    }
  }

  return (
    <div className="editor-background editor-pos">
      {switchPage()}
    </div>
  )
}

export default Editor;