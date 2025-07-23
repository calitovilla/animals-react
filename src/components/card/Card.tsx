import './Card.css'
import type { Person } from '../../utils/generateFakePersons';

interface Props {
	person: Person; 
}

const Card = ({ person }: Props) => {
    return (
          <div className="card bg-base-300 shadow-sm">
            <div className="card-body">
              <div className="avatar justify-center">
                <div className="w-24 rounded">
                  <img src={person.image} />
                </div>
              </div>
              <h2 className="card-title justify-center">{person.firstName} {person.lastName}</h2>
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
    )
}

export default Card;