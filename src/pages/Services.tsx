import React from "react";
import ServiceCard from "./ServiceCard";
import Image1 from '../images/clock.svg';
import Image2 from '../images/driver.svg';
import Image3 from '../images/award.svg';
import Image4 from '../images/worker.svg';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from 'gatsby-background-image'

//import { LazyLoadImage } from 'react-lazy-load-image-component';

export default () => {
  const cardsData = [
    {
      id: 1,
      image: Image1,
      name: "QUICK",
      desc: "We pay special attention to ensure that our services are performed on time."
    },
    {
      id: 2,
      image: Image2,
      name: "QUALIFIED",
      desc: "All our drivers have the CPC certificate and are fully qualified to operate all our vehicles."
    },
    {
      id: 3,
      image: Image3,
      name: "QUALITY",
      desc: "We provide our clients with professional service and the use of the best means of transport adapted to the transported cargo."
    },
    {
      id: 4,
      image: Image4,
      name: "SAFETY",
      desc: "We keep our trucks in pristine condition to optimise our fleet’s performance, reliability, quality and above all safety."
    },
  ]

  let serviceCards = cardsData.map(s => <ServiceCard data-aos="fade-up" key={s.id} image={s.image} name={s.name} desc={s.desc}/>)

  const data = useStaticQuery(graphql`
  query MyQueryII {
    file(relativePath: {eq: "image_2.jpg"}) {
      childImageSharp {
        fluid(quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  
  `);

  return(
<React.Fragment>
    <div className="services-container">
      <BackgroundImage id="parallax2" className="flex-container col align-items-center" fluid ={data.file.childImageSharp.fluid}>
          <div className="content-border flex-container col justify-content-right">
            <div className="flex-container row justify-content-right">
              <div data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease" className="services-text">
                <h2>OUR SERVICES</h2>
                <h2>ARE</h2>
              </div>
            </div>
            <div className="flex-container row">
              <div className="grid-cards-container">
                {serviceCards}
              </div>
            </div>
          </div>
      </BackgroundImage>
    </div>
  </React.Fragment>
  )
}
