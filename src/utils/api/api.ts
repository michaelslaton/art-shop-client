import dummyData from "../../data/dummy-data";
import Product from "../../types/Product";

const dummyDataBase: Product[] = dummyData;

export const populateRandom = (num: number) => {
  console.log("Database Length: ", dummyDataBase.length)
  let results: Product[] = [];
  let ids: number[] = [];
  while (results.length < num) {
    const random = Math.floor(Math.random() * dummyDataBase.length);

    console.log(random);

    if(!ids.includes(dummyDataBase[random].id)) {
      results.push(dummyDataBase[random]);
      ids.push(dummyDataBase[random].id);
    }
    else continue;
  }
  return results;
}