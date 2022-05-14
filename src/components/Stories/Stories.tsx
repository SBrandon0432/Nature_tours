import React, { useState } from "react";
import videoMp4 from '../../Assets/img/video.mp4'
import videoWebm from '../../Assets/img/video.webm'
import StoryReviews from "../StoryReviews/StoryReviews";
import imageOne from '../../Assets/img/nat-8.jpg'
import imageTwo from '../../Assets/img/nat-9.jpg'


const Stories: React.FC = () => {
   // eslint-disable-next-line
  const [stories, setStories] = useState([
    {
      name:'Mary Smith',
      img: imageOne,
      heading: 'I had the best week ever with my family',
      story: 'Do aute mollit ipsum ex veniam ut pariatur culpa id minim cupidatat ad do. Anim sunt sint occaecat incididunt laboris aliqua officia Lorem. Voluptate eiusmod ut non incididunt enim cupidatat in officia magna qui minim. Veniam ea laboris aute id enim reprehenderit culpa.'
    },
    {
      name:'Jack Wilson',
      img: imageTwo,
      heading: 'WOW! My life is completly diffrent now!',
      story: 'Do aute mollit ipsum ex veniam ut pariatur culpa id minim cupidatat ad do. Anim sunt sint occaecat incididunt laboris aliqua officia Lorem. Voluptate eiusmod ut non incididunt enim cupidatat in officia magna qui minim. Veniam ea laboris aute id enim reprehenderit culpa.'
    }
  ]);

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

        <div className="StoryReviews">
          <StoryReviews stories={stories}/>
        </div>

      <div className="u-margin-top-huge u-center-text">
          <a href="/#" className="btn-text">Read All stories &rarr;</a>
      </div>
    </section>
  )

}

export default Stories