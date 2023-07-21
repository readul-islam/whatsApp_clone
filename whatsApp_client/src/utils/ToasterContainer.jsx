import React from 'react'
import { Toaster } from 'react-hot-toast'

const ToasterContainer = () => {
  return (
    <Toaster
      position='top-right'
      reverseOrder={false}
      gutter={8}
      //   containerClassName=""
      containerStyle={{
        top: 80,
      }}
      toastOptions={{
        // Define default options
        className: '',
        duration: 3000,
        style: {
          background: '#FFF',
          color: 'black',
          padding: '16px',
        },
        // Default options for specific types
        success: {
          duration: 4000,
          theme: {
            primary: 'green',
            secondary: '#FFFFFF',
          },
        },
      }}
    />
  )
}

export default ToasterContainer
