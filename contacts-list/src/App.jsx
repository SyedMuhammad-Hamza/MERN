import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContacts from "./components/AddAndUpdateContacts";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundContact from "./components/NotFoundContact";
import Spinner from "./components/Spinner";

const App = () => {
  const [loading, setloading] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [originalContacts, setOriginalContacts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclouse();

  const getContactsFromFirebase = async () => {
    try {
      setloading(true);
      const contactsRef = collection(db, "contacts");
      onSnapshot(contactsRef, (snapshot) => {
        const contactsLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactsLists);
        setOriginalContacts(contactsLists);
        setloading(false);
        return contactsLists;
      });
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  useEffect(() => {
    getContactsFromFirebase();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    let filteredContacts = originalContacts.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );

    console.log({ filteredContacts });
    setContacts(filteredContacts);
    setloading(false);
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="relative items-center flex flex-grow">
            <FiSearch className="text-3xl ml-1 text-white absolute" />
            <input
              onChange={loading ? <Spinner /> : filterContacts}
              type="text"
              className="h-10 rounded-md flex-grow border text-white pl-9 border-white bg-transparent"
            />
          </div>
          <AiFillPlusCircle
            onClick={onOpen}
            className="text-5xl text-white cursor-pointer"
          />
        </div>
        <div className="mt-4 gap-3 flex flex-col">
          {loading ? <Spinner /> : null}
          {contacts?.length === 0 && !loading ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddAndUpdateContacts onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
