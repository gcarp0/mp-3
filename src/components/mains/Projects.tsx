import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
// done
const StyledMain = styled.main`
    flex: 1;
    min-height: 100vh;
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

const CalcWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 400px;
    margin-top: 20px;
    font-family: Geneva, Verdana, sans-serif;

    label {
        font-weight: bold;
        font-size: calc(0.8rem + 0.3vw);
        color: #560303ff;
    }

    input {
        width: 100%;
        padding: 10px 15px;
        border-radius: 8px;
        border: 2px solid #560303ff;
        font-size: calc(0.85rem + 0.3vw);
        outline: none;
        background-color: #fff8f8;

        &:focus {
            border-color: #8b0000;
            background-color: #fff;
        }
    }

    button {
        padding: 10px;
        border-radius: 8px;
        border: none;
        background-color: #560303ff;
        color: white;
        font-size: calc(0.85rem + 0.3vw);
        cursor: pointer;

        &:hover {
            background-color: #8b0000;
        }
    }
`;

const ButtonRow = styled.div`
    display: flex;
    gap: 10px;
    margin: 10px 0;
    width: 100%;
    
    button {
        flex: 1;
    }   
`;

export default function Projects(){
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState<string | number>("");

    function doAdd(){ 
        if(input1 === "" || input2 === "") return;
        setOutput(Number(input1)+Number(input2)); 
    }
    function doSub(){ 
        if(input1 === "" || input2 === "") return;
        setOutput(Number(input1)-Number(input2)); 
    }
    function doDiv(){ 
        if(input1 === "" || input2 === "") return;
        setOutput(Number(input1)/Number(input2)); 
    }
    function doMult(){ 
        if(input1 === "" || input2 === "") return;
        setOutput(Number(input1)*Number(input2)); 
    }
    function doPower(){
        if(input1 === "" || input2 === "") return;
        let result = 1;
        for (let count = 0; count < Number(input2); count = count + 1) {
            result = result * Number(input1);
        }
        setOutput(result);
    }
    function doClear(){
        setInput1("");
        setInput2("");
        setOutput("");
    }

    return(
        <StyledMain>
            <title>My Projects</title>

            <h1>Projects</h1>
            <h2>TerrierTable</h2>
            <Link to="https://spark-bytes-food-share.onrender.com/">Deployment</Link>
            <p>
                React TypeScript app that helps Boston University communities discover leftover-food events, reserve servings, and reduce campus food waste. 
                It ships with a marketing/landing experience, authenticated flows for students, and club-oriented tools for publishing and managing events through Supabase. 
                Built collaboratively as a semester-long group project for CS391: Spark! Software Engineering Immersion.
            </p>

            <h2>JavaScript Calculator</h2> 
            <CalcWrapper>  
                <label htmlFor="box1">Enter first number:</label>
                <input 
                    id="box1" 
                    value={input1} 
                    onChange={(e) => setInput1(e.target.value)}
                />
                <label htmlFor="box2">Enter second number:</label>
                <input 
                    id="box2" 
                    value={input2} 
                    onChange={(e) => setInput2(e.target.value)}
                />
                <ButtonRow>
                    <button onClick={doAdd}>+</button> 
                    <button onClick={doSub}>-</button> 
                    <button onClick={doDiv}>/</button> 
                    <button onClick={doMult}>*</button> 
                    <button onClick={doPower}>^</button>
                </ButtonRow>
                <label htmlFor="box3">Answer:</label>
                <input 
                    id="box3" 
                    value={output}
                    readOnly
                    style={{ color: Number(output) < 0 ? 'red' : 'black' }}
                />
                <button onClick={doClear}>CLEAR</button> 
            </CalcWrapper> 
        </StyledMain>
    )
}