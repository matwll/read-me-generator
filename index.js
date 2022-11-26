// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const choicesArr = ['C', 'C++', 'C#', 'CSS', 'HTML', 'Java', 'Javascript', 'PHP', 'Python', 'Ruby', 'Scala', 'Typescript'];
const questions = () => {
  return inquirer.prompt([
  {
    type: 'input',
    name: 'fileName',
    message: 'What is your application called?',
  },
  {
    type: 'input',
    name: 'about',
    message: 'Please enter a brief description of your application.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How can your application used?',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How can others contribute?',
  },
  {
    type: 'checkbox',
    name: 'tech',
    message: 'What programming languages were utilized in this application?',
    choices: choicesArr,
  },
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    `![cover image](${data.image})  

</div>

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

<!-- ABOUT OUR PROJECT -->
## About Our Project

<!-- ![webpage screenshot](./assets/images/webpage-screenshot.png) -->
<img src="${data.screenshot}" width="600" text-align="center">

${data.about}

### Built With

This application was built primarily utilizing the following programming languages:


This application utilized:
* ${data.tech[0]}
* ${data.tech[1]}
* ${data.tech[2]}

<!-- USAGE EXAMPLES -->
## Usage

${data.usage}

<!-- CONTRIBUTORS -->
## Contributing

${data.contribute}

<!-- LICENSE -->
## License

See ${data.license} LICENSE for more information.

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments


`
};

// TODO: Create a function to initialize app
function init() {
  questions()
  .then((answers) => console.log(answers))
};

// Function call to initialize app
init();
