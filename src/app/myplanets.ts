export interface myplanet {
  planetName: string;
  planetColor: string;
  planetRadiusKM: number;
  distInMillionsKM: {
    fromSun: number;
    fromEarth: number;
  };
  image: string;
}
