import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

class Contact extends Component {
  state = {
    contacts: [
      { name: "Name 1", phone: "+905435110610" },
      { name: "Name 2", phone: "+905435110611" },
      { name: "Name 3", phone: "+905435110612" },
      { name: "Name 4", phone: "+905435110613" },
      { name: "Name 5", phone: "+905435110614" },
    ],
    age: 12,
    surname: "Tommy",
    order: "98",
    id: 1,
  };
  render() {
    const addContact = (data) => {
      console.log("Form onSubmit:FUNC-PARENT Param:", data);
      const { contacts } = this.state;
      // console.log("Contacts Old:::",contacts)
      contacts.push(data);
      // console.log("Contacts New:::",contacts)
      this.setState({ contacts: contacts });
    };
    console.log("Contact.JS STATE:::", this.state);
    const chgnState = () => {
      this.setState({ age: 21 });
    };
    return (
      <div>
        <h1>Contact</h1>
        <List contacts={this.state.contacts} />
        <Form addContact={addContact} />
        <button onClick={chgnState}>Change Contact.js State</button>
      </div>
    );
  }
}

export default Contact;
