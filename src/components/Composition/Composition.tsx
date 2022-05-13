import React from "react";

interface Iprops  {
  images?: string[] | any;
}

// interface IComposition {

// }

const Composition: React.FC<any> = ( {images}: Iprops) => {


  return (
    <div className="composition">
      {
         images.map((img: string, index: number) => {
          return (
          <div className="composition" key={index}>
            <img className= {`composition__photo composition__photo--p${index+1}`} src={img} alt={`photo_${index+1}`}/>
          </div>
          )
        })
      }
    </div>
  )
}

export default Composition;