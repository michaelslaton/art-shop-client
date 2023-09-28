import Artist from "./Artist";

type Product = {
  id: number;
  title: string;
  artist: Artist;
  price: number;
  description: string;
  img: string;
  tags: string[];
};

export default Product;