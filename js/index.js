// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown.js')
//questions for user input
inquirer.prompt(
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

    ])
    .then((data) => {
        const layout =
            `# ${title}

        ## Description
            ${description}

        ## Installation
        ${installation}

        ## Usage
        ${usage}

        ## Credits
        ${credits}

        ## License
        ${license}`;

        writeToFile(fileName, data);
        // const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;
        // // write README file
        // fs.writeFile(filename, layout, (err) =>
        //     err ? console.log(err) : console.log('Success!')
        // );
    });


// // function to write README file
function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
