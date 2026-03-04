import styled from "styled-components";
//done
const StyledHeader = styled.header`
    background-color: #560303ff;
    color: white;
    padding: 20px 40px;
    text-align: left;

    h1 {
        font-size: calc(1.5rem + 1vw);
        margin: 0;
    }

    p {
        font-size: calc(0.8rem + 0.3vw);
        margin: 5px 0 0 0;
        opacity: 0.85;
    }

    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Gina Carpenter</h1>
            <p>Student at Boston University</p>
        </StyledHeader>
    );
}