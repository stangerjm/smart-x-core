export const getPeople = state => {
  return state.people;
};

export const getPerson = state => {
  return id => {
    return state.people.find(person => {
      return person._id === id;
    });
  }
};