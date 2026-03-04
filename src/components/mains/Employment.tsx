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
    ul {
        margin-left: 20px;
        margin-bottom: 1.5rem;
    }
    @media screen and (max-width: 1000px) {
        width: 100%;
        padding: 20px;
    }
`;

export default function Employment(){
    return(
        <StyledMain>
            <title>My Employment</title>
            
            <h1>Employment</h1>
                <h2>Collette | Pawtucket, RI</h2>
                <h4>May 2025 - August 2025</h4>
                    <ul>
                        <li> Supported backend operations within the Client Care Center, with a focus on traveler
                        information, airline documentation, and internal operational processes. </li>
                        <li> Migrated client data from a legacy CRM to a developing CRM by validating records in Excel,
                        streamlining data management. </li>
                        <li>Ensured smooth and efficient service through attention to detail and cross-functional
                        collaboration. </li>
                    </ul>

                <h2>Lindo Manufacturing | Swansea, MA</h2>
                <h4>May 2024 - August 2024</h4>
                    <ul>
                        <li>Operated and monitored production processes for topical pharmaceutical products under GMP
                        regulations, ensuring adherence to quality and safety standards.</li>
                        <li>Collaborated frequently with the Quality Assurance team, assisting in updating SOPs and
                        improving material and component handling and storage processes.</li>
                        <li>Supported multichannel communication between the company, clients, and vendors.</li>
                    </ul>

                <h2>Boston University Academy | Boston, MA</h2>
                <h4>March 2024 - Present</h4>
                    <ul>
                        <li>Design and lead a Squash PE Unit during the spring semester, instructing students of all levels
                        and fostering an appreciation for the sport.</li>
                        <li>Facilitate transportation for athletic teams and events.</li>
                        <li>Assist the Athletics department with various operational tasks as needed, supporting smooth
                        execution of programs and events.</li>
                    </ul>
        </StyledMain>
    );
}
