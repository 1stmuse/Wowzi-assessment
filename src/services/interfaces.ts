type results<T> = T[];

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Record<string, any>;
  location: Record<string, any>;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface IMultipleResultsResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: any | null;
  };
  results: results<T>;
}
