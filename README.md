# Server-side Rendered Angular Boilerplate

This boilerplate app let's you quikly get up and running with a server-side rendered Angular and NodeJS environments. Express is used as the server-side framework written in Typescript. Mongoose is used to enforce schemas and data types on objects. The front end has the full Angular Universal project including the Tour of Heroes CRUD (Create, Read, Update, Delete) functionality but rewired to be stored in a MongoDB database.

https://angular.io/guide/universal

# How to use
1. Using Command Prompt, navigate to the root of the project and run "npm install"
2. Run "npm run ssr" to build and serve server
3. On a second window, run "ng serve"
4. Open a browser in "http://localhost:4200"

# Requirements
1. MongoDB
2. NodeJS & NPM
3. AngularCLI

*Make sure to run a CORS disabled browser during development, as the NodeJS and Angular Cli ports are different.

To find the full list of commands visit package.json 
https://github.com/AFigueroa/ssr-prototype/blob/master/package.json
