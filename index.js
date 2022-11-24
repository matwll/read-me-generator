// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    `![cover image](${data.image})  

  <p align="center">
    <a href="${data.bug-report}">Report Bug</a>
    ·
    <a href="${data.add-feature}">Request Feature</a>
  </p>
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
## Contributors

Check out members of our team on GitHub!

* ${data.team-links}

<!-- LICENSE -->
## License

See ${data.license} LICENSE for more information.

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments


`
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
