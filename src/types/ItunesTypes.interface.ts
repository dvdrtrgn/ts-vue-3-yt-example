// Generated by https://quicktype.io

export interface ItunesTypes {
    resultCount?: number;
    results?: ItunesResult[];
}

export interface ItunesResult {
    amgArtistId?: number;
    artistId: number;
    artistName: string;
    artistViewUrl: string;
    artworkUrl100: string;
    artworkUrl60: string;
    collectionCensoredName: string;
    collectionExplicitness: string;
    collectionId: number;
    collectionName: string;
    collectionPrice: number;
    collectionType: string;
    collectionViewUrl: string;
    contentAdvisoryRating?: string;
    copyright: string;
    country: string;
    currency: number;
    primaryGenreName: string;
    releaseDate: string;
    trackCount: number;
    wrapperType: string;
}
