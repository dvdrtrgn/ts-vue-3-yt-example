import { defineComponent, reactive, ref, toRefs } from 'vue';
import { itunesSearch } from '../services/iTunesAPI';
import { ItunesTypes } from '../types/ItunesTypes.interface';

let albums = reactive<{ data: ItunesTypes }>({ data: {} });
let searchText = ref('');
const searchItunes = async (search: string): Promise<void> => {
  const value = await itunesSearch(search);

  albums.data = value;

  console.log('data', albums);
};

export default {
  searchItunes,
  ...toRefs(albums), // results, resultCount
  searchText,
};
