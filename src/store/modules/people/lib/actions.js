import personService from '../../../services/personService';

export const fetchPeopleData = async context => {
  let response = await personService.fetchPeople();
  context.commit('updatePeople', response.data.people);
};

export const addPerson = async (context, person) => {
  let response = await personService.addPerson(person);
  context.commit('addPerson', response.data);
};

export const deletePerson = async (context, payload) => {
  await personService.deletePerson(payload.id);
  context.commit('deletePerson', payload.id);
};

export const editPerson = async (context, payload) => {
  let response = await personService.editPerson(payload.person, payload.id);
  context.commit('editPerson', response.data);
};

export const fetchPerson = async (context, id) => {
  let response = await personService.fetchPerson(id);
  return response.data;
};