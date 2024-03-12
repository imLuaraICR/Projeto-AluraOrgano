import Card from "../Card/Card";
import "./Team.css";

const Team = (props) => {

    const cor = { backgroundColor: props.corSecundaria };

    return (
        <section className="team-section" style={cor}>
            <h3 style={{ borderColor: props.corPrimaria, borderBottom: '4px solid' }}>{props.nome}</h3>
            <div className="team-cards">
                {props.colaboradores.map(colaborador => <Card
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    img={colaborador.img} />)}
            </div>
        </section>
    )
}

export default Team;