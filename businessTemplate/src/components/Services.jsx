import React   from 'react';
import NavBar  from '../components/Navbar';
import Footer  from '../components/Footer';
import { Link} from 'react-router-dom';
import $       from 'jquery';
import '../script/script.js';
import '../css/Services.css';




class Services extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
          serv_box: [{
                title: 'Connectivity',
                text: ' Duis iaculis eros augue. Duis commodo erat eu metus viverra lacinia.Nunc nec ultricies erat.Suspendisse vestibulum id mi in vehicula.Fusce placerat orci vel libero imperdiet eleifend.',
                class_img: 'fas fa-network-wired' 
              },
              {
                title: 'Marketing',
                text: ' Duis iaculis eros augue. Duis commodo erat eu metus viverra lacinia.Nunc nec ultricies erat.Suspendisse vestibulum id mi in vehicula.Fusce placerat orci vel libero imperdiet eleifend.',
                class_img: 'fas fa-wallet' 
              },
              {
                title: 'Social',
                text: ' Duis iaculis eros augue. Duis commodo erat eu metus viverra lacinia.Nunc nec ultricies erat.Suspendisse vestibulum id mi in vehicula.Fusce placerat orci vel libero imperdiet eleifend.',
                class_img: 'fas fa-users'
              },
              {
                title: 'Trademarks',
                text: ' Duis iaculis eros augue. Duis commodo erat eu metus viverra lacinia.Nunc nec ultricies erat.Suspendisse vestibulum id mi in vehicula.Fusce placerat orci vel libero imperdiet eleifend.',
                class_img: 'fas fa-hand-holding-usd' 
              },
              {
                title: 'Consultation',
                text: ' Duis iaculis eros augue. Duis commodo erat eu metus viverra lacinia.Nunc nec ultricies erat.Suspendisse vestibulum id mi in vehicula.Fusce placerat orci vel libero imperdiet eleifend.',
                class_img: 'fas fa-business-time' 
              },
              {
                title: 'Accounting',
                text: ' Duis iaculis eros augue. Duis commodo erat eu metus viverra lacinia.Nunc nec ultricies erat.Suspendisse vestibulum id mi in vehicula.Fusce placerat orci vel libero imperdiet eleifend.',
                class_img: 'fas fa-credit-card'
              },
                {
                title: 'Development',
                text: ' Duis iaculis eros augue. Duis commodo erat eu metus viverra lacinia.Nunc nec ultricies erat.Suspendisse vestibulum id mi in vehicula.Fusce placerat orci vel libero imperdiet eleifend.',
                class_img: 'fas fa-laptop-code' 
              },
              {
                title: 'Design',
                text: ' Duis iaculis eros augue. Duis commodo erat eu metus viverra lacinia.Nunc nec ultricies erat.Suspendisse vestibulum id mi in vehicula.Fusce placerat orci vel libero imperdiet eleifend.',
                class_img: 'fas fa-paint-roller' 
              },
              {
                title: 'Quality',
                text: ' Duis iaculis eros augue. Duis commodo erat eu metus viverra lacinia.Nunc nec ultricies erat.Suspendisse vestibulum id mi in vehicula.Fusce placerat orci vel libero imperdiet eleifend.',
                class_img: 'far fa-gem'
              }]
    }
  }


componentDidMount() {
    let nav_services = document.querySelector('.nav_services'),
        headerTitle  = document.querySelector('.header_big_title_one');

    // Delay 1 sec to give time for font familiy to load.
      setTimeout(function() {
        headerTitle.style.opacity = '1';
      },500);

    // hightlight nav button
        nav_services.classList.add('highlightNav');
 
    // scroll to view the services page.
      if(window.innerWidth > 990) {
        $('body,html').animate({
                scrollTop : 400                      
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
          
                <div className='container-fluid services_container'>
                    
                    <div className='row'>
                      <div className='menu_nav_link_services'>
                        <span><Link to={process.env.PUBLIC_URL + '/'}>Home</Link></span>
                        <span> / Services</span>
                      </div>
                    </div>
                        
                    <div className='row justify-content-center'>
                      <span className='services_title'>High Quality Services</span>
                    </div>
                    
                    <div className='row justify-content-center'>
                      <span className='services_untitle'>Aliquam vestibulum elementum justo</span>
                    </div>
                      
                    <div className='row justify-content-center'>
                        <div className='wrap_services col-12'>
                            <div className='row justify-content-center'>
                               
                               {this.state.serv_box.map((item,index) =>
                                <div key={index} className='serv_box'>
                                  <div className='serv_box_img'>
                                    <span><i className={item.class_img}></i></span>
                                  </div>
                                  <div className='serv_box_txt'>
                                    <span className='serv_box_title'>{item.title}</span>
                                     <span className='serv_box_descr'>
                                      {item.text}
                                     </span>
                                  </div>
                                </div>
                              )}
                              
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className='row justify-content-center'>
                        <div className='col-12'>
                          <div className='row justify-content-center'>
                            <span className='those_who_grow'>
                              Those who grow with us
                                <span></span>
                              </span>
                          </div>
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='wrap_company col-12'>
                            <div className='row justify-content-center'>
                                <span className='company_box'></span>
                                <span className='company_box'></span>
                                <span className='company_box'></span>
                                <span className='company_box'></span>
                            </div>
                        </div>
                    </div>
                </div>
            
            <Footer />
          </div>
      )
   }
}

export default Services;
