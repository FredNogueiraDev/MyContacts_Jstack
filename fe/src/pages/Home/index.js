/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';

import {
  useEffect, useMemo, useState, useCallback,
} from 'react';

import {
  Container, InputSearchContainer, Header, ListHeader, Card, ErrorContainer, EmptyListContainer,
  SearchNotFoundContainer,
} from './styles';

import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

import Loader from '../../components/Loader';
import Button from '../../components/Button';
import ContactsServices from '../../services/ContactsServices';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, SetHasError] = useState(false);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await ContactsServices.listContacts(orderBy);
      setContacts(contactsList);
      SetHasError(false);
    } catch {
      SetHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const getContactText = (count) => `${count} ${count === 1 ? 'contato' : 'contatos'}`;

  const handleToggleOrderBy = () => {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  };

  const determineJustifyContent = () => {
    if (hasError) {
      return 'flex-end';
    }

    if (contacts.length > 0) {
      return 'space-between';
    }

    return 'center';
  };

  const handleChangeSearchTerm = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleTryAgain = () => {
    loadContacts();
  };

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {contacts.length > 0 && (
        <InputSearchContainer>
          <input
            value={searchTerm}
            type="text"
            placeholder="Pesquisar Contato..."
            onChange={handleChangeSearchTerm}
          />
        </InputSearchContainer>
      )}

      <Header justifyContent={determineJustifyContent}>
        {(!hasError && contacts.length > 0) && (
          <strong>
            {getContactText(filteredContacts.length)}
          </strong>
        )}
        <Link to="/new">Novo contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad" />
          <div className="details">
            <strong>Ocorreu um erro ao obter seus contatos!</strong>
            <Button type="button" onClick={handleTryAgain}>Tentar Novamente</Button>
          </div>
        </ErrorContainer>
      )}

      {(!hasError && !isLoading) && (
        <>
          {filteredContacts.length > 0 && (
            <ListHeader orderBy={orderBy}>
              <button type="button" onClick={handleToggleOrderBy}>
                <span>Nome</span>
                <img src={arrow} alt="Arrow" />
              </button>
            </ListHeader>
          )}

          {(contacts.length > 0 && filteredContacts.length === 0) && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="magnifierQuestion" />
              <span>Nenhum resultado foi encontrado para <strong>”{searchTerm}”</strong>.</span>
            </SearchNotFoundContainer>
          )}

          {contacts.length === 0 && (
          <EmptyListContainer>
            <img src={emptyBox} alt="Caixa Vazia" />
            <p>
              Você ainda não tem nenhum contato cadastrado!
              Clique no botão <strong>”Novo contato”</strong> e faça um cadastro!
            </p>
          </EmptyListContainer>
          )}

          {filteredContacts.map((contact) => (
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
        </>
      )}

    </Container>
  );
}
