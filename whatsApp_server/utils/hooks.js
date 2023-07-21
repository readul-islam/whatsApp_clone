export const sendToClient = (status, message , data={})  => {
  return {
    status,
    message,
    data
  };
};
