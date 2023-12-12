import './Corpo.css'
import GitHub from '../assets/Icon_GitHub.png';
import Linkedin from '../assets/icon_Linkedin.png';




function CorpoCinco(){

    return(
    <footer className='box_five'>
            <p className='text_five'>Template criado por <a href="">Nicepage</a>.</p>
            
            <div className='social'>
                <a href="https://github.com/Gusmaiadev"><img src={GitHub} alt="Logo GitHub"/></a>
                <a href="https://www.linkedin.com/in/gustavo-maia-a14908258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={Linkedin} alt="Logo Linkedin" /></a>
            </div>
    </footer>
    
   )
}

export default CorpoCinco