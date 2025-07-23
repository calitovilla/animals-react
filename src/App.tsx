import { useState, useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle';
import Card from './components/Card';
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
      {
        persons.map((person, index) => (
          <Card key={index} person={person} />
        ))
      }
    </>
  )
}

export default App
