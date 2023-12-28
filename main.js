
const express = require("express")
const multer = require("multer")
const { convertCsvToDf } = require("./pandas/convertcsv")

const upload = multer({
    
    storage : multer.diskStorage({
        destination : (req,file,cb)=>{cb(null,"student-inp")},
        filename:(req,file,cb)=>{
             console.log(file)
            cb(null,"students.csv")
        }
    })
})

const app = express()


app.post("/addStudents/bulk",upload.single("students"),(req,res)=>{
    
    let out =convertCsvToDf("./student-inp/students.csv")
    res.json(out)
    
})

app.get("/",(req,res)=>{
    res.send("hi")
})

app.listen(5000,(req,res)=>{
    console.log("port listened")
})