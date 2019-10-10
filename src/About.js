import React, { Component } from 'react';
import './assets/scss/style.scss';
import Tabs from './components/Tabs'
import Slider from "react-slick";

class About extends Component {

  constructor(props){
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
   this.setState({
     showPopup: !this.state.showPopup
   });
 }

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
        <main className="container about">
            <section className="title">
              <h3>ABOUT</h3>
            </section>
            <section className="content">
              <article>
                <h4 className="contentTitle">VISION</h4>
                <p className="contentText">HuToM provides better robotic surgical opportunities for the patients with genuine human touch.<br/>
                  The technology of HuToM is based on artificial intelligence throughout the surgery<br/>
                  resulting in reduction of operation time and postoperative complications to improve patients’ qualify of life.<br/>
                  This will reduce total medical care costs and provide a wide range of surgical opportunities for the patients.
                </p>
              </article>
              <article>
                <h4 className="contentTitle">OUR TEAM</h4>
                <div className="tabContainer">
                  <Tabs>
                    <div label="MEMBER">
                      <div className="peopleList">
                        <div className="top">
                          <img src={require('./assets/images/about/employee01.png')} alt="ceo"/>
                          <div className="info">
                            <p className="position">CEO</p>
                            <h5 className="name">형우진 / MD,PhD</h5>
                            <ul>
                              <li>
                                - Professor, Department of Surgery,<br/>
                                  Yonsei University College of Medicine
                              </li>
                              <li>
                                - Chief, Division of Upper Gastrointestinal Surgery,<br/>
                                  Severance Hospital, Yonsei University Health System
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h4 className="contentTitle left">BOARD MEMBER</h4>
                        <ul className="list">
                          <li>
                            <img src={require('./assets/images/about/employee01.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">CEO</p>
                              <h5 className="name">Woojin Hyung</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/employee03.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">COO · VP</p>
                              <h5 className="name">Douglas Lee</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/employee04.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">Chief AI Officer</p>
                              <h5 className="name">Joonmo Kim</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/employee05.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">Advisor Professor</p>
                              <h5 className="name">Hellen Hong</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/employee06.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">Advisor Professor</p>
                              <h5 className="name">Myung Kee Kim</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/employee07.png')} alt="ceo"/>
                            <div className="info">
                              <h5 className="name">J.H. Lee</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/employee09.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">Mamagement</p>
                              <h5 className="name">Ranny Park</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/employee08.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">esearch Scientist</p>
                              <h5 className="name">Min-Kook Choi</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/employee10.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">Research Scientist</p>
                              <h5 className="name">Hunmo Yang</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/employee11.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">Software Engineer</p>
                              <h5 className="name">Sung-Hwan Heo</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/employee12.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">Software Engineer</p>
                              <h5 className="name">Geun-ho Jang</h5>
                            </div>
                          </li>
                          <li>
                          <img src={require('./assets/images/about/employee14.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">Annotation Specialist</p>
                              <h5 className="name">Jiwon Lee</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/employee15.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">Research Engineer</p>
                              <h5 className="name">Chihyun Song</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/employee16.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">Research Engineer</p>
                              <h5 className="name">Heonjin Ha</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/employee17.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">UX·UI Planner</p>
                              <h5 className="name">Hajin Kim</h5>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div label="CLINICAL ADVISORY">
                    <div className="peopleList">
                    <ul className="list">
                          <li>
                            <img src={require('./assets/images/about/clinical_advisory01.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">MD, PhD</p>
                              <h5 className="name">Joon seok Lim</h5>
                              <ul>
                                <li>
                                  - Professor, 
                                  Department of Radiology
                                </li>
                                <li>
                                  - Vice Director
                                  of Tonsei Cancer Center
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/clinical_advisory02.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">MD, PhD</p>
                              <h5 className="name">정웅윤</h5>
                              <ul>
                                <li>
                                - 연세대학교 의과대학 외과학교실 교수
                                </li>
                                <li>
                                - 갑상선암, 부갑상선질환 
                                경부질환 전문의
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/clinical_advisory03.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">MD, PhD</p>
                              <h5 className="name">한상욱</h5>
                              <ul>
                                <li>
                                - 아주대학교 의과대학 외과학교실 교수
                                </li>
                                <li>
                                - 위암, 식도역류질환 수술 전문의
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/clinical_advisory04.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">MD, PhD</p>
                              <h5 className="name">김선한</h5>
                              <ul>
                                <li> - 고려대학교 의과대학 외과학교실 교수
                                </li>
                                <li>
                                - 대장암, 직장암 전문의
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/clinical_advisory05.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">MD, PhD</p>
                              <h5 className="name">김유민</h5>
                              <ul>
                                <li>- CHA의과학대학교 외과학교실 조교수
                                </li>
                                <li>- 위암, 종양외과 전문의
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div label="TECHNICAL ADVISORY">
                    <div className="peopleList">
                    <ul className="list">
                          <li>
                            <img src={require('./assets/images/about/technical_advisory01.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">PhD</p>
                              <h5 className="name">Joonmo Kim</h5>
                              <p>Associate Professor
                                School of 
                                Electrical Engineering,
                                KAIST
                              </p>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/about/technical_advisory02.png')} alt="ceo"/>
                            <div className="info">
                              <p className="position">PhD</p>
                              <h5 className="name">Helen Hong</h5>
                              <p>Professor
                                Department of 
                                Software Convergence,
                                Seoul Women's University
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Tabs>
                </div>
                <button className="btn md primary"><a rel="noopener noreferrer" href="https://www.wanted.co.kr/company/2057" target="_blank" className="join-us">JOIN US</a></button>
              </article>
              <article>
                <h4 className="contentTitle">ADVISOR</h4>
                <Slider {...settings}>
                  <div>
                    <img src={require('./assets/images/about/advisor_01.png')} alt=""/>
                  </div>
                  <div>
                    <img src={require('./assets/images/about/advisor_02.png')} alt=""/> 
                  </div>
                  <div>
                    <img src={require('./assets/images/about/advisor_03.png')} alt=""/>
                  </div>
                  <div>
                    <img src={require('./assets/images/about/advisor_01.png')} alt=""/>
                  </div>
                  <div>
                    <img src={require('./assets/images/about/advisor_02.png')} alt=""/> 
                  </div>
                  <div>
                    <img src={require('./assets/images/about/advisor_03.png')} alt=""/>
                  </div>
                </Slider>
              </article>
            </section>
        </main>
        <footer>
          <div className="wrap">
            <p>© 2019 hutom. All rights reserved.</p>
            <p>6F #615, 21, Baekbeom-ro 31-gil, Mapo-gu, Seoul(04147), Republic of Koreaa</p>
          </div>
        </footer>

        {/* {this.state.showPopup ?
          <div className='popup'>
            <div className='popupInner'>
              <div className="popupTitle">
                <h3>JOIN</h3>
                <button onClick={this.togglePopup.bind(this)} className="closeBtn">
                  <i className="material-icons">
                  cancel
                  </i>
                </button>
              </div>
              <div className="popupContent">
                <div className="formItem">
                  <label>Job position</label>
                  <select name="" id="">
                    <option value="">select</option>
                    <option value="job">job</option>
                    <option value="position">position</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="Your name"
                />
                <input
                  type="text"
                  placeholder="Your email"
                />
                <input
                  type="text"
                  placeholder="Phone"
                />
                <div className="formItem">
                  <label>Portfolio & resume</label>
                  <button className="btn line sm">Attachment</button>
                </div>
                <textarea name="" id="" cols="30" rows="4" placeholder="Type your Message...">

                </textarea>
                <div className="btnWrap">
                  <button className="btn md primary" onClick={this.togglePopup.bind(this)} color="primary">SEND
                      <i className="material-icons">
                      keyboard_arrow_right
                      </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
            : null
          } */}
      </div>
    );
  }
}

export default About;
