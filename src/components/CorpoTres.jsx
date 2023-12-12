import './Corpo.css'
import FoneBranco from '../assets/fone_branco.jpg';
import MulherFone from '../assets/mulher_dois.png';

function CorpoTres(){

    return(
    <section className="box_three">
            <div className='box_cpthree'>
                <div className='text_one'>
            <div>
                <h2 className='title_cpthree'>The sound of</h2>
                <h2 className='title_cpthree'>the studio</h2>
                <p className='text_cpthree space'>Beats Pro Over-Ear Headphones are made for heavy-duty use in the studio or in the club. Delivering superb audio, Beats Pro headphones give you deep bass response and sound across the spectrum. </p>
                </div>
            </div>
                <div className='imagePhoneWithe'>
                        <img src={FoneBranco} alt="" />
                </div>

                <div className='text_two'>
                        <p>That's because they use no amplification or noise cancellation circuitry that adds other frequencies, colours the sound or compromises bass response.</p>
                    <div className='img_text_two'>
                        <img src={MulherFone} alt="Mulher de fone branco" />
                    </div>
                </div>
            </div>
    </section>
    
   )
}

export default CorpoTres