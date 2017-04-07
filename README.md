# SenatorStable

## Description

An application for aspiring political operatives to keep track of their stable of legislators, their particular interests, constituencies, and levels of indebtedness.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

##By Charles Peden

## Prerequisites

You will need the following software properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [PhantomJS](http://phantomjs.org/)

## Installation

If you wish to run the app locally, please follow the following instructions

* `git clone https://github.com/ccbpeden/senator-stable.git` this repository
* `cd senator-stable`
* `npm install`
* `bower install`
* place the api-keys.ts file provided to you by the author in the senator-stable/src/app folder

* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you wish to use the app on the web, please navigate to the following website:  

## Technologies Used
* Git, CSS, JS, Angular, Nodejs, Bower

## Implementation Plan
1. Develop User Stories
2. Lay out site plan:
  * Identify data models
  * Rough out visual flow of site, identify components
  * Map data flow between components
  * review data models
4. Lay out root component with all functionality therein
5. Implement functionality for user stories, 1 at a time.
6. Refactor root into previously identified components
7. Style Pages
8. Implement Stretch Goals

## User Stories

* As a user, I'd like to visit a page to see a list of all legislators under my thumb.
* As a user, I'd like to click a legislator's entry in the list to visit their profile page, which should include more details about them, such as their primary constituencies, positions, political strengths, weaknesses, and level of indebtedness.
* As a user, I'd like the option to visit an "About" page that explains what the Senator Stable is.
* As a user, I'd like all data persisted in a database, so it's always there when I need it, and can be subpoenaed in a congressional hearing.
* As a user, I'd like to filter the list of users by their particular party and rank,
* As an administrator, I want to add new users to the stable. (User authentication is not required).
* As an administrator, I want to edit user profiles, in case I make a mistake, or need to update their details (perhaps a recent incriminating photo has come to light).
* As an administrator, need the option to delete a user, in case they leave the stable (are imprisoned or leave public life).

##Site plan
Data Model: Legislator(Name, Position, Party, Constituency[], Weakness[], Debt[])
Components: app-root:
  1) home
    * legis-list
  2) about,
  3) contact,
  4) legis-detail
  5) admin,
    * legis-edit
    * legis-list (reuse)

# Stretch Goals
  1) Dashboard of positions controlled
  2) Message or Banner
  3) Deploy to Firebase Online
  4) Authentication
