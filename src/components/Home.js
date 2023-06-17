


import './Home.css';
import Header from './Header';
import icon1 from '../assets/icon/icn settings .icn-lg.png';
import icon2 from '../assets/icon/icn settings .icn-lg (1).png';
import icon3 from '../assets/icon/icn settings .icn-lg (2).png';
import icon4 from '../assets/icon/icn settings .icn-lg (3).png';
import service_icon1 from '../assets/icon/service1.png';
import service_icon2 from '../assets/icon/service2.png';
import service_icon3 from '../assets/icon/service3.png';
import service_icon4 from '../assets/icon/service4.png';
import profile1 from '../assets/circle-box.png';
import profile2 from '../assets/cover.png';
import profile3 from '../assets/circle-box (2).png';
import profile4 from '../assets/circle-box (1).png';
import people from '../assets/icon/people.png';
import time from '../assets/icon/timer.png';
import world from '../assets/col-md-5.png';
import office from '../assets/col-md-8.png';
import Rating from '@mui/material/Rating';
import media from '../assets/media.png';
import facebook from '../assets/ant-design_facebook-filled.png';
import youtube from '../assets/carbon_logo-youtube.png';
import twiiter from '../assets/ant-design_twitter-outlined.png';
import instagram from '../assets/ant-design_instagram-outlined.png';

import {BsArrowRight } from "react-icons/bs";

function Home() {
  return (
    <>
    <div className="bg_section_container  m-0">
        <div className='bg_section_wrapper'>
                <Header />
        <div className='content_wrapper d-flex flex-column justify-content-center align-items-center'>
              <h1 className='mb-4'>Experts are here Solve<br></br> your business problems.</h1>
              <div className='desc mb-4'>We know how large objects will act, but things on a<br></br> small scale just do not act that way.</div>
              <div className='d-flex align-items-center btn_wrapper pb-3'>
                <button className='get_quote_btn '>Get Quote Now</button>
                <button className='learn_mre_btn'>Learn More</button>
              </div>
              <div className='counter_card'>
        <div className='row m-0'>
          <div className='col-md-3 d-flex align-items-center counter_tag'>
            <img src={icon1} className='img-fluid mr-10'alt="icon-1"  />
            <div className='counter_content '>
            <div className='count'>1.5k</div>
            <div className='count_tag'>Happy Customers</div>
            </div>

          </div>
          <div className='col-md-3 d-flex align-items-center counter_tag'>
            <img src={icon2} className='img-fluid mr-10' alt="icon-2" />
            <div className='counter_content '>
            <div className='count'>3k</div>
            <div className='count_tag'>Cases Done</div>
            </div>

          </div>
          <div className='col-md-3 d-flex align-items-center counter_tag'>
            <img src={icon3} className='img-fluid mr-10' alt="icon-3"  />
            <div className='counter_content '>
            <div className='count'>45</div>
            <div className='count_tag'>Award Winning</div>
            </div>

          </div>
          <div className='col-md-3 d-flex align-items-center counter_tag'>
            <img src={icon4} className='img-fluid mr-10' alt="icon-4"  />
            <div className='counter_content '>
            <div className='count'>12</div>
            <div className='count_tag'>Countries Worldwide</div>
            </div>

          </div>
        </div>
        </div>

        </div>
            
        </div>
      
 
    </div>
    <div className='white_section  '>
      <div className='container d-flex justify-content-center'>
      
      </div>
    </div>
    <div className='third_section d-flex justify-content-center'>
      <div className='cards_sect'>
      <div className='container'>
       
          <div className='row m-0  '>
            <div className='col-md-3'>
              <div className='service_card mb-sm-3'>
                <img src={service_icon1} alt='service_log' className='img-fluid mb-2' />
                <div className='title mb-2'>Bussiness Grow</div>
                <div className='desc mb-3'>the quick fox jumps over the lazy dog</div>
                <div className='d-flex justify-content-center'>
                <button className='more_btn'>More<BsArrowRight className='ml-10' size={20} /></button>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='service_card'>
                <img src={service_icon2} alt='service_log' className='img-fluid mb-2' />
                <div className='title mb-2'>Bussiness Grow</div>
                <div className='desc mb-3'>the quick fox jumps over the lazy dog</div>
                <div className='d-flex justify-content-center'>
                <button className='more_btn'>More<BsArrowRight className='ml-10' size={20} /></button>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='service_card'>
                <img src={service_icon3} alt='service_log' className='img-fluid mb-2' />
                <div className='title mb-2'>Bussiness Grow</div>
                <div className='desc mb-3'>the quick fox jumps over the lazy dog</div>
                <div className='d-flex justify-content-center'>
                <button className='more_btn'>More<BsArrowRight className='ml-10' size={20} /></button>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='service_card_last'>
                <img src={service_icon4} alt='service_log' className='img-fluid mb-2' />
                <div className='title mb-2'>Bussiness Grow</div>
                <div className='desc mb-3'>the quick fox jumps over the lazy dog</div>
                <div className='d-flex justify-content-center'>
                <button className='more_btn_last'>More</button>
                </div>
              </div>
            </div>
          </div>
          <div className='row m-0 '>
            <div className='col-md-12  content_wrapper d-flex flex-column align-items-center justify-content-center'>
              <h1 className='mb-4'>We are providing best <br />business service.</h1>
              <div className='desc'>Problems trying to resolve the conflict between the two major realms <br></br>of Classical physics: Newtonian mechanics </div>

            </div>
            <div className='col-md-7 col-sm-12 '>
              <img src={office} alt='officeimage ' className='img-fluid ' />
              
            </div>
            <div className='col-md-5 pl-80  '>
            <h2 className='mb-3'>Most Trusted in our Field</h2>
            <div className='description mb-4'>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</div>
            <div className='d-flex service_desc mb-2 '>
              <img src={people} className='img-fluid mr-10' alt='people' />
              <div className=''>
              <div className='title'>the quick fox jumps over the lazy dog</div>
              <div className='desc'>Things on a very small scale ...</div>
              </div>
            </div>
            <div className='d-flex service_desc '>
              <img src={time} alt='time' className='img-fluid mr-10' />
              <div className=''>
              <div className='title'>the quick fox jumps over the lazy dog</div>
              <div className='desc'>Things on a very small scale ...</div>
              </div>
            </div>
              

            </div>

          </div>
          </div>
      </div>
    </div>
    <div className='fourth_sect'>
      <div className='d-flex flex-column  align-items-center'>
        <h2 className='title mb-2'>What Client Say</h2>
        <div className='desc mb-5'>Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics</div>
      </div>
      <div className='container-fluid p-0'>
        <div className='row slider gx-5 m-0'>
          <div className='col-md-6 '>
         
            <div className='client'>
            <div className='client_card'>
            <img src={profile1} alt='profile1' className='profile_img' />
              <div className='card_title'>Regina Miles</div>
              <div className='postion'>Designer</div>
                      <Rating
                name="simple-controlled"
                value={3}
            
              />
         <div className='card_desc'>This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.</div>
            </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='client'>
            <div className='client_card'>
            <img src={profile2} alt='profile1' className='profile_img' />
              <div className='card_title'>Regina Miles</div>
              <div className='postion'>Designer</div>
                      <Rating
                name="simple-controlled"
                value={3}
            
              />
         <div className='card_desc'>This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.</div>
            </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='client'>
            <div className='client_card'>
            <img src={profile1} alt='profile1' className='profile_img' />
              <div className='card_title'>Regina Miles</div>
              <div className='postion'>Designer</div>
                      <Rating
                name="simple-controlled"
                value={3}
            
              />
         <div className='card_desc'>This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.</div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='fifth_sect'>
      <div className='container'>
        <div className='row m-0'>
          <div className='col-md-12 d-flex flex-column align-items-center justify-content-center mb-5'>
            <h2 className='mb-3'>Meet Our Team</h2>
            <div className='desc'>Problems trying to resolve the conflict between<br /> the two major realms of Classical physics: Newtonian mechanic</div>
          </div>
          <div className='col-md-3 '>
            <div className='profile_card'>
              <img src={profile1} alt='pro' className='img-fluid profile_circle' />
              <div className='title'>CEO Founder</div>
              <div className='postion'>Avie Beaton</div>
              <div className='desc'>the quick fox jumps over the lazy dog</div>
              
            </div>
          </div>
          <div className='col-md-3'>
            <div className='profile_card'>
              <img src={profile2} alt='pro' className='img-fluid profile_circle' />
              <div className='title'>CEO Founder</div>
              <div className='postion'>Avie Beaton</div>
              <div className='desc'>the quick fox jumps over the lazy dog</div>
              
            </div>
          </div>
          <div className='col-md-3'>
            <div className='profile_card'>
              <img src={profile3} alt='pro' className='img-fluid profile_circle' />
              <div className='title'>CEO Founder</div>
              <div className='postion'>Avie Beaton</div>
              <div className='desc'>the quick fox jumps over the lazy dog</div>
              
            </div>
          </div>
          <div className='col-md-3'>
            <div className='profile_card'>
              <img src={profile4} alt='pro' className='img-fluid profile_circle' />
              <div className='title'>CEO Founder</div>
              <div className='postion'>Avie Beaton</div>
              <div className='desc'>the quick fox jumps over the lazy dog</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='sixth_sect d-flex justify-content-center'>
    <div className='all-wrapper'>
      <div className='container'>
        <div className='row align-items-center m-0'>
          <div className='col-md-7'>
            <h1>We Have Branches All Over The World</h1>
            <div className='desc'>The gradual accumulation of information about atomic and small-scale behaviour during the first quarter of the 20th century, which gave some indications about how small things do behave, produced an increasing confusion which was Heisenberg, and Born.</div>
          </div>
          <div className='col-md-5'>
            <img className='img-fluid' src={world} alt='world' />
          </div>
          </div>
        </div>
        </div>
    </div>
    <div className='seven_sect d-flex justify-content-center '>
      <div className='all-wrapper'>
    
        <div className='container quote_form'>
          <div className='row m-0'>
            <div className='col-md-4 p-0'>
              <img src={media} alt='media' className='img-fluid' />
            </div>
            <div className='col-md-8 p-0'>
              <div className='form_container'>
                <h1 className='mb-3'>Get A Free Quote Here</h1>
                <div className='label'>Name*</div>
                <input className='quote_input' placeholder='Full Name' />
                <div className='label'>Email*</div>
                <input className='quote_input' placeholder='example@gmail.com' />
                <div className='label'>Department*</div>
                <select className='quote_input' value={'Please Select'} placeholder='Please Select'  >
                  <option  disabled value={'Please Select'}>Please Select</option>
                </select>
                <div className='label'>Time*</div>
                <select className='quote_input mb-4' value={'2'} placeholder='4:00 Available'  >
                <option value="2" disabled>4:00 Available</option>
                </select>
                <button className='quote_btn'>Book Appointment</button>
              </div>
          
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className='footer d-flex justify-content-center'>
      <div className='all-wrapper'>
      <div className='container'>
        <div className='row m-0'>
          <div className='col-md-3 mb-3'>
            <div className='title'>Get In Touch</div>
            <div className='desc'>the quick fox jumps over the lazy dog</div>
            <div className='d-flex align-items-center'>
              <img src={facebook} alt='facebook' className='mr-20'/>
              <img src={instagram} alt='instagram' className='mr-20'/>
              <img src={twiiter} alt='twitter' className='mr-20'/>
              <img src={youtube} alt='youtube' className='mr-20'/>
            </div>
          </div>
          <div className='col-md-3 mb-3'>
            <div className='title'>Company Info</div>
            <div className='menu_item'>About us</div>
            <div className='menu_item'>Carrier</div>
            <div className='menu_item'>We are hiring</div>
            <div className='menu_item'>Blog</div>
          </div>
          <div className='col-md-3 mb-3'>
            <div className='title'>Features</div>
            <div className='menu_item'>Business Marketing</div>
            <div className='menu_item'>User Analytic</div>
            <div className='menu_item'>Live Chat</div>
            <div className='menu_item'>Unlimited Support</div>
      
          </div>
          <div className='col-md-3 mb-3'>
            <div className='title'>Resources</div>
            <div className='menu_item'>IOS & Android</div>
            <div className='menu_item'>Watch a Demo</div>
            <div className='menu_item'>Customers</div>
            <div className='menu_item'>API</div>
          
          </div>
        
          </div>
        </div>
      </div>
    </div>
    <div className='copy_right_sect d-flex justify-content-center'>
      <div className='copy_right_text'>Made With Love By Figmaland All Right Reserved </div>

    </div>
    </>
  );
}

export default Home;