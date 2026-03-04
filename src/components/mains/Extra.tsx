import styled from "styled-components";
//done
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
    @media screen and (max-width: 1000px) {
        width: 100%;
        padding: 20px;
    }
`;

export default function Extra(){
    return(
        <StyledMain>
            <title>My Extracurriculars</title>
            
            <h1>Extracurriculars</h1>
                <h2>Boston University Club Squash Team</h2>
                <h4>September 2022 - Present</h4>
                    <ul>
                        <li> 4-year Member of the women's team, including 2025 Division B champions and 2026 Runner-ups. </li>
                        <li> Treasurer of 30+ members, responsible for calculating dues, budgeting for tournaments, operations, team travel, and
                        planning fundraising initiatives to support club activities.</li>
                        <li>Previous 2-year Sports Information Director responsible for managing records and communications through
                        social channels, increasing account engagements by over 20,000 interactions. </li>
                    </ul>
                {/* insert picture */}

                <h2>Omega Phi Alpha - Alpha Mu</h2>
                <h4>December 2024 - Present</h4>
                    <ul>
                        <li>Boston University's only community service sorority within a 20+ chapter network. </li>
                        <li>Current chapter Secretary, overseeing operations and accountability for a 100+ member chapter.</li>
                        <li>Executive serving member on the Chapter Standards Board to uphold the organization's national standards.</li>
                        <li>Previous Marketing Chair, supporting outreach initiatives and assisting the VP of Marketing.</li>
                    </ul>
                {/* insert picture */}

                <h2>Girls Who Code (Boston University Loop)</h2>
                <h4>September 2025 - Present</h4>
                    <ul>
                        <li>Mentor guiding undergraduate students in goal-setting, professional development, and technical
                            skill-building in small group settings.</li>
                    </ul>
                {/* insert picture */}
        </StyledMain>
    );
}  
// add pictures
// link to social media acc for fun?