const { Router } = require('express');
const router = Router();
// const {Alert} = require("alert");
const {createPool}=require('mysql');

const nodemailer = require('nodemailer');


const pool= createPool({
  host:"localhost",
  user:"root",
  password:"",
  database:"sgp",
  connectionLimit:10
})

router.post('/send-email', async (req, res) => {
    const { p_name,age,gender, email,c_no,d_name,date,time } = req.body;

    contentHTML = `
        <h2> Dear ${p_name},<h2>
        <h3>Thank you for booking Online Appointment!</h3>
        
        <h2>Your appointment is confirmed for ${d_name} on ${date} at ${time}.<br>Hope you dont miss the appointment!</h2>
        <p>This email is sent automatically, Please dont reply to this email.For query contact us at healinghands3013@gmail.com or call us at (123)456-7890.<p>
        <h4>Thanks & Regards!<br>Healing Hands..<br>Happy to Serve You...<br>Be happy,Be healthy..<h4>
        
        `;


    var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'healinghands3013@gmail.com',
    pass: 'krupalipatel'
  }
});


// const pool= createPool({
//   host:"localhost",
//   user:"root",
//   password:"",
//   database:"sgpii",
//   connectionLimit:10
// })



// var sql="INSERT INTO opd(PatientName,Age,Gender,Email,ContactNo,DoctorName,AppointmentDate,Time) VALUES('"+req.body.p_name+"','"+req.body.age+"','"+req.body.gender+"','"+req.body.email+"','"+req.body.c_no+"' ,'"+req.body.d_name+"','"+req.body.date+"','"+req.body.time+"')"

// pool.query(sql ,(err,result,fields)=>{
//   if(err){
//       return console.log(err);
//   }
//   return console.log(result);
// })





var mailOptions = {
  from: 'healinghands3013@gmail.com',
  to: email,
  subject: 'Confirmation of your appointment!',
  html:contentHTML
};

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });




//     res.redirect('/success.html');
// });

// var DateTime = "Select AppointmentDate,Time from opd where AppointmentDate ? and Time ?," 
// var u_date=date
// var u_time =time
// console.log(u_date);
// console.log(u_time);

var DateTime = "Select DoctorName,AppointmentDate,Time FROM opd WHERE DoctorName='"+req.body.d_name+"'and AppointmentDate='"+req.body.date+"'and Time='"+req.body.time+"'" 

pool.query(DateTime,(err,result)=>{
  console.log(result)
  if(result.length>0){
    // swal("Oops!", "Something went wrong on the page!", "error");
    // Alert.alert("Slot is not availabel plz select another one!!");
    // req.AlertVariable()
    res.redirect('/fail.html');
    return console.log("Slot is not availabel plz select another one!!")
    // AlertVariable()
    // return console.log(err);
  }
  var sql="INSERT INTO opd(PatientName,Age,Gender,Email,ContactNo,DoctorName,AppointmentDate,Time) VALUES('"+req.body.p_name+"','"+req.body.age+"','"+req.body.gender+"','"+req.body.email+"','"+req.body.c_no+"' ,'"+req.body.d_name+"','"+req.body.date+"','"+req.body.time+"')"

  pool.query(sql ,(err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          return console.log(error);
        } 
        else {
          console.log('Email sent: ' + info.response);
        }
    });
      

    return console.log(result);
  })
  res.redirect('/success.html');
  })
 
});

router.get('/cancel', function(req, res) {
  var sql= "Select * From opd ";
    pool.query(sql, function (err, data, fields) {
    if (err) {
      return console.log(err);
    }
    // console.log(data);
    res.render('cancel', { title: 'User List', userData:data});
  });

});

router.get('/doc1', function(req, res) {
  // var doc="Dr.V.M.Shah";
  var sql= "Select * From opd WHERE DoctorName= ?";
    pool.query(sql,["Dr. V.M. Shah"], function (err, data, fields) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    res.render('doc1', { title: 'User List', userData:data});
  });

});

router.get('/doc2', function(req, res) {
  // var doc="Dr.V.M.Shah";
  var sql= "Select * From opd WHERE DoctorName= ?";
    pool.query(sql,["Dr. Savitri Shrivastava"], function (err, data, fields) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    res.render('doc1', { title: 'User List', userData:data});
  });

});

router.get('/doc3', function(req, res) {
  // var doc="Dr.V.M.Shah";
  var sql= "Select * From opd WHERE DoctorName= ?";
    pool.query(sql,["Dr. Ramakanta Panda"], function (err, data, fields) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    res.render('doc1', { title: 'User List', userData:data});
  });

});

router.get('/doc4', function(req, res) {
  // var doc="Dr.V.M.Shah";
  var sql= "Select * From opd WHERE DoctorName= ?";
    pool.query(sql,["Dr. Rachel Parker"], function (err, data, fields) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    res.render('doc1', { title: 'User List', userData:data});
  });

});

router.get('/doc5', function(req, res) {
  // var doc="Dr.V.M.Shah";
  var sql= "Select * From opd WHERE DoctorName= ?";
    pool.query(sql,["Dr. Ian Smith"], function (err, data, fields) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    res.render('doc1', { title: 'User List', userData:data});
  });

});

router.get('/doc6', function(req, res) {
  // var doc="Dr.V.M.Shah";
  var sql= "Select * From opd WHERE DoctorName= ?";
    pool.query(sql,["Dr. Shobha Rani"], function (err, data, fields) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    res.render('doc1', { title: 'User List', userData:data});
  });

});



router.get('/cancel/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'DELETE FROM opd WHERE id = ?';
    pool.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
  });
  res.redirect('/cancel');
  
});

module.exports = router;