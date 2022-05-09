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
            <div key={index}>
              <h1>
                hello
              </h1>
            </div>
          )
        })
      }
    </div>
  )
}


export default Cards


