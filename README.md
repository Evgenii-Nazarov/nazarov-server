## Boilerplate Express server for todo app

#### Install
`npm i` or `yarn`

#### Start on dev mode
`npm run dev`

#### Start on production mode
`npm start`

#### Mongo connection
Connected to Mongo Atlas https://www.mongodb.com/cloud/atlas. 
Feel free to use current Mongo DB account. 
Look at `.env` file. If you have your own Atlas account change it

`.env` file works only for dev mode.
For prod mode change environment variables on prod server (Heroku).

#### Composition
- Routing `./src/modules/core/routes.js`
- DB (Mongo) `./src/modules/core/db.js`
- CORS `./src/modules/core/cors.js`
- Logger (Morgan)`./src/modules/core/logger.js`
- Parse response (body-parser) `./src/modules/core/parseResponse.js`
- Ignore favicon `./src/modules/core/ignoreFavicon.js`

#### Modules
All modules should be placed in `./src/modules`

##### Info
Current common information like app name, version, current time, timezone.

##### Todo
CRUD operations for todo entity

### ESlint + Prettier
It works together well.

### Babel
We are using the Babel

### Getting started for new contributors

#### Step 1 - clone the project

1. Follow https://github.com/bogutski/todo-server project.
2. Click on `Clone or download` button and copy **the path**.
3. Open your WebStorm and close current project.
4. Click on `Check out from Version Control`.
5. Paste **the path** into `URL` field.
6. Chose directory for your project. Create a todo-server folder in the list of your WebStorm projects, if needed. **ALERT!** Make sure you remember that directory, we will have to find it later.
7. Click `Clone` button.

#### Step 2 - Install and run Postman

1. Follow https://www.getpostman.com/downloads/.
2. Choose your OS and press `Download`.
3. Create a new workspace.
4. Click on `Import` button. Then click on `Choose files`.
5. Now you need find a directory with your project. Then select `docs` folder and then `postman` folder.
6. Choose `CW local.postman_environment.json` and `Todo server.postman_collection.json` files in /yourProjectDirectory/docs/postman and import them both
7. In the upper right corner of the Postman interface, find a drop-down with `No Environment` field. Change it to `Todo-server`.

#### Step 3 - Running local server and sending first request

1. Open WebStorm and pasv-server project.
2. Use `npm install` command to download all modules.
3. Use `npm run local` command to start server. 
    * If you have Windows OS - it is bad. First, open `File` -> `Settings` -> `Tools` -> `Terminal` and make sure that in `Shell path` you have `C:\Program Files\Git\bin\sh.exe`.
    * Then use `npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"` command and try to use `npm run local` command once again. If it is still not working - go https://www.apple.com/shop/ and get a new mac.
4. Now open Postman and open `PASV Collection`. Click on it, then find `INFO` folder and send `GET localhost:5000/info` request.
5. If you get a status 200 response - my warmest congratulations!


