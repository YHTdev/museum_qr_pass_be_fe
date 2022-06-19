import { compareSync, hashSync } from "bcrypt";
import QRCode from "easyqrcodejs-nodejs";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { User } from "../types";

export const hashedPassword = (password: string): string => {
  const hashPassword = hashSync(password, 12);
  return hashPassword;
};

export const comparePassword = (
  password: string,
  hashedPassword: string
): boolean => {
  const comparePassword = compareSync(password, hashedPassword);
  return comparePassword;
};

export const signinToken = (user: User) => {
  const accessToken = sign(user, JWT_SECRET, { expiresIn: "1d" });
  return accessToken;
};

export const generateQr = async (id: string) => {
  const qr = new QRCode({
    text: id,
    width: 256,
    height: 256,
    correctLevel: QRCode.CorrectLevel.H,
    logoBackgroundTransparent: true,
    title: id,
    titleColor: "#004284",
  });

  const SVGText = await qr.toDataURL();

  return SVGText;
};
