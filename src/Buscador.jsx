export const Buscador = ({onSubmit, valorInput,onChange}) => {
    return(
        <form className="form-Buscador" onSubmit={(evento) => onSubmit(evento)}>
        <input className="buscador" value={valorInput} onChange={(evento) => onChange(evento)} />
      </form>
    )
}
//sii