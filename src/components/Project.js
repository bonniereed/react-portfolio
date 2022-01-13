import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
const eCommerce = require('./images/ecommerce.png');
const budget = require('./images/budget.png');
const fitness = require('./images/fitness.png');
const coding = require('./images/Coding_Quiz.png');
const pass = require('./images/PasswordGenerator.png');
const team = require('./images/team-profile-generator.png')

const styles = {
    previousWork: {
        fontFamily: 'Roboto Mono',
        padding: '10px',
        backgroundColor: '#f3e9c3',
        color: '#e4688f'
    },
    caption: {
        color: '#e4688f'
    },
    a: {
        color: '#e4688f',
    }

};

function Project() {
    return (
        <div style={styles.previousWork}>
            <div>
                <article
                    style={styles.previousWork} id="previous-Work" class="previous-Work">
                    <h3 class="text-center">Previous Work:</h3>
                    <Carousel style={styles.previousWork} >
                        <Carousel.Item interval={5000}>
                            <a style={styles.a} href="https://github.com/bonniereed/eCommerceProject" target="_blank"> <img
                                className="d-block  mx-auto"
                                src={eCommerce}
                                alt="eCommerce Project" width="1280" height="720"
                            />https://github.com/bonniereed/eCommerceProject</a>
                            <Carousel.Caption>
                                <h3 style={styles.caption} >eCommerce Project</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <a style={styles.a} href="https://budgettrack3r.herokuapp.com/" target="_blank"> <img
                                className="d-block  mx-auto"
                                src={budget}
                                alt="Budget Project" width="1280" height="720"
                            />https://github.com/bonniereed/budgetTracker</a>
                            <Carousel.Caption>
                                <h3 style={styles.caption} >Budget Project</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <a style={styles.a} href="https://fitnesstrack3r.herokuapp.com/?id=61b75e41dd556a00169f5eb2" target="_blank"> <img
                                className="d-block mx-auto"
                                src={fitness}
                                alt="Fitness Tracker Project" width="1280" height="720"
                            />https://github.com/bonniereed/fitnessTracker</a>
                            <Carousel.Caption>
                                <h3 style={styles.caption}> Fitness Tracker Project</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <a style={styles.a} href="https://bonniereed.github.io/CodingQuiz/" target="_blank"> <img
                                className="d-block mx-auto"
                                src={coding}
                                alt="Coding Quiz Project" width="1280" height="720"
                            />https://github.com/bonniereed/CodingQuiz </a>
                            <Carousel.Caption>
                                <h3 style={styles.caption}> Coding Quiz </h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <a style={styles.a} href="https://bonniereed.github.io/SMUPassGenerator/" target="_blank"> <img
                                className="d-block  mx-auto"
                                src={pass}
                                alt="Password Generator Project" width="1280" height="720"
                            />https://github.com/bonniereed/SMUPassGenerator</a>
                            <Carousel.Caption>
                                <h3 style={styles.caption}> Password Generator </h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <a style={styles.a} href="https://github.com/bonniereed/Team-Profile-Generator" target="_blank"> <img
                                className="d-block  mx-auto"
                                src={team}
                                alt="Team Profile Generator Project" width="1280" height="720"
                            />https://github.com/bonniereed/Team-Profile-Generator</a>
                            <Carousel.Caption>
                                <h3 style={styles.caption}> Team Profile Generator</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </article>
            </div>
        </div>
    );
}


export default Project;