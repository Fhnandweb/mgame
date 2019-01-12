//1:加载模块 express pool
const express = require("express");
const pool = require("./pool");
const bodyParser = require("body-parser");
const session = require("express-session");

//2:创建express对象
var app = express();
//2.1:加载跨域访问组件
const cors = require("cors");
//2.2:配置允许脚手架访问程序
app.use(cors({
  origin: ["http://127.0.0.1:3001",
    "http://localhost:3002"
  ],
  credentials: true
}));

//3:指定监听端口3002
app.listen(3002);
//4:指定静态目录 public
// __dirname 当前程序所属目录绝对路径 
//app.js vue_app_server
app.use(express.static(__dirname + "/public"))

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(session({
  secret: "128为随机字符", //安全字符
  resave: false, //请求保存
  saveUninitialized: true, //初始化保存
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}))
// 






// /////////第一页四张图
app.get("/firstpage", (req, res) => {
  var obj = [{
      id: 1,
      imgurl: "img/index/h1.jpg"
    },
    {
      id: 2,
      imgurl: "img/index/h2.jpg"
    },
    {
      id: 3,
      imgurl: "img/index/h3.jpg"
    },
    {
      id: 4,
      imgurl: "img/index/h0.jpg"
    },
  ];
  res.send(obj);
})



// ///////论坛
app.get("/talk", (req, res) => {
  var pno = req.query.pno;
  pno = parseInt(pno) - 1;
  var ps = 10;
  var obj = {};
  if (!pno) pno = 0;
  var reg = /^[0-9]{1,3}$/;
  if (!reg.test(pno)) {
    res.send({
      code: 0,
      msg: "页码不对！"
    });
    return;
  }
  pno = pno * ps;
  //  
  var progress = 0;
  // 
  var sql = "SELECT * FROM forum LIMIT ?,?";
  pool.query(sql, [pno, ps], (err, result) => {
    if (err) throw err;
    //  
    progress += 50;
    //  
    obj.data = result;
    //  
    if (progress == 100) {
      res.send(obj);
    }
  })
  
  





  //总页数  
  var sql = "SELECT count(*) AS count FROM forum";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    progress += 50;
    obj.count = result;
    if (progress == 100) {
      res.send(obj);
    }
  })
})





// comment
app.get("/comment", (req, res) => {
  var lid = req.query.lid;
  var sql = "SELECT * FROM forum WHERE lid = ?";
  pool.query(sql, [lid], (err, result) => {
    if (err) throw err;
    res.send(result);
  })
})

// ////////////////评论插入数据库
app.post("/incom", (req, res) => {
  var un = req.body.un;
  var c = req.body.c;
  var lid = req.body.lid;
  // console.log(un);
  //  console.log(c);
  if (!c) {
    res.send({
      code: 0,
      msg: "评论不可空！"
    });
    return;
  }
  var sql = "INSERT INTO `comment`(`id`, `un`, `rtime`, `content` , `lid`) VALUES (null,?,now(),?,?)";
  pool.query(sql, [un, c, lid], (err, result) => {
    if (err) throw err;
    res.send({
      code: 1,
      msg: "信已送达，安好！"
    })
  })
})
//展示评论
app.get("/showcomment", (req, res) => {
  var lid = req.query.lid;
  var sql = "SELECT * FROM comment WHERE lid = ?";
  pool.query(sql, [lid], (err, result) => {
    if (err) throw err;
    res.send(result);
  })
})




//  //////////攻略

app.get("/str", (req, res) => {
  var id = req.query.id;
  var obj = {};
  var progress = 0;
  var sql = "SELECT * FROM strategy WHERE id = ?";
  pool.query(sql, [id], (err, result) => {
    if (err) throw err;
    obj.c = result;
    progress += 50;
    if (progress == 100) {
      res.send(obj);
    }

  })

  var sql = "SELECT * FROM swipe";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    obj.s = result;
    progress += 50;
    if (progress == 100) {
      res.send(obj);
    }
  })

})


// ///注册
app.post("/reg", (req, res) => {
  var uname = req.body.uname;
  var upwd = req.body.upwd;
  if (!uname) {
    res.send({
      code: 0,
      msg: "用户名不能为空！"
    });
    return;
  }
  if (!upwd) {
    res.send({
      code: 0,
      msg: "密码不能为空！"
    });
    return;
  }
  var sql1 = `SELECT un FROM reg WHERE un=?`;
  pool.query(sql1, [uname], (err, result) => {
    if (err) throw err;
    // console.log(result);
    if (result.length > 0) {
      res.send({
        code: 0,
        msg: "用户名已经存在！"
      });
      return;
    } else {
      var sql2 = `INSERT INTO reg (id, un, up) VALUES (null,?,?)`;
      pool.query(sql2, [uname, upwd], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
          res.send({
            code: 1,
            msg: "注册成功！"
          });
        }
      })
    }
  })
})
// ///////////////

// 登录
app.post("/login", (req, res) => {
  var un = req.body.un;
  var up = req.body.up;
  var sql = `SELECT id FROM reg WHERE un=? AND up=?`;
  pool.query(sql,[un,up],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      req.session.uname=un;
      res.send({code:1,msg:'登录成功！'})
    }else{
      res.send({code:0,msg:'账号或者密码有误！'})
    }
   
  })
})
//发帖
app.post("/report",(req,res)=>{
  var title=req.body.title;
  var content=req.body.content;
  var uname=req.session.uname;
  console.log(uname);
  if(!uname){
    res.send("请先登录!");
    return;
  }
  var sql=`INSERT INTO forum (lid, title, content, uname, rtime) VALUES ("",?,?,?,now())`;
  pool.query(sql,[title,content,uname],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"发表成功!"})
    }
  })
})
// 

// 检测登录
app.get("/testlogin",(req,res)=>{
  var uname=req.session.uname;
  // console.log(uname);
  if(!uname){
    res.send({code:0,msg:"请先登录！",uname:"未登录"});
    return;
  }else{
    res.send({code:1,msg:"已经登录！",uname:uname})
  }
})


// 注销
app.get("/signout",(req,res)=>{
  var uname=req.session.uname;
  if(!uname){
    res.send({code:0,msg:"未登录！"});
    return;
  }else{
    req.session.uname="";
    res.send({code:1,msg:"已注销！"});
  }
})



// 、、、info
app.get('/info',(req,res)=>{
  var lid=req.query.lid;
  var sql="SELECT * FROM info WHERE lid=?";
  pool.query(sql,[lid],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})