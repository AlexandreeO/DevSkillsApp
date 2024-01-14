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
                    "Proper use of semantic tags for better structure and accessibility.",
                link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Document_and_website_structure"
            },
            {
                name: "Forms and Validation",
                description:
                    "Creating forms and handling user input, along with form validation",
                link: "https://developer.mozilla.org/en-US/docs/Learn/Forms"
            },
            {
                name: "HTML Accessibility",
                description:
                    "Implementing features to enhance web accessibility for users with disabilities.",
                link: "https://www.w3.org/WAI/fundamentals/accessibility-intro/"
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
                name: "Semantic HTML",
                description:
                    "Proper use of semantic tags for better structure and accessibility.",
            },
            {
                name: "Forms and Validation",
                description:
                    "Creating forms and handling user input, along with form validation",
            },
            {
                name: "HTML Accessibility",
                description:
                    "Implementing features to enhance web accessibility for users with disabilities.",
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
                name: "Semantic HTML",
                description:
                    "Proper use of semantic tags for better structure and accessibility.",
            },
            {
                name: "Forms and Validation",
                description:
                    "Creating forms and handling user input, along with form validation",
            },
            {
                name: "HTML Accessibility",
                description:
                    "Implementing features to enhance web accessibility for users with disabilities.",
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
                name: "Semantic HTML",
                description:
                    "Proper use of semantic tags for better structure and accessibility.",
            },
            {
                name: "Forms and Validation",
                description:
                    "Creating forms and handling user input, along with form validation",
            },
            {
                name: "HTML Accessibility",
                description:
                    "Implementing features to enhance web accessibility for users with disabilities.",
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
                name: "Semantic HTML",
                description:
                    "Proper use of semantic tags for better structure and accessibility.",
            },
            {
                name: "Forms and Validation",
                description:
                    "Creating forms and handling user input, along with form validation",
            },
            {
                name: "HTML Accessibility",
                description:
                    "Implementing features to enhance web accessibility for users with disabilities.",
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
                name: "Semantic HTML",
                description:
                    "Proper use of semantic tags for better structure and accessibility.",
            },
            {
                name: "Forms and Validation",
                description:
                    "Creating forms and handling user input, along with form validation",
            },
            {
                name: "HTML Accessibility",
                description:
                    "Implementing features to enhance web accessibility for users with disabilities.",
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
