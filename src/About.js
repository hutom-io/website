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
              <h3>ABOUT US</h3>
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
                    <div label="MEMBERS">
                      <div className="peopleList">
                        <h4 className="contentTitle left"> MEMBERS</h4>
                          <div className="top">
                          <img src={require('./assets/images/memberProfile/C level/ceo_hyung.png')} alt="ceo"/>
                          <div className="info">
                            <p className="position">CEO</p>
                            <h5 className="name">Woo Jin Hyung </h5>
                            <ul>
                              <li>
                                - Head of Professor, Department of Surgery,<br/>
                                  Yonsei University College of Medicine, Seoul, Korea
                              </li>
                              <li>
                                - Chief, Division of Upper Gastrointestinal Surgery,<br/>
                                  Severance Hospital, Yonsei University Health System,<br/>
                                  Seoul, Korea
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="list">
                          {/* <li>
                            <img src={require('./assets/images/memberProfile/C level/doug_lee.png')} alt="COO VP"/>
                              <div className="info">
                                <p className="position">COO · VP</p>
                                <h5 className="name">Douglas Lee </h5>
                              </div>
                          </li> */}
                          <li>
                            <img src={require('./assets/images/memberProfile/C level/sooheang_eo.png')} alt="CTO"/>
                            <div className="info">
                              <p className="position">CTO</p>
                              <h5 className="name">Soo-Heang Eo</h5>
                            </div>
                          </li>

                          <li>
                            <img src={require('./assets/images/memberProfile/C level/joonmo_kim.png')} alt="Chief AI Officer"/>
                            <div className="info">
                              <p className="position">Chief AI Scientist</p>
                              <h5 className="name">Joonmo Kim</h5>
                            </div>
                          </li>

                          <li>
                            <img src={require('./assets/images/memberProfile/Member/minkook_choi.png')} alt="Research Scientist"/>
                            <div className="info">
                              <p className="position">Research Scientist</p>
                              <h5 className="name">Min-Kook Choi</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/memberProfile/Member/heonjin_ha.png')} alt="Research Engineer"/>
                            <div className="info">
                              <p className="position">Research Engineer</p>
                              <h5 className="name">Heonjin Ha</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/memberProfile/Member/sunghwan_heo.png')} alt="Software Engineer"/>
                            <div className="info">
                              <p className="position">Software Engineer</p>
                              <h5 className="name">Sung-Hwan Heo</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/memberProfile/Member/geunho_jang.png')} alt="Software Engineer"/>
                            <div className="info">
                              <p className="position">Software Engineer</p>
                              <h5 className="name">Geun-ho Jang</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/memberProfile/Member/hajin_kim.png')} alt="UX/UI Planner"/>
                            <div className="info">
                              <p className="position">UX·UI Planner</p>
                              <h5 className="name">Hajin Kim</h5>
                            </div>
                          </li>

                          <li>
                          <img src={require('./assets/images/memberProfile/Member/jisu_lee.png')} alt="Annotation Specailist"/>
                            <div className="info">
                              <p className="position">UI Designer</p>
                              <h5 className="name">Jisu Lee</h5>
                            </div>
                          </li>

                          <li>
                          <img src={require('./assets/images/memberProfile/Member/jiwon_lee.png')} alt="Annotation Specailist"/>
                            <div className="info">
                              <p className="position">Data Researcher</p>
                              <h5 className="name">Jiwon Lee</h5>
                            </div>
                          </li>

                          <li>
                            <img src={require('./assets/images/memberProfile/Member/ranny_park.png')} alt="Management"/>
                            <div className="info">
                              <p className="position">Manager</p>
                              <h5 className="name">Ranny Park</h5>
                            </div>
                          </li>
                          <li>
                            <img src={require('./assets/images/memberProfile/Member/chihyun_song.png')} alt="Research Engineer"/>
                            <div className="info">
                              <p className="position">Research Engineer</p>
                              <h5 className="name">Chihyun Song</h5>
                            </div>
                          </li>

                          <li>
                            <img src={require('./assets/images/memberProfile/Member/hunmo_yang.png')} alt="Research Scientist"/>
                            <div className="info">
                              <p className="position">Research Engineer</p>
                              <h5 className="name">Hunmo Yang</h5>
                            </div>
                          </li>

                         
                          <li>
                            <img src={require('./assets/images/memberProfile/Member/hayoung_yu.png')} alt="3D Modeler" />
                            <div className="info">
                              <p className="position">3D Modeler</p>
                              <h5 className="name">HaYoung Yu</h5>
                            </div>
                          </li>

                          <li>
                            <img src={require('./assets/images/memberProfile/Member/seulgi_hong.png')} alt="Research Resident" />
                            <div className="info">
                              <p className="position">Research Resident</p>
                              <h5 className="name">Seul-gi Hong</h5>
                            </div>
                          </li>

                          <li>
                            <img src={require('./assets/images/memberProfile/Member/seungbum_hong.png')} alt="Research Resident" />
                            <div className="info">
                              <p className="position">Research Resident</p>
                              <h5 className="name">Seungbeom Hong</h5>
                            </div>
                          </li>

                          <li>
                            <img src={require('./assets/images/memberProfile/Member/songa_lee.png')} alt="Intern" />
                            <div className="info">
                              <p className="position">Intern</p>
                              <h5 className="name">Song-A Lee</h5>
                            </div>
                          </li>

                          <li>
                            <img src={require('./assets/images/memberProfile/Member/jayeon_lim.png')} alt="Intern" />
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
                        
                        <div className="top">
                          <img src={require('./assets/images/memberProfile/Clinical Advisor/edit/advisor_clinical_wyjung.jpg.png')} alt="MDPhD"/>
                          <div className="info">
                            <p className="position"> Professor </p>
                            <h5 className="name"> Woung Youn Chung, MD, PhD </h5>
                            <ul>
                              <li>
                                - Department of Surgery,<br/>
                                  Yonsei University College of Medicine, Seoul, Korea
                              </li>
                              <li>
                                - Thyroid Cancer
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="top">
                          <img src={require('./assets/images/memberProfile/Clinical Advisor/edit/advisor_clinical_swhan.jpg.png')} alt="MDPhD"/>
                          <div className="info">
                            <p className="position"> Professor </p>
                            <h5 className="name"> Sang-Uk Han, MD, PhD </h5>
                            <ul>
                              <li>
                                - Department of Surgery,<br/>
                                  Ajou University College of Medicine Suwon, Korea
                              </li>
                              <li>
                                - Gastric Cancer
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="top">
                          <img src={require('./assets/images/memberProfile/Technical Advisor/edit/advisor_tech_hellenhong.jpeg.png')} alt="MDPhD"/>
                          <div className="info">
                            <p className="position"> Professor </p>
                            <h5 className="name"> Hellen Hong, PhD </h5>
                            <ul>
                              <li>
                                - Department of Software Convergence,<br/>
                                Seoul Women's University Seoul, Seoul, Korea
                              </li>
                              <li>
                                - CT Reconstruction, Deep Learning, Computer Vision
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="top">
                          <img src={require('./assets/images/memberProfile/C level/joonmo_kim.png')} alt="MDPhD"/>
                          <div className="info">
                            <p className="position"> Associate Professor </p>
                            <h5 className="name"> Joonmo Kim, PhD </h5>
                            <ul>
                              <li>
                                - School of Electrical Engineering,<br/>
                                Korea Advanced Institute of Science and Technology, <br/>
                                Daejeon, Korea
                              </li>
                              <li>
                                - Deep Learning, Computer Vision
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="top">
                          <img src={require('./assets/images/memberProfile/Clinical Advisor/edit/advisor_clinical_shkim.jpeg.png')} alt="MDPhD"/>
                          <div className="info">
                            <p className="position"> Professor </p>
                            <h5 className="name"> Seon-Hahn Kim, MD, PhD </h5>
                            <ul>
                              <li>
                                - Department of Surgery,<br/>
                                Korea University College of Medicine, Seoul, Korea
                              </li>
                              <li>
                                - Colon Cacner, Rectal Cancer
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="top">
                          <img src={require('./assets/images/memberProfile/Clinical Advisor/edit/advisor_clinical_ymkim.jpg.png')} alt="MDPhD"/>
                          <div className="info">
                            <p className="position"> Assistant Professor </p>
                            <h5 className="name"> Yoo Min Kim, MD, PhD </h5>
                            <ul>
                              <li>
                                - Department of Surgery,<br/>
                                Yonsei University College of Medicine, Seoul, Korea
                              </li>
                              <li>
                                - Gastric Cancer
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="top">
                          <img src={require('./assets/images/memberProfile/Clinical Advisor/edit/advisor_clinical_kylee.jpg.png')} alt="MDPhD"/>
                          <div className="info">
                            <p className="position"> Professor </p>
                            <h5 className="name"> Kil Yeon Lee, MD, PhD </h5>
                            <ul>
                              <li>
                                - Department of Surgery,<br/>
                                Kyung Hee University School of Medicine, Seoul, Korea
                              </li>
                              <li>
                                - Colon Cancer, Rectal Cancer
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="top">
                          <img src={require('./assets/images/memberProfile/Clinical Advisor/edit/advisor_clinical_shlee.png')} alt="MDPhD"/>
                          <div className="info">
                            <p className="position"> Assistant Professor </p>
                            <h5 className="name"> Sohee Lee, MD, PhD </h5>
                            <ul>
                              <li>
                                - Department of Surgery,<br/>
                                The Catholic University of Korea College of Medicine, <br/>
                                Seoul, Korea
                              </li>
                              <li>
                                - Thyroid Cancer
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="top">
                          <img src={require('./assets/images/memberProfile/Clinical Advisor/edit/advisor_clinical_jslim.jpg.png')} alt="MDPhD"/>
                          <div className="info">
                            <p className="position"> Professor </p>
                            <h5 className="name"> Joon seok Lim, MD, PhD </h5>
                            <ul>
                              <li>
                                - Department of Radiology,<br/>
                                  Yonsei University College of Medicine, Seoul, Korea
                              </li>
                              <li>
                                - Vice Director of Yonsei Cancer Center, Seoul, Korea
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="top">
                          <img src={require('./assets/images/memberProfile/Clinical Advisor/edit/advisor_clinical_kysong.png')} alt="MDPhD"/>
                          <div className="info">
                            <p className="position"> Professor </p>
                            <h5 className="name"> Kyo Young Song, MD, PhD </h5>
                            <ul>
                              <li>
                                - Department of Surgery,<br/>
                                The Catholic University of Korea College of Medicine, <br/>
                                Seoul, Korea
                              </li>
                              <li>
                                - Gastric Cancer
                              </li>
                            </ul>
                          </div>
                        </div>
                      </ul>
                      </div>
                    </div>
                    <div label="BOARD MEMBERS">
                    <div className="peopleList">
                    <ul className="list">
                      <li>
                        <img src={require('./assets/images/memberProfile/C level/ceo_hyung.png')} alt="ceo"/>
                        <div className="info">
                          <p className="position"> CEO <br/> hutom </p>
                          <h5 className="name">Woo Jin Hyung</h5>
                        </div>
                        </li>
                        {/* <li>
                          <img src={require('./assets/images/memberProfile/C level/doug_lee.png')} alt="COO VP"/>
                          <div className="info">
                            <p className="position"> COO · VP <br/> hutom </p>
                            <h5 className="name">Douglas Lee</h5>
                          </div>
                        </li> */}
                        <li>
                          <img src={require('./assets/images/memberProfile/C level/joonmo_kim.png')} alt="Chief AI Scientist"/>
                          <div className="info">
                            <p className="position"> Professor <br/> KAIST </p>
                            <h5 className="name">Joonmo Kim</h5>
                          </div>
                        </li>
                        <li>
                          <img src={require('./assets/images/memberProfile/Clinical Advisor/edit/advisor_clinical_jslim.jpg.png')} alt="Professor"/>
                          <div className="info">
                            <p className="position"> Vice Director <br/> Yonsei Cancer Center </p>
                            <h5 className="name">Joon seok Lim</h5>
                          </div>
                        </li>
                        <li>
                          <img src={require('./assets/images/memberProfile/Technical Advisor/edit/advisor_tech_hellenhong.jpeg.png')} alt="Professor"/>
                          <div className="info">
                          <p className="position"> Professor <br/> Seoul Women's Univ. </p>
                            <h5 className="name">Hellen Hong</h5>
                          </div>
                        </li>
                        <li>
                          <img src={require('./assets/images/memberProfile/C level/mk_kim.png')} alt="CEO of LSK Investment"/>
                          <div className="info">
                            <p className="position"> CEO <br/> LSK Investment </p>
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
                <h4 className="contentTitle">ADVISORS</h4>
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
