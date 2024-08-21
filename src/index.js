import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import project1 from '../src/assets/projects/project-1.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export const Experiences=[{
    year:"2023-Present",
    role:"Senior Full Stack Developer",
    company:"Google",
    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. \n'
        ,
tech:["Javascript","React.js","Next.js","mongoDB"],

},
    {
    year:"2023-Present",
    role:"Senior Full Stack Developer",
    company:"Google",
    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. \n'
,
tech:["Javascript","React.js","Next.js","mongoDB"],

},
    {
        year:"2023-Present",
        role:"Senior Full Stack Developer",
        company:"Google",
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. \n'
            ,
        tech:["Javascript","React.js","Next.js","mongoDB"],

    },
    {
        year:"2023-Present",
        role:"Senior Full Stack Developer",
        company:"Google",
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. \n',

        tech:["Javascript","React.js","Next.js","mongoDB"],

    },
    {
        year:"2023-Present",
        role:"Senior Full Stack Developer",
        company:"Google",
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. \n',

        tech:["Javascript","React.js","Next.js","mongoDB"],

    }
]
export const PROJECTS=[
    {
        title: "E-commerce Website",
        image: project1,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. ",
        tech: ["HTML", "CSS", "REACT", "NODE.js", "MongoDb"],
    },
    {
        title: "E-commerce Website",
        image: project1,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. ",
        tech: ["HTML", "CSS", "REACT", "NODE.js", "MongoDb"],
    },
    {
        title: "E-commerce Website",
        image: project1,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. ",
        tech: ["HTML", "CSS", "REACT", "NODE.js", "MongoDb"],
    },
    {
        title: "E-commerce Website",
        image: project1,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. ",
        tech: ["HTML", "CSS", "REACT", "NODE.js", "MongoDb"],
    },
]
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
