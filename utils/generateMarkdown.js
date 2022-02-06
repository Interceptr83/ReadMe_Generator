// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Application Description

  ${data.description}

  ## Table of Contents

  * [Installation](#install)

  * [User Story](#userStory)

  * [Tests](#tests)

  * [License](#license)

  * [Contributors](#contributors)

  * [Questions](#questions)



  ## Installation

  Run the following commands to install any necessary dependencies:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## User Story

  ${data.userStory}

  ## Tests

  Run any applicable tests using the commands below:

  \`\`\`
  ${data.tests}
  \`\`\`

  ## Licensing

  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Contributors

  ${data.contributors}

  ## Questions

  Any questions regarding this repo can be directed to ${data.email}.
  View more work from this developer at [${data.github}](https://github.com/${data.github}/)

  `;
}

module.exports = generateMarkdown;
