import styled from "styled-components";
import {Link} from "react-router";
//done
const StyledFooter = styled.footer`
    background-color: #560303ff;
    color: white;
    text-align: center;
    padding: 15px;
    font-size: calc(0.7rem + 0.3vw);

    a {
        color: #fff8f8;
        text-decoration: none;
    }
`;

export default function Footer(){
    return(
        <StyledFooter>
            <p>All Rights Reserved by Gina Carpenter
            <Link to="https://youtu.be/Lm4LYX3xdkU?si=0Mgoha_0lzGIcBRb"> | Credits © </Link> 
            </p>
        </StyledFooter>
    );
}
