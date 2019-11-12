import React, { Component } from 'react';
import './assets/scss/style.scss';
import Slider from "react-slick";
//import main_video from './assets/images/main_video.mp4'
//import { Link, Route } from 'react-router-dom';

class Home extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
      <div>
        <main className="container home">
            <section className="title">
              
              <div className="wrap">
                  <h3>Unraveling Surgery<br/>
                  Caring Patients</h3>
                  <p> We encode moments, decode meanings </p>
              </div>
            </section>
            <section className="content">
              <article className="introduce">
                  <p>The innovative technology of the Hutom Surgical Platform begins with an intuitive, analytical diagnosis of the patient's specificity and a simulated examination of the surgery through processing, recognition, analysis, and prediction of surgical videos. This information leads to a seamless operation by a surgeon, increasing the completion of the operation.In addition, our Surgical Platform provides an interactive report, which is utilized for the management of patient complications. It also has a positive effect on the surgeon's surgical methods. <br/> 
                  Our value chains eventually provide positive value to stakeholders and the Surgical Platform continues to become intelligent and developed.</p>
                <div className="imgWrap">
                  <img src={require('./assets/images/home/company_banner.png')} alt="content img" />
                  {/* <div className="img-content1"></div> */}
                </div>
              </article>
              <article>
                <ul className="departmentList">
                  <li>
                    <div className="box">
                      <div className="imgWrap">   
                        <p>
                          <img src={require('./assets/images/home/ic01.png')} alt="content img"/>
                        </p>
                      </div>
                      <h5 className="name">Patient</h5>
                      <p className="position">Early recovery <br/> Less complications 
                        <img src={require('./assets/images/home/bar.png')} alt=""/>
                        </p>
                      <ol>
                        <li>Better quality of life</li>
                        <li>Improving surgical outcomes </li>
                        <li>Less post-operative complications</li>
                      </ol>
                    </div>
                  </li>
                  <li>
                    <div className="box">
                      <div className="imgWrap">   
                        <p>
                          <img src={require('./assets/images/home/ic02.png')} alt="" />
                        </p>
                      </div>
                      <h5 className="name"> Surgeon </h5>
                      <p className="position"> Fair environment <br/> for surgeons  
                      <img src={require('./assets/images/home/bar.png')} alt=""/>
                      </p>
                      <ol>
                        <li>Solving the unsatisfied desires of the surgeon </li>
                        <li>Reducing learning curve for surgical procedures </li>
                        <li>Preventing intra-operative accidents and adverse events</li>
                      </ol>
                    </div>
                  </li>
                  <li>
                    <div className="box">
                      <div className="imgWrap">   
                        <p>
                          <img src={require('./assets/images/home/ic03.png')} alt=""/>
                        </p>
                      </div>
                      <h5 className="name">Robot Company</h5>
                      <p className="position"> Expanding the surgical <br/> robot market  <br/> &nbsp; 
                        <img src={require('./assets/images/home/bar.png')} alt=""/>
                      </p>
                      <ol>
                        <li>Improving stability and reliability of surgical robot</li>
                        <li>Solution for future technology</li>
                        
                      </ol>
                    </div>
                  </li>
                  <li>
                    <div className="box">
                      <div className="imgWrap">   
                        <p>
                          <img src={require('./assets/images/home/ic04.png')} alt=""/>
                        </p>
                      </div>
                      <h5 className="name">Insurance Company</h5>
                      <p className="position"> Reducing total medical cost <br/> &nbsp;
                      <br/>
                       <img src={require('./assets/images/home/bar.png')} alt=""/>
                      </p>
                      <ol>
                        <li>Reduction of cost for complication management</li>
                      </ol>
                    </div>
                  </li>
                </ul>
              </article>
              <article >
                <div className="provideTitle">
                  <img src={require('./assets/images/home/the-product-we-provide.png')} alt=""/>
                </div>
              </article>
              <article className="provideList">
                <div className="imgWrap">   
                  <img src={require('./assets/images/home/rehearsal.png')} alt="content img"/>
                </div>
                <div className="wrap">
                  <h5>Surgical Rehearsal</h5>
                  <p> Instead of a training tool for operating the surgical robot, hutom's surgical reheasal platform is a service that enhances the perfection of surgery by performing the surgical procedure on patient-specific anatomical models in advance,  obtaining the best surgical methods, and utilizing them in real-world surgery.
                  </p>
                </div>
              </article>
              <article>
                <div className="contentTitle advisor2">
                <h4 >ADVISORS <br/>
                <img src={require('./assets/images/home/bar2.png')} alt=""/> 
                </h4>
                
                <Slider {...settings}>
                    <div>
                      <img src={require('./assets/images/about/YONSEI.png')} alt=""/>
                    </div>
                    <div>
                      <img src={require('./assets/images/about/KAIST.png')} alt=""/> 
                    </div>
                    <div>
                      <img src={require('./assets/images/about/SEOUL WOMEN.png')} alt=""/>
                    </div>
                </Slider>
                </div> 
              </article>
              <article className="provideList">
                <div className="wrap">
                  <h5>Surgical Navigation</h5>
                  <p> The hutom's Surgical AI platform recognizes surgical video and produces a medical description. It produces innovative reports that compare with optimal surgery, as well as analysis of the surgical process and prediction of the surgical outcome.
                  </p>
                </div>
                <div className="imgWrap">   
                    <img src={require('./assets/images/home/navi.png')} alt="content img"/>
                </div>
              </article>     
              <article>
                <div className="contentTitle advisor2">
                <h4>PARTNERS<br/>
                <img src={require('./assets/images/home/bar2.png')} alt=""/> </h4>
                <Slider {...settings}>
                    <div>
                      <img src={require('./assets/images/about/SEVERANCE.png')} alt=""/>
                    </div>
                    <div>
                      <img src={require('./assets/images/about/Catholic Eunpyeong.png')} alt=""/> 
                    </div>
                    <div>
                      <img src={require('./assets/images/about/Catholic Seoul.png')} alt=""/>
                    </div>
                    <div>
                      <img src={require('./assets/images/about/KOREA.png')} alt=""/>
                    </div>
                    <div>
                      <img src={require('./assets/images/about/KYUNGHEE.png')} alt=""/>
                    </div>
                  </Slider>
                </div>
              </article>
              <article className="provideList">
                  <div className="imgWrap">   
                    <img src={require('./assets/images/home/analytics.png')} alt="content img"/>
                  </div>
                  <div className="wrap">
                    <h5>Surgical Analytics</h5>
                    <p> A real-time based PaaS (Platform as a Service) solution that uses patient-specific 3D models to rovide anatomical information that is difficult to identify with images in combination with surgical information. 
                    </p>
                  </div>
              </article>
            </section>
        </main>
        <footer>
          <div className="wrap">
            <p>© 2019 hutom. All rights reserved.</p>
            <p>Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (04147) 6F #615, 21, Baekbeom-ro 31-gil, Mapo-gu, Seoul, Republic of Korea
              <br/>
              <br/>
              Call US &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ranny Park, Manager   TEL: +82-2-6956-0426   Email: contact@hutom.io
            </p>
          </div>
        </footer>
      </div>
    );
  };
};

export default Home;
