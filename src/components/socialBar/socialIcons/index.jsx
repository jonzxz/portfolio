import './index.css'

const SocialsIcon = (props) => {
  return (
    <div>
      <a href={props.href} target="_blank" title={props.name}>
        <img className="icon" src={props.src}></img>
      </a>
    </div>
  )
}

export default SocialsIcon;