export const getRegions = state => {
  return state.regions;
};

export const getRegionSingle = (state) => (id) => {
  return state.regions.find(region=> region._id === id);
};