Step 1 : Install dependencies 

npm install -D typescript
npm install -D tslint
npm install express -S
npm install @types/express -D

Step 2 : Create a file called tsconfig.json and put below code ,

{
    "compilerOptions": {
      "module": "commonjs",
      "esModuleInterop": true,
      "target": "es6",
      "moduleResolution": "node",
      "sourceMap": true,
      "outDir": "dist"
    },
    "lib": ["es2015"]
  }

Step 3 : Create a file called tslint.json  and put below code, 

{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "no-console":false
    },
    "rulesDirectory": []
}

Step 4 : Modify package.json file 

 "main": "dist/app.js",
  "scripts": {
    "start": "tsc && node dist/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

Step 5 :  Create a src sub folder inside main folder and inside that create a file app.ts , and write below code, 
console.log('ts');

Step 6 : run command npm start and you should see the output. 
npm start 
