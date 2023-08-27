import totp from 'totp-generator'
const period = 30
const digits = 6
let token = ''
export function displayToken(secret) {
  async function generateTOTP() {
    const token = totp(secret.replaceAll(' ', '').trim(), {
      digits,
      period,
    })

    const secondsSinceEpoch = Math.ceil(Date.now() / 1000) - 1
    const secondsSinceStart = 0 + (secondsSinceEpoch % period)
    const secondsRemaining = period - (secondsSinceEpoch % period)
    console.log('this is broken')
    setResult(token)
    setRunningTime(secondsSinceStart)
    setSecondsTillExpiration(secondsRemaining)
  }
  const token = totp(secret.replace(/ /g, '').trim(), {
    digits,
    period,
  })
  return `${token}`
}
