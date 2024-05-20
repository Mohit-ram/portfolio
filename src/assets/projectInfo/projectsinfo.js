import img01 from "./mainImg001.jpg"
import img02 from "./mainImg002.jpg"

const projectsInfo = [
  {
    Id: 1,
    number: "001",
    title: "The Iris Species detection",
    info: "Accurately predicting the species of Iris flower based on flower parameters using machine learning algorithms. ",
    subInfo: "subinfo",
    imgPath: img01,
    category: "cat-a",
    dataSource: "link",
  },
  {
    Id: 2,
    number: "002",
    title: "Determining the Age of Abalones",
    info: "Appliying of machine learning techniques to the abalone dataset to predict the age category of abalones based on physical measurements.",
    subInfo:
      "Classification, Column Transformer, Confusion matrix, F1 score, support vector machines",
    imgPath: img02,
    category: "cat-a",
    dataSource: "https://archive.ics.uci.edu/dataset/1/abalone",
  },
  {
    Id: 3,
    number: "001",
    title: "Sample Project Title 3",
    info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    subInfo: "subinfo",
    imgPath: img01,
    category: "cat-d",
    dataSource: "link",
  },
  {
    Id: 4,
    number: "001",
    title: "Sample Project Title 4",
    info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    subInfo: "subinfo",
    imgPath: img02,
    category: "cat-d",
    dataSource: "link",
  },
];


export default projectsInfo;