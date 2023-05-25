import ContactForm from 'components/contact_form/ContactForm';
import ContactList from 'components/contact_list/ContactList';
import { ContainerSettings } from '../phonebook/Phonebook.styled';
import Filter from 'components/filter/Filter';

export const Phonebook = () => {
  return (
    <>
      {/* <h1>Phonebook</h1> */}
      <ContainerSettings>
        <div>
          <ContactForm />
          <h2>Filter</h2>
          <Filter />
        </div>
        <div>
          <h2>Contacts</h2>
          <ContactList />
        </div>
      </ContainerSettings>
    </>
  );
};
