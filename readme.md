MODEL LINK : [https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

## While setup folder

GIT IGNORE GENERATOR : [https://www.toptal.com/developers/gitignore](https://www.toptal.com/developers/gitignore)

It's a dev dependencie to the
Restart server

```
npm install nodemon
```

For formate codes.

```
npm i -D prettier
```

```js
// .pritterrc files
{
    "singleQuote": false,
    "bracketSpacing": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "semi": true
}

```



## While MONGODB CONNECTION 🌎
---


#### .ENV, MONGOOS Express file Import

```
 npm i mongoose express dotenv
```

Cautions 💀 : ALways keep code into TRY CATCH

CONNECTION WITH MONGOOSE : [https://mongoosejs.com/docs/connections.html](https://mongoosejs.com/docs/connections.html)

I have add an extra npm , which is also a dev depedend

**use** : `clear terminal / console vision and look attractive `

HERE IS DOCS ON COLORS: [https://www.npmjs.com/package/colors](https://www.npmjs.com/package/colors)
```
npm install color 
```
---
---

```js
// in db.js
// first approch  [All Code in db]

import mongoose from "mongoose";
import DB_NAME from "./constants.js";
import "dotenv/config";
import app from "./app.js";


;(async () => {
  try {
   await mongoose.connect(`${process.env.MONGODB_URL}/DB_NAME`);
   app.on("error",(error)=>{
    console.log("database not able to talk")
    throw error
   });

   app.listen(process.env.PORT,()=>{
    console.log("app is listening on port",process.env.PORT);
   })
  } catch (error) {
    console.log({ error });
    throw error;
  }
})
()
```

#### Explore more About Process on node js  :
`Process on Node js` 

PROCESS DOC LINK : [https://nodejs.org/api/process.html](https://nodejs.org/api/process.html)
---
to check host `afterConnection.connection.host`

As early as possible in your application, import and configure dotenv:

DOT ENV FILE :- [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)

```js
// index.mjs (ESM)
import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

//another way 
import dotenv from "dotenv";
dotenv.config({
    path:"./env"
});
connectDB();

Keep one thing in your mind , you have to do some changes in package.json file , which is nothing more ,just to add `-r dotenv/config --expreimental-json-modules` . when dotenv will bring a stable version of dotenv (npm) then you don't need to add extenally and this one is a expreimental` .

```


#### 2nd Way

Assignments :-
```js
 const afterConnection=  await mongoose.connect(`${process.env.MONGODB_UR}/${DB_NAME}`)
// Explore Process in node js as above link has provided
// after connecting with mongodb check connection what return (afterConnection) ? 

```
