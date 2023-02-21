import { useEffect, useState } from "react";
import axios from "axios";
import AdviceCard from "./components/AdviceCard";
import Loading from "./components/Loading";


function App() {
  const [advice, setAdvice] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getAdvice = () => {
    setIsLoading(true);
    axios.get('https://api.adviceslip.com/advice')
    .then(function (response) {
      setAdvice(response.data.slip);
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
      ;
    })
    .catch(function (error) {
      console.log(error);
      setIsLoading(false);
    })
  }

  useEffect(() => {
   getAdvice();
  }, [])

  return (
    <main>
      {isLoading ? 
        <Loading /> : 
        <AdviceCard id={advice.id} advice={advice.advice} getAdvice={getAdvice}/>  
      }
    </main>
  );
}

export default App;
