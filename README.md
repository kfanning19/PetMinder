# PhiloPet

## Description

PhiloPet is an application created for the use of pet owners and caretakers.  Pets have many needs and PhiloPet offers users a space in which to track all of the important information for the care and keeping of your pet.  Users can also share their pets' information with other users that care for their pets in some capacity (eg: co-owner, dog walker, etc...)

### Core Features

Track your animals' weight over time, food staples, and the contact information for the pet care professionals in their lives.  PhiloPet allows the user to log activities and events that occur in their pets' lives and utilize a message board in order to communicate with other users with whom a pet's profile is shared.

### Web App Outline

TODO TODO TODO

## Technologies Used

### Database Management
* mySQL

### Deployment
* Heroku
* JawsDB MySQL

### NPM Packages
* axios
* bcrypt
* body-parser
* cookie-parser
* express
* express-handlebars
* express-session
* moment
* morgan
* mysql
* mysql2
* passport
* passport-local
* path
* react
* react-dom
* sequelize

### Languages and Libraries
* CSS
* Handlebars
* HTML
* Google Fonts
* Font Awesome
* Javascript
* jQuery
* Materialize

## Getting Started and Prerequisites

Clone or download the repository to your desktop.

Users will need Google Chrome web browser for testing the application and Sublime (or another tool) for viewing/editing the code.  Users will also need to install the npm packages (provided in the package.json and listed above under "Technologies Used") via the terminal and use MySQL Workbench in order to establish a database.

## Testing

Download or clone the repository to your desktop.  Create a database in MySQL Workbench entitled "star_power."  Use said database and seed it with the seeds from the document SQL_credit or add your own seeds into SQL_credit and enter them into the MySQL database.  Add your MySQL Workbench password to the config.json.

Navigate to the file folder that holds the PhilPet files in the terminal.  Type "npm i --s".  Then run the server: "node server.js" 

From there, navigate to localhost:3000 in your browser to open up the login page of the website. Create an account based on one of the established seeds and log in.  Once logged in, you will be taken to the userProfile.handlebars page were you will encounter a user summary as well as a list of pets registered by or shared with the user.  You will also see a hamburger icon in the upper lefthand corner.  When clicked it will open side navigation. 

Using the side navigation, one have navigate to their user profile, the "About Us" page, and a page with frequently asked questions.  The side navigation also holds a logout button.

Users can navigate to their pets' profiles by clicked the "View My Profile" link included in every pet summary on the user's profile page.  It will lead to a pet profile page with two tabs:  dashboard and settings.  The dashboard tab contains the pet's associated photo, message board, weight chart, logged activities, logged meal and treat details, and professional contacts.  The details of the activities, diet, and contacts can be both created and removed.  The settings tab contains a list of users with whom the user has shared their bet, an input field for sharing the pet with a new person, and a button for removing pets for the user.  Pets removed by a user's list of pets does not affect other individual's pet lists.

## Application and Features Visual Tour

### Sign Up Page (New User)
![]()

### Login Page (Returning User)
![](  

### User Profile Page
![]()

### Pet Profile Page (Dashboard)
![]()

### Pet Profile Page (Settings)
![]()

### Side Navigation
![]()

### Frequently Asked Questions Page
![]()

### About Us Page
![]()

### Mobile Versions
![]()

## Code Walkthrough
Please refer to the repository files for coding samples; The sections are commented to indicate their functionality.

If you have any questions about how or why something works, feel free to contact a member of the [Project Team](https://github.com/kfanning19/PetMinder) for details!

## Authors
* **Kristen Fanning** [kfanning19](https://github.com/kfanning19)
* **Susan Heiniger** [SusanArend](https://github.com/SusanArend)
* **Ornella Hernandez** [ornibella](https://github.com/ornibella)

## Acknowledgments
Hat tip for help, inspiration, and patience to:

* Steven Daoud
* Nate Johnson
* Chris Mendoza
* Ethan Romba
* Kurt Schlueter
* Liz Wylie
