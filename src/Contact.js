import React from 'react';
import './assets/scss/style.scss';

function Contact() {
  return (
    <div>
      <main className="container contact">
          <section className="title">
            <h3>CONTACT</h3>
          </section>
          <section className="content">
            {/* <article>
              <h4 className="contentTitle">
                <i className="material-icons">
                    mail_outline
                </i> Get in touch
              </h4>
              <div>
                <input
                  type="text"
                  placeholder="name"
                />
                <input
                  type="text"
                  placeholder="email"
                />
                <input
                  type="text"
                  placeholder="phone number"
                />
                <input
                  type="text"
                  placeholder="title"
                />
                <textarea name="" id="" cols="30" rows="10" placeholder="content">

                </textarea>
              </div>
              <div className="btnWrap">
                <button className="btn md primary">SEND
                    <i className="material-icons">
                    keyboard_arrow_right
                    </i>
                </button>
              </div>
            </article> */}
            <article className="contact-us">
              <button className="btn md primary"><a rel="noopener noreferrer" href="https://www.wanted.co.kr/company/2057" target="_blank" className="join-us">CONTACT US</a></button>
            </article>
            <article className="right">
              <h4 className="contentTitle">Office</h4>
              <p>
                6F #615, 21<br/>
                Baekbeom-ro 31-gil<br/>
                Mapo-gu, Seoul(04147), Republic of Korea
              </p>
              <h4 className="contentTitle">Need help</h4>
              <p>
                Ranny Park / Manager<br/>
                TEL: 02-6956-0426<br/>
                Email: ranny@hutom.co.kr
              </p>
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

export default Contact;
