import React from 'react'
import './Home.css'
import { ParallaxBanner, useParallax } from "react-scroll-parallax";


function Home() {
  const parallaxheading = useParallax({
    scale: [0.1,2, "easeInQuad"],
    speed:-60,
  });
  

  const parallax = useParallax({
    scale: [0.1,2, "easeInQuad"],
    speed:-50,
  });
  const dubai = useParallax({
    scale: [1,0, "easeInQuad"],
    speed:-50,
  });

  const parallaxEasing = useParallax({
    easing: "easeOutQuad",
    translateX: [-340, 100],
  });
  const parallaxEasingLeft = useParallax({
    easing: [1, -0.75, 0.5, 1.34],
    translateX: [0, -260],
    translateY: [1100],
  })

  return (
    <div className="container-body">
      <div>
      <img
     ref={parallax.ref}
     src='balloon.png'
      className="balloon"></img>
      </div>

<div className="absolute-text">
          <h1 ref={parallaxEasing.ref}>WELCOME TO DUBAI</h1>
          <h2 ref={parallaxEasingLeft.ref}>Vist For All Updates</h2>
        </div>
<div className='d'>
        <img
     ref={dubai.ref}
     src='dubai.jpg'
      className="dubai"></img>
</div>

<div className='background'>
<h1 ref={parallaxheading.ref} className='explore'>EXPLORE</h1> 

</div>




      


  </div>









   )
}

export default Home