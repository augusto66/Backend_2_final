import jwt from "jsonwebtoken";
import envsConfig from "../config/envs.config.js";

// Crea el token
export const createToken = (data) => {
  return jwt.sign(data, envsConfig.JWT_SECRET, { expiresIn: "5m" });
};

// Verifica el token
export const verifyToken = (token) => {
  return jwt.verify(token, envsConfig.JWT_SECRET);
}