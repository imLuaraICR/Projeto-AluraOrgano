import { ToastContainer, toast } from "react-toastify";
import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import List from "../List/List";

import "./Form.css";

function Form() {

    const times = [
        "Programação",
        "Front-End",
        "Data Science",
        "DevOps",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ]

    const adSave = () => {
        toast("Form foi enviado!");
    }

    return (
        <section className="formulario">
            <ToastContainer/>
            <form onSubmit={adSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <InputText obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <InputText obrigatorio={true} label="Endereço" placeholder="Digite o endereço da imagem" />
                <List label="Time" itens={times} />
                <Button txt="Criar card" />
            </form>
        </section>
    );
};

export default Form;