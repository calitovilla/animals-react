import { useState, useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle';
import CardList from './components/card-list/CardList';
import { generateFakePersons } from './utils/generateFakePersons';
import type { Person } from './utils/generateFakePersons';
import './App.css'

function App() {

  const [persons, setPersons] = useState<Person[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const persons = generateFakePersons(5);
      setPersons(persons);
    };
    fetchData(); 
  }, []);


  return (
    <>
      <ThemeToggle />
      <CardList persons={persons} />
    </>
  )
}

export default App
