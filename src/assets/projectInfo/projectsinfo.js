import img23 from "./mainImg023.png"
import img24 from "./mainImg024.png"
import img15 from "./mainImg015.png"
import img25 from "./mainImg025.png"


const projectsInfo = [
  {Id: 23,
    number: "023",
    title: "Contextual Q&A Chat with AI, End-to-End App",
    info: "A AI app that answers based on provided context via pdfs and with chat history.",
    subInfo: "Langchain, History Retreivers,streamlit, HuggingFace, GroQ, Llama",
    imgPath: img23,
    category: "cat-d",
    dataSource: "https://contextualqnaai-k4kibvvy8vspmxwbsx9vfv.streamlit.app/)",
  },
  {Id: 24,
    number: "024",
    title: "WebPage Summary AI app",
    info: "Summarizing valid web page and deploying into cloud , using Langchain, Gemma, streamlit. ",
    subInfo: "End-To-End, Summarize Chain, Unstructure Loader, Groq ",
    imgPath: img24,
    category: "cat-d",
    dataSource: "https://texsummarylc-zqmbbyxqndscfy3xr7nzyp.streamlit.app/"   
    ,
  },
  {
    Id: 15,
    number: "015",
    title: "NLP: End-to-End Sentiment prediction using RNN",
    info: "Build and deploy a sentiment analysis model using the IMDB movie reviews dataset, classifying reviews as positive or negative with a Recurrent Neural Network (RNN).",
    subInfo: "End-to-End, Deploy, RNN, Embedding vector, PadSequences, Streamlit",
    imgPath: img15,
    category: "cat-b",
    dataSource: "link",
  },
  {Id: 25,
    number: "025",
    title: "Youtube Video Summary AI app",
    info: "Summarizing a valid youtube and deploying into cloud , using Langchain, Gemma, streamlit. ",
    subInfo: "End-To-End, Summarize Chain, YT Loader, Groq",
    imgPath: img25,
    category: "cat-d",
    dataSource: "link",
  }
];


export default projectsInfo;