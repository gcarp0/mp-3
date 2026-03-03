import styled from "styled-components";
import {Link} from "react-router-dom";

export default function Education(){
    return(
        <main>
            <title>My Education</title>

            <h1>Education</h1>
                <h2>Boston University | Boston, MA</h2>
                <h4>Expected Graduation May 2026</h4>
                    <ul>
                        <li>Student within the College of Arts and Sciences </li>
                        <li>Bachelor of Arts in Computer Science and Economics</li>
                        <li>Deans List Recipient</li>
                    </ul>
                
                <h3><b>Relevant Coursework:</b></h3>
                    <ul>
                        <li>Econometrics</li>
                        <li>Web Application Development</li>
                        <li>Applied Software Engineering</li>
                        <li>Technology Consulting</li>
                        <li>Auction Theory</li>
                        <li>Legal Issues of Economics</li>
                    </ul>
        </main>
    );
}   
// need to add styling and media screens
// do i want to insert the video like i did for mp-1?