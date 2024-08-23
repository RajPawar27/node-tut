//sync code
/*
const {readFileSync,writeFileSync} = require("fs");

const data01 = readFileSync("text.txt","utf-8");

writeFileSync(
    "./content/res.txt",
    `The final content : ${data01} `,
    {
        flag : 'a'
    }
)*/

// async code

const { log } = require("console");
const fs = require("fs");

const data = fs.readFile(
    "./content/res.txt",
    "utf-8",
    (err,res)=>{
        if(err){
            log(`error occured : ${err}`);
            return;
        }
        log(`data : \n${res}`)
    }
);
log(`data1 : \n${data}`)
