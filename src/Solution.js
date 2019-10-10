import React from 'react';
import './assets/scss/style.scss';

function Solution() {
  return (
    <div>
      <main className="container solution">
          <section className="title">
            <h3>SOLUTION</h3>
          </section>
          <section className="content">
            <article>
              <img src={require('./assets/images/solution/content-solution.png')} alt="content img"/>
            </article>
            <article>
              <ul className="solutionList">
                <li>
                  <div className="img">
                    <img src={require('./assets/images/solution/icon_01.png')} alt=""/>
                  </div>
                  <div className="text">
                    <h5>SURGICAL REHEARSAL</h5>
                    <p>실제 수술 시 실시간으로 제공하는 클라우딩 서비스로서, 수술 영상에서는 직접적으로 얻기 어려운 해부학적 정보를 환자 특이적 
                      가상 3D 모델로 제공합니다. 이는 카메라의 한계를 넘어서는 정보를 얻을 수 있을 뿐만 아니라 세그멘테이션, 정합 등을 통한 분석
                      적인 해부학적 정보도 제공하게 됩니다. 더욱이, 실시간으로 인식된 수술 동영상과 환자 특이적 3D 모델을 정합함으로써 휴톰의 
                      수술 네비게이션 실시간 서비스는 플랫폼과 함께 진화하게 되어, 수술에 필요한 최적의 환경을 제공합니다.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img src={require('./assets/images/solution/icon_02.png')} alt=""/>
                  </div>
                  <div className="text">
                    <h5>SURGICAL NAVIGATION</h5>
                    <p>Virtual Robotic Surgery Rehearsal - a validated patient specific virtual surgical rehearsal platform capable of 
                      rendering a patient's preoperative imaging data into a 3D virtual model upon which a procedure can be rehearsed 
                      prior to the actual operation. In its current form, Virtual Robotic Surgery Rehearsal allows a surgeon to explore a 
                      particular patient's anatomy quickly and efficiently in a surgically meaningful manner, providing valuable insight 
                      into the anatomic and physical complexities expected at the time of actual surgery. Nevertheless, as the field of 
                      patient-specific surgical simulation is still in its infancy, this technology is only available to experts in academic cen
                      -ters, and thus the full range of its benefit to both patients and surgeons has yet to be realized. Hutom, however, 
                      is poised to change this.</p>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img src={require('./assets/images/solution/icon_03.png')} alt=""/>
                  </div>
                  <div className="text">
                    <h5>SURGICAL ANALYTICS</h5>
                    <p>휴톰의 Surgical AI 기술은 최고 품질의 annotated data에서부터 시작합니다. 
                      휴톰 AI 플랫폼은 수술 동영상에 대한 외과 전문의들의 정확한 레이블링을 바탕으로 Deep Learning을 수행하기 때문에 높은 정확
                      도의 인식을 수행할 수 있으며, 이는 양질의 의료적인 수술 리포트의 제공으로 이어질 수 있습니다. 이렇게 수술 후 제공되는 휴톰 
                      플랫폼 서비스는 외과 전문의의 수술 기술을 빠르게 향상시킬 수 있으며, 이를 통해 궁극적으로는 환자의 수술 후 회복 과정을 향상
                      시킬 수 있습니다. 
                    </p>
                  </div>
                </li>
              </ul>
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
}

export default Solution;
