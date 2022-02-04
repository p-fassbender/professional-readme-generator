// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return "";
    } else {
        return `![badge](<https://img.shields.io/badge/License-${license}-blue>)`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
        return "";
    } else {
        return `[License](#license)`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        return "";
    } else {
        return `## License
This project is licensed under ${license}`
    }
}

// TODO: Create a function to generate markdown for README
// name, description, installation, use, contribution, testing, license, username, email,
function generateMarkdown(data) {
    return ` ${renderLicenseBadge(data.license)}

# ${data.name}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- ${renderLicenseLink(data.license)}

---

## Installation
${data.installation}

---

## Usage
${data.use}

---

${renderLicenseSection(data.license)}

---

## How To Contribute
${data.contribution}

---

## Tests
${data.testing}

---

## Questions
Check out my github profile at <https://github.com/${data.username}>
\nIf you have any questions send me an email at ${data.email}
`;
}

module.exports = generateMarkdown;
