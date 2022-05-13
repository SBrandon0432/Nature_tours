import React from "react";

interface Iprops {
  name: string;
  img: string;
  heading: string;
  story: string;
}

const StoryReviews: React.FC<Array<Iprops> | any > = ({stories}) => {

  return (
    <>
      {
        stories.map((story: Iprops , index: number)=> {
          return (
            <div className="row" key={index}>
              <div className="story">
                <figure className="story__shape">
                  <img src={story.img} className='story__image' alt='Person on tour'/>
                  <figcaption className="story__caption"> {story.name} </figcaption>
                </figure>
                <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">{story.heading} </h3>
                    <p>
                      {story.story}
                    </p>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}


export default StoryReviews