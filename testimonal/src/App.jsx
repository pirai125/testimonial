import React from "react";
import Maincard from "./Maincard";
import Card from "./Card"

import meta from "/src/images/meta-testimonial.png"
import google from "/src/images/google-testimonial.png"
export default function App(){

  const cardinfo=[
    {
      id : 1,
      name: "Samantha Lee",
      img :google,
      review :"The checklist ensures that the review process is thorough",
      alt:"google",
    },
    {
      id : 2,
      name: "Rachel Patel",
      img :meta,
      review :"I highly recommend the Writecream Business Description",
      alt:"meta",
    },
  ]

  return(

  <>
  <div className="w-full  py-28 px-8  md:flex bg-thingray">
  <Maincard/>
  <Card cardinfo={cardinfo}/>

  </div>
  
  </>

  )
}