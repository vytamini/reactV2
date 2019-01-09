import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ShowMore from 'react-show-more';
// ScrollableAnchor has been installed from the React framework. It allows to add smooth scrolling animation when the user clicks on an element that has the #scroll ID attached to it.
// ShowMore has been installed from the React framework. It gives the ability to show and hide content within the element.
// Image tags in the code have been modified due to the way React handles files.
class Creations extends Component {
    render() {
        return (
            <div class="content-wrapper">

                <h1 class="landing-title">Hi, I'm Vytautas!</h1>
                <div class="aboutTextContainer">
                    <p class="about-text">I'm a digital content creator and a second-year multimedia design student.
                    I love creating digital content through the use of videos, images and audio with a bit of voice acting from myself. </p>
                    <p class="about-text">I have also worked on multiple website projects!</p>
                </div>
                <h2 class="title">What have I created?</h2>

                <a href="#scroll">
                    <div class="scroll-btn">
                        <span>See Projects</span>
                    </div>
                </a>

                <ScrollableAnchor id={'scroll'}>
                    <h2 class="sub-title">Some of my projects</h2>
                </ScrollableAnchor>

                <div class="projectlist">

                    <div class="project">
                        <h2 class="project-title">Short Cinematic Movie - Fortnite (video game)</h2>
                        <div class="project-body">
                            <div class="video-container"><iframe width="1132" height="637" src="https://www.youtube.com/embed/I1brCIAVWQU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            <div class="project-bodyText">
                                <ShowMore
                                    lines={3}
                                    more='Read more'
                                    less='Show less'
                                    anchorClass=''
                                >
                                    <p>This is a project I worked on for a public contest "#ReplayRoyale" for the community of the video game “Fortnite”. The recording part included taking cinematic shots using the in-game camera system,
                                     afterwards the footage was edited in post-production.</p>
                                    <p>All of the post-production was done using the MAGIC Vegas Pro software. I worked with the video velocity settings to synchronize it up with the audio, added transitions between clips
                                     using pan/crop and external plugins to add motion blur, applied some video effects as well as some very basic audio editing to empathize certain parts. </p>
                                </ShowMore>
                            </div>
                            <a href="https://www.youtube.com/watch?v=I1brCIAVWQU" target="_blank">
                                <div class="project-btn">
                                    <span>VIEW YOUTUBE VIDEO</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="project">
                        <h2 class="project-title">Goldsmith Apel - University Project</h2>
                        <img src={require('./images/apel.png')} alt="Apel Goldsmith website" class="project-image" />
                        <div class="project-body">
                            <div class="project-bodyText">
                                <ShowMore
                                    lines={3}
                                    more='Read more'
                                    less='Show less'
                                    anchorClass=''
                                >
                                    <p>This fully responsive website dynamically loads content from WordPress in the form of a headless CMS. The
                                        current live prototype may have malfunctions,
                                        because access to the CMS is no longer available to me.
                                </p>
                                    <p>My part in this project was mainly research, mockup and content creation. This was one of the first "modern" websites
                                        that me and my group have made, based on the design trends at the time. The thing I liked about this project is seeing
                                        the final result after all of the content has come together. It was one of the most clean and elegant looking websites I've worked on at the time.
                                </p>
                                    <p>This project had the requirement to work with the WordPress Content Managment System - our group used it for loading in
                                        images for the website.
                                </p>
                                </ShowMore>
                            </div>
                            <a href="http://des-iis.ucn.dk/mmdi0917/1067667/Guldsmed_Apel/" target="_blank">
                                <div class="project-btn">
                                    <span>VIEW PROTOTYPE</span>
                                </div>
                            </a>
                        </div>
                        <div class="project-footer">
                            <h3>Note: this project is a prototype created for educational purposes and has never been
                                published.</h3>
                        </div>
                    </div>

                    <div class="project">
                        <h2 class="project-title">Aalborg Chocolate - University Project</h2>
                        <img src={require('./images/chokolade.png')} alt="Aalborg Chokolade website" class="project-image" />
                        <div class="project-body">
                            <div class="project-bodyText">
                                <ShowMore
                                    lines={3}
                                    more='Read more'
                                    less='Show less'
                                    anchorClass=''
                                >
                                    <p>This is a demonstrational Christmas-special microsite made for Aalborg Chokoladen. The task was to create
                                        a microsite to represent the companies visual identity - not to act as a webshop. This prototype is
                                        not responsive and may lack functionality due to constraints during development.
                                </p>

                                    <p>My part was content creation and front-end design for the "About Us" page. I like that I got to experiment with something different
                                        and using inspiration from other sources. I liked the initial card design with images hanging off the sides, so I developed it for desktop.
                                        Due to the limited time we had for this project, we could not finish it and make it fully responsive, but it was fun to give the company
                                        a new visual identity.
                                </p>

                                </ShowMore>
                            </div>

                            <a href="http://des-iis.ucn.dk/mmdi0917/1067654/Responsive%20Web/Front_About/index.html" target="_blank">
                                <div class="project-btn">
                                    <span>VIEW PROTOTYPE</span>
                                </div>
                            </a>
                        </div>
                        <div class="project-footer">
                            <h3>Note: this project is a prototype created for educational purposes and has never been
                                    published.</h3>
                        </div>
                    </div>

                    <div class="project">
                        <h2 class="project-title">Aalborg Carnival - University Project</h2>
                        <img src={require('./images/karneval.png')} alt="Aalborg Carnival web-app" class="project-image" />
                        <div class="project-body">
                            <div class="project-bodyText">
                                <ShowMore
                                    lines={3}
                                    more='Read more'
                                    less='Show less'
                                    anchorClass=''
                                >
                                    <p>This is my first attempt to create an interacvite web applicaiton. The content of the site is only visible when the browser window
                                         is sized down to mobile resolution, due to the limitations I had at the time of developing it. The functionality is very limited as this
                                         product was only made to act as an interactive mockup.
                                </p>

                                    <p>Most of the work on this project was done by me. It was fun to create something that was mobile-only, because I got to experience
                                        a different design approach. I learned a lot about semiotics and the way interactive elements work in a mobile environment. It was rather
                                        difficult to reach my expected goals in time we had for the project, but in the end I learned quite a lot.
                                </p>
                                </ShowMore>
                            </div>

                            <a href="http://des-iis.ucn.dk/mmdi0917/1067818/AalborgCarnival/" target="_blank">
                                <div class="project-btn">
                                    <span>VIEW PROTOTYPE</span>
                                </div>
                            </a>
                        </div>
                        <div class="project-footer">
                            <h3>Content is visible ONLY if viewed on a mobile-sized browser window. (If using Chrome, use Ctrl+Shift+I
                             to access developer tools and toggle the device toolbar using Ctrl+Shift+M)</h3>
                            <h3>Note: this project is a prototype created for educational purposes and has never been
                                published.</h3>
                        </div>
                    </div>
                    <div class="project-footer">
                        <h3>More projects to come!</h3>
                    </div>
                </div>
            </div >

        );
    }
}

export default Creations; //exports component
