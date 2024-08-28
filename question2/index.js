const fs=require('fs').promises

//reading the json file
async function readJsonFile(filePath){
    try {
        const data=await fs.readFile(filePath,'utf-8');
        return JSON.parse(data)
    } catch (error) {
        console.log("Error reading the file",error);
    }
}

//fetching data from apis

async function fetchDataFromApi(url){
    try{
        const response=await fetch(url)
        if(!response.ok) throw new Error(`HTTP Error ! ${response.status}`)
        return await response.json();
    }
    catch(err){
        console.log("Error fetching data from api",err);
    }
}

async function mergeData(){
    try {
        const file1Data=await readJsonFile('./data1.json');
        const file2Data=await readJsonFile('./data2.json');
        const file3Data=await readJsonFile('./data3.json');  

        const apiData=await fetchDataFromApi("https://dogapi.dog/api/v2/breeds")
        
        const mergedData={

            file1:file1Data,
            file2:file2Data,
            file3:file3Data,
            apiData:apiData
        }

         console.log( JSON.stringify(mergedData,null,2) );

    } catch (error) {
        console.log("Error merging the files",error);
    }
}
mergeData();