import React from 'react';
const pic = require('./images/IMG_8767.png');

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  aboutMe: {
    fontFamily: 'Roboto Mono',
    padding: '10px',
    backgroundColor: '#f3e9c3',
    color: '#e4688f'
  },
  aboutMePic: {
    maxHeight: '200px',
    marginTop: '5px',
    marginBottom: '5px',
    padding: '5px',
    borderRadius: '10px',
  },

};

// In Navbar, we can assign a style from an object by using curly braces
function AboutMe() {
  return (
    <article style={styles.aboutMe} id="about-Me" class="about-Me">

      <div>
        <h2>About Me</h2>
      </div>
      <div>
        <img src={pic} style={styles.aboutMePic}
          class="aboutMe float-left"
          alt="Bonnie Reed"

        />
        <p>
          I currently work out of my home as a technical consultant. I am capable of assisting my clients with any hardware/ software issues.
          I am also available to build websites based on client needs and consultation.
          I have been in IT support for 6
          years. I have wanted to branch out further and have a firm grasp on
          full stack web development which is what brought me to the SMU
          bootcamp. I am persuing a new career path with Full Stack Web technologies and look forward to gaining a deeper understanding.
        </p>
      </div>
    </article>
  );
}

export default AboutMe;