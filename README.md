
# D&DPS

Mod3 2108 FE - David Tran

## Table of Contents
  - [Installation + Setup](#set-up)
  - [Deployed Site](#deployed-site)  
  - [Contributors](#contributors)
  - [Technologies](#technologies)
  - [Project Specs](#project-specs)
  - [Abstract](#abstract)
  - [Architecture](#architecture)
  - [Wins](#wins)
  - [Challenges + Improvements](#challenges-+-Improvements)

## Installation + Setup

   - Clone this repo down to your local machine: [here](https://github.com/isleofyou/dAndDps)
   - On the command line, type: **$ npm install**
   - On the command line, type: **$ npm start**
   - Visit http://localhost:3000/ in the browser.

## Deployed Site 

[Click Here!](https://isleofyou.github.io/dAndDps/)

## Contributors
  - [David Tran](https://github.com/isleofyou)

## Technologies
  - Javascript
  - CSS / HTML
  - Atom / VSCode
  - Git Version Control / GitHub
  - Webpack node package
  - React 
  - Router
  - Google Chrome or Web Browser of User's Choice
  - Mac OS Terminal/Command Line
  - Cypress
  - PropTypes

   
## Project Specs
   - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html)
  
## Abstract

This project is designed as a dashboard application that allows users to see a list of weapons that can be used in D&D. 

The goals of this project were to gain further competency with React, reinforce end to end testing and asynchronous Javascript, and create a multi-page UX using Router. 
 
## Main Dashboard 

<p align="center">
<img width="1440" alt="landing-page" src="https://user-images.githubusercontent.com/60856601/149999718-ae22eef9-1853-4a76-a80c-f377d2f9715d.png">
</p>
  
## Weapon details

<p align="center">
<img width="1390" alt="Details page" src="https://user-images.githubusercontent.com/60856601/149999845-f481f28e-9914-44b2-b2b0-c057dfd99a4f.png">
</p>

## Responsive Layout

<p align="center">
<img width="483" alt="Responsive weapon" src="https://user-images.githubusercontent.com/60856601/150000005-bf53c9fc-c0c6-4b08-b826-bd28dd9103e1.png">
  
<img width="464" alt="Responsive table" src="https://user-images.githubusercontent.com/60856601/150000069-538dbca3-ff48-4e15-959e-ec3a6e5dc35c.png">  
</p>



## Architecture
  D&DPS pulls all of its data from a third party API. On page load, we perform a fetch call and set the state of our main class component. Once the state is set the table data is loaded to the DOM. If a user clicks on a weapon the details of the weapon are shown. The user can then click the "Roll damage" button to get a damage roll specific to that weapon. Users can then roll again or go back to the main page.

## Wins
  - Succesfully created resizability
  - Succesfully tested application end to end
  

## Challenges + Improvements
  - I initially faced challenges in getting the table to be formatted correctly
  - Future improvements include functionality to favorite, add new weapons, and edit existing weapons.
