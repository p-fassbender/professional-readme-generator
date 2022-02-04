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
    name: "Project Name",
    description: "This is a short description explaining the what, why, and how of the project. What was my motivation? Why did I build this project? What problem does it solve? What did I learn?",
    installation: "These are the steps required to install my project",
    use: "These are instructions and examples for using this project",
    contribution: "These are guidelines for how other developers if they would like to contribute to this project",
    testing: "I went the extra mile and wrote tests for my application. These are examples on how to run them",
    license: "The Unilicense",
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
            return generateMarkdown(mockData);
        })
        .then(pageMarkdown => {
            return writeToFile("./README.md", pageMarkdown)
        })
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init()

