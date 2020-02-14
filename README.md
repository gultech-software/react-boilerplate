# Boilerplate project with React and Express

## Getting started

### Requirements

- Node https://nodejs.org/en/download/
- Git https://git-scm.com/downloads
- Docker
-- Windows https://docs.docker.com/docker-for-windows/install/
-- Linux https://docs.docker.com/install/linux/docker-ce/ubuntu/

Its recommended to use Linux or linux compatible console. Git Bash has a lot of usefull commands if you're using Windows.

Node is used to run Javascript outside the browser
Git is used to version control the code
Docker is used to build containers and images for the production environment

### Download, Install, Run

- Download the project

```
git clone https://[USERNAME]@bitbucket.org/gultech/boilerplate.git
```

- Install the project

```
npm i
```

- Build the project

```
npm run build
```

You should now be able to see two new directories. "dist" and "node_modules". In the dist catalog
youll find the transpiled product and in node_modules, all third party libraries.

### Development

Start backend with

```
npm run backend
```

This will start the express server on port 8080, start the client side application
with hot reload and liting with

```
npm start
```

Your browser will start on port 8090 with the client. Whenever you make changes to the
client code, the application will reload the browser with the updates. If you add new
files, you might bave to restart the application.

## Git Flow

Its bad practise to make changes to the master branch. Create a new branch with
your changes and merge in with Pull Requests so the rest of the team will be able
to do a Quality Assurance of the code.

For more information about gitflow, read:

https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

## Project Structure

```
|- client/              # Client code (React)
    |- assets/              # Styling, images and other grafical resources
    |- components           # React components that makes up the client
    |- store                # Actions and reducers for React State
    |- AppRouter.jsx        # Setup main routes and navigation
    |- index.js             # Startfile for the application
|- server/              # Server code (Node/express)
    |- todo/                # All files regarding domain object: Todo
    |- routes.js            # Front controller pattern with definistion of routes
    |- server.js            # Server setup (express)
|- .babelrc
|- .editorconfig
|- .eslintrc
|- .gitignore
|- bitbucket-pipeline.yml
|- Dockerfile
|- package.json
|- package-lock.json
|- README.md
|- start-application.sh
|- weboack.config.js
|- weboack.dev.js
|- weboack.prod.js
```
