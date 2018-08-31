import { createSchema } from '../../../../global/mixins';

export const fetchRegionData = async context => {
  let data = await getData();
  let regions = data
    .map(createSchema);
  context.commit('updateRegions', regions);
};

export const addRegion = async (context, region) => {
  let data = await getData();
  let updatedData = data.concat([region]);

  context.commit('updateRegions', updatedData);
};

export const editRegion = async (context, region) => {
  let response = await getData();
  let updatedData = response.concat([region]);

  context.commit('updateRegions', updatedData);
};

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'WESTERN WA', code: 'WE-WA' },
        { id: 2, name: 'SOUTHWEST WA', code: 'SE-WA' },
        { id: 3, name: 'EASTERN WA', code: 'EA-WA' },
        { id: 4, name: 'CENTRAL WA', code: 'CE-WA' },
        { id: 5, name: 'NORTHERN WA', code: 'NO-WA' },
        { id: 6, name: 'SOUTHERN WA', code: 'SO-WA' }
      ]);
    }, 2000);
  });
}