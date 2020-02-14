import React from 'react';
import { Button, Modal, ModalBody} from 'reactstrap';
import Lana from '../assets/sleepyLana.jpg';
import './CSS/intro.css';

function Intro() {
    return(
    <div class="introDiv">
        <div id="textIntro">
            <h3>Hello, I am Lindsey Dickerson and I am applying for the position of Junior Developer at Graston Technique.</h3>
            <br/>
            <h5>Here are a few reasons that I would be a great fit:</h5>

            <ul>
                <li>I am a good problem solver.</li>
                <li>I love to learn! I enjoy finding new challenges and enhancing my skillset.</li>
                <li>I am a hard worker.</li>
                <li>I make excellent chili (I hear there is a chili cookoff? Sign me up!)</li>
                <li>I have no shortage of cute cat pictures!</li>
            </ul>
            <div className="lanaPic">
                <img src={Lana} alt="gray cat sleeping on a red blanket" id="sleepyLana"/>
            </div>
            <div id="catText">
                <p id="caption">This is my 3 year old cat named Lana. We rescued her from the Hamilton County Humane Society last November. Her favorite place is on this heated blanket! She also enjoys watching YouTube videos.</p>
            </div>
            <hr/>
            <div id="freeTime">
                <p id="freeText">In my free time, I enjoy playing the flute, playing Nintendo, crafts, and volunteering. I am a Girl Scout leader for a Brownie troop, and have been with them since Kindergarten. Watching these girls learn and grow has been incredibly rewarding, and has even helped me learn and appreciate new things. I also work to combat food insecurity. I volunteer at soup kitchens and at Gleaner's Food Bank. I am also working with a classmate from Eleven Fifty Academy to bring a Girls Who Code program to the Hamilton County area.</p>

            </div>
        </div>
    </div>
    )
};
export default Intro;