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
    <div className="card">
      {
        cards.array.map((card: IProps, index:number)=>{
          return (
            <div key={index} className='card__side card__side--front'>
              <div className={`card__picture card__picture--${index+1}`}>
                  &nbsp;
              </div>

              <h4 className="card__heading">
                <span className={`card__heading-span card__heading-span--${index+1}`}>
                    {card.title}
                </span>
              </h4>


            </div>
          )
        })
      }
    </div>
  )
}


export default Cards

