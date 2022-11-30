// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input

const choicesArr = [
  "C",
  "C++",
  "C#",
  "CSS",
  "HTML",
  "Java",
  "Javascript",
  "PHP",
  "Python",
  "Ruby",
  "Scala",
  "Typescript",
];
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your application called?",
  },
  {
    type: "input",
    name: "about",
    message: "Please enter a brief description of your application.",
  },
  {
    type: "input",
    name: "screenshot",
    message: "What is the filepath for your screenshot of the application?",
  },
  {
    type: "input",
    name: "usage",
    message: "How can your application used?",
  },
  {
    type: "input",
    name: "contribute",
    message: "How can others contribute? Put N/A if not applicable",
  },
  {
    type: "checkbox",
    name: "tech",
    message: "What programming languages were utilized in this application?",
    choices: choicesArr,
  },
  {
    type: "list",
    name: "license",
    message:
      "What license does your application have? Put N/A if not applicable",
    choices: [
      "MIT",
      "Apache",
      "GNU General Public",
      "Mozilla Public",
      "Eclipse Public",
    ],
  },
  {
    type: "input",
    name: "test",
    message: "How can this application be tested? Put N/A if not applicable",
  },
  {
    type: "input",
    name: "installation",
    message: "How can this application be installed? Put N/A if not applicable",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email adress?",
  },
];

// TODO: Create a function to write README file
const writeToFile = ({
  name,
  about,
  screenshot,
  usage,
  contribute,
  tech,
  license,
  test,
  installation,
  github,
  email,
}) =>
  `# ${name}

//placeholder for license badge

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<br />
<br />

<!-- DESCRIPTION -->
## DESCRIPTION

<!-- ![webpage screenshot](./assets/images/webpage-screenshot.png) -->
<img src="${screenshot}" width="600" text-align="center">

${about}

This application was built primarily utilizing the following programming languages:

* ${tech[0]}
* ${tech[1]}
* ${tech[2]}

### Installation

${installation}

<!-- USAGE EXAMPLES -->
## Usage

${usage}

<!-- CONTRIBUTORING -->
## Contributing

${contribute}

<!-- LICENSE -->
## License

See ${license} LICENSE for more information.

<!-- TEST -->
## TEST
${test}

<!-- Questions -->
## Questions?

Github Profile : <a href="https://github.com/${github}">${github}</a>
For questions [Email me @](mailto: ${email})
`;

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readMeContent = writeToFile(answers);

    fs.writeFile("README.md", readMeContent, (err) =>
      err ? console.log(err) : console.log("README file sucessfully created!")
    );
  });
}

// Function call to initialize app
init();
