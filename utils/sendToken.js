export const sendToken = (res, user, message, statusCode = 201) => {
  console.log("coming hereeeeeeeee")
  const token = user.getJWTToken();
  console.log("token=>",token)
  const options = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };

  console.log("options")

  res.status(201).cookie("token", token, options).json({
    success: true,
    message,
    user,
  });
};
