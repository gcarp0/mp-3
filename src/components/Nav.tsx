import { Link } from "react-router-dom";
import styled from "styled-components";
// done
const NavStyle = styled.nav`
    width: 17%;
    align-self: stretch;
    padding: 30px 15px;
    background-color: #560303da;
    font-weight: bold;
    overflow: hidden;

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 10vh;
    }

    a {
        color: white;
        text-decoration: none;
        font-size: calc(0.8rem + 0.3vw);

        &:visited {
            color: white;
        }

        &:hover {
            text-decoration: underline;
        }
    }

    @media screen and (max-width: 750px) {
        width: 100%;
        min-height: unset;
        padding: 15px;

        ul {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
            gap: 15px;
        }
    }
`;

export default function Nav() {
    return (
        <NavStyle>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/employment">Employment</Link></li>
                <li><Link to="/extra">Extracurriculars</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/resources">Resources</Link></li>
            </ul>
        </NavStyle>
    );
}