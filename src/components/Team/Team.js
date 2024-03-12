import "./Team.css";

const Team = (props) => {

    const cor = {backgroundColor: props.corSecundaria};

    return(
        <section className="team-section" style={cor}>
            <h3 style={{borderColor: props.corPrimaria, borderBottom: '4px solid'}}>{props.nome}</h3>

        </section>
    )
}

export default Team;