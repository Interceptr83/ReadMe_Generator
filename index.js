// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input', name: 'github', message: 'What is your GitHub username? ',},
    {type: 'input', name: 'email', message: 'What is your email address? ',},
    {type: 'input', name: 'title', message: "What is your project's name? ",},
    {type: 'input', name: 'install', message: 'What command should be run to install dependencies? ', default: 'npm i',},
    {type: 'input', name: 'description', message: 'Please write a short description of your project: ',},
    {type: 'input', name: 'userStory', message: 'What is the process a user will go through using this application? ',},
    {type: 'input', name: 'tests', message: 'What command should be run to run tests? ', default: 'npm test',},
    {type: 'list', name: 'license', message: 'What kind of license should your project have? ', choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],},
    {type: 'input', name: 'contributors', message: 'List any contributors to this project: ',}
    ,];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
}

// Function call to initialize app
init();
