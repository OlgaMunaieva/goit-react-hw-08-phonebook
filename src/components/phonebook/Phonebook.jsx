import ContactForm from 'components/contact_form/ContactForm';
import ContactList from 'components/contact_list/ContactList';
import { ContainerSettings } from 'components/container_settings/ConteinerSettings.style';
import Filter from 'components/filter/Filter';

export const Phonebook = () => {
  return (
    <>
      <ContainerSettings>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
      </ContainerSettings>
      <ContactList />
    </>
  );
};
