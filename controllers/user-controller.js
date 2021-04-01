const response=require('../controllers/ResponseController');
const constants=require('../constants/constants');
const userSrvice=require('../services/user-service');
const AppError = require('../config/error');
module.exports.login=async (req,res,next)=>{
   try{
      var result=await userSrvice.login(req.body);
      console.log("result==",result);
      if(result.status)
      {
         return response(req,res,result.message,result.data,constants.statuscodes.success,result.token);
      }
      else
      {
         return next(new AppError(result.message,result.statuscode));
      }
   }catch(error)
   {
      return next(error);
   }
}
