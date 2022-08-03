
import React, { useRef, Fragment } from 'react';
import home from "../style/home.css"
import emailjs from 'emailjs-com';
import swal from 'sweetalert';


 const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_amr72gl', 'template_866dcif', form.current, '1pZTKTDwtgHdKTI5K')
        .then((result) => {
            console.log(result.text);
            swal("Email!", " successfully sent", "success");
           // esperar segundos para recarregar a pagina
              setTimeout(() => { window.location.reload()}, 5000);
        }, (error) => {
            console.log(error.text);
            swal("Erro!");
        });
    };
  
    return (

      <div className="contactus" id="contactus">
         <h1 className="title">Contact Us</h1>
         
         <div className="form_input">
         <div className="form_wrapper">
            <form ref={form} onSubmit={sendEmail}>
            <div className="form_input"> 
            <input type="email" name="user_email" placeholder="Email" />
            </div>
            <div className="form_input">
            <input type="text" name="user_name" placeholder="Nome" />
            </div>
            <div className="form_input"> 
            <textarea name="message" placeholder="message"/>
            </div>
            <div class="btn">
            <input className='send' type="submit" value="Send" />
            </div>
            </form> 
            </div>
         </div>
      </div>

    );
  };

function Home() {

    return (
      <div className="App">
        <header className="App-header">
                    <div className="main_container" id="home">
                <div className="navbar">
                    <div className="logo">
                    <img className="log" src="https://cdn.discordapp.com/attachments/639869522387664896/989943149872955422/logo-encina-PPRT22222.png" alt="" />
                        <a className='text' href="#"> Encina Transporte</a>
                    </div>
                    <div className="navbar_items">
                        <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="#about">about</a></li>
                            <li><a href="#services">services</a></li>
                            <li><a href="#contactus">contact</a></li>

                        </ul>
                    </div>
                </div>

                <div className="banner_image">
                    <div className="banner_content arv_img">
                        <img src="https://cdn.discordapp.com/attachments/639869522387664896/989943149872955422/logo-encina-PPRT22222.png" alt="" srcset="" />
                        <h1>Todas suas entregas.<br/>
                            <span>Em um so lugar.</span>
                        </h1>
                        <p></p>
                    </div>
                </div>

                <div className="about" id="about">
                    <div className="loop-wrapper">
                            <div className="truck"></div>
                        <div className="mountain"></div>
                        <div className="hill"></div>
                        <div className="tree"></div>
                        <div className="tree"></div>
                        <div className="tree"></div>
                        <div className="rock"></div>
                        <div className="truck"></div>
                        <div className="wheels"></div>
                    
                    </div>
                    <br /><br />
                    <h1 className="title">About us </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam labore quos quam, tempora recusandae nemo laudantium, ad vitae vel repellendus dolores placeat. Velit distinctio natus, facilis quia! Voluptas nam, animi quidem doloremque mollitia accusamus voluptatum quos totam consequatur. Temporibus rerum recusandae nobis vel architecto beatae esse facilis repellat. Et repellat similique ad ab harum doloribus dolorum. Iste suscipit blanditiis vero qui aliquid omnis quasi, delectus vel adipisci et ratione maiores soluta facilis earum voluptate.</p>
                    
                </div>

                <div className="services" id="services">
                    <h1 className="title">Services</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsum neque, nobis ratione vitae eum quibusdam quidem culpa dolorum autem sequi. Rem at beatae debitis.</p>

                    <div className="diff_services">
                        <div className="diff_service_item">
                            <img src="https://cdn.discordapp.com/attachments/639869522387664896/989949325876547675/logistica4.jpg" alt="" />
                            <h3>imagem sobre algo</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, blanditiis.</p>
                        </div>
                        <div className="diff_service_item">
                            <img src="https://cdn.discordapp.com/attachments/639869522387664896/989949326597963847/logistica2.jpg" alt="" />
                            <h3>imagem sobre algo</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, blanditiis.</p>
                        </div>
                        <div className="diff_service_item">
                            <img src="https://cdn.discordapp.com/attachments/639869522387664896/990292107908481044/logistica1.jpg" alt="" />
                            <h3>imagem sobre algo</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, blanditiis.</p>
                        </div>
                    </div>
                </div>
                {ContactUs()}
                <div className="footer">
                    <a href="#">@ 2022 encina trasportes</a>
                </div>


            </div>

        </header>
      </div>
    );
  }
  
  export default Home;
