import { useState } from "react";

export const useSearchGifs = () => {


    const [gifs, setGifs] = useState([]);
    const [valorInput, setValorInput] = useState("");
    const [estadoCargando,setEstadoCargando] = useState(false);

    const onChange = (evento) => {
        const valor = evento.target.value;
        //console.log('se tecleo');
        setValorInput(valor);
    };

    const getGifs = async (query) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=s2SgyYfgNUUe1mDIaTYEK2H248i9RTeC&q=${query}`;

        setEstadoCargando(true);    
        const response = await fetch(url);
        const data = await response.json();
        setEstadoCargando(false);

        return data.data;
    };

    const onSubmit = async (evento) => {
        evento.preventDefault();
        const gifs = await getGifs(valorInput);
        console.log(gifs);

        setGifs(gifs);
    };

    return {
        onSubmit,
        onChange,
        valorInput,
        gifs,
        estadoCargando,
    }
}   