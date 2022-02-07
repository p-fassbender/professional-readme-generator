// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    { // "What is the name of your project?"
        type: "input",
        name: "name",
        message: "What is the name of your project? (required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    { // "Provide a description of the project"
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (required)',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter the description!');
                return false;
            }
        }
    },
    { // "Provide installation instructions for the project"
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for the project (required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter the instructions!');
                return false;
            }
        }
    },
    { // "Provide instructions and examples for use"
        type: 'input',
        name: 'use',
        message: 'Provide instructions and examples for use (required)',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Please enter some instructions!');
                return false;
            }
        }
    },
    { // "Provide contribution guidelines"
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines (required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter some guidelines!');
                return false;
            }
        }
    },
    { // "Provide testing instructions"
        type: 'input',
        name: 'testing',
        message: 'Provide testing instructions (required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please enter some instructions!');
                return false;
            }
        }
    },
    { // Choose a license for your application
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application',
        choices: [{ name: "N/A", value: "" }, "GNU AGPLv3", "GNU GPLv3", "GNU GPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unilicense"]
    },
    { // enter your github username
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub Username (required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your username!');
                return false;
            }
        }
    },
    { // enter your email address
        type: 'input',
        name: 'email',
        message: 'Enter your email address (required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    }

];

const mockData = {
    name: "Weather Dashboard",
    description: "This project was to create a weather dashboard application so that the current weather conditions along with a 5-day future forcast are displayed for a user-searched city. As a traveler I am interested in the weather outlook of multiple city so I can plan my trips accordingly. Working on this project I learned how to fetch information from server-side apis and how to manage and use the recieved data.",
    installation: "No installation is needed for this project",
    use: "To use this project just go to the live website https://p-fassbender.github.io/weather-dashboard/, type in a city name, and hit search",
    contribution: "If you or another developer would like to contribute to this project then all I ask is that you follow the Contributor Covenant Code of Conduct https://www.contributor-covenant.org/",
    testing: "There are no formal tests for this project",
    license: "Boost Software License 1.0",
    username: "p-fassbender",
    email: "fassbenderp0551@gmail.com"
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
        .then(markdownData => {
            return generateMarkdown(markdownData); // replace mockData with markdownData
        })
        .then(pageMarkdown => {
            return writeToFile("./dist/README.md", pageMarkdown)
        })
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init()

