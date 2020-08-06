## Description
A small Todo App made for the [Hack Against Covid](https://hac.codezoned.com/) hackathon.

## Installation

You'll have to add your own Firebase project for this to correctly install.

1. Create a firebase project
2. Clone this repo
3. cd into the project
4. `mv .env-example .env`
5. Fill in the .env file with your own credentials from your firebase project
6. `firebase login`
7. `firebase init`
6. Add firebase hosting
7. When it asks for "public directory", type "build", as that is what create-react-app will build to

## Usage

To deploy to the web

1. `yarn build`
2. `firebase deploy`

Run locally

1. `yarn start`

Happy hacking
