import art1 from "../assets/imgs/artImages/product (1).png";
import art2 from "../assets/imgs/artImages/product (2).png";
import art3 from "../assets/imgs/artImages/product (3).png";
import art4 from "../assets/imgs/artImages/product (4).png";
import art5 from "../assets/imgs/artImages/product (5).png";
import art6 from "../assets/imgs/artImages/product (6).png";
import art7 from "../assets/imgs/artImages/product (7).png";
import art8 from "../assets/imgs/artImages/product (8).png";
import art9 from "../assets/imgs/artImages/product (9).png";
import art10 from "../assets/imgs/artImages/product (10).png";
import art11 from "../assets/imgs/artImages/product (11).png";
import art12 from "../assets/imgs/artImages/product (12).png";
import art13 from "../assets/imgs/artImages/product (13).png";
import art14 from "../assets/imgs/artImages/product (14).png";
import art15 from "../assets/imgs/artImages/product (15).png";
import art16 from "../assets/imgs/artImages/product (16).png";
import art17 from "../assets/imgs/artImages/product (17).png";
import Product from "../types/Product";
import dummyArtistData from "./dummy-artist-data";

const lorem: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const dummyData: Product[] = [
  {
    id: 0,
    title: "Fae City",
    artist: dummyArtistData[0],
    price: 15.99,
    description: "A Fae City. " + lorem,
    img: art1,
    tags: ["fantasy", "city"],
  },
  {
    id: 1,
    title: "Strange Cat",
    artist: dummyArtistData[1],
    price: 7.99,
    description: "A Strange Cat. " + lorem,
    img: art2,
    tags: ["fantasy", "animal", "cat"]
  },
  {
    id: 2,
    title: "Noble Cat",
    artist: dummyArtistData[2],
    price: 8.99,
    description: "A Noble Cat. " + lorem,
    img: art3,
    tags: ["fantasy", "animal", "cat"]
  },
  {
    id: 3,
    title: "A Cat",
    artist: dummyArtistData[3],
    price: 8.59,
    description: "A Cat. " + lorem,
    img: art4,
    tags: ["animal", "cat", "surreal"]
  },
  {
    id: 4,
    title: "An Orange Cat",
    artist: dummyArtistData[0],
    price: 12.99,
    description: "An orange cat in a Fae forest. " + lorem,
    img: art5,
    tags: ["fantasy", "animal", "cat"]
  },
  {
    id: 5,
    title: "An Cat in Space",
    artist: dummyArtistData[1],
    price: 4.99,
    description: "A cat in space. " + lorem,
    img: art6,
    tags: ["sci-fi", "animal", "cat", "surreal"]
  },
  {
    id: 6,
    title: "Alien Lizard",
    artist: dummyArtistData[2],
    price: 8.99,
    description: "An alien lizard on a strange planet. " + lorem,
    img: art7,
    tags: ["sci-fi", "animal", "lizard"]
  },
  {
    id: 7,
    title: "A large eyed Alien Lizard",
    artist: dummyArtistData[3],
    price: 5.99,
    description: "An alien lizard with large green eyes. " + lorem,
    img: art8,
    tags: ["surreal", "animal", "lizard"]
  },
  {
    id: 8,
    title: "Small lizard",
    artist: dummyArtistData[0],
    price: 9.99,
    description: "A small lizard. " + lorem,
    img: art9,
    tags: ["surreal", "animal", "lizard"]
  },
  {
    id: 9,
    title: "Best lizard",
    artist: dummyArtistData[1],
    price: 99.99,
    description: "A lizard. " + lorem,
    img: art10,
    tags: ["surreal", "animal", "lizard"]
  },
  {
    id: 10,
    title: "Alien City",
    artist: dummyArtistData[2],
    price: 2.99,
    description: "An alien city. " + lorem,
    img: art11,
    tags: ["sci-fi", "city"]
  },
  {
    id: 11,
    title: "Alien World",
    artist: dummyArtistData[3],
    price: 4.99,
    description: "An alien city on an alien world. " + lorem,
    img: art12,
    tags: ["sci-fi", "city"]
  },
  {
    id: 12,
    title: "Alien Metropolis",
    artist: dummyArtistData[0],
    price: 7.99,
    description: "An alien metropolis. " + lorem,
    img: art13,
    tags: ["sci-fi", "city"]
  },
  {
    id: 13,
    title: "Alien Holy City",
    artist: dummyArtistData[1],
    price: 10.99,
    description: "An alien holy city. " + lorem,
    img: art14,
    tags: ["sci-fi", "city"]
  },
  {
    id: 14,
    title: "Alien cityscape",
    artist: dummyArtistData[2],
    price: 4.99,
    description: "An alien cityscape on an alien world. " + lorem,
    img: art15,
    tags: ["sci-fi", "city"]
  },
  {
    id: 15,
    title: "A snowflake",
    artist: dummyArtistData[3],
    price: 20.99,
    description: "A surreal, macro snowflake. " + lorem,
    img: art16,
    tags: ["surreal", "snowflake", "macro"]
  },
  {
    id: 16,
    title: "Snowflake on fire",
    artist: dummyArtistData[0],
    price: 13.99,
    description: "A blazing snowflake. " + lorem,
    img: art17,
    tags: ["surreal", "snowflake", "macro"]
  },
];

export default dummyData;