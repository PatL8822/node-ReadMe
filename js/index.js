
// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('../utils/generateMarkdown.js');

//questions for user input
const userQuestions = [

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
        choices: ['GPL', 'MIT', 'GNU', 'Apache', 'N/A'],
        validate: (value) => { if (value) { return true } else { return 'Please make a selection.' } }
    },
    {
        type: 'input',
        message: 'If your project has a lot of features, list them here.',
        name: 'features',
        validate: (value) => { if (value) { return true } else { return 'If there are no features type (None).' } }
    },
    {
        type: 'input',
        message: 'If you created an application or package and \n would like other developers to contribute to it, \n you can include guidelines for how to do so here.',
        name: 'contribute',
        validate: (value) => { if (value) { return true } else { return 'Please add discription to "Contribute".' } }
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
        name: 'email',
        validate: (value) => { if (value) { return true } else { return 'Whats your Email?' } }
    },
];

// A function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('README.md has been generated!')
    );
}

// A function to initialize app
function init() {
    inquirer.prompt(userQuestions)
        .then((data) => {
            writeToFile('README.md', markDown(data));
        });
}

//  call to initialize app
init();
