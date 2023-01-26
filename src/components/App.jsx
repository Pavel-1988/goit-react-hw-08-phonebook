import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { Section } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <Section>
        <ToastContainer autoClose={2000} />
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}

//===================================в1=================================//


// import { useFetchContactsQuery } from 'redux/contactsApi';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';

// import { Section } from './App.styled';

// export const App = () => {

//   const {data: contacts = [], isLoading} = useFetchContactsQuery
//     return (
//       <Section>
//         <h1>Phonebook</h1>
//         <ContactForm />
//         <h2>Contacts</h2>
//         {contacts.length > 0 ? (
//           <>
//             {isLoading && <p>Loading ...</p>}
//              <Filter />
//             <ContactList />
//           </>
//         ) : (
//             <p>You have no contacts</p>
//         )
//       }

//       {/* <Filter />
//       <ContactList /> */}

//       </Section>
//     )
// }
  

// // https://63b67deb58084a7af3b3c24c.mockapi.io/:endpoint