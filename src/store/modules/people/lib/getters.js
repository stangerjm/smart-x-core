export const getPeople = state => {
  return state.people;
};

export const getPersonSingle = (state) => (id) => {
  return state.people.find(person => person._id === id);
};