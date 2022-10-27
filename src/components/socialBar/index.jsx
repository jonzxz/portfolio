import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.svg';
import mail from '../../assets/mail.png'
import resume from '../../assets/resume.png'
import SocialsIcon from './socialIcons/'

const SocialsBar = () => {
  return (
      <div className="sidebar-background sidebar-pos">
        <SocialsIcon src={linkedin} href="https://linkedin.com/in/jonathan-kerk" name="Linkedin"></SocialsIcon>
        <SocialsIcon src={github} href="https://github.com/jonzxz" name="Github"></SocialsIcon>
        <SocialsIcon src={mail} href="mailto:jonathankerk@gmail.com" name="Email"></SocialsIcon>
        <SocialsIcon src={resume} href="resume.pdf" name="Resume"></SocialsIcon>
      </div>
  )
}

export default SocialsBar;