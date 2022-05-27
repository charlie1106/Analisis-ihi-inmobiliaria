import ContactField from "../CampoFormContact";

const ContactFs = () => {
  const campos = [
    {
      name: "Nombre",
      descripcion: "nombre",
    },
    {
      name: "Email",
      descripcion: "email",
    },
    {
      name: "Teléfono",
      descripcion: "telefono",
    },
    {
      name: "Mensaje",
      descripcion: "mensaje aquí",
    },
  ];
  return campos.map((p) => (
    <ContactField name={p.name} descripcion={p.descripcion} />
  ));
};

export default ContactFs;
