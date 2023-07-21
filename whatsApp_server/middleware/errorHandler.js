const errorHandler = (err, req, res, next) => {
  // Error handling middleware functionality
  console.log(`error ${err.message}`); //I log the error

  const status = err.status || 400;
  // send back an easily understandable error message to the caller
  res.status(status).send({
    status: "fail",
    message: err.message,
    status,
  });
};
