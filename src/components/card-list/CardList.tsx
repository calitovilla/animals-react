import './CardList.css'
import Card from '../card/Card';
import type { Person } from '../../utils/generateFakePersons';

const CardList = ({persons}: {persons: Person[]}) => {
    return (
        <div className='card-list-container'>
            {
                persons.map((person, index) => (
                <Card key={index} person={person} />
                ))
            }
        </div>
    )
}

export default CardList;