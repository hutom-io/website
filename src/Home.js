import React, { Component } from 'react';
import './assets/scss/style.scss';
import Slider from "react-slick";
import { Link, Route } from 'react-router-dom';
import Solution from './Solution';

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
                  <h3>Smarter Surgery<br/>
                  and Safer.</h3>
                  <p>
                      With the <b>help</b> contemporary computer <b>technology</b>,<br/>
                      it is possible to create a <b>virtual surgical</b> simulation<br/>
                      and artificial Intelligence for Intraoperative video analysis.
                  </p>
              </div>
            </section>
            <section className="content">
              <article className="introduce">
                <p>Compared to conventional open surgery, proportion of laparoscopic or robotic surgery has been increased rapidly due to better surgical outcomes, 
                  even with its high cost.<br/> These changes are influenced by coverage of insurance system as well as patients’ preference. More importantly, the new platform which HUTOM is 
                  developing for surgical patients care is more suitable because laparoscopic or robotic surgery is performed in an environment of imaging and data. 
                </p>
                <div className="imgWrap">
                  {/* <img src={require('./assets/images/home/img-content.png')} alt="content img" /> */}
                  <div className="img-content1"></div>
                </div>
              </article>
              <article>
                <ul className="departmentList">
                  <li>
                    <div className="imgWrap">   
                      <img src={require('./assets/images/home/ic01.png')} alt=""/>
                    </div>
                    <h5>Patient</h5>
                    <p>Early recovery
                      and Less complications </p>
                    <ol>
                      <li>Better Quality of Life</li>
                      <li>Improved Survival Rate </li>
                      <li>Less postoperative complications</li>
                    </ol>
                  </li>
                  <li>
                    <div className="imgWrap">   
                      <img src={require('./assets/images/home/ic02.png')} alt=""/>
                    </div>
                    <h5 className="name">MD / Hospital</h5>
                    <p className="position">Providing fair environment to 
                      surgeons Supporting proper, 
                      accurate, and forehanded 
                      decision making </p>
                    <ol>
                      <li>Reduction in Learning Curve for surgical procedures </li>
                      <li>Stability and reliability of surgery </li>
                      <li>Preventing intraoperative accide-nts and adverse events</li>
                    </ol>
                  </li>
                  <li>
                    <div className="imgWrap">   
                      <img src={require('./assets/images/home/ic03.png')} alt=""/>
                    </div>
                    <h5 className="name">Robot Company</h5>
                    <p className="position">Expanding market share</p>
                    <ol>
                      <li>Providing unmet needs of surgeons</li>
                      <li>Solution for future technology</li>
                      <li>Achieving product differentiation to</li>
                    </ol>
                  </li>
                  <li>
                    <div className="imgWrap">   
                      <img src={require('./assets/images/home/ic04.png')} alt=""/>
                    </div>
                    <h5 className="name">Insurance Company</h5>
                    <p className="position">합병증으로 인한 수술 후 의료 비용 감소</p>
                    <ol>
                      <li>Reduction of cost for complication management</li>
                    </ol>
                  </li>
                </ul>
              </article>
              <article>
                <h4 className="provideTitle">
                  The <span>Product</span> We Provide
                </h4>
                <button className="moreBtn">
                    <Link to="/solution">More
                    <i className="material-icons">
                      keyboard_arrow_right
                    </i>
                    </Link>
                </button>
                <Route path="/solution" exact component={Solution} />
                <ul className="provideList">
                  <li>
                    <div className="imgWrap">   
                      <img src={require('./assets/images/home/icon_01.png')} alt=""/>
                    </div>
                    <h5>Surgical Rehearsal</h5>
                    <p>휴톰의 SR은 수술 로봇 작동의 숙련도를 확보하기 위한 
                      트레이닝 툴이 아닌, 환자 특이적 해부 모델을 대상으로 
                      수술 과정을 미리 수행하t고 최적의 수술 방법을 확보하여
                      실제 수술에서도 활용함으로써 수술의 완성도를 높이는 
                      서비스입니다.
                    </p>
                  </li>
                  <li>
                    <div className="imgWrap">   
                      <img src={require('./assets/images/home/icon_02.png')} alt=""/>
                    </div>
                    <h5>Surgical Navigation</h5>
                    <p>환자 특이적 3D 모델을 사용하여, 영상으로 확인하기 어려운 
                      해부학적 정보를 실제 수술 시 수술 영상과 정합하여 제공하는 
                      클라우딩 서비스입니다.
                    </p>
                  </li>
                  <li>
                    <div className="imgWrap">   
                      <img src={require('./assets/images/home/icon_03.png')} alt=""/>
                    </div>
                    <h5>Surgical Analytics</h5>
                    <p>휴톰의 Surgical AI 플랫폼은 수술 동영상을 
                      인식하여의학적인 의미를 갖는 Description을 
                      생산합니다. 이는 수술 과정에 대한 분석,수술 
                      결과에 대한 예측뿐만 아니라 최적의 수술과 
                      비교하는 혁신적인 리포트를 생산합니다.
                    </p>
                  </li>
                </ul>
              </article>
              <article>
                <h4 className="contentTitle advisor">ADVISOR</h4>
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
            <p>6F #615, 21, Baekbeom-ro 31-gil, Mapo-gu, Seoul(04147), Republic of Korea</p>
          </div>
        </footer>
      </div>
    );
  };
};

export default Home;
