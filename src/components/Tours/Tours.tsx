import React,{useState} from "react";
import Cards from "../Cards/Cards";


const Tours: React.FC = (props: any) => {

  const [cards, setCards] = useState([
    {
      title: 'The Sea Explorer',
      days: '3 Day Tours',
      people: 'Up to 30 people',
      guides: '2 tour guilds',
      sleeping: 'Sleep in cozy hotels',
      difficulty: 'Difficulty: Easy',
      price: '$275'
    },
    {
      title: 'The Sea Explorer',
      days: '3 Day Tours',
      people: 'Up to 30 people',
      guides: '2 tour guilds',
      sleeping: 'Sleep in cozy hotels',
      difficulty: 'Difficulty: Easy',
      price: '$275'
    },
    {
      title: 'The Sea Explorer',
      days: '3 Day Tours',
      people: 'Up to 30 people',
      guides: '2 tour guilds',
      sleeping: 'Sleep in cozy hotels',
      difficulty: 'Difficulty: Easy',
      price: '$275'
    }
  ]) as any




  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
              Most popular tours
          </h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          {
            cards.length > 0 && (
              <Cards array={cards}/>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Tours