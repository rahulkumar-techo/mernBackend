# Custom Api and error handling :

### EXPRESS REQUEST :-

EXPRESS JS REQUEST `req.body` : [https://expressjs.com/en/4x/api.html#req.body](https://expressjs.com/en/4x/api.html#req.body)

EXPRESS JS REQUEST `req.cookies`: [https://expressjs.com/en/4x/api.html#req.cookies](https://expressjs.com/en/4x/api.html#req.cookies)

EXPRESS JS REQUEST `req.params`: [https://expressjs.com/en/4x/api.html#req.params](https://expressjs.com/en/4x/api.html#req.params)

EXPRESS JS REQUEST `req.query`: [https://expressjs.com/en/4x/api.html#req.query](https://expressjs.com/en/4x/api.html#req.query)

---

### EXPRESS RESPONSE :-

//methods
EXPRESS JS RESPONSE `res.cookie()`:[https://expressjs.com/en/4x/api.html#res.cookie](https://expressjs.com/en/4x/api.html#res.cookie)

EXPRESS JS RESPONSE `res.clearCookie()`:[https://expressjs.com/en/4x/api.html#res.clearCookie](https://expressjs.com/en/4x/api.html#res.clearCookie)

EXPRESS JS RESPONSE `res.download()`:[https://expressjs.com/en/4x/api.html#res.download](https://expressjs.com/en/4x/api.html#res.download)

EXPRESS JS RESPONSE `res.json()`:[https://expressjs.com/en/4x/api.html#res.json](https://expressjs.com/en/4x/api.html#res.json)

EXPRESS JS RESPONSE `res.redirect()`:[https://expressjs.com/en/4x/api.html#res.redirect](https://expressjs.com/en/4x/api.html#res.redirect)

EXPRESS JS RESPONSE `res.render()`:[https://expressjs.com/en/4x/api.html#res.render](https://expressjs.com/en/4x/api.html#res.render)

EXPRESS JS RESPONSE `res.send()`:[https://expressjs.com/en/4x/api.html#res.send](https://expressjs.com/en/4x/api.html#res.send)

EXPRESS JS RESPONSE `res.sendfile()`:[https://expressjs.com/en/4x/api.html#res.sendFile](https://expressjs.com/en/4x/api.html#res.sendFile)

EXPRESS JS RESPONSE `res.status()`:[https://expressjs.com/en/4x/api.html#res.status](https://expressjs.com/en/4x/api.html#res.status)

EXPRESS JS RESPONSE `ETC..... All of the Above properties and methods have unique functionality so PLAY try and catch these methods`

---

---

COOKIE-PARSER AND MIDDLEWARE

DOCS <=:=> `COOKIE-PARSER` : [https://www.npmjs.com/package/cookie-parser](https://www.npmjs.com/package/cookie-parser)

```
npm i cookie-parser cors
```

`MIDDLEWARE` :-

HOW MIDDLEWARE WORK AND USE CASE : -[https://mindmajix.com/middleware-in-node-js](https://mindmajix.com/middleware-in-node-js)

you have to use app.use() when you need to setting middleare or configurations

`CORS`:[https://www.npmjs.com/package/cors](https://www.npmjs.com/package/cors)

```js
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
```

Express js `express.static` use for `static files` like images , files,videos and many more things.

EXPRESS js `express.static` :-
[https://expressjs.com/en/4x/api.html#express.static](https://expressjs.com/en/4x/api.html#express.static)

```js
// express.json() method convert json into object and if you want specifiy limit , how much data want ,then you can set limit and explore more ...

app.use(express.json({ limit: "30kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static());
```

---

---

```js
// In app.js
import express from "express";
const app = express();

app.on("error", (error) => {
  console.log("server is not able to talk with database");
  throw error;
});

export default app;
```

**revision :-** async always return promise .

```js
// sec/index.js
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";
import "colors";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 8080;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
  })
  .catch((error) => {
    console.log(`mongo db Connection failed ${error}`.bgRed.bold);
  });
```

# UTILS

```js
//         src/asyncHandler.js
// asyncHandler function takes a function <fn> as a prameter and after working on that <fn> return a function <fn>

const asyncHandler = (fn) => {
  async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      res.status(error.code || 500).json({
        success: false,
        message: error.message,
      });
    }
  };
};
```
### Another way :-
```js
const asyncHandler =(requestHandler)=>{

    (req,res,next)=>{
        Promise.resolve(requestHandler(re,res,next))
        .catch((error)=>next(error))
    }   
}

export {asyncHandler};
```

# Error Handle

Error Hangling :-[https://nodejs.org/docs/latest-v19.x/api/errors.html](https://nodejs.org/docs/latest-v19.x/api/errors.html)

Descriptions : `extened error class`

```js
class apiError extends Error {
  constructor(
    statuscode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statuscode = statuscode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
    
    if(stack){
        this.stack=stack
    }
    else{
        Error.captureStackTrace(this,this.constructor)
    }
  }
}

export {apiError};


```





Assignment :
what is inside this.data

git config --global core.autocrlf input
git rm --cached package-lock.json
git add package-lock.json
