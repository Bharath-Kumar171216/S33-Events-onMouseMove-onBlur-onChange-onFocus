import React, { useRef } from 'react'

function Sheet() {
    let firstInputName = useRef();
    let lastInputName = useRef();
    let phyInputMarks = useRef();
    let cInputMarks = useRef();
    let testInputMarks = useRef();
    let javaInputMarks = useRef();
    let jsInputMarks = useRef();
    let tsInputMarks = useRef();
    let totalMarksLabel =useRef();

    let firstLabelName = useRef();
    let lastLabelName = useRef();
    let phyLabelMarks = useRef();
    let cLabelMarks = useRef();
    let testLabelMarks = useRef();
    let javaLabelMarks = useRef();
    let jsLabelMarks = useRef();
    let tsLabelMarks = useRef();

  return (
    <div>
      <form>
        <ol>
        <h1>Score card</h1>
        <div>
            <label><li>First Name</li></label>
            <input type="text" ref={firstInputName} ></input>
            <label ref={firstLabelName}></label>
        </div>
        <div>
            <label><li>Last Name</li></label>
            <input type="text" ref={lastInputName} ></input>
            <label ref={lastLabelName}></label>
        </div>
        <div>
            <label><li>Python</li></label>
            <input type="number" ref={phyInputMarks}
             onChange={()=>{
                let Marks = phyInputMarks.current.value;
                phyLabelMarks.current.innerHTML = Marks>=35 ? "pass":"fail";
            }}
            onFocus={()=>{
                phyInputMarks.current.style.backgroundColor ="lightblue";
            }}
            onBlur={()=>{
                phyInputMarks.current.style.backgroundColor ="";
            }}
            ></input>
            <label ref={phyLabelMarks}></label>
        </div>
        <div>
            <label><li>C</li></label>
            <input type="number" ref={cInputMarks}
             onChange={()=>{
                let Marks = cInputMarks.current.value;
                cLabelMarks.current.innerHTML = Marks>=35 ? "pass":"fail";
            }}
            onFocus={()=>{
                cInputMarks.current.style.backgroundColor ="lightblue";
            }}
            onBlur={()=>{
                cInputMarks.current.style.backgroundColor ="";
            }}
            ></input>
            <label ref={cLabelMarks}></label>
        </div>
        <div>
            <label><li>testing</li></label>
            <input type="number" ref={testInputMarks}
             onChange={()=>{
                let Marks = testInputMarks.current.value;
                testLabelMarks.current.innerHTML = Marks>=35 ? "pass":"fail";
            }}
            onFocus={()=>{
                testInputMarks.current.style.backgroundColor ="lightblue";
            }}
            onBlur={()=>{
                testInputMarks.current.style.backgroundColor ="";
            }}
            ></input>
            <label ref={testLabelMarks}></label>
        </div>
        <div>
            <label><li>Java</li></label>
            <input type="number" ref={javaInputMarks}
             onChange={()=>{
                let Marks = javaInputMarks.current.value;
                javaLabelMarks.current.innerHTML = Marks>=35 ? "pass":"fail";
            }}
            onFocus={()=>{
                javaInputMarks.current.style.backgroundColor ="lightblue";
            }}
            onBlur={()=>{
                javaInputMarks.current.style.backgroundColor ="";
            }}
            ></input>
            <label ref={javaLabelMarks}></label>
        </div>
        <div>
            <label><li>Java Script</li></label>
            <input type="number" ref={jsInputMarks}
             onChange={()=>{
                let Marks = jsInputMarks.current.value;
                jsLabelMarks.current.innerHTML = Marks>=35 ? "pass":"fail";
            }}
            onFocus={()=>{
                jsInputMarks.current.style.backgroundColor ="lightblue";
            }}
            onBlur={()=>{
                jsInputMarks.current.style.backgroundColor ="";
            }}
            ></input>
            <label ref={jsLabelMarks}></label>
        </div>
        <div>
            <label><li>Type Script</li></label>
            <input type="number" ref={tsInputMarks}
             onChange={()=>{
                let Marks = tsInputMarks.current.value;
                tsLabelMarks.current.innerHTML = Marks>=35 ? "pass":"fail";
            }}
            onFocus={()=>{
                tsInputMarks.current.style.backgroundColor ="lightblue";
            }}
            onBlur={()=>{
                tsInputMarks.current.style.backgroundColor ="";
            }}
            ></input>
            <label ref={tsLabelMarks}></label>
        </div>
        <div>
            <button type="button" onClick={()=>{
            

            let phyMarks = Number(phyInputMarks.current.value);
            let cMarks = Number(cInputMarks.current.value);
            let testMarks = Number(testInputMarks.current.value);
            let javaMarks = Number(javaInputMarks.current.value);
            let jsMarks = Number(jsInputMarks.current.value);
            let tsMarks = Number(tsInputMarks.current.value);
            let total = phyMarks+cMarks+testMarks+javaMarks+jsMarks+tsMarks;

            // phyLabelMarks.current.innerHTML = phyMarks>=35 ? "pass":"fail";
            // cLabelMarks.current.innerHTML = cMarks>=35 ? "pass":"fail";
            // testLabelMarks.current.innerHTML = testMarks>=35 ? "pass":"fail";
            // javaLabelMarks.current.innerHTML = javaMarks>=35 ? "pass":"fail";
            // jsLabelMarks.current.innerHTML = jsMarks>=35 ? "pass":"fail";
            // tsLabelMarks.current.innerHTML = tsMarks>=35 ? "pass":"fail";

            totalMarksLabel.current.innerHTML = `${firstInputName.current.value}${lastInputName.current.value} total marks are ${total}`;
            alert(`${firstInputName.current.value}${lastInputName.current.value} total marks are ${total}`);
            console.log(total);
            }}>Calculate result</button>
        </div>
        <div>
            <label  ref={totalMarksLabel} > Total marks</label>
        </div>
        </ol>
      </form>
    </div>
  )
}

export default Sheet
Number()