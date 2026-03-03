import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <main>
            <title>Welcome! | Gina Carpenter</title>

            <h1>Welcome to My Online Resume!</h1>
                <img src="../public/headshot.png" alt="Carpenter Headshot"/>
                <h4>Here you will find information about my previous workplace experiences but also an insight into my core values through my extracurriculars.</h4>
                    <p>I am a senior at Boston University pursuing a degree in Computer Science and Economics. 
                        With hands-on experience in inventory management, guest operations, and quality control, I’ve developed a strong foundation in operational efficiency and data-driven decision-making. 
                        I am seeking an full time role after I graduate in May 2026. I’m passionate about using technology and analytics to solve real-world problems. 
                    </p>
                <h4>Above all, I'm always eager to learn, grow, and connect; feel free to reach me at <Link to="mailto:gcarp@bu.edu">gcarp@bu.edu</Link>!</h4>
        </main>
    );
}   
// need to add styling and media screens