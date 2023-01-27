import { useState } from "react";
import { useEffect } from "react";
import Header from './components/Header';
import SearchInput from './components/SearchInput/SearchInput';
import Tabs from './components/Tabs/Index';
import AudioList from './components/AudioList';
import './App.css';
import FixFooter from "./components/FixFooter";
import { baseUrl } from "./config.js"; 

function App() {

  const [list, setList] = useState(false);
  const [appData, setAppData] = useState({}); 
  const onBackButtonPress = () => {
    setList(false);
  }

  useEffect(() =>{
    fetch(`${baseUrl}/song`)
    .then(res => res.json())
    .then(jsonResp => {    
      setAppData(jsonResp.appData);
      console.log(jsonResp);
    })
    .catch(error => {
      console.log({ error });
    })
  }, [] )

  return (
    <div className="App m-20">
      <Header />
      <h2 className = "mtb-20 p-10 app-quote">Pictures of toes at low prices</h2>
      <SearchInput />

      <Tabs tabData = {appData['homeScreen']}/>
      {list && <AudioList onBackButtonPress={onBackButtonPress} />}
      {/* <button onClick={() => setList(true)}>btn</button> */}
      <FixFooter />
    </div>
  );
}

export default App;
