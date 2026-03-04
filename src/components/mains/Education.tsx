import styled from "styled-components";
//done
const StyledMain = styled.main`
    flex: 1;
    padding: 30px 40px;
    font-size: calc(0.85rem + 0.3vw);

    h1, h2, h3, h4, h5, h6 {
        margin-bottom: 1.2rem;
        margin-top: 1.2rem;
    }
    p {
        margin-bottom: 1.5rem;
        line-height: 2;
    }
    ul {
        margin-left: 20px;
        margin-bottom: 1.5rem;
    }
    @media screen and (max-width: 1000px) {
        width: 100%;
        padding: 20px;
    }
`;

const IframeWrapper = styled.iframe`
    width: 100%;
    max-width: 560px;
    height: 315px;
    border: none;
    margin-top: 1rem;
    display: block;
`;

export default function Education(){
    return(
        <StyledMain>
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
                
                <IframeWrapper
                        src="https://www.youtube.com/embed/HoW3yZdJyBM?si=H_LRvpqiJenEEJCD&controls=0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                />
        </StyledMain>
    );
}   