import s from './App.module.scss';
import Button from "../components/Button/Button";
import RainbowText from "../components/Text/RainbowText";
import Header from "../components/Header/Header";
import {useState} from "react";

function App() {
   const [isRunning, setIsRunning] = useState(false)
  return (
    <div className={s.wrapper}>
        <Header/>
        <RainbowText isRunning={isRunning}/>
        <Button style={{marginBottom: "100px"}} onClick={() => setIsRunning(!isRunning)}/>
    </div>
  );
}

export default App;
