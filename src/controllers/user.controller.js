// registerUser.js

import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { apiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, fullname, password } = req.body;
  if (
    [username, email, fullname, password].some((field) => field?.tirm() === "")
  ) {
    throw new apiError(400, "All field are requird");
  }

  const existedUser = User.findOne({ $or: [{ username }, { email }] });

  if (existedUser) {
    throw new apiError(409, "User Already exists..😁");
  }

  // multer givea access of req.files
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) throw new apiError(400, "Avtar file is required");

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) throw new apiError(400, "Avtar file is required");

  const user = await User.create({
    username:username.toLowerCase,
    avatar:avatar.url,
    coverImage:coverImage?.url || "",
    email,
    fullname,
    password,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken "
  )

  if(!createdUser){
    throw new apiError(500,"Something went wrong while registeriing the user")
  }

  return res.status(201).json(new apiResponse(200,createdUser,"User registered successfully ..👍"))

});

export { registerUser };
