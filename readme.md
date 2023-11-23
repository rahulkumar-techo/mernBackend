
## LOGIN LOGIC :
- Get user ddetails from frotend 
- validation - input field should'nt be empty
- check if user already exist : username ,email
- upload them  to cloudinary ,avtar
- create user object - create entry in db
- remove password and refresh token field from response
- check for user creation 
- return res
#### validation - input field should'nt be empty
```js
// if it return meaens input field empty .
 [username,email,fullname,password].some((field)=> field?.tirm()==="")
 
 ```

req.files of multer 

```js
// which field you  don't want 

await User.findById(isUserStored._id).select(
    "-password -refreshToken "
  )
```