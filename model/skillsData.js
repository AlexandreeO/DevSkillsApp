const mySkills = [
    {
        id: 1,
        name: "HTML",
        status: "Beginner",
        resources: [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://www.w3schools.com/html/",
        ],
        subSkills: [
            {
                name: "Semantic HTML",
                description:
                    "Proper use of semantic tags for better structure and accessibility",
                link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Document_and_website_structure",
            },
            {
                name: "Forms and Validation",
                description:
                    "Creating forms and handling user input, along with form validation",
                link: "https://developer.mozilla.org/en-US/docs/Learn/Forms",
            },
            {
                name: "HTML Accessibility",
                description:
                    "Implementing features to enhance web accessibility for users with disabilities",
                link: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
            },
        ],
    },
    {
        id: 2,
        name: "CSS",
        status: "Intermediate",
        resources: [
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://www.w3schools.com/css/",
        ],
        subSkills: [
            {
                name: "Responsive Design",
                description:
                    "Creating styles that adapt to different screen sizes for a seamless user experience",
                link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
            },
            {
                name: "Flexbox and Grid",
                description:
                    "Mastering layout techniques using CSS Flexbox and Grid for efficient design",
                link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox",
            },
            {
                name: "CSS Transitions and Animations",
                description:
                    "Implementing features to enhance web accessibility for users with disabilities.",
                link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions",
            },
        ],
    },
    {
        id: 3,
        name: "JavaScript",
        status: "Proficient",
        resources: [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://www.codecademy.com/learn/introduction-to-javascript",
        ],
        subSkills: [
            {
                name: "DOM Manipulation",
                description:
                    "Interacting with the Document Object Model to dynamically update web content",
                link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
            },
            {
                name: "Event Handling",
                description:
                    "Managing user interactions by handling various events",
                link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events",
            },
            {
                name: "Asynchronous Programming",
                description:
                    "Working with asynchronous tasks, such as fetching data from APIs",
                link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous",
            },
        ],
    },
    {
        id: 4,
        name: "React",
        status: "Intermediate",
        resources: [
            "https://reactjs.org/",
            "https://www.tutorialspoint.com/reactjs/index.htm",
        ],
        subSkills: [
            {
                name: "Component Lifecycle",
                description:
                    "Understanding the lifecycle methods of React components",
                link: "https://reactjs.org/docs/react-component.html",
            },
            {
                name: "State and Props",
                description:
                    "Mastering the concepts of state and props for data management",
                link: "https://reactjs.org/docs/state-and-lifecycle.html",
            },
            {
                name: "React Router",
                description:
                    "Implementing client-side routing in React applications",
                link: "https://reactrouter.com/",
            },
        ],
    },
    {
        id: 5,
        name: "Node",
        status: "Beginner",
        resources: [
            "https://nodejs.org/en/docs/",
            "https://www.w3schools.com/nodejs/",
        ],
        subSkills: [
            {
                name: "NPM (Node Package Manager)",
                description:
                    "Managing dependencies and packages using NPM",
                link: " https://docs.npmjs.com/",
            },
            {
                name: "State and Props",
                description:
                    "Mastering the concepts of state and props for data management",
                link: "https://expressjs.com/en/guide/using-middleware.html",
            },
            {
                name: "React Router",
                description:
                    "Implementing client-side routing in React applications",
                link: "https://nodejs.org/dist/latest-v14.x/docs/api/fs.html",
            },
        ],
    },
    {
        id: 6,
        name: "MongoDB",
        status: "Proficient",
        resources: [
            "https://docs.mongodb.com/",
            "https://www.tutorialspoint.com/mongodb/index.htm",
        ],
        subSkills: [
            {
                name: "CRUD Operations",
                description:
                    "Performing CRUD operations (Create, Read, Update, Delete) in MongoDB",
                link: "https://docs.mongodb.com/manual/crud/",
            },
            {
                name: "Indexes and Performance",
                description:
                    "Understanding and optimizing MongoDB performance using indexes",
                link: "https://docs.mongodb.com/manual/indexes/",
            },
            {
                name: "Aggregation Framework",
                description:
                    "Utilizing MongoDB's aggregation framework for complex data manipulations",
                    link: "https://docs.mongodb.com/manual/aggregation/"
            },
        ],
    },
];

module.exports = {
    mySkills,
    skillsList: mySkills.map((skill) => {
        return {
            id: skill["id"],
            name: skill["name"],
        };
    }),
};

// finish subskills data
