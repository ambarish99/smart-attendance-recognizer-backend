const constants={
   roles:{
      student:"Student",
      teacher:"Teacher",
      admin:"Admin"
   },
   statuscodes: {
      success: 200,
      notFound: 404,
      forbidden: 405,
      unauthorized: 401,
      invalid: 422,
      internal: 500,
      conflict: 409,
      badRequest: 400,
      notAcceptable: 406
  }
}
module.exports=constants