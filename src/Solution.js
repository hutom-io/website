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
              <img src={require('./assets/images/solution/content-solution.png')} alt="content img" className="hsp-image" />
            </article>
            <article>
              <ul className="solutionList">
                <li>
                  <div className="img">
                    <img src={require('./assets/images/solution/icon_01.png')} alt=""/>
                  </div>
                  <div className="text">
                    <h5>SURGICAL REHEARSAL</h5>
                    <p>Virtual Robotic Surgery Rehearsal - a validated patient specific virtual surgical rehearsal platform capable of rendering a patient's preoperative imaging data into a 3D virtual model upon which a procedure can be rehearsed prior to the actual operation. In its current form, Virtual Robotic Surgery Rehearsal allows a surgeon to explore a particular patient's anatomy quickly and efficiently in a surgically meaningful manner, providing valuable insight into the anatomic and physical complexities expected at the time of actual surgery. Nevertheless, as the field of patient-specific surgical simulation is still in its infancy, this technology is only available to experts in academic centers, and thus the full range of its benefit to both patients and surgeons has yet to be realized. Hutom, however, is poised to change this.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img src={require('./assets/images/solution/icon_02.png')} alt=""/>
                  </div>
                  <div className="text">
                    <h5>SURGICAL NAVIGATION</h5>
                    <p> Our navigation platform provides real-time surgical phase and event information on personalised patient anatomy using deep learning technology. 
                      It not only gets information beyond the limits of the camera, but it also provides analytical information through segmentation, convergence, and so on. 
                      Moreover, by combining real-time surgical video with patient-specific 3D models, the hutom's surgical navigation service evolves with the platform, providing the optimal environment for surgery.</p>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img src={require('./assets/images/solution/icon_03.png')} alt=""/>
                  </div>
                  <div className="text">
                    <h5>SURGICAL ANALYTICS</h5>
                    <p>The hutom's Surgical AI technology starts with the highest quality of annotated data. 
                      The AI platform performs deep learning based on surgical specialists' precise labeling of surgical video, which can lead to high-quality medical surgery reports. 
                      This platform can quickly improve surgical skills and ultimately improve the patient's post-operationrecovery process.
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
