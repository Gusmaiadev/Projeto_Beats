import './Corpo.css'
import Logo from '../assets/logo_beats.png';
import Fone from '../assets/fone.png';

function Corpo(){

    return(
    <section className="box_one">

        <div className='text_beats'>
        <div className='icon_beats'>
                <img className='logo_beats' src={Logo} alt="Logo Beats" />
        </div>

        <div className='text_explication'>
               <div className='box_text'>
                    <h2 className='title_review'>Beats Solo 3</h2>
                    <h2 className='title_review'>Wireless</h2>
                    <h2 className='title_review'>Headphone Review</h2>
                    <p className='paragraph space'>Live the wireless life with our latest additions to</p>
                    <p className='paragraph'>the Beats family. This is Wireless Remastered.</p>
                </div>
                
        </div>
        </div>

        <div className='phone_beats'>
                <img className='fone_pink' src={Fone} alt="Fone rosa beats" />
        </div>  
    </section>
    
   )
}

export default Corpo