import "./InputText.css";

const InputText = (props) => {
    console.log(props.label);



    const aoDigitado = (event)=>{
        props.aoAlterado(event.target.value);
    }

    return (
        <div className="input-text">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputText;