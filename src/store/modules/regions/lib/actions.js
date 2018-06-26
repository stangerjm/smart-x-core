export const fetchRegionData = async context => {
  let data = await getData();
  context.commit('updateRegions', data);
};

export function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {'id': 1, 'name': 'James'},
        {'id': 1, 'name': 'Jenna'},
        {'id': 1, 'name': 'Joel'},
        {'id': 1, 'name': 'Jacob'},
        {'id': 1, 'name': 'Joseph'},
        {'id': 1, 'name': 'Sandi'}
      ]);
    }, 1000);
  });
}