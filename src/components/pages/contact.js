import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <h1 class="contact-title">Let's talk!</h1>

                <section>
                    <div class="contact-box">
                        <p>Via E-mail:
                            <a href="mailto:vyta.mini1@gmail.com" title="Send an e-mail">vyta.mini1@gmail.com</a>
                        </p>
                        <p>Via LinkedIn:
                            <a href="https://www.linkedin.com/in/vytautas-minikevi%C4%8Dius-57b121151/" target="_blank" title="Link to LinkedIn Profile">click here</a>
                        </p>
                    </div>
                    <div class="aboutTextContainer">
                        <p class="about-text">I am always happy to discuss any ideas or projects you may have to offer!</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact; //exports component