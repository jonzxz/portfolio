import './index.css'

const SocialsIcon = (props) => {
  return (
    <div>
      <a href={props.href} target="_blank" rel="noreferrer" title={props.name}>
        <img className="icon" src={props.src} alt=""></img>
      </a>
    </div>
  )
}

export default SocialsIcon;