export const fetchRegionData = async context => {
  let data = await getData();
  context.commit('updateRegions', data);
};

export function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {'id': 1, 'name': 'James'},
        {'id': 2, 'name': 'Jenna'},
        {'id': 3, 'name': 'Joel'},
        {'id': 4, 'name': 'Jacob'},
        {'id': 5, 'name': 'Joseph'},
        {'id': 6, 'name': 'Sandi'}
      ]);
    }, 2000);
  });
}