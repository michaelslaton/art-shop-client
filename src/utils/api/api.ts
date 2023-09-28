import dummyArtData from "../../data/dummy-art-data";
import dummyArtistData from "../../data/dummy-artist-data";
import Artist from "../../types/Artist";
import Product from "../../types/Product";

const dummyArtDataBase: Product[] = dummyArtData;
const dummyArtistDataBase: Artist[] = dummyArtistData;

type artistListData = {
  name: string;
  id: number;
}

/*
  This is a false API, created to simulate data responses. This app is not connected to an API.
*/

export const populateRandom = (num: number) => {
  let results: Product[] = [];
  let ids: number[] = [];
  while (results.length < num) {
    const random = Math.floor(Math.random() * dummyArtDataBase.length);

    if(!ids.includes(dummyArtDataBase[random].id)) {
      results.push(dummyArtDataBase[random]);
      ids.push(dummyArtDataBase[random].id);
    }
    else continue;
  }
  return results;
}

export const listCategories = () => {
  let results: string[] = [];
    
  for(let i=0;i<dummyArtDataBase.length;i++){
    dummyArtDataBase[i].tags.forEach((tag)=>{
      if(!results.includes(tag)) results.push(tag);
    })
  };

  return results;
};

export const listArtists = () => {
  let results: artistListData[] = [];

  dummyArtistDataBase.forEach((artist)=> results.push({ name: artist.name, id: artist.id }));
  console.log(results)

  return results;
};

export const getCategory = (category: string) => {
  let results: Product[] = dummyArtDataBase.filter((product) => product.tags.includes(category));

  return results;
}