import "./List.css";

const List = (props) => {
  console.log(props.itens);
  return (
    <div className="list">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.aoAlterado(event.target.value)}
        value={props.valor}
        required={props.required}
      >
        <option value=""></option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default List;
