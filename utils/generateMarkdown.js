
// A function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [PublisherInformation](#Publisher Information)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-success)](https://shields.io/)
  
  ## Features
  ${data.features}

  ## How to Contribute
  ${data.contribute}
  
  ## Tests
  ${data.test}

  ## Publisher Information
  - GitHub User Name ${data.githubuser}
  - E-mail ${data.email}

  `;
}

module.exports = generateMarkdown;
