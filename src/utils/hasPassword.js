import bcrypt from "bcrypt";

// Hashea el password
export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

// Compara los password
export const comparePassword = (userPassword, receivedPassword) => {
  return  bcrypt.compareSync(receivedPassword, userPassword);
}
