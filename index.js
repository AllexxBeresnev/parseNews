const request  = require('request'),
    cheerio = require('cheerio'),
//    url = "https://www.amic.ru/news";
    //url = "https://www.buh.22experta.ru";
    url = "https://www.newsru.com/";    
    request(url, function (error, response, body) {

        if (!error) {
            var $ = cheerio.load(body);
            var array = [], s_string = '';
            $(".left-feed-title").each(function(){
//                s_string += $(this).find('b').first().text();
                s_string = $(this).text();
                array.push(s_string.trim());
            });
            console.log((array));            
            
        } else {
            console.log("Произошла ошибка: " + error);
        }
    });    


//следующая задача - необходимо сделать объект, а котором будет заголовок, вводный текст и ссылка на картинкк


