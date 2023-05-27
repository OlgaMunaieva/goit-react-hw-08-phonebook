import ContactForm from 'components/contact_form/ContactForm';
import ContactList from 'components/contact_list/ContactList';
import { ContainerSettings, Title } from '../phonebook/Phonebook.styled';
import Filter from 'components/filter/Filter';

export const Phonebook = () => {
  return (
    <>
      <ContainerSettings>
        <div>
          <ContactForm />
          <Filter />
        </div>
        <div>
          <Title>Phonebook</Title>
        </div>
        <ContactList />
      </ContainerSettings>
    </>
  );
};
