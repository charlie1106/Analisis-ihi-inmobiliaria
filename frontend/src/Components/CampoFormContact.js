const ContactField = (props) => {
  return (
    <div>
      <p>{props.name}*</p>
      <input placeholder={"Ingresa tu " + props.descripcion}></input>
    </div>
  );
};

export default ContactField;
