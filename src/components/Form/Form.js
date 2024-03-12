import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import List from "../List/List";

import "./Form.css";
import { useState } from "react";

function Form(props) {

    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [nome, setNome] = useState('')
    const [time, setTime] = useState('')

    const adSave = (event) => {
        event.preventDefault();
        props.aoColaborador({
            nome,
            cargo,
            img,
            time
        })
        setNome('');
        setCargo('');
        setTime('');
        setImg('');
    }

    return (
        <section className="formulario">
            <form onSubmit={adSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <InputText valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <InputText valor={img} aoAlterado={valor => setImg(valor)} obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" />
                <List valor={time} aoAlterado={valor => setTime(valor)} label="Time" itens={props.times} />
                <Button txt="Criar card" />
            </form>
        </section>
    );
};

export default Form;