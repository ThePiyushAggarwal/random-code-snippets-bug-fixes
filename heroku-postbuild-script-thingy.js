// adding to a variable for no reason
// add the line within brackets to scripts in your backend index.js file
const package = {
  "heroku-postbuild":"NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix frontend"
}

// npm config thing will be set to 'true' automatically
// after that npm install in frontend folder
// after that npm run build in frontend folder will be done
