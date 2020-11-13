const request = require('request');

const authKey = 'kwyjhLhydUm6wYKI9ioJVk8NUkj94o9P';

const date = '2020-11-12';

const requestOption = {
    uri: 'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON',
    qs: {
        authkey: authKey,
        searchdate: date,
        data: 'AP01',
    }
}

request(requestOption, function(error, response, body){
    if(error){
        console.log('error: ', error);
        return;
    }

    console.log('body: ', body);
    const bodyParsed = JSON.parse(body);
    console.log('bodyParsed: ', bodyParsed);
})
