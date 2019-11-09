import React, { Component } from 'react';
import './assets/scss/style.scss';
import Slider from "react-slick";
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
                  for Caring Patients</h3>
                  <p>
                      We encode moments, decode meanings
                  </p>
              </div>
            </section>
            <section className="content">
              <article className="introduce">
                <p>Compared to conventional open surgery, proportion of laparoscopic or robotic surgery has been increased rapidly due to better surgical outcomes, 
                  even with its high cost.<br/> These changes are influenced on coverage of insurance system as well as patients’ preference. More importantly, the new platform which HUTOM is 
                  developing for surgical patients care is more suitable because laparoscopic or robotic surgery is performed in an environment of imaging and data. 
                </p>
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
                        <li>Better Quality of Life</li>
                        <li>Improved Survival Rate </li>
                        <li>Less postoperative complications</li>
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
                      <h5 className="name"> MD/Hospital</h5>
                      <p className="position"> Fair environment <br/> for surgeons  
                      <img src={require('./assets/images/home/bar.png')} alt=""/>
                      </p>
                      <ol>
                        <li>Reduction in Learning Curve for surgical procedures </li>
                        <li>Stability and reliability of surgery </li>
                        <li>Preventing intraoperative accidents and adverse events</li>
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
                        <li>Providing unmet needs of surgeons</li>
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
