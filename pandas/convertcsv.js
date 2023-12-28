
const pd = require("node-pandas")

function convertCsvToDf(filepath){

       return pd.readCsv(filepath).data
}

module.exports={
       convertCsvToDf:convertCsvToDf
}