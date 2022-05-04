import React, {useState } from "react";
import Composition from "../Composition/Composition";
import largeImageOne from '../../Assets/img/nat-1-large.jpg';
import largeImageTwo from '../../Assets/img/nat-2-large.jpg';
import largeImageThree from '../../Assets/img/nat-3-large.jpg';



const About: React.FC = () => {
    const [images, setImages] = useState([
        largeImageOne,
        largeImageTwo,
        largeImageThree
    ])


  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
              Exciting tours for adventurous people
          </h2>
      </div>

      <div className="row">
          <div className="col-1-of-2">
              <h3 className="heading-tertuary u-margin-bottom-small">
                  You're going to fall in love with nature
              </h3>
              <p className="paragraph">
                  Non irure velit est nostrud nulla. Lorem ex ea incididunt magna dolor eiusmod dolore exercitation aliqua dolore nostrud tempor. Adipisicing labore eu esse adipisicing nisi. Enim est eu proident do consequat. Esse et aliqua deserunt nisi in. Duis nulla do id quis magna fugiat exercitation eu aliqua irure dolor occaecat. Aliqua sit laborum pariatur ut dolor qui qui ipsum mollit minim consequat occaecat officia incididunt.
              </p>


              <h3 className="heading-tertuary u-margin-bottom-small">
                  Live adventurs like you never have before
              </h3>
              <p className="paragraph">
                  Et esse dolore cupidatat dolor fugiat qui occaecat sunt. Dolor sint laboris ullamco cupidatat proident id exercitation exercitation occaecat esse esse reprehenderit. Cillum est pariatur magna mollit magna voluptate labore incididunt sint reprehenderit incididunt dolor.
              </p>

              <a href="/#" className="btn-text"> Learn More &rarr;</a>
          </div>

          <div className="col-1-of-2">
            <Composition images={images} />
          </div>
      </div>
    </section>
  )
}

export default About;