import { useState, useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import { generateFakePersons } from './utils/generateFakePersons';
import type { Person } from './utils/generateFakePersons';
import './App.css'

function App() {

  const [persons, setPersons] = useState<Person[]>([]);
  const [filteredPersons, setFilteredPersons] = useState<Person[]>([]);

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchString = event.target.value.toLocaleLowerCase().trim();
        const filtered = persons.filter(person => person.firstName.toLocaleLowerCase().includes(searchString) || person.lastName.toLocaleLowerCase().includes(searchString));
        setFilteredPersons(filtered);
      }

  useEffect(() => {
    const fetchData = async () => {
      const persons = generateFakePersons(20);
      setPersons(persons);
      setFilteredPersons(persons);
    };
    fetchData(); 
  }, []);


  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Persons of the World</a>
        </div>
        <div className="flex-none">
          <ThemeToggle />
         </div>
      </div> 
    <div className="app-container">
     
      <h1 className="app-title text-3xl font-bold">Persons of the World</h1>
      <SearchBox onChangeHandler={filterHandler} />
      <CardList persons={filteredPersons} />
    </div>
    </>
  )
}

export default App
