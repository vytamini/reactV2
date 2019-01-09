import React, { Component } from 'react';
import {
  Link //Link is used in place of a traditional anchor tag due to the way React works. 
} from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
// ScrollableAnchor has been installed from the react framework. It allows to add smooth scrolling animation when the user clicks on an element that has the #scroll ID attached to it.

class About extends Component {
  render() {
    return (
      <div className="content-wrapper">

        <h1 class="about-title">About me</h1>
        <div class="aboutTextContainer">
          <p class="about-text">My real name is <strong>Vytautas</strong>, but my colleagues refer to me as <strong>Sky</strong>.</p>
          <p class="about-text">I'm a second-year <strong>Multimedia Design</strong> student at UCN Technology.</p>
          <p class="about-text">I think of myself as a <strong>creative</strong> person, often having fun while learning something new with each new idea.</p>
          <p class="about-text">My <strong>hobby</strong> is creating video game content for social media. Along with that, I have worked on the creation of multiple websites for
                various companies, starting from the problem and finishing with a final product.</p>
          <p class="about-text">
            My main focus is
          digital <strong>content creation</strong> and entertainment, but I am also able to work in the <strong>front-end development</strong> field.
        </p>
          <p class="about-text">Current goal - find a study job to work besides my studies.</p>
        </div>

        <a href="#scroll">
          <div class="scroll-btn">
            <span>See Skills</span>
          </div>
        </a>

        <ScrollableAnchor id={'scroll'}>
          <h2 class="sub-title">Skills</h2>
        </ScrollableAnchor>

        <div class="skillset">
          <ul>
            <li><strong>MAGIX Vegas Pro</strong> - experience with advanced video editing and plugin usage. Creation of promotional videos, trailers
             and motion graphics. I'm familiar with third-party plugins such as SapphireFX, BorisFX and Magic Bullet Looks</li>
            <li><strong>UX/UI</strong> - ability to conduct user research and tests, knowledge of key theories and methods for creation of target-audience-based and user-friendly design.</li>
            <li><strong>Problem solving</strong> - I have gathered experience from working with multiple companies over the last two years. I have acquired a skillset for quickly identifying problems and creating solutions.</li>
            <li><strong>Adobe Photoshop, Illustrator</strong> - ability to create wireframes and mockups, as well as transfer them into HTML and CSS.</li>
            <li><strong>WordPress CMS</strong> - experience with creating WordPress websites, as well as working with it's API.</li>
            <li><strong>HTML 5 and CSS 3 </strong> - good understanding of SEO principles and cross-browser compatibility, responsive and adaptive website design, CSS frameworks.</li>
            <li><strong>JavaScript Frameworks</strong> - this website has been created with the React framework. I have the basic knowledge about Vue as well, though I'm not using it currently.</li>
          </ul>
        </div>

        <h2 class="sub-title">Interested? Contact me <Link to="/Contact">here</Link>!</h2>
      </div>
    );
  }
}

export default About; //exports component