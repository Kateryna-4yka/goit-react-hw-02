import css from "./App.module.css";
import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from '../Notification/Notification';


export default function App() {

const [click, setClick] = useState(()=>{
  
  const savedClicks = localStorage.getItem('saved-clicks');
  if (savedClicks !== null) {return JSON.parse(savedClicks)} else {
  return ({
	good: 0,
	neutral: 0,
	bad: 0
})}});

const totalFeedback = click.good + click.neutral + click.bad;

const percent = totalFeedback? (Math.round((click.good / totalFeedback) * 100)) : 0;

const handleUpdateFeedback = feedbackType => {
  if (feedbackType === "reset") {
    setClick({ good: 0, neutral: 0, bad: 0 });
  } else {setClick(prevState => ({
    ...prevState,
    [feedbackType]: prevState[feedbackType] + 1
  }));}
};


useEffect(() => {
  window.localStorage.setItem("saved-clicks", JSON.stringify(click));
}, [click]);



  return <div className={css.container}>
    <div className={css.section}>

  <Description />
  <Options onClick={handleUpdateFeedback} seeButton={totalFeedback}/>

  {totalFeedback > 0 ? <Feedback click={click} seeButton={totalFeedback} percent={percent} /> : <Notification />}
  
  </div>
  </div>
}

