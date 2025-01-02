
import { Buscador } from "./Buscador";
import { GridGifs } from "./GridGifs";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './estilo.css' 
import { useSearchGifs } from "./useSearchGifs";

function App() {
  // const [gifs, setGifs] = useState([]);
  // const [valorInput, setValorInput] = useState("");

  // const onChange = (evento) => {
  //   const valor = evento.target.value;
  //   //console.log('se tecleo');
  //   setValorInput(valor);
  // };

  // const getGifs = async (query) => {
  //   const url = `https://api.giphy.com/v1/gifs/search?api_key=s2SgyYfgNUUe1mDIaTYEK2H248i9RTeC&q=${query}`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   return data.data;
  // };

  // const onSubmit = async (evento) => {
  //   evento.preventDefault();
  //   const gifs = await getGifs(valorInput);
  //   console.log(gifs);

  //   setGifs(gifs);
  // }; 


  const {onChange,onSubmit,valorInput,gifs,estadoCargando} = useSearchGifs()
  //jsx
  return (
    <div className="App">
      <Buscador
        valorInput={valorInput}
        onChange={onChange}
        onSubmit={onSubmit}
      />

      {
        //Buscador({valorInput,onChange,onSubmit})
      }

      {
        estadoCargando ? (<h2>Cargando...</h2>) : (<GridGifs gifs={gifs} />) 
      }
      
      {
        //GridGifs({gifs})
      }
    </div>
  );
}

export default App;
