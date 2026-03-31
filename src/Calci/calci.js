import {  useState } from "react";
import "./calci.css";


export default function Calculator(){
    const [result,setresult] = useState("");
    function buttonClick(e){
        setresult(result+e.target.name);
    } 

    function backspace(){
        setresult(result.slice(0,result.length-1));
    }

    function clear(){
        setresult("");
    }
 
    function calculate(){
        try{
        setresult(eval(result));
        }
        catch(error){
            setresult("ERROR");
        }
    }
    
    return(
        <div className = "calci-app">

             <input type = "text"
                    value = {result}/>

            <div className = "keypad">
                <button id = "clear"
                        onClick = {clear}>AC</button>
                <button id = "backspace" 
                        onClick = {backspace}>C</button>


                <button 
                    className="keypadbutton"
                    onClick ={buttonClick} 
                    name = "+">+</button>
                <button 
                    className="keypadbutton"
                    onClick ={buttonClick} 
                    name = "7">7</button>
                <button 
                    className="keypadbutton"
                    onClick ={buttonClick} 
                    name = "8">8</button>
                <button 
                    className="keypadbutton"
                    onClick ={buttonClick} 
                    name = "9">9</button>
                <button 
                    className="keypadbutton"
                    onClick ={buttonClick} 
                    name = "-">-</button>
                <button 
                    className="keypadbutton"
                    onClick ={buttonClick} 
                    name = "4">4</button>
                <button 
                    className="keypadbutton"
                    onClick ={buttonClick} 
                    name = "5">5</button>
                <button 
                    className="keypadbutton"
                    onClick ={buttonClick} 
                    name = "6">6</button>
                <button 
                    className="keypadbutton"
                    onClick ={buttonClick} 
                    name = "*">*</button>
                <button 
                    className = "keypadbutton"
                    onClick ={buttonClick} 
                    name = "1">1</button>
                <button 
                    className="keypadbutton"
                    onClick ={buttonClick} 
                    name = "2">2</button>
                <button 
                    className="keypadbutton"
                    onClick ={buttonClick} 
                    name = "3">3</button>
                <button 
                    className="keypadbutton"
                    onClick ={buttonClick} 
                    name = "/">/</button>
                <button 
                    className="keypadbutton"
                    onClick ={buttonClick} 
                    name = "0">0</button>
                <button 
                    className="keypadbutton"
                    onClick ={buttonClick} 
                    name = ".">.</button>

                <button 
                    id= "output"
                    onClick = {calculate}>=</button> 
                    
            </div>
            
        </div> 
    
    )
}
