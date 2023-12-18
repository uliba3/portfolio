import TodoListImg from "./projectImages/Todo-List.png";
import CircleGameImg from "./projectImages/CircleGame.png";
import EtchASketchImg from "./projectImages/Etch-A-Sketch.png";
import TaskManagerImg from "./projectImages/TaskManager.png";
import QAwebAppImg from "./projectImages/QAwebapp.png";
import BookStoreImg from "./projectImages/BookStore.png";

const projects = [
    {
        title: "Todo-List",
        description: "a simple web application for managing your todo list. You can add, edit, delete, and reorder your todos easily. The application also supports due dates for your todos.",
        imageLink: TodoListImg,
        style: {
            width: "10rem",
            height: "6rem",
        },
        projectLink: "https://uliba3.github.io/Todo-List/dist/",
        githubLink: "https://github.com/uliba3/Todo-List",
        skills: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "CircleGame",
        description: "Place your circles strategically. Your circle grows in size. Collisions with the canvas edges or other circles result in the end of the game. Grow your circles as large and numerous as possible!!",
        imageLink: CircleGameImg,
        style: {
            width: "10rem",
            height: "7rem",
        },
        projectLink: "https://uliba3.github.io/CircleGame/",
        githubLink: "https://github.com/uliba3/CircleGame",
        skills: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Etch-A-Sketch",
        description: "A simple and fun web application that lets you unleash your creativity by creating and saving grids of customizable sizes. Experience the joy of drawing and doodling in a digital space!",
        imageLink: EtchASketchImg,
        style: {
            width: "10rem",
            height: "8rem",
        },
        projectLink: "https://uliba3.github.io/Etch-A-Sketch/",
        githubLink: "https://github.com/uliba3/Etch-A-Sketch",
        skills: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "TaskManager",
        description: "A simple web application that allows users to add, edit, and delete tasks, as well as sort tasks based on due date or starting date. The application also supports drag-and-drop functionality for reordering tasks.",
        imageLink: TaskManagerImg,
        style: {
            width: "10rem",
            height: "4.5rem",
        },
        projectLink: "https://uliba3.github.io/TaskManager/",
        githubLink: "https://github.com/uliba3/TaskManager",
        skills: ["React"],
    },
    {
        title: "QAwebApp",
        description: "A full-stack web application that enables users to post answers to random questions and view random answers from other users.",
        imageLink: QAwebAppImg,
        style: {
            width: "10rem",
            height: "6rem",
        },
        projectLink: "https://white-voice-4708.fly.dev/",
        githubLink: "https://github.com/uliba3/Q-A-backend",
        skills: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
        title: "BookStore",
        description: "A full-stack web application that allows users to search for books and save books in their wishlist or history.",
        imageLink: BookStoreImg,
        style: {
            width: "10rem",
            height: "5rem",
        },
        projectLink: "https://bookstore-backend.fly.dev/",
        githubLink: "https://github.com/uliba3/BookStore-backend",
        skills: ["React", "Node.js", "Express", "MongoDB", "Google Books API"],
    }
];

export default projects;
