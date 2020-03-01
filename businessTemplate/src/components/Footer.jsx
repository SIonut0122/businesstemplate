import React  from 'react';
import {Link} from 'react-router-dom';
import '../script/script.js';
import '../css/Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }


handleSubmit() {
  // Reload the page when submitting for 'Newsletter'
  window.location.reload();
}


render() {
    return (
        <div>
          <div className='container-fluid footer_container m-0'>
            <div className='row justify-content-center'>
              <div className='wrap_footer col-12'>
                 <div className='row justify-content-center'>
                    <div className='footer_half col-12 col-md-7 col-lg-4'>
                        <div className='row'>
                          <div className='footer_logo col-12'>
                            <span></span>
                            <span>LOGO</span>
                          </div>
                        </div>
                    
                         <div className='row'>
                            <div className='footer_fh_txt col-11 col-md-8 col-lg-11'>
                                Lorem ipsum dolor sit amet consectetur adipisicing 
                                elit sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua ut enim ad minim veniam quis 
                                nostrud exercitation. 
                                Orci varius natoque penatibus et magnis.
                            </div>
                         </div>
                    </div>

                    <div className='footer_half footer_half_two col-12 col-md-5 col-lg-4'>
                      <div className='row'>
                        <div className='foot_ht_half col-6'>

                           <div className='row'>
                              <span className='footer_title'>Links</span>
                           </div>
                           <div className='row'>
                             <ul>
                              <li><Link to='/'>Home</Link></li>
                              <li><Link to='/services'>Services</Link></li>
                              <li><Link to='/contact'>Contact</Link></li>
                              <li><Link to='/'>About</Link></li>
                             </ul>
                           </div>
                        </div>
                      
                         <div className='foot_ht_half col-6'>
                             <div className='row'>
                               <ul className='foot_ht_h_ul'>
                                <li>Business</li>
                                <li>Marketing</li>
                                <li>Accounting</li>
                                <li>Training</li>
                                <li>Management</li>
                               </ul>
                             </div>
                        </div>
                      </div>
                    </div>
                  
                    <div className='footer_half foot_s_half col-12 col-md-12 col-lg-4'>
                         <div className='row'>
                              <span className='footer_title news_foot_title'>Newsletter</span>
                           </div>
                           <div className='row justify-content-center'>
                              <span className='newsletter_div'>
                                <input type='text'  placeholder='Enter email here'/>
                              </span>
                           </div>
                            <div className='row justify-content-center'>
                                <div className='newsletter_button' onClick={() => this.handleSubmit()}>Submit</div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='footer_social_div col-8'>
                                    <div className='row justify-content-center'>
                                        <i className="fab fa-facebook-square"    title='Facebook'></i>
                                        <i className="fab fa-twitter-square"     title='Twitter'></i>
                                        <i className="fab fa-google-plus-square" title='Google+'></i>
                                        <i className="fab fa-youtube-square"     title='Youtube'></i>
                                        <i className="fab fa-skype"              title='Skype'></i>
                                    </div>
                                </div>
                            </div>
                    </div>
                 </div>
              </div>
            </div>
          
            <div className='row justify-content-center'>
              <div className='footer_allrights col-12'>
                  ©2019 <a href='https://www.ionutdev.com'>ionutdev.com</a> - All rights reserved.
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default Footer;
