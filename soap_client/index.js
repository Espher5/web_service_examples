const soap = require('soap');
const url = 'https://www.dataaccess.com/webservicesserver/NumberConversion.wso?WSDL';
const params = {
    ubiNum: 100
};

soap.createClient(url, (error, client) => {
    if(error) {
        throw error;
    }

    client.NumberToWords(params, function(err, result) {
        if(err) {
            throw err;
        }
        console.log(result);
    });
});
