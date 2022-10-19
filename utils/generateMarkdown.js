
// A function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-success)
 
  ## Description
 
  ${data.description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Publisher Information](#Publisher-Information)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-success)
  
  ## Features
  ${data.features}

  ## How to Contribute
  ${data.contribute}
  
  ## Tests
  ${data.test}

  ## Publisher Information
  - GitHub: https://github.com/${data.githubuser}/${data.title}
  - E-mail me at: ${data.email}

  `;
}

module.exports = generateMarkdown;
