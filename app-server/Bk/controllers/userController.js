const { createCustomResponse } = require("./responseObject");
const { StatusCodes } = require('http-status-codes')
const User = require('../model/user')
const register = async (req, res) => {
    try {
    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ usuario: { nombre: user.nombre,id:user._id }, token })  
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json(createCustomResponse("err", 'usuario existe'));  
    }
  
    
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(createCustomResponse("err", "datos invalidos"));
  } else {
    const user = await User.findOne({ email });
    if (!user) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json(createCustomResponse("err", "usuario no existe"));
    } else {
      const isPasswordCorrect = await user.comparePassword(password);
      if (!isPasswordCorrect) {
        res
          .status(StatusCodes.BAD_REQUEST)
          .json(createCustomResponse("err", "credenciales invalidas"));
      } else {
        // compare password
        const token = user.createJWT();
        res
          .status(StatusCodes.OK)
          .json({ user: { name: user.nombre, id: user._id }, token });
      }
    }
  }
};

module.exports= {
    register,
    login
}