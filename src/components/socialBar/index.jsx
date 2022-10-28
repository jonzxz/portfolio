import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.svg';
import mail from '../../assets/mail.png'
import resume from '../../assets/resume.png'
import SocialsIcon from './socialIcons/'
import ResumeDoc from '../../assets/JonathanKerk.pdf'
import './index.css'

const SocialsBar = () => {
  return (
      <div className="socialbar-background socialbar-pos">
        <SocialsIcon src={linkedin} href="https://linkedin.com/in/jonathan-kerk" name="Linkedin"></SocialsIcon>
        <SocialsIcon src={github} href="https://github.com/jonzxz" name="Github"></SocialsIcon>
        <SocialsIcon src={mail} href="mailto:contact@jonathankerk.com" name="Email"></SocialsIcon>
        <SocialsIcon src={resume} href={ResumeDoc} name="Resume"></SocialsIcon>
      </div>
  )
}

export default SocialsBar;