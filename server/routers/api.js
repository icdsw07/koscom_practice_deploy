const express = require('express');
const request = require('request');
const router = express.Router();

const authKey = 'kwyjhLhydUm6wYKI9ioJVk8NUkj94o9P';

const date = '2020-11-12';
// 여기서 openAPI로 리퀘스트
router.get('/currency_list/:date', function(req,res,next){
    const requestOption = {
        uri: 'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON',
        qs: {
            authkey: authKey,
            searchdate: req.params.date,
            data: 'AP01',
        }
    }

    request(requestOption, function(error, response, body){
        if(error){
            console.log('error: ', error);
            res.send({
                error: {
                    meesage: "데이터를 불러오는데 실패했습니다.",
                    data: error,
                }
            })
            return;
        }
        const bodyParsed = JSON.parse(body);

        res.send(bodyParsed);        
    })
})

module.exports = router;