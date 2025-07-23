import {faker } from '@faker-js/faker';

export interface Person {
    id: string;
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    email: string;
    image: string;
    pet?: Pet;
}

interface Pet {
    id: string;
    animalName: string;
    type: string;
}

const generateFakePerson = (): Person => {
  let pet: Pet | undefined;
  let hasPet = Math.floor(Math.random() * 2);
  
  if (hasPet) {
    pet = {
      id: faker.string.uuid(),
      animalName: faker.animal.petName(),
      type: faker.animal.type(),
    };
  }

  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    gender: faker.person.gender(),
    age: faker.number.int({ min: 1, max: 100 }),
    email: faker.internet.email(),
    image: faker.image.avatarGitHub(),
    pet: pet,
  };
}

export const generateFakePersons = (count = 10) => {
  return Array.from({ length: count }, generateFakePerson);
}