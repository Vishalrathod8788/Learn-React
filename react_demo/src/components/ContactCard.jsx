import { ContacList } from "./ContactList";
export const ContactCard = () => {
  const contact = [
    {
      name: "vishal",
      phone: "6353008705",
      email: "coder@vishal.sbs",
    },
    {
      name: "Alice",
      phone: "1234567890",
      email: "alice@gmail.com",
    },
    {
      name: "Bob",
      phone: "1234567890",
      email: "XXXXXXXXXXXXXXXX",
    },
  ];
  return (
    <div>
      <h1>ContactCard</h1>
      {contact.map((contact, index) => {
        return <ContacList key={contact.index} prop={contact} />;
      })}
    </div>
  );
};
