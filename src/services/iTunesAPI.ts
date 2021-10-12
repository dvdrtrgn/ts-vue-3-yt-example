import { ItunesTypes } from '../types/ItunesTypes.interface';

export const itunesSearch = async (search: string): Promise<ItunesTypes> => {
  const paramArr = Object.entries({
    term: search,
    entity: 'album',
    limit: 10,
  }).map((arr) => `${arr[0]}=${arr[1]}`);

  return await fetch(
    `https://itunes.apple.com/search?${paramArr.join('&')}`
    // ,{mode: 'no-cors'}
  ).then((val) => val.json());
};

// https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
