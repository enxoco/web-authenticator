import totp from 'totp-generator'
const period = 30
const digits = 6
export function displayToken(secret: string) {
  const token = totp(secret.replace(/ /g, '').trim(), {
    digits,
    period,
  })
  return `${token}`
}
