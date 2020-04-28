const request  = require('request'),
    cheerio = require('cheerio'),
//    url = "https://www.amic.ru/news";
    //url = "https://www.buh.22experta.ru";
    url = "https://www.newsru.com/";    
    request(url, function (error, response, body) {

        if (!error) {
            var $ = cheerio.load(body);
            var array = {
                1 : [ "",  "", ""]
            }, 
            
            s_string = '';
//Записываем заголовки новостей
            let titles = [];
            $(".left-feed-title").each(function(){
                s_string = $(this).text();
                titles.push(s_string.trim());                
            });
//            console.log((titles));            
//Записываем короткий текст новостей
            let texts = [];
            $(".left-feed-anons").each(function(){
                s_string = $(this).text();
                texts.push(s_string.trim());                
            });
//            console.log((texts));            
//Записываем ссылку на кртинку
            let imageArr = []
            $('.news-img').each(function() {
                let image = $(this).attr('src')
                imageArr.push(image)
            })
            console.log(imageArr)


//            let k = 1;            
//            $(".left-feed-title").each(function(){
//                s_string = $(this).text();
//                array.push(s_string.trim());
//                array[k] = s_string.trim();                
//                k++;
//            });
//            console.log((array));            
            
        } else {
            console.log("Произошла ошибка: " + error);
        }
    });    


//следующая задача - необходимо сделать объект, а котором будет заголовок, вводный текст и ссылка на картинкк


