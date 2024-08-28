const fs=require("fs");
const filePath="./large-file.json"
const readableStream=fs.createReadStream(filePath)


let data="";

readablestream.on("data", (chunk) => {
    console.log(chunk.toString());
  });

readableStream.pause()
readableStream.resume()


readableStream.on("end",()=>{
    console.log("Data printed Successfully")
})