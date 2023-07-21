import { toast } from 'react-hot-toast'
import { status } from '../service/whatsApp'
import CryptoJS from 'crypto-js'

// secret key for crypto-js
const SECRET_KEY ='24a999cd4922d64c6fbe261020f97ed4fdfe07124268df34bae00ee09f9d91a7';


// handle user notification / toast

export const showToastByStatus = (response) => {
  if (response) {
    if (response.status === status.FAILED) {
      toast.error(response.message, { id: 1 })
    }

    if (response.status === status.SUCCESS) {
      toast.success(response.message, { id: 1 })
    }
  } else {
    toast.error('Something Wrong, Try aging', { id: 1 })
  }
}

// text/encrypt Data to decrypt  Data
export const encryptedData = (payload) => {
  try {
    return CryptoJS.AES.encrypt(
      JSON.stringify(payload),
      SECRET_KEY,
    ).toString()
  } catch (error) {
    console.log(error)
  }
}
// encrypt to text/decrypt Data
export const decryptedData = (encryptData) => {
  try {
    var bytes = CryptoJS.AES.decrypt(encryptData, SECRET_KEY)
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
  } catch (error) {
    console.log(error)
  }
}
