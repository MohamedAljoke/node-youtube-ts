import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'test1'
const EXPIRES_IN = process.env.EXPIERS_IN ||'7d'

export function signJwt(payload: string | Buffer | object) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: EXPIRES_IN,
  });
}
export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    return decoded
  } catch (e) {
    return null
  }
}