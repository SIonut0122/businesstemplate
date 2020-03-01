import React from 'react';
import * as am4core   from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import NavBar         from '../components/Navbar';
import Footer         from '../components/Footer';
import { Link}        from 'react-router-dom';
import { CountUp }    from 'countup.js';
import '../script/script.js';
import '../css/Home.css';



class Home extends React.Component {
  constructor(props) {
    super(props);

  }

handleScroll() {
    let membVal    = document.getElementById('team_memb_count'),
        clientsVal = document.getElementById('happy_clients_count');


       // check if is inview on scroll
      const DivIsInView = el => {
          if(document.querySelector('.home_container') !== null) {
          const scroll    = window.scrollY || window.pageYOffset
          const boundsTop = el.getBoundingClientRect().top + scroll
          
          const viewport = {
            top: scroll,
            bottom: scroll + window.innerHeight,
          }
          const bounds = {
            top: boundsTop,
            bottom: boundsTop + el.clientHeight,
          }
      
          return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
            || ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
      }
    }

      // Check if true
    let membValDiv = DivIsInView( membVal );
   
     // if scroll is inview, execute countup
        if(membValDiv) {
          if(membVal.innerHTML.length === 0 && clientsVal.innerHTML.length === 0) {
            // Start counter for 'Members'
           const countUp = new CountUp('team_memb_count', 200);
             countUp.start();
            // Start counter for 'Happy Clients'
           const countUp2 = new CountUp('happy_clients_count', 2450);
             countUp2.start()
       }
    }  
  }

componentDidMount() {
    let headerTitle = document.querySelector('.header_big_title_one');

      setTimeout(function() {
        headerTitle.style.opacity = '1';
      },1000);
  
       // Add eventlistener to animate the number counter on scroll
     window.addEventListener('scroll', this.handleScroll);
 

  let chart    = am4core.create("chartdiv", am4charts.PieChart),
      nav_home = document.querySelector('.nav_home');
  

    // Add data
        chart.data = [{
          "country": "Phasellus ",
          "litres": 501.9
        }, {
          "country": "Duis",
          "litres": 301.9
        }, {
          "country": "Abitur",
          "litres": 201.1
        }, {
          "country": "Nulla",
          "litres": 165.8
        }, {
          "country": "Nunc",
          "litres": 139.9
        }, {
          "country": "Fusce",
          "litres": 128.3
        }, {
          "country": "Aenean",
          "litres": 99
        }, {
          "country": "Integer",
          "litres": 110
        }];

    // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";

        if(document.querySelector('[aria-labelledby="id-61-title"]')) {
            document.querySelector('[aria-labelledby="id-61-title"]').style.display = 'none';
        }

    // highlight nav button
         nav_home.classList.add('highlightNav');
}

 

  render() {
  
    return (
          <div>
              <NavBar />

              <div className='container-fluid home_container'>
                <div className='row justify-content-center'>

                      <div className='col-12 home_wrap'>
                          <div className='row justify-content-center'>
                              <div className='home_wrap_round col-12 col-sm-11 col-md-11 col-lg-12'> </div>
                              <div className='middle_home_bubble'></div>
                          </div>
                       
                          <div className='row justify-content-center'>
                             <div className='home_wrap_bubbles col-12 col-sm-11 col-md-10 col-lg-11'> 
                                <div className='left_home_bubble'></div>
                                <div className='right_home_bubble'></div>
                             </div>
                          </div>
                        
                          <div className='row justify-content-center'>
                            <span className='whychoose_title'>Why choose us?</span>
                          </div>

                          <div className='row justify-content-center'>
                              <div className='whychooseus_div col-11 col-md-12'>
                                    <div className='row justify-content-center'>
                                        <div className='whychoose_box whychoose_f_box col-12 col-sm-8 col-md-5 col-lg-4'>
                                          <div className='row justify-content-center'>
                                            <div className='whychoose_inside whychoose_first_box col-10 col-lg-10 col-xl-8'>
                                                
                                                <div className='row justify-content-center'>
                                                  <span className='whychoose_first_img_div col-12'>
                                                      <span className='row justify-content-center'>
                                                        <span className='whychoose_first_img'></span>
                                                      </span>
                                                   </span>
                                                </div>
                                                <div className='row justify-content-center'>
                                                    <span className='whychoose_inside_title col-10'>Strategy</span>
                                                </div>
                                                <div className='row justify-content-center'>
                                                    <span className='whychoose_description_box col-11'>
                                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                      Pellentesque facilisis lobortis cursus. 
                                                      Vivamus eu risus vel lacus pellentesque finibus in at velit. 
                                                      Proin nec ex eu neque facilisis vestibulum.
                                                      Nam porttitor ex tortor, pulvinar sollicitudin augue lobortis sit amet. 
                                                      Phasellus in leo sem. Fusce a sem in ex accumsan eleifend.
                                                    </span>
                                                </div>
                                            
                                             </div>
                                          </div>
                                        </div>

                                        <div className='whychoose_box whychoose_s_box col-12 col-sm-8 col-md-5 col-lg-4'>
                                           <div className='row justify-content-center'>
                                            <div className='whychoose_inside whychoose_sec_box col-10 col-lg-10 col-xl-8'>

                                                <div className='row justify-content-center'>
                                                    <span className='whychoose_sec_img_div col-12'>
                                                        <span className='row justify-content-center'>
                                                          <span className='whychoose_sec_img'></span>
                                                        </span>
                                                     </span>
                                                </div>
                                               
                                                <div className='row justify-content-center'>
                                                    <span className='whychoose_inside_title col-10'>Connectivity</span>
                                                </div>
                                                
                                                <div className='row justify-content-center'>
                                                    <span className='whychoose_description_box col-11'>
                                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                      Pellentesque facilisis lobortis cursus. 
                                                      Vivamus eu risus vel lacus pellentesque finibus in at velit. 
                                                      Proin nec ex eu neque facilisis vestibulum.
                                                      Nam porttitor ex tortor, pulvinar sollicitudin augue lobortis sit amet. 
                                                      Phasellus in leo sem. Fusce a sem in ex accumsan eleifend.
                                                    </span>
                                                </div>
                                          
                                            </div>
                                          </div>
                                        </div>

                                        <div className='whychoose_box whychoose_t_box col-12 col-sm-8 col-md-5 col-lg-4'>
                                           <div className='row justify-content-center'>
                                              <div className='whychoose_inside whychoose_third_box col-10 col-lg-10 col-xl-8'>

                                                <div className='row justify-content-center'>
                                                  <span className='whychoose_third_img_div col-12'>
                                                      <span className='row justify-content-center'>
                                                        <span className='whychoose_third_img'></span>
                                                      </span>
                                                   </span>
                                                </div>
                                               
                                                <div className='row justify-content-center'>
                                                    <span className='whychoose_inside_title col-10'>Social</span>
                                                </div>
                                                
                                                <div className='row justify-content-center'>
                                                    <span className='whychoose_description_box col-11'>
                                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                      Pellentesque facilisis lobortis cursus. 
                                                      Vivamus eu risus vel lacus pellentesque finibus in at velit. 
                                                      Proin nec ex eu neque facilisis vestibulum.
                                                      Nam porttitor ex tortor, pulvinar sollicitudin augue lobortis sit amet. 
                                                      Phasellus in leo sem. Fusce a sem in ex accumsan eleifend.
                                                    </span>
                                                </div>
                                             
                                              </div>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                          </div>     
                      </div>
              
                      {/* ------------ Second home section -------------- */}

                      <div className='home_second_section col-12 m-0'>
                          <div className='row justify-content-center'>
                            <div className='home_sec_section_bubble'></div>
                            <div className='wrap_sec_sect'></div> 
                          </div>
                          <div className='row justify-content-center'>
                                  <div className='wrap_sec_sect_firsthalf col-12 col-md-6 col-lg-6 col-xl-6'>
                                    <div className='row justify-content-center'>
                                     
                                      <div className='sec_sect_firsthalf_descr col-11 col-md-10 col-lg-9 col-xl-9'>
                                          <div className='row'>
                                            <span className='sec_sect_descr_one'>Vestibulum vel leo viverra, placerat ante in, molestie leo.</span>
                                          </div>

                                          <div className='row'>
                                             <span className='sec_sect_descr_two'>Lorem ipsum. Phasellus mi ipsum</span>
                                          </div>

                                          <div className='row'>
                                              <span className='sec_sect_descr_three col-12 col-md-12 col-lg-6 col-xl-6'>
                                                  <ul>
                                                    <li><span id='team_memb_count'></span>+</li>
                                                    <li>team members</li>
                                                  </ul>
                                              </span>
                                              <span className='sec_sect_descr_three_two col-12 col-md-12 col-lg-6 col-xl-6'>
                                                  <ul>
                                                    <li><span id='happy_clients_count'></span>+</li>
                                                    <li>happy clients</li>
                                                  </ul>
                                              </span>
                                          </div>
                                      </div>
                                    </div>
                              
                                      <div className='row justify-content-center'>
                                           <Link className='fifth_viewserv_button' to={process.env.PUBLIC_URL + '/contact'}>
                                               <span>Contact</span>
                                             </Link>
                                            
                                      </div>
                            </div>
                            <div className='wrap_sec_sect_sechalf col-12 col-md-6 col-lg-6 col-xl-6'></div>
                          </div>
                      </div>

             
                      {/* -------- Third section ------- */}

                      <div className='home_third_section col-12'>
                              <div className='row justify-content-center'>
                                    <div className='home_third_half_first home_third_half col-12'>
                                      <div className='row'>
                                        <span className='hthird_growth_title'>
                                            GROWTH YOUR BUSINESS!
                                        </span>
                                      </div>
                                      
                                       <div className='row'>
                                        <span className='hthird_growth_title_under'>
                                            Phasellus tempor, urna eu porttitor faucibus.
                                        </span>
                                      </div>


                                    </div>
                                </div>
                                
                              {/* --------- Third section - Chart second half -------- */}

                                  <div className='row justify-content-center'>
                                        <div className='home_third_half col-12'>
                                            <div className='row'>
                                                <div className='wrap_home_third_half col-12 col-sm-12 col-md-10 col-lg-8  '>
                                                    <div className='row justify-content-center'>
                                                      <div className='chartdiv col-12' id='chartdiv'></div>
                                                      <div className='chartdiv_mobile'></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                      </div>  

             
                      {/* -------- Fourth section ------- */}

                      <div className='fourth_third_section col-12'>
                              <div className='row justify-content-center'>
                                  <span className='fourth_third_sec_title'>Vivamus bibendum</span>
                              </div>
                              <div className='row justify-content-center'>
                                  <span className='fourth_third_sec_title_two'>
                                    Praesent accumsan hendrerit volutpat. Fusce vel turpis mattis, molestie libero sit amet, hendrerit una.
                                  </span>
                              </div>
                      </div>    

             
                      {/* -------- Fifth section ------- */}

                      <div className='fifth_section col-12'>
                              
                              <div className='row justify-content-center'>
                                  <div className='fifth_half fifth_half_first col-12 col-md-12 col-lg-6'>
                                      <div className='row justify-content-center'>
                                          <div className='fifth_first_half_img'>

                                          </div>
                                      </div>
                                  </div>

                                  <div className='fifth_half fifth_sec_half col-12 col-md-12 col-lg-6'>
                                      <div className='row justify-content-center'>
                                           <div className='home_fifth_section_bubble'></div>

                                           <div className='our_mission_div col-12 col-lg-10'>
                                                <div className='row justify-content-center'>
                                                    <ul>
                                                        <li>Our Mission & Vission</li>
                                                        <li><span className='fa fa-check'></span>Dapibus aliquam augue fusce tels optio facilis sapiente maiores</li>
                                                        <li><span className='fa fa-check'></span>Sem vel metus imperdiet lacinia enea sapiente</li>
                                                        <li><span className='fa fa-check'></span>Class aptent taciti sociosqu ad litora torquent</li>
                                                        <li><span className='fa fa-check'></span>Praesent dignissim nisl ac dolor congue cursus</li>
                                                        <li><span className='fa fa-check'></span>Mauris in lorem eu enim finibus faucibus sociosqu tels aptent</li>
                                                    </ul>
                                                </div>

                                                <div className='row justify-content-center'>
                                                  <span className='our_mission_under_txt col-12 col-sm-10 col-md-8 col-lg-10'>
                                                    Nunc viverra erat et risus mollis porttitor. 
                                                    Integer arcu lacus, suscipit a auctor ac, rutrum sit amet nisi. 
                                                    Duis id velit sit amet diam faucibus bibendum at sed eros. 
                                                    Phasellus elementum facilisis fermentum.
                                                    Curabitur id fringilla lacus, vitae molestie velit.
                                                  </span>
                                                </div>

                                                <div className='row justify-content-center'>
                                                  <Link className='fifth_viewserv_button' to={process.env.PUBLIC_URL + '/services'}>
                                                      View services
                                                  </Link>
                                                </div>
                                         
                                           </div>
                                       </div>
                                  </div>
                              </div>
                      </div>

    
                      {/* -------- Start of sixth section ------- */}

                      <div className='sixth_section col-12'>
                              <div className='row justify-content-center'>  
                                <span className='sixth_features_title'>Features</span>
                              </div>
                              <div className='row justify-content-center'>  
                                <span className='sixth_features_subtitle col-12 col-sm-8 col-lg-4'>
                                  Sed luctus risus odio, at imperdiet orci eleifend nec. 
                                  Mauris feugiat lacus id laoreet blandit. 
                                  Praesent id justo elit.
                                  Morbi sollicitudin tempus quam et consequat.
                                </span>
                              </div>
                         
                              <div className='row justify-content-center'>
                                 <div className='six_features_div col-12'>
                                    <div className='row justify-content-center'>
                                        <div className='features_thumb'>
                                              <div className='row justify-content-center'>
                                                <span className='feature_img feature_img_headphone'></span>
                                              </div>
                                              <div className='row justify-content-center'>
                                                <span className='feature_title'>Provide idea</span>
                                              </div>
                                              <div className='row justify-content-center'>
                                                  <span className='feature_descr'>
                                                    In rhoncus tristique magna placerat consectetur. 
                                                    Vestibulum hendrerit tempus euismod.
                                                    Pellentesque pharetra tincidunt pharetra.
                                                  </span>
                                               </div>
                                               <div className='row justify-content-center'>
                                                <span className='feat_thumb_border_line'></span>
                                              </div>
                                        </div>
                                        

                                         <div className='features_thumb'>
                                            <div className='feat_thumb_bg'></div>
                                              <div className='row justify-content-center'>
                                                <span className='feature_img feature_img_constr'></span>
                                              </div>
                                              <div className='row justify-content-center'>
                                                <span className='feature_title'>Business develop</span>
                                              </div>
                                              <div className='row justify-content-center'>
                                                <span className='feature_descr'>
                                                  In rhoncus tristique magna placerat consectetur. 
                                                  Vestibulum hendrerit tempus euismod.
                                                  Pellentesque pharetra tincidunt pharetra.
                                                </span>
                                              </div>
                                               <div className='row justify-content-center'>
                                                <span className='feat_thumb_border_line'></span>
                                              </div>
                                        </div>


                                          <div className='features_thumb'>
                                            <div className='feat_thumb_bg'></div>
                                              <div className='row justify-content-center'>
                                                <span className='feature_img feature_img_peopleres'></span>
                                              </div>
                                              <div className='row justify-content-center'>
                                                <span className='feature_title'>People research</span>
                                              </div>
                                              <div className='row justify-content-center'>
                                                <span className='feature_descr'>
                                                  In rhoncus tristique magna placerat consectetur. 
                                                  Vestibulum hendrerit tempus euismod.
                                                  Pellentesque pharetra tincidunt pharetra.
                                                </span>
                                              </div>
                                               <div className='row justify-content-center'>
                                                <span className='feat_thumb_border_line'></span>
                                              </div>
                                        </div>


                                        <div className='features_thumb'>
                                            <div className='feat_thumb_bg'></div>
                                              <div className='row justify-content-center'>
                                                <span className='feature_img feature_img_market'></span>
                                              </div>
                                              <div className='row justify-content-center'>
                                                <span className='feature_title'>Marketing</span>
                                              </div>
                                              <div className='row justify-content-center'>
                                                <span className='feature_descr'>
                                                  In rhoncus tristique magna placerat consectetur. 
                                                  Vestibulum hendrerit tempus euismod.
                                                  Pellentesque pharetra tincidunt pharetra.
                                                </span>
                                              </div>
                                              <div className='row justify-content-center'>
                                                <span className='feat_thumb_border_line'></span>
                                              </div>
                                        </div>


                                    </div>
                                 </div>
                              </div>
                      </div>


                      {/* -------- Seventh section ------- */}

                      <div className='seventh_sect col-12'>
                      <hr/>
                        <div className='row justify-content-center'>
                            <div className='seventh_sec_bg col-12'>
                            <div className='seventh_over_sec_bg col-12'></div>
                            
                              <div className='row justify-content-center'>
                                <span className='clients_say_txt'>Clients say</span>
                              </div>
                              <div className='row justify-content-center'>
                                <span className='clients_say_subtxt'>Praesent placerat metus ex, nec euismod lectus accumsan molestie.</span>
                              </div>
                            <div className='row justify-content-center'>
                              <div className='quote_div col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4'>
                                <span className='quote_img_one'></span>

                                <div className='row justify-content-center'>
                                  <div className='quote_content_text col-10'>
                                    <div className='row justify-content-center'>
                                      <span className='quote_img'></span>
                                    </div>
                                      <div className='row justify-content-center'>
                                          <span className='quote_user_name'>John Doe</span>
                                      </div>
                                    <div className='row justify-content-center'>
                                      <span className='quote_txt col-12 col-sm-12 col-lg-10'>
                                        " Praesent placerat metus ex, nec euismod lectus accumsan molestie. 
                                        Sed sodales neque quis sapien.
                                        sodales, eget. "
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                
                                <span className='quote_img_two'></span>
                              </div>
                            </div>

                         </div>
                        </div>
                      </div>

               
                      {/* -------- Start of eigth section ------- */}
             
                      <div className='eigth_section col-12'>
                            <div className='row justify-content-center'>  
                              <span className='eigth_title'>
                                Our Expert Team
                              </span>
                            </div>
                            <div className='row justify-content-center'>  
                              <span className='eigth_subtitle'>
                                Meet Our Professional Team
                              </span>
                            </div>
                            <div className='row justify-content-center'>  
                              <span className='eigth_title_descr'>
                                Praesent placerat metus ex, nec euismod lectus accumsan molestie. 
                                Sed sodales neque quis sapien sodales, eget suscipit orci tempus.
                              </span>
                            </div>
                     
                            <div className='row justify-content-center'> 
                              <div className='wrap_our_team col-12'>
                                <div className='row justify-content-center'>
                                    
                                    <div className='team_box t_name_box_one'>
                                      <div className='row justify-content-center'>
                                          <div className='team_name_box'>
                                              <span className='hover_slide_team_name'></span>
                                              <div className='row justify-content-center'>
                                                  <span className='team_name_txt'>John Doe</span>
                                              </div>
                                              <div className='row justify-content-center'>
                                                  <span className='team_prof_txt'>Co Founder</span>
                                              </div>
                                          </div>
                                          <div className='team_social_icon'>
                                                <div className='row justify-content-center'>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                          </div>
                                      </div>
                                    </div>


                                      <div className='team_box t_name_box_two'>
                                        <div className='row justify-content-center'>
                                          <div className='team_name_box'>
                                              <span className='hover_slide_team_name'></span>
                                              <div className='row justify-content-center'>
                                                  <span className='team_name_txt'>John Doe</span>
                                              </div>
                                              <div className='row justify-content-center'>
                                                  <span className='team_prof_txt'>Co Founder</span>
                                              </div>
                                          </div>
                                          <div className='team_social_icon'>
                                                <div className='row justify-content-center'>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                          </div>
                                      </div>
                                    </div>



                                       <div className='team_box t_name_box_three'>
                                         <div className='row justify-content-center'>
                                           <div className='team_name_box'>
                                              <span className='hover_slide_team_name'></span>
                                              <div className='row justify-content-center'>
                                                  <span className='team_name_txt'>John Doe</span>
                                              </div>
                                              <div className='row justify-content-center'>
                                                  <span className='team_prof_txt'>Co Founder</span>
                                              </div>
                                          </div>
                                          <div className='team_social_icon'>
                                                <div className='row justify-content-center'>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                          </div>
                                       </div>
                                    </div>

                                 </div>
                              </div>
                            </div>
                      </div>
                          
                       {/* -------------- Ninth section ----------- */ }

                      <div className='ninth_section col-12'>
                          <div className='row justify-content-center'> 
                            <div className='ninth_sec_content col-12'>
                              <div className='ninth_sec_cover col-12'></div>
                                  <div className='row justify-content-center'>
                                        <span className='ninth_title'>Grow your business!</span>
                                  </div>
                                   <div className='row justify-content-center'>
                                      <span className='ninth_subtitle'>
                                        Quisque accumsan tempus risus eu malesuada. Nullam at ullamcorper augue.
                                      </span>
                                    </div>
                                    <div className='row justify-content-center'>
                                       <Link className='ninth_button' to={process.env.PUBLIC_URL + '/contact'}>
                                          <span>Get Started</span>
                                       </Link>
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

export default Home;
