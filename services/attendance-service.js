const fs=require('fs');
const path=require('path');

module.exports.processImages=async (data,files)=>{
   console.log(data,files)
     return  {
        status:true,
        data:"Empty",
        message:"Okay"
     }
}

module.exports.getAllAttendance=(req)=>{
   const fdir=path.join(__dirname,'../','faceRecognizer/Attendance');
   var result=[];
   var oneFile;
   fs.readdirSync(fdir).forEach((file)=>{
      var data=fs.readFileSync(path.join(__dirname,'../','faceRecognizer/Attendance',file),'utf-8');
      var chunks=data.split('\r\n');
      oneFile=[];
      for(var i=1;i<chunks.length-1;i++)
      {
         var row=chunks[i].split(',');
         var id=row[0];
         var name=row[1];
         var date=row[2];
         var time=row[3];
         console.log(id,name);
         var doc={};
         doc.id=id;
         doc.name=name;
         doc.date=date;
         doc.time=time;
         oneFile.push(doc);
      }
      result.push(oneFile);
   });
   console.log(result);
   return  {
      status:true,
      data:result,
      message:"Okay"
   }

}
module.exports.getAllAttendance('sds')