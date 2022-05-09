import React, { useCallback, useState } from "react";




  interface IProps {
    title: string;
    days: string;
    people: string;
    guides: string;
    sleeping: string;
    difficulty: string;
    price: string;
  }


const Cards: React.FC< Array<IProps> | any> = (cards) => {

  return (
    <>
      {
        cards.array.map((card: IProps, index:number)=>{
          return (
            <div className="card" key={index}>
              <div className='card__side card__side--front'>
                <div className={`card__picture card__picture--${index+1}`}>
                    &nbsp;
                </div>

                <h4 className="card__heading">
                  <span className={`card__heading-span card__heading-span--${index+1}`}>
                      {card.title}
                  </span>
                </h4>

                <div className="card__details">
                  <ul>
                    <li>{card.days}</li>
                    <li>{card.people}</li>
                    <li>{card.guides}</li>
                    <li>{card.sleeping}</li>
                    <li>{card.difficulty}</li>
                  </ul>
                </div>
              </div>

              <div className={`card__side card__side--back-${index+1}`}>
                  &nbsp;
              </div>

            </div>
          )
        })
      }
    </>
  )
}


export default Cards

