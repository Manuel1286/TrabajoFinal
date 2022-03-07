const express = require('express'),
    app = express()
    bodyParser = require('body-parser'),
    cors = require('cors'),
    http = require('http').Server(app)
    config = require('./bk-main/config/config')
    db = require('./bk-main/database/database')
    
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(cors())

    app.use("/api", require('../TrabajoFinal/bk-main/routes/index'))




    // app._router("/api", require('./bk-main/routes/index'))
    // app.use(methodOverride('_method'))
    
    

    http.listen(config.port, () => {
        console.log(`Server is running in port ${config.port}`);
    });


    // 
    // multer = require('multer')
    // path = require('path')
    // fs = require('fs')

    // //upload = multer({ dest: 'uploads/' })
    // app = express()
    // 
    // 
    // Document = require('./model/document')
    // methodOverride = require('method-override')
    // 

    // console.log(db)
    
    // io = require("socket.io")(http,{
    //     cors:{
    //         origins:['http://localhost:4200/']
    //     }
    // })
    // url = config.urlDb
    // upload = multer({ dest: "/uploads" })
    // dirPath = path.join(__dirname, '..', '/uploads')
    

  
    // consumer = require('./io/consumer')
   
    // consumer.start(io)
    // init = require('./init/init')
    // //init.createRoles()
    // //init.createUser()
    // //init.createModules()
    // //init.createAsignedModuleToRolUser()
    // // init.createRolUser()

   

    // app.use("/api", require('../bk/routes/'))
    
    // app.post('/api/upload', upload.single('file'), async (req, res, next) => { 
    //     let newDocument = new Document({
    //         originalname: req.file.originalname,
    //         encoding: req.file.encoding,
    //         mimetype: req.file.mimetype,
    //         filename: req.file.filename,
    //         size: req.file.size
    //     })
    //     await newDocument.save()
    //     res.json({ status: true })
    // })

    

   