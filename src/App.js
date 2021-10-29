import MenuAppBar from './comp/appbar';
import './App.css';
import { grid } from '@mui/system';
import './App.css';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [que,setque] = useState([
    {
      que:"HTML stands for :",
      ans:['hypertext markup language','wrong','wrong','wrong'],
      correct:'hypertext markup language'
    },
    {
      que:"CSS stands for :",
      ans:['wrong','wrong','cascading style sheet','wrong'],
      correct:'cascading style sheet'
    },
    {
      que:"JS stands for :",
      ans:['wrong','wrong','wrong','javaScript'],
      correct:'hypertext markup language'
    },
    {
      que:"HTML stands for :",
      ans:['hypertext markup language','wrong','wrong','wrong'],
      correct:'hypertext markup language'
    },
    {
      que:"HTML stands for :",
      ans:['hypertext markup language','wrong','wrong','wrong'],
      correct:'hypertext markup language'
    },
    {
      que:"HTML stands for :",
      ans:['hypertext markup language','wrong','wrong','wrong'],
      correct:'hypertext markup language'
    },
  ])
  const [st, setst] = useState(true);
  const [marks, setMarks] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [questionInd, setQuestionInd] = useState(0);
  const nextQuestion = ()=>{
    if(que.length - 1 == questionInd){
        setShowResult(true);
    }else{
      setQuestionInd(questionInd + 1);
    }
  };
  const checkAnswer = (cor, user) => {
    if (cor === user){
      setMarks(marks + 1);
    }
    nextQuestion();
  };
  if (questionInd === (que.length - 1)) {
   return <Typography className='result'>{marks}</Typography>
  } 
  return (
    <div className="App">
      
      <MenuAppBar/>
 
        
      
  
        <Grid spacing={3} container>
          <Grid md={12}>
            <Typography className="py-5" variant='h5'>
              {que[questionInd].que}
            </Typography>
          </Grid>
          <Grid md={12}>
            {que[questionInd].ans.map((e, i) =>(
              <Grid key={i} className="p-3"  md={6}>
              <Button onClick={()=>checkAnswer(que[questionInd].correct, e)} variant="contained" fullWidth={true}>{e}</Button>
            </Grid>
            ))}
            <Grid  className="p-3" md={6}>
              <Button onClick={() => setQuestionInd(questionInd + 1)} variant="outlined" fullWidth={true}>Next</Button>
            </Grid>
          </Grid>
        </Grid>
     
      </div>
  );
}

export default App;
