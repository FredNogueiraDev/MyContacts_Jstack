import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then(async (res) => {
        const json = await res.json();
        setContacts(json);
      })
      .catch((err) => { console.log(err); });
  }, []);

  const getContactText = (count) => `${count} ${count === 1 ? 'contato' : 'contatos'}`;

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar Contato..." />
      </InputSearchContainer>

      <Header>
        <strong>
          {getContactText(contacts.length)}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        {contacts.map((contact) => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category_name && (
                <small>{contact.category_name}</small>
                )}

              </div>
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
            </div>

            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt="Edit" />
              </Link>
              <button type="button">
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </Card>
        ))}

      </ListContainer>
    </Container>
  );
}
