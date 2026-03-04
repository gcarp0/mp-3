import styled from "styled-components";
//done
const StyledMain = styled.main`
    flex: 1;
    padding: 30px 40px;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    box-sizing: border-box;

    @media screen and (max-width: 1000px) {
        padding: 20px;
    }
`;

const CardGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5%;
    flex: 1;
    margin-top: 20px;
`;

const Card = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #e0e0e0;
    border-radius: 8px;
    text-decoration: none;
    color: #000000ff;
    flex: 1;
    font-size: calc(1rem + 1vw);

    &:hover {
        border-color: #000000ff;
        background: #f5f5ff;
    }
`;

export default function Resources() {
    return (
        <StyledMain>
            <title>My Resources</title>
            <h1>Resources</h1>
            <CardGrid>
                <Card href="https://www.linkedin.com/in/gina-carpenter-gmc/" target="_blank" rel="noopener noreferrer">LinkedIn</Card>
                <Card href="https://bu.joinhandshake.com/profiles/gina-carpenter-gmc" target="_blank" rel="noopener noreferrer">Handshake</Card>
                <Card href="https://drive.google.com/file/d/15qFDLMQzfvVyiCroyahQttWqKYxxGRLR/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume Document</Card>
            </CardGrid>
        </StyledMain>
    );
}