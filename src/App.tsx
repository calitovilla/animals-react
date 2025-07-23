import { useState, useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle';
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
          <div key={index} className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
              <div className="avatar">
                <div className="w-24 rounded">
                  <img src={person.image} />
                </div>
              </div>
              <h2 className="card-title">{person.firstName} {person.lastName}</h2>
              <p>Gender: {person.gender}</p>
              <p>Age: {person.age} years old</p>
              <p>Email: {person.email.toLowerCase()}</p>
              {person.pet && (
                <div>
                  <h3 className="font-bold">Pet Information:</h3>
                  <p>Name: {person.pet.animalName}</p>
                  <p>Type: {person.pet.type}</p>
                </div>
              )}
            </div>
          </div>
        ))
      }
    </>
  )
}

export default App
