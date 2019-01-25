# Server-side Rendered Angular Boilerplate

This boilerplate app let's you quikly get up and running with a server-side rendered Angular and NodeJS environments. Express is used as the server-side framework written in Typescript. Mongoose is used to enforce schemas and data types on objects. The front end has the full Angular Universal project including the Tour of Heroes CRUD (Create, Read, Update, Delete) functionality but rewired to be stored in a MongoDB database.

https://angular.io/guide/universal

# How to use
1. run "npm run ssr" to build and run server
2. On a second window, run "ng serve"
3. Open a browser in "http://localhost:4200"
*Make sure to run a CORS disabled browser during development, as the NodeJS and Angular Cli ports are different.

"npm run build:ssr": will build both front-end and back-end and will output the compiled files in "dist" directory on the root.
"npm run build": Quick build. No minify, uglify.
"npm run serve:ssr" Will simply serve the back-end without building
"npm run ssr" Builds both front-end and back-end. Then runs the server.

To find the full list of commands visit package.json 
https://github.com/AFigueroa/ssr-prototype/blob/master/package.json
