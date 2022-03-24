import React from "react";
import '../../../sass/main.scss';
  // import img from '../../../'
const App = () => {

  return (
    <div>
              <header className="header">
            <div className="header__logo-box">
                <img
                src='http://127.0.0.1:55654/client/img/logo-white.png'
                alt="logo image"
                className="header__logo"
                />
            </div>

                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main"> Outdoors </span>
                        <span className="heading-primary--sub"> is where life happens </span>
                    </h1>

                    <a
                    href="#"
                    className="btn btn-white btn-animation">
                        Discover out Tours
                    </a>
                </div>

        </header>

        <main >
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-8">
                    <h2 className="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        text content
                    </div>
                    <div className="col-1-of-2">
                        imgs
                    </div>
                </div>
            </section>

        </main>
    </div>
  )
}

export default App;