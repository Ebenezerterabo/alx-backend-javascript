function getPaymentTokenFromAPI(sucess) {
    if (sucess) {
        return new Promise((resolve, reject) => {
            resolve({
                data: 'Sucessful response from API'});
        });
    }
}

module.exports = getPaymentTokenFromAPI
