import Jwt from 'jsonwebtoken';
import { cookies } from 'next/dist/client/components/headers';
import { env } from 'process';

const secretKey = env.JWT_SECRET_KEY;
const accessTokenExpiresIn = env.JWT_ACCESS_TOKEN_EXPIRES_IN;
const accessToken = env.JWT_ACCESS_TOKEN;

export default function jwtMiddleware() {
  //Check if token exists
  const token = cookies.call(accessToken).toString();

  // if (!token) {
  //   return res.status(403).json({
  //     success: false,
  //     message: 'not logged in',
  //   });
  // }

}