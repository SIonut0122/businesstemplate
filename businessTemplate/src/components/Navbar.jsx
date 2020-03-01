import React    from 'react';
import { Link } from 'react-router-dom';
import '../script/script.js';
import '../css/Navbar.css';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }


searchHandler() {
  let navInputDiv   = document.querySelector('.nav_input_div'),
      navInputInput = document.querySelector('.nav_input_input');

      // Check is search input is empty, and display the input search.
    if(navInputInput.value.length === 0) {
        navInputDiv.classList.add('nav_input_div_open');
      } else {
        return false;
      }
}


  render() {
    return (
        <div>

          <div className='container-fluid navbar_container' id='navbar_container'>
            <div className='navbar_over_background'></div>
           
               {/* ---------- Social navbar icons ----------- */}

               <div className='row'>
                  <div className='nav_social'>
                      <div className='row justify-content-center'>
                        <span className='nav_social_fb' title='Facebook'> </span>
                        <span className='nav_social_twitter' title='Twitter'> </span>
                        <span className='nav_social_googleplus' title='Google+'> </span>
                      </div>
                  </div>
               </div>
                
               {/* ---------- Navbar title logo div ----------- */}

                <div className='row justify-content-center'>
                  <div className='navbar_title_logo col-11 col-lg-9'>
                    <div className='row'>
                      <Link to={process.env.PUBLIC_URL + '/'}>
                      <span className='navbar_title_logo_img'></span>
                       </Link>
                      <span className='navbar_title_logo_txt'>logo</span>

                      <div className='navbar_search_div'>
                        <div className='row justify-content-center'>
                          <div className='nav_input_div'>
                            <input className='nav_input_input' type='text'/>
                          </div>
                          <span className='nav_input_search_icon' title='Search' onClick={() => this.searchHandler()}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

               {/* ---------- Navbar buttons ----------- */}

                <div className='row justify-content-center'>
                  <div className='navbar_menu col-11 col-lg-9' id='navbar_menu'>
                    <div className='row'>
                        <Link className='nav_link nav_home' to={process.env.PUBLIC_URL + '/'}>
                           <span>Home</span>
                        </Link>
                        <Link className='nav_link nav_services' to={process.env.PUBLIC_URL + '/services'}>
                           <span>Services</span>
                        </Link>
                        <Link className='nav_link nav_contact' to={process.env.PUBLIC_URL + '/contact'}>
                           <span>Contact</span>
                        </Link>
                    </div>
                  </div>
                </div>
               
                <div className='row justify-content-center'>
                  <div className='header_big_title col-11'>
                    <div className='row justify-content-center'>
                        <span className='header_big_title_one'>Quality. Simplicity.</span>
                    </div>                      
                    <div className='row justify-content-center'>
                        <p className='head_big_title_two col-11 col-md-8 col-lg-5 col-xl-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna dicta numquam eius modi.
                        </p>
                    </div>
                    <div className='row justify-content-center'>
                      <span className='header_under_button'>Features</span>
                    </div>
                  </div>
                </div>

            </div>
        </div>
      )
  }
}

export default NavBar;
