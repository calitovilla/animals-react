import { useState, useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle';
import CardList from './components/card-list/CardList';
import { generateFakePersons } from './utils/generateFakePersons';
import type { Person } from './utils/generateFakePersons';
import './App.css'

function App() {

  const [persons, setPersons] = useState<Person[]>([]);
  const [filteredPersons, setFilteredPersons] = useState<Person[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const persons = generateFakePersons(5);
      setPersons(persons);
      setFilteredPersons(persons);
    };
    fetchData(); 
  }, []);


  return (
    <>
      <ThemeToggle />
      <input type="text" placeholder="Type here" className="input" onChange={(event) => {
        const searchString = event.target.value.toLocaleLowerCase().trim();
        const filtered = persons.filter(person => person.firstName.toLocaleLowerCase().includes(searchString) || person.lastName.toLocaleLowerCase().includes(searchString));
        setFilteredPersons(filtered);
      }} />
      <CardList persons={filteredPersons} />
    </>
  )
}

export default App
