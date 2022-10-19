
// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown.js')

//questions for user input
function userQuestions() {

    inquirer
        .prompt(
            [
                {
                    type: 'input',
                    message: 'What is the title of your project?',
                    name: 'title',
                    validate: (value) => { if (value) { return true } else { return 'Please enter a the name of your project.' } }
                },
                {
                    type: 'input',
                    message: 'Provide a short description.',
                    name: 'description',
                    validate: (value) => { if (value) { return true } else { return 'Please enter a description.' } }
                },
                {
                    type: 'input',
                    message: 'What are the steps required to install your project?',
                    name: 'installation',
                    validate: (value) => { if (value) { return true } else { return 'Please enter instalation method.' } }
                },
                {
                    type: 'input',
                    message: 'Provide instructions for use.',
                    name: 'usage',
                    validate: (value) => { if (value) { return true } else { return 'Please enter instalation method.' } }
                },
                {
                    type: 'input',
                    message: 'Are there any credits due?',
                    name: 'credits',
                    validate: (value) => { if (value) { return true } else { return 'Please add any credits needed.' } }
                },
                {
                    type: 'list',
                    message: ' What license did you use?',
                    name: 'license',
                    choices: ['The GPL License', 'The MIT License', 'GNU License', 'Apache License', 'N/A'],
                    validate: (value) => { if (value) { return true } else { return 'Please make a selection.' } }
                },
                {
                    type: 'input',
                    message: 'Is there a test?',
                    name: 'test',
                    validate: (value) => { if (value) { return true } else { return 'Please add any test criteria.' } }
                },
                {
                    type: 'input',
                    message: 'What is your GitHub user name?',
                    name: 'githubuser',
                    validate: (value) => { if (value) { return true } else { return 'Enter GitHub criteria.' } }
                },
                {
                    type: 'input',
                    message: 'Add your emmail address ',
                    name: 'githubuser',
                    validate: (value) => { if (value) { return true } else { return 'Whats your Email?' } }
                },


            ]);
}

// // function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('README.md has been generated!')
    );
}

// function to initialize app
function init() { }

//  call to initialize app
init();
