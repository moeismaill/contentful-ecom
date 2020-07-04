import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../css/about.css'

const About = () => (
  <Layout>
    <SEO title="about" />
      <div className="about">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Egestas quis ipsum suspendisse ultrices gravida. Eleifend quam adipiscing vitae 
          proin sagittis nisl rhoncus mattis rhoncus. Porttitor massa id neque aliquam vestibulum morbi. 
          Amet facilisis magna etiam tempor orci. Turpis egestas pretium aenean pharetra. Eu augue ut lectus arcu bibendum. 
          At tempor commodo ullamcorper a lacus vestibulum. Ac turpis egestas sed tempus urna et. Massa tempor 
          nec feugiat nisl. Tellus id interdum velit laoreet.
          Pharetra magna ac placerat vestibulum. Pellentesque massa placerat duis ultricies lacus sed turpis. 
          Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Mauris pellentesque pulvinar 
          pellentesque habitant morbi tristique senectus et netus. 
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Pulvinar sapien et ligula ullamcorper malesuada proin libero. 
          Vitae ultricies leo integer malesuada. Eget nulla facilisi etiam dignissim diam.
          Ornare suspendisse sed nisi lacus sed. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. 
          Sit amet consectetur adipiscing elit duis tristique sollicitudin. Orci phasellus egestas tellus rutrum tellus pellentesque. 
          Pellentesque habitant morbi tristique senectus et netus. Aliquet sagittis id consectetur purus ut. Tellus cras adipiscing enim eu turpis. 

        </p>
        <hr style={{width: "50%", textAlign: "center", margin: "1rem auto", backgroundColor: "black", height: "5px"}} />
      </div>
  </Layout>
)

export default About
