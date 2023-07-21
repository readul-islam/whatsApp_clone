import { toast } from 'react-hot-toast'
import { status } from '../service/whatsApp'

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
