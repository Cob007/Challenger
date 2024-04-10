const SuccessResponse = (code, data, msg) => {
  return {
    status: code,
    data: data || null,
    message: msg,
  };
};

const ErrorResponse = (code, msg) => {
    return {
      status: code,
      message: msg,
    };
  };


module.exports ={
    SuccessResponse,
    ErrorResponse
}