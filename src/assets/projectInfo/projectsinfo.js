import img06 from "./mainImg006.png"
import img07 from "./mainImg007.jpg"
import img03 from "./mainImg003.png"
import img05 from "./mainImg005.png"

const projectsInfo = [
  {
    Id: 6,
    number: "006",
    title: "Object tracking with yolo",
    info: "Object detection and tracking objects throughout frames only using YOLO",
    subInfo: "ObjectTrackin ComputerVision OpenCV Yolov8 ",
    imgPath: img06,
    category: "cat-a",
    dataSource: "pixabay",
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
    Id: 7,
    number: "007",
    title: "Wildlife Detection with YOLOv8 and Ultralytics",
    info: "Object detection using YOLOv8 and the Ultralytics datasets. Fine-tune the model on an “african-wildlife” dataset and perform inference on sample images.",
    subInfo:
      "Obeject Detection, Google Colab, Yolov8, Ultralytics Dataset, Yolo metrics, mAP50.",
    imgPath: img07,
    category: "cat-c",
    dataSource: "https://docs.ultralytics.com/",
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