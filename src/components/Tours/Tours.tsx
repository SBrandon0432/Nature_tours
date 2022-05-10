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
      title: 'The Forest Hiker',
      days: '7 Day Tours',
      people: 'Up to 40 people',
      guides: '6 tour guilds',
      sleeping: 'Sleep in provided tents',
      difficulty: 'Difficulty: medium',
      price: '$479'
    },
    {
      title: 'The snow adventurer',
      days: '5 Day Tours',
      people: 'Up to 15 people',
      guides: '3 tour guilds',
      sleeping: 'Sleep in provided tents',
      difficulty: 'Difficulty: Hard',
      price: '$479'
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
          {
            cards.length > 0 && (
              <Cards array={cards}/>
            )
          }
      </div>
    </section>
  )
}

export default Tours