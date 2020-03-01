import React   from 'react';
import NavBar  from '../components/Navbar';
import Footer  from '../components/Footer';
import { Link} from 'react-router-dom';
import $       from 'jquery';
import '../script/script.js';
import '../css/Contact.css';



class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        emptyFields: false
    }
  }


handleSubmitForm() {
  let name    = document.querySelector('.contact_input_name'),
      phone   = document.querySelector('.contact_input_phone'),
      email   = document.querySelector('.contact_input_email'),
      subject = document.querySelector('.contact_input_subject');

      // Check if all the input forms are not empty.
      if(name.value.length    !== 0  &&
         phone.value.length   !== 0  &&
         email.value.length   !== 0  &&
         subject.value.length !== 0) {
        window.location.reload();
      } else {
      // Display error message if any input is empty
        this.setState({ emptyFields: true })
      }
}


componentDidMount() {
    let headerTitle = document.querySelector('.header_big_title_one'),
        nav_contact = document.querySelector('.nav_contact');

    // Delay 1 sec to give time for font familiy to load.
      setTimeout(function() {
        headerTitle.style.opacity = '1';
      },500);

    // hightlight nav button
        nav_contact.classList.add('highlightNav');
 
    // scroll to view the contact page.
      if(window.innerWidth > 990) {
          $('body,html').animate({
            scrollTop : 430                      
           }, 500);
        } else {
          $('body,html').animate({
              scrollTop : 450                      
          }, 500);
      }
 }
 
 
  render() {
    return (
        <div>
          <NavBar />

           <div className='container-fluid contact_container m-0'>
              <div className='row justify-content-center'>
                  <div className='contact_bg col-12'>
                      
                      <div className='row'>
                         <div className='contact_first_half col-12 col-sm-9 col-md-8 col-lg-6'>
                              
                              <div className='row'>
                                 <div className='menu_nav_link'>
                                    <span><Link to={process.env.PUBLIC_URL + '/'}>Home</Link></span>
                                    <span> / Contact</span>
                                 </div>
                              </div>  
                             
                              <div classsName='row'>
                                <span className='contact_title'>Get in touch
                                </span>
                              </div>

                          <div className='row'>
                            <span className='contact_descr'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Curabitur id enim lobortis, interdum magna in, convallis nunc. 
                                In eget dui lectus. Duis varius porttitor lacinia. 
                                Mauris tempor interdum ipsum ac convallis. 
                                Donec sit amet dui tempus risus ultricies blandit. 
                              <br />
                              <br />
                                Morbi pretium dui id nisl viverra iaculis. Aliquam erat volutpat. 
                                Suspendisse quis efficitur erat. 
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
                            </span>
                          </div>
                    
                          <div className='row'>
                            <ul className='contact_lpa'>
                              <li>
                                <i className="fa fa-map-marker-alt"></i>
                                  PO Box 16122 Collins Street West Victoria 8007 Canada
                              </li>
                                 <li>
                                <i className="fas fa-mobile-alt"></i>
                                  (+48) 564-334-21-22-34, (+48) 564-334-21-22-38
                              </li>
                                 <li>
                                <i className="far fa-envelope"></i>
                                Youremail@companyname.com
                              </li>
                            </ul>
                          </div>

                          <div className='row'>
                            <div className='contact_social_icon_div col-12'>
                              <i className="fab fa-facebook-square"></i>
                              <i className="fab fa-google-plus-square"></i>
                              <i className="fab fa-twitter"></i>
                              <i className="fab fa-youtube"></i>
                              <i className="fab fa-instagram"></i>
                            </div>
                          </div>

                    </div>
                  </div>
                </div>
              </div>
        
              <div className='row justify-content-center'>
                <div className='contact_form col-12'>
                   
                    <div className='row justify-content-center'>
                      <span className='send_us_message_txt'>
                         Send Us A Message
                         <span></span>
                      </span>
                    </div>
                   
                    <div className='row justify-content-center'>
                      <span className='send_us_message_untxt'>
                        Curabitur velit sem, pulvinar posuere metus iaculis, ornare gravida risus. Donec sed erat quam.
                      </span>
                    </div>
                    
                    <div className='row justify-content-center'>
                      <div className='contact_form_wrap col-11 col-sm-9 col-md-10 col-lg-9 col-xl-8'>
                        <div className='row justify-content-center'>
                          <div className='input_half input_half_first col-12 col-sm-11 col-md-6'>
                               <div className='row justify-content-center'>
                                  <span>
                                    <input type='text' className='contact_input_name' placeholder='Name'/>
                                  </span>
                                </div>
                                <div className='row justify-content-center'>
                                  <span>
                                     <input type='text' className='contact_input_phone' placeholder='Phone number'/>
                                  </span>
                                </div>
                          </div>

                          <div className='input_half col-12 col-sm-11 col-md-6'>
                                <div className='row justify-content-center'>
                                  <span>
                                     <input type='text' className='contact_input_email' placeholder='Email address'/>
                                  </span>
                                </div>
                               
                                <div className='row justify-content-center'>
                                  <span>
                                     <input type='text' className='contact_input_subject' placeholder='Subject'/>
                                  </span>
                                </div>
                          </div>
                        </div>  
                        
                        <div className='row justify-content-center'>
                          <span className='contact_textarea col-12 col-md-9 col-xl-8'>
                            <span className='row justify-content-center'>
                                <textarea placeholder='Message'/>
                            </span>
                          </span>
                        </div>

                         <div className='row justify-content-center'>
                            <span className='cont_submit_message' 
                              onClick={() => this.handleSubmitForm()}>
                              Submit message
                            </span>
                        </div>

                         <div className='row justify-content-center'>
                            {this.state.emptyFields ? (
                              <span className='fill_fields_msg'>Please fill in all required fields.</span>
                              ) : ('')
                            }
                         </div>

                      </div>
                    </div>

                </div>
              </div>

               <Footer />
          </div>
        </div>
      )
  }
}

export default Contact;
