
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
  - [PublisherInformation](#Publisher Information)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ## License
  ${data.license}
  
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
