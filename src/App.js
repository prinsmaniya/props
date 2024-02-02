import './App.css';
import { IoIosMail, IoIosSunny, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube, IoLogoWhatsapp, IoMdStar, IoMdStarHalf, IoIosArrowRoundForward} from "react-icons/io";
import { FaGooglePlusG, FaHandPointRight, FaUniversity } from "react-icons/fa";
import { PiStudentFill, PiNotePencil, PiChalkboardTeacherFill, PiEnvelopeOpenFill, PiQuotesFill } from "react-icons/pi";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from './image/logo.svg';
import img9 from './image/about.jpeg';
import img12 from './image/happy1.jpeg';
import img13 from './image/happy-bg.jpeg';
import img14 from './image/happy-bg1.png';
import white from './image/white.svg';

var menu = ['Home', 'Courses', 'Activities', 'Blog', 'Know-Us', 'Get-In-Touch', 'Student-Zone']

var slider = [
  { image: require("./image/s1.webp") },
  { image: require("./image/s2.webp") },
  { image: require("./image/s3.webp") },
  { image: require("./image/s4.webp") },
  { image: require("./image/s5.webp") },
  { image: require("./image/s6.webp") },
  { image: require("./image/s7.webp") },
  { image: require("./image/s8.webp") },

]

var slider_std = [
  { image: require("./image/std1.png") },
  { image: require("./image/std2.jpeg") },
  { image: require("./image/std3.png") },
  { image: require("./image/std4.png") },
  { image: require("./image/std5.png") },
  { image: require("./image/std6.png") },
  { image: require("./image/std7.png") },
  { image: require("./image/std8.png") },
  { image: require("./image/std9.png") },
  { image: require("./image/std10.png") },

]

var offer = [
  { "image": require('./image/course1.webp'), course: "Development Course" },
  { "image": require('./image/course2.webp'), course: "Design Course" },
  { "image": require('./image/course3.webp'), course: "Programming IT" },
  { "image": require('./image/course4.webp'), course: "Trendy Course" },
  { "image": require('./image/course5.webp'), course: "Civil-Mech Engineering" },
  { "image": require('./image/course6.webp'), course: "Bussiness Development" },
]

var count = [
  { icon: <PiNotePencil />, num: "14000+", name: "HAPPY STUDENT" },
  { icon: <PiChalkboardTeacherFill />, num: "10+", name: "CERTIFICATION APPROVAL" },
  { icon: <PiStudentFill />, num: "100+", name: "CERTIFIED TEACHERS" },
  { icon: <PiEnvelopeOpenFill />, num: "12000+", name: "STUDENTS PLACED" },
]

var choose = [
  { image: require('./image/read.png'), head: "Industry Expert As Trainers", para: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis.", pid: "i1"},
  { image: require('./image/read1.png'), head: "Latest Curriculum", para: "We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time..", pid: "i2"},
  { image: require('./image/read2.png'), head: "Latest Technology", para: "At the end of each training,our training instructor will go through the possible technical questions you may be asked.", pid: "i3" },
  { image: require('./image/read3.png'), head: "Interview Assistance", para: "We will be provided free upgradation for any newer version of the course you have.", pid: "i4" },
  { image: require('./image/read4.png'), head: "Free Upgradation", para: "At the end of each training,our training instructor will go through the possible technical questions you may be asked.", pid: "i5" },
  { image: require('./image/read5.png'), head: "Lifetime Support", para: "We will provide you lifetime support on all the courses you learned from us.", pid: "i6" },
]

var demand = ['Lumion training institute in varachha', 'nodejs training institute in Mota Varachha', 'best php training in katargam', 'python training institute in surat', 'Live game development training institute', 'Illustrator training in katargam', 'Tally accounting training institute', 'Unity 3d training institute in katargam', '3d game development training institute in Mota Varachha', 'Adobe xd design course', 'Lumion training institute in katargam', 'Video Editing Training in Surat', 'Web design training in varachha', 'Android training institute in varachha', 'C++ programming language course', 'python training institute in varachha', 'Web development training institute in varachha', 'PHP project company in surat', 'ios app training institute in varachha', 'Maya 3d animation training institute in surat']


function App() {
  return (
    <div className='website'>

      {/* TOP-MENU START */}
      <div className="top-menu">
        <div className="d-flex container">
          <div className='d-flex right'>
            <div className='d-flex mail'>
              <IoIosMail className='icon'></IoIosMail>
              <p>info@cdmi.in</p>
            </div>

            <div className='d-flex sun'>
              <IoIosSunny className='icon'></IoIosSunny >
              <p>Verify Certificate</p>
            </div>
          </div>
          <div>
            <p>HAVE ANY QUESTION ? +91 90333 16003</p>
          </div>
          <div>
            <IoLogoFacebook className='socail'></IoLogoFacebook>
            <IoLogoTwitter className='socail'></IoLogoTwitter>
            <FaGooglePlusG className='socail'></FaGooglePlusG>
            <IoLogoLinkedin className='socail'></IoLogoLinkedin>
            <IoLogoInstagram className='socail'></IoLogoInstagram>
            <IoLogoYoutube className='socail'></IoLogoYoutube>
            <IoLogoWhatsapp className='socail'></IoLogoWhatsapp>
          </div>
        </div>
      </div>
      {/* TOP-MENU END */}

      {/* MAIN-MENU START */}
      <div className='menu'>
        <div className='d-flex container'>
          <div className='logo'>
            <img src={img1}></img>
          </div>

          <nav>
            <ul className='main-menu d-flex'>
              {
                menu.map((ele, ind) => {
                  return (
                    <li key={ind}>{ele}</li>
                  )
                })
              }
            </ul>
          </nav>
        </div>
      </div>
      {/* MAIN-MENU END */}

      {/* Slider Start */}
      <OwlCarousel className='owl-theme slider1' loop margin={10} nav={false} items={1} dots={false} autoplay={true} autoplayTimeout={3000}>
        {
          slider.map((ele, ind) => {
            return (
              <div class='item'>
                <img src={ele.image}></img>
              </div>
            )
          })
        }
      </OwlCarousel>
      {/* Slider End */}

      {/* CREATIVE COURSE START */}
      <div className='pd-y container course'>
        <p className='course-head'>Creative Courses
          <div className='line'></div>
        </p>
        <h1>Offered Courses</h1>

        <div className='d-flex course-img'>
          {
            offer.map((ele, ind) => {
              return (
                <div className='w-33'>
                  <div className='content'>
                    <img src={ele.image}></img>
                    <h2>{ele.course}</h2>
                    <hr></hr>
                    <div className='d-flex course-bottom'>
                      <div className='social'>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStarHalf></IoMdStarHalf>
                      </div>

                      <div className='course-btn'>
                        <button><a href=''>Know More...!</a></button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

        <button className='btn-all-courses'><a href=''>View All Categories<IoIosArrowRoundForward className='arrow'></IoIosArrowRoundForward></a></button>
      </div>
      {/* CREATIVE COURSE END */}

      {/* ABOUT US START */}
      <div className='about pd-y'>
        <div className='d-flex'>
          <div className='about-content'>
            <div className='container'>
              <p className='about-head'>About Us
                <div className='line'></div>
              </p>
              <h1>IT Career in Surat, moving towards the better Tomorrow!</h1>
              <p className='detail'> Creative Design & Multimedia Institute(CDMI)  is a reputed training
                institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All
                types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market
                in 2014 with the goal to help students, working professionals and other interested candidates get that dream job
                or open that desired freelance business in some of the most popular Computer / IT fields.  Our aim is to ease the
                hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
              </p>
              <button className='about-btn'><a href=''>Enroll Now...!<IoIosArrowRoundForward className='arrow'></IoIosArrowRoundForward></a></button>
            </div>
          </div>
          <div className='about-img'>
            <img src={img9}></img>
          </div>
        </div>
      </div>
      {/* ABOUT US END */}

      {/* COUNTING START */}
      <section className='count'>
        <div className='container'>
          <div className='d-flex'>
            {
              count.map((ele, ind) => {
                return (
                  <div className='count_box'>
                    <div className='count_icon'>
                      <i>{ele.icon}</i>
                    </div>
                    <p style={{ fontSize: "30px", color: "white", fontWeight: "600" }}>{ele.num}</p>
                    <p style={{ fontWeight: "700" }}>{ele.name}</p>
                  </div>
                )
              })
            }

          </div>
        </div>
      </section>
      {/* COUNTING END */}

      {/* HAPPY STUDENTS START */}
      <div className='container pd-y'>

        <div className='d-flex'>
          <div className='w-50 happy'>
            <p className='happy-head'>Happy Students
              <div className='line'></div>
            </p>
            <h1>Alumni Speak</h1>
            <PiQuotesFill className='happy-icon'></PiQuotesFill>
            <p className='detail'>Very good Institute for the Computer courses. They are always ready to provide the help required. The courses are very well designed, and lab sessions gives you hands on experience. Once you complete the course, you will be very well equipped to clear interview and land in good job.</p>

            <div className='happy-bottom d-flex'>
              <img src={img12}></img>
              <div className='bottom-con'>
                <h3>Goti Shruti</h3>
                <h5><i>Andriod Developer</i> <span>@ KD Infotech</span></h5>
              </div>
            </div>
          </div>

          <div className='w-50 happy-img'>
            <div style={{
              width: '500px',
              height: '500px',
              backgroundImage: `url(${img13})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

              <div className='happy1'>
                <img src={img14}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HAPPY STUDENTS END */}

      {/* READ OUR DIFFERENCE START */}
      <div className='read-bg'>
        <div className='pd-y container read'>
          <p className='read-head'>Read Our Difference
            <div className='line'></div>
          </p>
          <h1>Why Choose Creative</h1>

          <div className='d-flex flex-wrap read-img'>

            {
              choose.map((ele, ind) => {
                return (
                  <div className='read-1 read1' key={ind}>
                    <img src={ele.image}  id={ele.pid}></img>

                    <h3>{ele.head}</h3>
                    <p>{ele.para}</p>
                  </div>
                )
              })
            }

          </div>

        </div>
      </div>
      {/* READ OUR DIFFERENCE END */}

      {/* STUDENT PLACEMENT START*/}
      <div className='pd-y container student'>
        <p className='student-head'>Student Placement
          <div className='line'></div>
        </p>
        <h1>Our Recruitment Partners</h1>

        <OwlCarousel className='owl-theme std-img' loop margin={25} nav={false} items={6} dots={false} autoplay={true} autoplayTimeout={3000}>
          {
            slider_std.map((ele, ind) => {
              return (
                <div class='item' className='std'>
                  <img src={ele.image}></img>
                </div>
              )
            })
          }
        </OwlCarousel>


        <h2>Our Demanded Course -</h2>

        <div className='d-flex flex-wrap btn-demand'>
          {
            demand.map((ele, ind) => {
              return (
                <a href=''>{ele}</a>
              )
            })
          }
          <h5>Show More</h5>
        </div>
      </div>
      {/* STUDENT PLACEMENT END*/}

      {/* FOOTER START */}
      <footer className='footer-bg'>
        <div className='pd-y container d-flex'>
          <div className='footer-p p-1'>
            <img src={white}></img>
            <p>Creative Design and Multimedia Institute is
              leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
            <h2>Follow Us On</h2>
            <div className='icon'>
              <IoLogoFacebook className='footer-icon'></IoLogoFacebook>
              <IoLogoTwitter className='footer-icon'></IoLogoTwitter>
              <FaGooglePlusG className='footer-icon'></FaGooglePlusG>
              <IoLogoLinkedin className='footer-icon'></IoLogoLinkedin>
              <IoLogoInstagram className='footer-icon'></IoLogoInstagram>
              <IoLogoYoutube className='footer-icon'></IoLogoYoutube>
              <IoLogoWhatsapp className='footer-icon'></IoLogoWhatsapp>
            </div>
          </div>
          <div className='footer-p p-2'>
            <h4>Feature Links</h4>
            <ul>
              <li><FaHandPointRight className='footer-icon'></FaHandPointRight>About Us</li>
              <li><FaHandPointRight className='footer-icon'></FaHandPointRight>Blogs</li>
              <li><FaHandPointRight className='footer-icon'></FaHandPointRight>Join Us</li>
              <li><FaHandPointRight className='footer-icon'></FaHandPointRight>Company Login</li>
              <li><FaHandPointRight className='footer-icon'></FaHandPointRight>Certificate Verification</li>
            </ul>
          </div>
          <div className='footer-p p-3'>
            <h4>Contact Us</h4>
            <h3>HEAD OFFICE - YOGICHOWK</h3>
            <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
            <h5>Mo :<span>+91 90333 16003</span></h5>
            <h3>Other Branches</h3>

            <ul>
              <li><FaUniversity className='footer-icon'></FaUniversity>Katargam</li>
              <li><FaUniversity className='footer-icon'></FaUniversity>Mota Varachha</li>
              <li><FaUniversity className='footer-icon'></FaUniversity>Adajan</li>
              <li><FaUniversity className='footer-icon'></FaUniversity>Navsari</li>
            </ul>
          </div>
        </div>
      </footer>
      {/* FOOTER END */}

      {/* COPYRIGHT START */}
      <div className='copyright'>
        <div className='container'>
          <h3>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</h3>
        </div>
      </div>
      {/* COPYRIGHT END */}

    </div>
  );
}

export default App;

