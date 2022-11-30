// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'MIT') {
    `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }else if (license == 'Apache'){
    `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }else if (license == 'GNU General Public'){
    `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }else if (license == 'Mozilla Public'){
    `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }else if( license == 'Eclipse Public'){
    `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }else{
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'MIT') {
    `https://opensource.org/licenses/MIT`
  }else if (license == 'Apache'){
    `https://opensource.org/licenses/Apache-2.0`
  }else if (license == 'GNU General Public'){
    `https://www.gnu.org/licenses/gpl-3.0`
  }else if (license == 'Mozilla Public'){
    `https://opensource.org/licenses/MPL-2.0`
  }else if( license == 'Eclipse Public'){
    `https://opensource.org/licenses/EPL-1.0`
  }else{
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;


//    choices: ['MIT', 'Apache', 'GNU General Public', 'Mozilla Public', 'Eclipse Public'],

// `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
// `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
// `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
// `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
// `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`

// `https://opensource.org/licenses/MIT`
// `https://opensource.org/licenses/Apache-2.0`
// `https://www.gnu.org/licenses/gpl-3.0`
// `https://opensource.org/licenses/MPL-2.0`
// `https://opensource.org/licenses/EPL-1.0`
