function getPaymentTokenFromAPI(sucess) {
    if (sucess) {
        return new Promise((resolve, reject) => {
            resolve({
                data: 'Sucessful response from the API'});
        });
    }
}

module.exports = getPaymentTokenFromAPI
