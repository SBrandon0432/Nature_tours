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
          <div>
            <img className= {`composition__photo composition__photo--p${index}`} src={img} alt={`photo_${index}`}/>
          </div>
        })
      }
    </div>
  )
}

export default Composition;