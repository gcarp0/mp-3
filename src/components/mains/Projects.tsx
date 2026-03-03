import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Projects(){
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState(0);

    function Doadd(){
        setOutput(Number(input1)+Number(input2));
    }
    function Dosub(){
        setOutput(Number(input1)-Number(input2));
    }
    function Dodiv(){
        setOutput(Number(input1)/Number(input2));
    }
    function Domult(){
        setOutput(Number(input1)*Number(input2));
    }
    function Dopower(){
        let result = 1;
        for (let count = 0; count < Number(input2); count = count + 1) {
            result = result * Number(input1);
        }
        setOutput(result);
    }
    function Doclear(){
        setInput1("");
        setInput2("");
        setOutput(0);
    }
    return(
        <main>
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
                    <label htmlFor="box1">Enter first number:</label>
                    <input 
                        id={`box1`} 
                        value={input1} 
                        onChange={(e) => setInput1(e.target.value)}
                    />
                    <label htmlFor="box2">Enter second number:</label>
                    <input 
                        id={`box2`} 
                        value={input2} 
                        onChange={(e) => setInput2(e.target.value)}
                    />
                   
                    <button onClick={Doadd}>+</button> 
                    <button onClick={Dosub}>-</button> 
                    <button onClick={Dodiv}>/</button> 
                    <button onClick={Domult}>*</button> 
                    <button onClick={Dopower}>^</button>

                    <label htmlFor="box3">Answer:</label>
                    <input 
                        id={`box3`} 
                        value={output}
                        style={{ color: output < 0 ? 'red' : 'white' }}
                    />

                    <button onClick={Doclear}>clear</button> 
        </main>
    )
};   
// need to add styling and media screens