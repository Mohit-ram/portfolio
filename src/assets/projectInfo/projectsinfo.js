import img01 from "./mainImg001.jpg"
import img02 from "./mainImg002.jpg"
import img03 from "./mainImg003.png"
import img04 from "./mainImg004.png"
import img05 from "./mainImg005.png"

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
    Id: 3,
    number: "003",
    title: "Handwritten Digit Recognition",
    info: "Handwritten digit recognition, exploring deep learning techniques from data preprocessing to model architecture and regularization",
    subInfo:
      "Multi-class Image classification, CNN, overfitting, Regularisation PerformaceCurves" ,
    imgPath:img03,
    category: "cat-b",
    dataSource: "https://www.kaggle.com/competitions/digit-recognizer",
  },
  {
    Id: 4,
    number: "004",
    title: "Human or Horse",
    info: "Appliying transfer learning techniques to the classify humans or horses. ",
    subInfo: "Inceptionv3, Transfer Learning, layer weights, prefetching",
    imgPath:img04,
    category: "cat-b",
    dataSource: "https://laurencemoroney.com/datasets.html",
  },
  {
    Id: 5,
    number: "005",
    title: "Cat or Dog a transfer learning approach",
    info: "A Inceptionv3 model based classification of cats or dogs in an image. ",
    subInfo:"Binary Calssification, Transfer Learning, tf datasets, Autotune, ImagesFromDirectories.",
    imgPath:img05,
    category: "cat-b",
    dataSource: "https://www.kaggle.com/c/dogs-vs-cats",
  },
];


export default projectsInfo;