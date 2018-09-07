export const getPeople = state => {
  return state.people;
};

export const getSortablePeople = (state) => {
  let filter = state.currentFilter;
  let orientation = state.orientation;
  return getPeopleSortedBy(state.people, filter, orientation);
};

const getPeopleSortedBy = (people, key, orientation) => {
  return people.slice().sort(function(item1, item2) {
    if (orientation) {
      let itemKey1 = item1[key];
      let itemKey2 = item2[key];

      if (itemKey1 < itemKey2) {
        return -1;
      }
      if (itemKey1 > itemKey2) {
        return 1;
      }

      return 0;
    } else {
      let itemKey1 = item1[key];
      let itemKey2 = item2[key];

      if (itemKey1 < itemKey2) {
        return 1;
      }
      if (itemKey1 > itemKey2) {
        return -1;
      }

      return 0;
    }
  });
};

export const getPersonSingle = (state) => (id) => {
  return state.people.find(person => person._id === id);
};