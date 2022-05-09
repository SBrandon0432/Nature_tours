import React, {useState} from "react";

const Features: React.FC = (props: Array< Object> | any) => {



  const [cards, setCards] = useState([
    {
      title:'Explore the world',
      text: 'Ex veniam consectetur sunt nisi reprehenderit labore nisi dolore cillum sit deserunt commodo.',
      icon: 'icon-basic-world'
   },
   {
     title:'Meet Nature',
     text: 'Adipisicing ut cillum reprehenderit incididunt labore dolore consectetur Lorem consequat veniam.',
     icon: 'icon-basic-compass'
   },
   {
      title:'Find your way',
      text: 'Sint et voluptate veniam ut pariatur ut sint eu anim ad non culpa ut pariatur ut sint consequat mollit.',
      icon: 'icon-basic-map'
    },
    {
      title:'Live a healthier life',
      text: 'Irure et consequat mollit incididunt culpa commodo ad aliquip mollit fugiat ut pariatur ut sint.',
      icon: 'icon-basic-heart'
   },
  ])


  return (
    <section className="section-features">
        <div className="row">
          {
            cards.map((card, index) => {
              return (
                <div className="col-1-of-4" key={index}>
                    <div className="feature-box">
                        <i className={`feature-box__icon ${card.icon}`}></i>
                        <h3 className="heading-tertuary u-margin-bottom-small">{card.title} </h3>
                        <p className="feature-box__text">
                           {card.text}
                        </p>
                    </div>
                </div>
              )
            })
          }
          </div>
    </section>
  )
}


export default Features;