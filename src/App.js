import logo from './logo.svg';
import './App.css';
import MarksSheet from './components/MarksSheet';

function App() {
  let studentTenthResult=(telMarks,engMarks,hinMarks,mathMarks,sciMarks,socMarks,SName,passFN,failFN)=>{
   let passMarks=35;
   if(telMarks>=passMarks && engMarks>=passMarks && hinMarks>=passMarks && mathMarks>=passMarks && sciMarks>=passMarks && socMarks>=passMarks){
    passFN();
   }else{
    failFN();
   }
    
  };

  studentTenthResult(79,9,67,56,65,67,"kavitha",()=>{console.log(`student Passed in tenth`)},()=>{console.log(`student Fail in tenth`)});
  
 let kavithaTenthDetails={
  firstName:"Kavitha",
  lastName:"nagaraju",
  telMarks:79,
  engMarks:80,
  hinMarks:70,
  mathMarks:65,
  sciMarks:56,
  socMarks:87,
 };
 console.log(kavithaTenthDetails.firstName);
 console.log(kavithaTenthDetails["lastName"]);
 console.log(kavithaTenthDetails["sciMarks"]);

 let studentArray=["Kumari","Uppala",67,89,70,67,56,87];
 console.log(studentArray[1]);
 console.log(studentArray[7]);

 let SumathiDetails={
  firstName:"Sumathi",
  lastName:"Nagaraju",
  telMarks:98,
  engMarks:78,
  hinMarks:98,
  mathMarks:67,
  sciMarks:86,
  socMarks:45,
 };
 console.log(SumathiDetails.mathMarks);
 console.log(SumathiDetails["lastName"]);
 
 let{firstName,lastName,telMarks,engMarks,hinMarks,mathMarks,sciMarks,socMarks}=SumathiDetails;
 console.log(lastName);
 console.log(firstName);

 let{firstName:kavithaFN,lastName:kavithLN,telMarks:tMarks,engMarks:eMarks,hinMarks:hMarks,mathMarks:mMarks,sciMarks:scMarks,socMarks:soMarks}=kavithaTenthDetails;
 console.log(kavithaFN);
 console.log(kavithLN);

  return (
    <div className="App">
     <h1>CallBack Functions, Arrays,Object,Destructuring</h1> 
<MarksSheet></MarksSheet>
    </div>
  );
}

export default App;
