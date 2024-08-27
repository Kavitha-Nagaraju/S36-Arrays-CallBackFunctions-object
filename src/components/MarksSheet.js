import React, { useRef } from 'react'

function MarksSheet() {
  let firstNameInputRef = useRef ();
  let lastNameInputRef = useRef();
  let telInputRef = useRef();
  let engInputRef = useRef();
  let hinInputRef = useRef();
  let mathInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();
  let resultParaRef = useRef();
  let telSpanRef = useRef();
  let engSpanRef = useRef();
  let hinSpanRef = useRef();
  let mathSpanRef = useRef();
  let sciSpanRef = useRef();
  let socSpanRef = useRef();


  let inputOnChange=(InputRef,SpanRef)=>{
    if(InputRef.current.value>=0 && InputRef.current.value<=100){
      if(InputRef.current.value>=35){
        SpanRef.current.innerHTML="Pass";
        SpanRef.current.style.backgroundColor="green";
      }
      else{
        SpanRef.current.innerHTML="Fail";
        SpanRef.current.style.backgroundColor="red";
      }
    }
    else{
      SpanRef.current.innerHTML="Invalid";
      SpanRef.current.style.backgroundColor="yellow";
    }
  
  };

  let inputOnFocus=(InputRef)=>{
    InputRef.current.style.backgroundColor = "orange";
  };

  let inputOnBlur=(InputRef)=>{
    InputRef.current.style.backgroundColor="lightblue";
  }
  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input ref={firstNameInputRef}></input>
          <span></span>
        </div>
        <div>
          <label>Last Name</label>
          <input ref={lastNameInputRef}></input>
          <span ></span>
        </div>
        <div>
          <label>Telugu</label>
          <input ref={telInputRef} onFocus={()=>{
               inputOnFocus(telInputRef);
              
          }} onChange={()=>{
            inputOnChange(telInputRef,telSpanRef);
          }} onBlur={()=>{
            inputOnBlur(telInputRef);
          }}></input>
          <span ref={telSpanRef}></span>
        </div>
        <div>
          <label>English</label>
          <input ref={engInputRef} onFocus={()=>{
            inputOnFocus(engInputRef);
          }}onChange={()=>{
            inputOnChange(engInputRef,engSpanRef);
          }}onBlur={()=>{
            inputOnBlur(engInputRef);
          }}></input>
          <span ref={engSpanRef}></span>
        </div>
        <div>
          <label>Hindhi</label>
          <input ref={hinInputRef} onFocus={()=>{
            inputOnFocus(hinInputRef);
          }}onChange={()=>{
            inputOnChange(hinInputRef,hinSpanRef);
          }}onBlur={()=>{
            inputOnBlur(hinInputRef);
          }}></input>
          <span ref={hinSpanRef}></span>
        </div>
        <div>
          <label>Maths</label>
          <input ref={mathInputRef} onFocus={()=>{
            inputOnFocus(mathInputRef);
          }} onChange={()=>{
            inputOnChange(mathInputRef,mathSpanRef);
          }}onBlur={()=>{
            inputOnBlur(mathInputRef);
          }}></input>
          <span ref={mathSpanRef}></span>
        </div>
        <div>
          <label>Science</label>
          <input ref={sciInputRef} onFocus={()=>{
            inputOnFocus(sciInputRef);
          }}onChange={()=>{
            inputOnChange(sciInputRef,sciSpanRef);
          }}onBlur={()=>{
            inputOnBlur(sciInputRef);
          }}></input>
          <span ref={sciSpanRef}></span>
        </div>
        <div>
          <label>Social</label>
          <input ref={socInputRef}onFocus={()=>{
            inputOnFocus(socInputRef);
          }}onChange={()=>{
            inputOnChange(socInputRef,socSpanRef);
          }}onBlur={()=>{
            inputOnBlur(socInputRef)
          }}></input>
          <span ref={socSpanRef}></span>
        </div>
        <div>
          <button type="button" onClick={()=>{
            let firstName = firstNameInputRef.current.value;
            let lastName = lastNameInputRef.current.value;
            let telMarks = Number(telInputRef.current.value);
            let engMarks = Number(engInputRef.current.value);
            let hinMarks = Number(hinInputRef.current.value);
            let mathMarks = Number(mathInputRef.current.value);
            let sciMarks = Number(sciInputRef.current.value);
            let socMarks = Number(socInputRef.current.value);
            let total = telMarks+engMarks+hinMarks+mathMarks+sciMarks+socMarks;
            alert(total);
            let perc=(total/600)*100;
            let passMarks=35;
            let result;
            if(telMarks>=passMarks && engMarks>=passMarks&& hinMarks>=passMarks && mathMarks>=passMarks && sciMarks>=passMarks && socMarks>=passMarks){
              result="Pass";
            }
            else{
              result="Fail";
            }
            resultParaRef.current.innerHTML = `${firstName} ${lastName} ${result} got score ${total} with percentage ${perc.toFixed(2)}`;
          }}>Click here for Result</button>
        </div>
        <div>
          <p ref={resultParaRef}>Results</p>
        </div>
      </form>
      
    </div>
  )
}

export default MarksSheet
