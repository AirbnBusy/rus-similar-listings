Recreation of Airbnb's similar listings front-end module.

ESLint setup and configuration (Airbnb style-guide):
1. Install ESLint locally by running: npm install eslint --save-dev
2. Add two scripts to package.json: scripts = {"eslint-init": "eslint --init", "eslint": "eslint ./server; exit 0"}
Why do this?
When ESLint is installed locally, in order to run ESLint from the command line, you would have to type the whole path to ESLint in the local project: "./node_modules/.bin/eslint [command]".
By adding both scripts you don't have to type "./node_modules/.bin/eslint [command]", all you have to do is run the 
following - "npm run [script]" - and npm effectively adds the "./node_modules/.bin/" to the path for you. 
Note: the "eslint" script ends with "exit 0" - the reason for it is so that npm doesn't throw an error whenever eslint finds styling errors
in your files. (Try excluding it from the script and run it, and you'll see the error.)
3. Run "npm run eslint-init" from the command line and choose to use popular styles --> Airbnb. 
4. Run "npm run eslint" from the command line whenever you're ready to lint your code. 





