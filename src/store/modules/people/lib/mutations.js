export const updatePeople = (state, people) => {
  state.people = people;
};

export const addPerson = (state, person) => {
  state.people.push(person);
};

export const deletePerson = (state, id) => {
  let index = state.people.findIndex(person => person._id.value === id);
  state.people.splice(index, 1);
};

export const editPerson = (state, newPerson) => {
  let index = state.people.findIndex(person => person._id.value === newPerson._id.value);
  state.people.splice(index, 1, newPerson);
};