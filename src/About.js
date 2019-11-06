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
                <p className="contentText">The hutom provides better robotic surgical opportunities for the patients with genuine human touch.<br/>
                  Our technology is based on artificial intelligence throughout the surgery<br/>
                  resulting in reduction of operation time and postoperative complications to improve patients’ qualify of life.
                </p>
              </article>
              <article>
                <h4 className="contentTitle">TEAM</h4>
                <div className="tabContainer">
                  <Tabs>
                    <div label="MEMBER">
                      <div className="peopleList">
                        <h4 className="contentTitle left"> MEMBERS</h4>
                          <div className="top">
                          <img src={require('./assets/images/memberProfile/C level/edit/ceo_hyung.png')} alt="ceo"/>
                          <div className="info">
                            <p className="position">CEO</p>
                            <h5 className="name">Woojin Hyung </h5>
                            <ul>
                              <li>
                                - Head of Professor, Department of Surgery,<br/>
                                  Yonsei University College of Medicine
                              </li>
                              <li>
                                - Chief, Division of Upper Gastrointestinal Surgery,<br/>
                                  Severance Hospital, Yonsei University Health System
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="top">
                          <img src={require('./assets/images/memberProfile/C level/edit/coo_dmlee.png')} alt="COO VP"/>
                          <div className="info">
                            <p className="position">COO · VP</p>
                            <h5 className="name">Douglas Lee </h5>
                            <ul>
                              <li>
                                - xxxx
                              </li>
                              <li>
                                - xxxx
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="top">
                          <img src={require('./assets/images/memberProfile/C level/edit/cto_eo.png')} alt="CTO"/>
                          <div className="info">
                            <p className="position">CTO</p>
                            <h5 className="name"> Soo-Heang Eo </h5>
                            <ul>
                              <li>
                                - ssss
                              </li>
                              <li>
                                - ssss
                              </li>
                            </ul>
                          </div>
                        </div>


                        <ul className="list">
                          <li>
                            <img src={require('./assets/images/memberProfile/C level/edit/cto_eo.png')} alt="CTO"/>
                            <div className="info">
                              <p className="position">CTO</p>
                              <h5 className="name">Soo-Heang Eo</h5>
                            </div>
                          </li>

                          <li>
                            <img src={require('./assets/images/memberProfile/C level/edit/cais_jmkim.png')} alt="Chief AI Officer"/>
                            <div className="info">
                              <p className="position">Chief AI Scientist</p>
                              <h5 className="name">Joonmo Kim</h5>
                            </div>
                          </li>

                          <li>
                            <img src={require('./assets/images/memberProfile/Member/edit/member_minkookchoi.png')} alt="Research Scientist"/>
                            <div className="info">
                              <p className="position">Research Scientist</p>
                              <h5 className="name">Min-Kook Choi</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/memberProfile/Member/edit/member_hunjinha.png')} alt="Research Engineer"/>
                            <div className="info">
                              <p className="position">Research Engineer</p>
                              <h5 className="name">Heonjin Ha</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/memberProfile/Member/edit/member_sunghwanheo.png')} alt="Software Engineer"/>
                            <div className="info">
                              <p className="position">Software Engineer</p>
                              <h5 className="name">Sung-Hwan Heo</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/memberProfile/Member/edit/member_geunhojang.png')} alt="Software Engineer"/>
                            <div className="info">
                              <p className="position">Software Engineer</p>
                              <h5 className="name">Geun-ho Jang</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/memberProfile/Member/edit/member_hajinkim.jpg.png')} alt="UX/UI Planner"/>
                            <div className="info">
                              <p className="position">UX·UI Planner</p>
                              <h5 className="name">Hajin Kim</h5>
                            </div>
                          </li>
                          <li>
                          <img src={require('./assets/images/memberProfile/Member/edit/member_jiwonlee.png')} alt="Annotation Specailist"/>
                            <div className="info">
                              <p className="position">Data Researcher</p>
                              <h5 className="name">Jiwon Lee</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/memberProfile/Member/edit/member_rannypark.png')} alt="Management"/>
                            <div className="info">
                              <p className="position">Manager</p>
                              <h5 className="name">Ranny Park</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/memberProfile/Member/edit/member_chihyunsong.png')} alt="Research Engineer"/>
                            <div className="info">
                              <p className="position">Research Engineer</p>
                              <h5 className="name">Chihyun Song</h5>
                            </div>
                          </li>

                          <li>
                            <img src={require('./assets/images/memberProfile/Member/edit/member_hunmoyang.png')} alt="Research Scientist"/>
                            <div className="info">
                              <p className="position">Research Engineer</p>
                              <h5 className="name">Hunmo Yang</h5>
                            </div>
                          </li>

                         
                          <li>
                            <img src={require('./assets/images/memberProfile/Member/edit/member_haueongyu.jpg.png')} alt="3D Modeler" />
                            <div className="info">
                              <p className="position">3D Modeler</p>
                              <h5 className="name">HaYoung Yu</h5>
                            </div>
                          </li>

                          <li>
                            <img src={require('./assets/images/memberProfile/Member/edit/member_seulgihong.jpg.png')} alt="Research Resident" />
                            <div className="info">
                              <p className="position">Research Resident</p>
                              <h5 className="name">Seul-gi Hong</h5>
                            </div>
                          </li>

                          <li>
                            <img src={require('./assets/images/memberProfile/Member/edit/member_songalee.jpeg.png')} alt="Intern" />
                            <div className="info">
                              <p className="position">Intern</p>
                              <h5 className="name">Song-A Lee</h5>
                            </div>
                          </li>

                          <li>
                            <img src={require('./assets/images/memberProfile/Member/edit/member_jayeonlim.jpg.png')} alt="Intern" />
                            <div className="info">
                              <p className="position">Intern</p>
                              <h5 className="name">Jayeon Lim</h5>
                            </div>
                          </li>
                         

                        </ul>
                      </div>
                    </div>
                    <div label="ADVISORS">
                    <div className="peopleList">
                    <ul className="list">
                          <li>
                            <img src={require('./assets/images/memberProfile/Clinical Advisor/edit/advisor_clinical_jslim.jpg.png')} alt="MD PhD"/>
                            <div className="info">
                              <h5 className="name">Joon seok Lim</h5>
                              <ul>
                                <li>
                                  - Department of Radiology 
                                </li>
                                <li>
                                  Yonsei University College of Medicine Seoul, Korea
                                </li>
                                <li>
                                  - Vice Director of Yonsei Cancer Center, Korea
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/memberProfile/Clinical Advisor/edit/advisor_clinical_wyjung.jpg.png')} alt="MD PhD"/>
                            <div className="info">
                              <h5 className="name">Woung Youn Chung</h5>
                              <ul>
                                <li>
                                - Department of Surgery
                                <li>
                                - Younsei College of Medicine
                                Seoul, Korea
                                </li>
                                </li>
                                <li>
                                - Thyroid Cancer
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/memberProfile/Clinical Advisor/edit/advisor_clinical_swhan.jpg.png')} alt="MD PhD"/>
                            <div className="info">
                              <h5 className="name">Sang-Uk Han</h5>
                              <ul>
                                <li>
                                - Department of Surgery 
                                </li>
                                <li>
                                - Ajou University College of Medicine Suwon, Korea
                                </li>
                                <li>
                                - Gastric Cancer
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <img src={require('./assets/images/memberProfile/Technical Advisor/edit/advisor_tech_hellenhong.jpeg.png')} alt="ceo"/>
                            <div className="info">
                              <h5 className="name">Hellen Hong</h5>
                              <ul>
                                <li>
                                - Department of Software Convergence
                                </li>
                                <li>
                                - Seoul Women's University Seoul, Korea
                                </li>
                                <li>
                                - CT Reconstruction, Deep Learning, Computer Vision
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <img src={require('./assets/images/memberProfile/C level/edit/cais_jmkim.png')} alt="PhD"/>
                            <div className="info">
                              <h5 className="name">Joonmo Kim</h5>
                              <ul>
                                <li>
                                - School of Electrical Engineering
                                </li>
                                <li>
                                - Korea Advanced Institute of Science and Technology Daejeon, Korea
                                </li>
                                <li>
                                - Deep Learning, Computer Vision
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li>
                            <img src={require('./assets/images/memberProfile/Clinical Advisor/edit/advisor_clinical_shkim.jpeg.png')} alt="MD PhD"/>
                            <div className="info">
                              <h5 className="name">Sunhan Kim</h5>
                              <ul>
                                <li> 
                                - Department of Surgery 
                                </li>
                                <li>
                                - Korea University College of Medicine Seoul, Korea
                                </li>
                                <li>
                                - Colon Cacner, Rectum Cancer
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/memberProfile/Clinical Advisor/edit/advisor_clinical_ymkim.jpg.png')} alt="MD PhD"/>
                            <div className="info">
                              <h5 className="name">Yoo Min Kim</h5>
                              <ul>
                                <li>
                                - Department of Surgery
                                </li>
                                <li>
                                - Yonsei University College of Medicine, Seoul, Korea
                                </li>
                                <li>
                                - Gastric Cancer
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/memberProfile/Clinical Advisor/edit/advisor_clinical_kylee.jpg.png')} alt="MD PhD"/>
                            <div className="info">
                              <h5 className="name">Kil Yeon Lee</h5>
                              <ul>
                                <li>
                                - Department of Surgery
                                </li>
                                <li>
                                - Kyung Hee University School of Medicine Seoul, Korea
                                </li>
                                <li>
                                - Colon Cancer, Rectum Cancer
                                </li>
                              </ul>
                            </div>
                          </li>
                          {/* <li>
                            <img src={require('./assets/images/about/clinical_advisory05.png')} alt="MD PhD"/>
                            <div className="info">
                              <h5 className="name">Sohee Lee</h5>
                              <ul>
                                <li>
                                - Assistant Professor, Department of Surgery
                                </li>
                                <li>
                                - The Catholic University of Korea College of Medicine Seoul, Korea
                                </li>
                                <li>
                                - Thyroid Cancer
                                </li>
                              </ul>
                            </div>
                          </li> */}
                          <li>
                            <img src={require('./assets/images/memberProfile/Clinical Advisor/edit/advisor_clinical_kysong.png')} alt="MD PhD"/>
                            <div className="info">
                              <h5 className="name">Kyo Young Song</h5>
                              <ul>
                                <li>
                                - Department of Surgery
                                </li>
                                <li>
                                - The Catholic University of Korea College of Medicine, Seoul, Korea
                                </li>
                                <li>
                                - Gastric Cancer
                                </li>
                              </ul>
                            </div>
                          </li>

                        </ul>
                      </div>
                    </div>
                    <div label="BOARD MEMBER">
                    <div className="peopleList">
                    <ul className="list">
                      <li>
                        <img src={require('./assets/images/memberProfile/C level/edit/ceo_hyung.png')} alt="ceo"/>
                        <div className="info">
                          <h5 className="name">Woojin Hyung</h5>
                        </div>
                        </li>
                        <li>
                          <img src={require('./assets/images/memberProfile/C level/edit/coo_dmlee.png')} alt="COO VP"/>
                          <div className="info">
                            <h5 className="name">Douglas Lee</h5>
                          </div>
                        </li>
                        <li>
                          <img src={require('./assets/images/memberProfile/C level/edit/cais_jmkim.png')} alt="Chief AI Scientist"/>
                          <div className="info">
                            <h5 className="name">Joonmo Kim</h5>
                          </div>
                        </li>
                        <li>
                          <img src={require('./assets/images/memberProfile/Clinical Advisor/edit/advisor_clinical_jslim.jpg.png')} alt="Professor"/>
                          <div className="info">
                            <h5 className="name">Joon seok Lim</h5>
                          </div>
                        </li>
                        <li>
                          <img src={require('./assets/images/memberProfile/Technical Advisor/edit/advisor_tech_hellenhong.jpeg.png')} alt="Professor"/>
                          <div className="info">
                            <h5 className="name">Hellen Hong</h5>
                          </div>
                        </li>
                        <li>
                          <img src={require('./assets/images/memberProfile/C level/edit/member_board_mkkim.png')} alt="CEO of LSK Investment"/>
                          <div className="info">
                            <h5 className="name">Myung Kee Kim</h5>
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
