import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Resources(){
    return(
        <main>
            <title>My Resources</title>
            
            <h1>Resources</h1>
                <Link to="https://www.linkedin.com/in/gina-carpenter-gmc/">LinkedIn</Link>
                <Link to="https://bu.joinhandshake.com/profiles/gina-carpenter-gmc">Handshake</Link>
                <Link to="https://drive.google.com/file/d/15qFDLMQzfvVyiCroyahQttWqKYxxGRLR/view?usp=sharing">Resume Document</Link>
        </main>
    );
}   
// need to add styling and media screens