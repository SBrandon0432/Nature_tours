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
            <div className="col-1-of-3" key={index}>
              <div className="card">
                <div className='card__side card__side--front'>
                  <div className={`card__picture card__picture--${index+1}`} >
                      &nbsp;
                  </div>

                  <h4 className="card__heading">
                    <span className={`card__heading-span card__heading-span--${index+1}`}  >
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

                <div className={`card__side card__side--back card__side--back-${index+1}`}>
                  <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">Only</p>
                            <p className="card__price-value">{card.price}</p>
                        </div>
                        <a href="/#"className="btn btn-white"> Book Now </a>
                    </div>
                </div>

              </div>
            </div>
          )
        })
      }
    </>
  )
}


export default Cards

