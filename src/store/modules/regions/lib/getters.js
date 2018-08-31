export const getRegions = state => {
  return state.regions;
};

export const getRegionSingle = (state) => (id) => {
  let parsedId = parseInt(id);
  return state.regions.find(region=> region.id === parsedId);
};