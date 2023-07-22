export const sendToClient = (status, message, data = {}) => {
  return {
    status,
    message,
    data,
  };
};
 
export   const escape = function (str) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
};


