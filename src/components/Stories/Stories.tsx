import React from "react";
import videoMp4 from '../../Assets/img/video.mp4'
import videoWebm from '../../Assets/img/video.webm'
import StoryReviews from "../StoryReviews/StoryReviews";


const Stories: React.FC = () => {


  return (
    <section className="section-stories">

      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
            <source src={videoMp4} type="video/mp4"/>
            <source src={videoWebm} type="video/webm"/>
            Browser Not Supported, Try using Chrome.
        </video>
      </div>


      <div className="u-center-text u-margin-bottom-big u-margin-top-big">
        <h2 className="heading-secondary">
          We make people genuinely happy
        </h2>
      </div>



    </section>
  )

}

export default Stories