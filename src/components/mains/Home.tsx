import styled from "styled-components";
import { Link } from "react-router-dom";
// fix link ??

const StyledMain = styled.main`
    flex: 1;
    padding: 30px 40px;
    font-size: calc(0.85rem + 0.3vw);

    h1, h2, h3, h4, h5, h6 {
        margin-bottom: 1rem;
        margin-top: 1.2rem;
    }
    p {
        margin-bottom: 1.2rem;
        line-height: 1.8;
    }
    a {
        display: block;
        margin-bottom: 10px;
        color: #0400ffff;
        text-decoration: none;
    }
    @media screen and (max-width: 1000px) {
        width: 100%;
        padding: 20px;
    }
`;

const StyledImg = styled.img`
    width: 200px;
    border-radius: 50%;
    margin: 20px 0;
`;  

export default function Home(){
    return(
        <StyledMain>
            <title>Welcome! | Gina Carpenter</title>

            <h1>Welcome to My Online Resume!</h1>
                <StyledImg src="/headshot.png" alt="Carpenter Headshot"/>
                <h4>Here you will find information about my previous workplace experiences but also an insight into my core values through my extracurriculars.</h4>
                    <p>I am a senior at Boston University pursuing a degree in Computer Science and Economics. 
                        With hands-on experience in inventory management, guest operations, and quality control, I’ve developed a strong foundation in operational efficiency and data-driven decision-making. 
                        I am seeking an full time role after I graduate in May 2026. I’m passionate about using technology and analytics to solve real-world problems. 
                    </p>
                <h4>Above all, I'm always eager to learn, grow, and connect; feel free to reach me at <Link to="mailto:gcarp@bu.edu">gcarp@bu.edu</Link></h4>
        </StyledMain>
    );
}   
