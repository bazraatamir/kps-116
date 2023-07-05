const UserSchema = require("../model/userModel");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const newUser = await UserSchema.create(req.body);
    res.status(200).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

exports.Login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await UserSchema.findOne({ email: email });
  try {
    if (!user) {
      return res.status(404).json({
        success: false,
        error: `нууц үг болон э-мэйлээ шалгана уу `,
      });
    }
    const check = await user.CheckPassword(password);
    if (!check) {
      return res.status(404).json({
        success: false,
        error: `нууц үг болон э-мэйлээ шалгана уу `,
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};
