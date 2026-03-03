import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.nav`
    /* Add your styles here */
`;

const ListStyle = styled.ul`

`;

const ListItemStyle = styled.li`

`;

export default function Nav() {
    return (
        <NavStyle>
            <Link to="/">Home</Link>
            <Link to="/education">Education</Link>
            <Link to="/employment">Employment</Link>
            <Link to="/extra">Extracurriculars</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resources">Resources</Link>
        </NavStyle>
    );
}
// need to add styling and media screeens