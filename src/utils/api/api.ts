import dummyData from "../../data/dummy-data";
import Product from "../../types/Product";

const dummyDataBase: Product[] = dummyData;

/*
  This is a false API, created to simulate data responses. This app is not connected to an API.
*/

export const populateRandom = (num: number) => {
  let results: Product[] = [];
  let ids: number[] = [];
  while (results.length < num) {
    const random = Math.floor(Math.random() * dummyDataBase.length);

    if(!ids.includes(dummyDataBase[random].id)) {
      results.push(dummyDataBase[random]);
      ids.push(dummyDataBase[random].id);
    }
    else continue;
  }
  return results;
}

export const listCategories = () => {
  let results: string[] = []
    
  for(let i=0;i<dummyDataBase.length;i++){
    dummyDataBase[i].tags.forEach((tag)=>{
      if(!results.includes(tag)) results.push(tag);
    })
  };

  return results;
};

export const getCategory = (category: string) => {
  let results: Product[] = dummyDataBase.filter((product) => product.tags.includes(category));

  return results;
}