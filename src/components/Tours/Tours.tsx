import React,{useState} from "react";
import Cards from "../Cards/Cards";

const Tours: React.FC = (props: any) => {



  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
              Most popular tours
          </h2>
      </div>
      <div className="row">
          <Cards />
      </div>
    </section>
  )
}

export default Tours