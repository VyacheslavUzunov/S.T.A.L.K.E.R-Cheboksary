// счетчик для анимаций(анимации тут пока нет) !тест
let counter = 0
//это, чтобы останавливать анимацию !тест
let timerID

let chooseWay = 0

let pik1 = new Audio('./mp3/klick.mp3')
pik1.volume = 0.1

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}



let startVideo = document.getElementById('startVideo')
let videoBlockTwo = document.getElementById('videoBlockTwo')
startVideo.setAttribute('src', './video/Иваныч.mp4')

const videoGo = (link, smooth = false) => {
    if (smooth) {startVideo.hidden = true
        setTimeout(atm = () => {
            startVideo.hidden = false
        }, 200)}
    startVideo.setAttribute('src', `./video/${link}.mp4`)
    startVideo.play()
}

let changeOption = true

const ChangeVideo = (src, smooth = false) => {
    startVideo.classList.remove('move')
    videoBlockTwo.classList.remove('move')
    if (changeOption) {
        videoBlockTwo.hidden = true
        startVideo.hidden = false
        if (smooth) {
            startVideo.classList.add('move')
        }
        startVideo.play()
        videoBlockTwo.setAttribute('src', `./video/${src}.mp4`)
    } else {
        startVideo.hidden = true
        videoBlockTwo.hidden = false
        if (smooth) {
            videoBlockTwo.classList.add('move')
        }
        videoBlockTwo.play()
        startVideo.setAttribute('src', `./video/${src}.mp4`)
    }
    changeOption = !changeOption
}

// упрощение кода
let startButton = document.getElementById('buttonId') // стартовая кнопка
let textGame = document.getElementById('textId') // текст игры
let bgImage = document.body.style //фон
let boardName = document.getElementById('nameId')
let videos = document.getElementById('videos')


let btn1 = document.getElementById('buttonId2') // текст кнопок
let btn2 = document.getElementById('buttonId3')
let btn3 = document.getElementById('buttonId4')

let windowText = document.getElementById('container')

const buttonsGraphic = (btn1text='',
                        btn2text='',
                        btn3text='',
                        btn1hidden = false,
                        btn2hidden=true,
                        btn3hidden = true,
                       ) => {
    btn1.hidden = btn1hidden // показываем кнопки
    btn2.hidden = btn2hidden
    btn3.hidden = btn3hidden
    //
    btn1.textContent = btn1text // текст кнопок
    btn2.textContent = btn2text
    btn3.textContent = btn3text
}

const stopAndStartVideo = (action) => {
    if (action){
        startVideo.play()
        startVideo.hidden = false
    } else {
        startVideo.pause()
        startVideo.hidden = true
    }
}


windowText.addEventListener("animationend", e = () => {
    let textArea = new Audio('./mp3/textAreaSound2.mp3')
    textArea.play();
});

let timerId

function animateText(id, text, i, callback) {
    if (i == 1) {
        pik1.play();
        document.getElementById(id).innerHTML = ''
        clearTimeout(timerId)
    }
    document.getElementById(id).innerHTML = text.substring(0, i);
    i++;
    if (i > text.length) {
        pik1.pause()
        callback()
        return
    }
    ;
    timerId = setTimeout("animateText('" + id + "','" + text + "','" + i + "'," + callback + ")", 30);
    windowText.onclick = () => {
        clearTimeout(timerId)
        document.getElementById(id).innerHTML = text
        pik1.pause()
        callback()
    }
}

const LongSound = (link) => {
    let soundVar = new Audio(link)
    return soundVar
}

const shortSound = (link) => {
    let soundVar = new Audio(`./mp3/${link}`)
    soundVar.play()
}

//что будет происходить при нажатии на кнопку старта
startButton.addEventListener("mouseenter", function(event) {
    shortSound('./mp3/puk.mp3')
}, false);



windowText.addEventListener("animationend", e = () => {
    let textArea = new Audio('./mp3/textAreaSound2.mp3')
    textArea.play();
});

startButton.onclick = function() {
    gameWay(++chooseWay)
}
let Ivan = LongSound('./mp3/Иваныч1сек.ogg')
let Petr = LongSound('./mp3/Петрович1сек.ogg')
let sh1 = LongSound('./mp3/Тень1Глеб.ogg')
let sh12 = LongSound('./mp3/Тень1.2.ogg')
let sid1 = LongSound('./mp3/Сидор1.ogg')
let sid2 = LongSound('./mp3/Сидор2.ogg')
let sidMus = LongSound('./mp3/МузлоСидор.mp3')
let musicVan = LongSound('./mp3/ВантузМуз.mp3')
let pom1 = LongSound('./mp3/пом1.ogg')
let pom2 = LongSound('./mp3/пом2.ogg')
let StartScene


const gameWay = (way) => {
    if (way===1) {
        bgImage.backgroundImage = 'url("./img/Тени.png")'
        startButton.hidden = true // прячем стартовую кнопку (true - спрятать, false - показать)
        windowText.hidden = false
        textGame.hidden = false // показываем текст
        animateText('textId','1987г. Чебоксары. за 5 минут до взрыва...', 1, ()=>buttonsGraphic('Далее...'))
        shortSound('Чебоксары.ogg')
    } else if (way===2) {
        startVideo.hidden = false
        bgImage.backgroundImage = 'url("./img/Иваныч.png")'
        ChangeVideo('Петрович', true)
        startVideo.play()
        animateText('textId','Эй, Петрович. Курнем?', 1, ()=>buttonsGraphic('Далее...'))
        boardName.textContent = 'Иваныч'
        Ivan.play()

    } else if (way===3) {
        bgImage.backgroundImage = 'url("./img/Петрович.png")'
        ChangeVideo('Иваныч')
        animateText('textId','Ты че Иваныч берега попутал, курить? здесь?', 1, ()=>buttonsGraphic('Далее...'))
        boardName.textContent = 'Петрович'
        Petr.play()

    } else if (way===4){
        ChangeVideo('Петрович')
        animateText('textId','Эх, Петрович, Петрович, я так сто раз делал и живые все!', 1, ()=>buttonsGraphic('Далее...'))
        boardName.textContent = 'Иваныч'
        Ivan.play()
    } else if (way===5) {
        ChangeVideo('Иваныч')
        animateText('textId','Иваныч было время раньше, эх, жизнь была', 1, ()=>buttonsGraphic('Далее...'))
        boardName.textContent = 'Петрович'
        Petr.play()
    } else if (way===6) {
        ChangeVideo('Петрович')
        animateText('textId','И будет Петрович! Может по писюлику ебнем за здоровье?', 1, ()=>buttonsGraphic('Далее...'))
        boardName.textContent = 'Иваныч'
        Ivan.play()
    } else if (way===7) {
        ChangeVideo('Иваныч')
        animateText('textId','По писюлику можно, вот ты Иваныч, конечно, ого-го!', 1, ()=>buttonsGraphic('Далее...'))
        boardName.textContent = 'Петрович'
        Petr.play()
    } else if (way===8) {
        ChangeVideo('Петрович')
        animateText('textId','Ща Петрович бутыль возму', 1, ()=>buttonsGraphic('Далее...'))
        boardName.textContent = 'Иваныч'
        Ivan.play()
    } else if (way===9) {
        ChangeVideo('Иваныч')
        animateText('textId','Давай-давай, неси святую', 1, ()=>buttonsGraphic('Далее...'))
        boardName.textContent = 'Петрович'
        Petr.play()
    } else if (way===10) {
        bgImage.backgroundImage = 'url("./img/Иваныч.png")'
        ChangeVideo('Выстрел')
        animateText('textId','Петрович ты... ЭЙ КТО ТАМ?', 1, ()=>{})
        boardName.textContent = 'Иваныч'
        Ivan.play()
        setTimeout(atm = () => {
            gameWay(++chooseWay)
        }, 3000)
    } else if (way===11) {
        ChangeVideo('СмертьИваныча')
        shortSound('Выстрел.mp3')
        sh12.play()
        sh12.volume = 0.4
        boardName.textContent = 'Тень 1'
        bgImage.backgroundImage = 'url("./img/СмертьИваныча1.png")'
        animateText('textId','Приконьчить пидоров!', 1, ()=>{})
        setTimeout(atm = () => {
            gameWay(++chooseWay)
        }, 2000)

    } else if (way===12) {
        ChangeVideo('Сидорович')
        animateText('textId','Сам ты пидор, епта!', 1, ()=>buttonsGraphic('Далее...'))
        boardName.textContent = 'Иваныч'
        Ivan.play()
        setTimeout(atm = () => {
            gameWay(startVideo.pause())

        }, 2000)
    } else if (way===13) {
        bgImage.backgroundImage = 'url("./img/Тени1.png")'
        startVideo.hidden = true
        animateText('textId','Заминировать 4 блок', 1, ()=>buttonsGraphic('Далее...'))
        boardName.textContent = 'Тень 1'
        sh1.volume = 0.2
        sh1.play()
    } else if (way===14) {
        bgImage.backgroundImage = 'url("./img/Тени2.png")'
        animateText('textId','ЗА МОНОЛИТ! ЗА МОНОЛИТ!', 1, ()=>buttonsGraphic('Далее...'))
        boardName.textContent = 'Тень 2'
        shortSound('Тень2Глеб.ogg')
    } else if (way===15) {
        bgImage.backgroundImage = 'url("./img/Тени.png")'
        animateText('textId','Чернобыль. За месяц до наших дней…', 1, ()=>buttonsGraphic('Далее...'))
        boardName.textContent = ''
        shortSound('Чернобыль.ogg')
    } else if (way===16) {
        bgImage.backgroundImage = 'url("./img/Сидорович.png")'
        startVideo.hidden = false
        sidMus.volume = 0.1
        sidMus.play()
        ChangeVideo('ТеньВопрос')
        animateText('textId','...', 1, ()=>buttonsGraphic('Далее...'))
    } else if (way===17) {
        boardName.textContent = 'Сидорович'
        animateText('textId','На кой ляд мне эти консервные банки', 1, ()=>buttonsGraphic('Далее...'))
        sid1.play()
        sid1.volume = 0.2

    } else if (way===18) {
        sidMus.pause()
        animateText('textId','...', 1, ()=>{})
        shortSound('Топот.mp3')
        setTimeout(atm = () => {
            gameWay(gameWay(++chooseWay))
        }, 4000)
    } else if (way===19) {
        boardName.textContent = 'Тень 1'
        ChangeVideo('СмертьСидоровича')
        startVideo.setAttribute('src', './video/ТеньВопрос.mp4')
        startVideo.play()
        shortSound('ТеньВопрос.ogg')
        animateText('textId','Где меченый?', 1, ()=>buttonsGraphic('Далее...'))
        bgImage.backgroundImage = 'url("./img/Сидорович.png")'
    } else if (way===20) {
        boardName.textContent = 'Сидорович'
        ChangeVideo('ГовноСидоровича3')
        shortSound('Сидор2.ogg')
        animateText('textId','Меченый! Какого черта?', 1, ()=>{})
        bgImage.backgroundImage = 'url("./img/СидоСпятил.png")'
        setTimeout(atm = () => {
            gameWay(gameWay(++chooseWay))
            shortSound('Выстрел.mp3')
        }, 2700)
    } else if (way===21) {
        boardName.textContent = 'Тень 1'
        ChangeVideo('ТеньВопрос')
        bgImage.backgroundImage = 'url("./img/ТениСмертьСидора.png")'
        shortSound('ПукСидора.ogg')
        animateText('textId','...', 1, ()=>{})
        setTimeout(atm = () => {
            gameWay(gameWay(++chooseWay))
        }, 3900)

    } else if (way===22) {
        boardName.textContent = 'Тень 1'
        ChangeVideo('Пк')
        shortSound('Тень1.3.ogg')
        animateText('textId','Вытрите говно!', 1, ()=>buttonsGraphic('Далее...'))

    } else if (way===23) {
        bgImage.backgroundImage = 'url("./img/Тени.png")'
        videos.hidden = true
        animateText('textId','Новокузнецк. Наши дни', 1, ()=>buttonsGraphic('Далее...'))
        boardName.textContent = ''
        shortSound('Новокузнецк.ogg')
    } else if (way===24) {
        videos.hidden = false
        ChangeVideo('ПисьмоПк',true)
        animateText('textId','Какая соска, подумали вы', 1, ()=>buttonsGraphic('Попросить её поесть колбасы'))

    } else if (way===25) {
        ChangeVideo('Вступительный ролик',true)
        animateText('textId','Письмо... Сидоровичу младшему', 1, ()=>buttonsGraphic('Открыть'))

    }  else if (way===26) {
        bgImage.backgroundImage = 'url("./img/Doc-Зав1.png")'
        videos.hidden = true
        animateText('textId','Дааааа, папаша мой в губы не дул значит, а тут у нас что?', 1, ()=>buttonsGraphic('Открыть'))
    } else if (way===27) {
        bgImage.backgroundImage = 'url("./img/Doc-Экс.png")'
        animateText('textId','Краковяк, так-так, загуглим, полко… майо.. Крак.. Миклухо… Так… год рождение… пам-пам-пам… город Чебоксары…', 1, ()=>buttonsGraphic('Открыть'))
    }  else if (way===28) {
        animateText('textId','Нууууу… Отправляемся в Чебоксары!', 1, ()=>buttonsGraphic('Открыть'))
    } else if (way===29) {
        videos.hidden = false
        ChangeVideo('Вокзал.mp4',true)
        animateText('textId','Нууууу… Отправляемся в Чебоксары!', 1, ()=>buttonsGraphic('Нажмите, чтобы пропустить'))
        windowText.hidden = true
        textGame.hidden = true

        bgImage.backgroundImage = 'url("./img/Тени.png")'
        StartScene = setTimeout(atm = () => {
            startVideo.pause()
        }, 18000)
    } else if (way===30) {
        clearTimeout(StartScene)
        // очистить интервал
        startVideo.hidden = true
        windowText.hidden = false
        textGame.hidden = false
        animateText('textId','Вокзал', 1, ()=>buttonsGraphic('Далее...'))
    } else if (way===31) {
        startVideo.hidden = false
        ChangeVideo('ВантузВстреча1', true)
        animateText('textId','Надо найти проводника', 1, ()=>buttonsGraphic('Эй, мужик!'))
        bgImage.backgroundImage = 'url("./img/Вокзал.png")'
    } else if (way===32) {
        ChangeVideo('Вокзал', true)
        musicVan.play()
        animateText('textId','Чего брат?', 1, ()=>buttonsGraphic('А кто тут провести в зону может?'))
    } else if (way===33) {
        animateText('textId','Ну по теории вероятности провести может кто угодно, но тебе повезло, я лучший проводник!', 1, ()=>buttonsGraphic('Дааа, такое себе везение, ну неважно, тебя как кличут?'))
    } else if (way===34) {
        boardName.textContent = 'Bантуз'
        animateText('textId','Вантуз моя кличка', 1, ()=>buttonsGraphic('Хех, и почему тебя так называют?'))
    } else if (way===35) {
        animateText('textId','В анусе бывает, что отверстие засоряется после выбросов и... ', 1, ()=>buttonsGraphic('Ты ебнутый, фу, ты педик что-ли?'))
    } else if (way===36) {
        animateText('textId','Эх, салага, ты про баб на зоне слышал?', 1, ()=>buttonsGraphic('Нет'))
    } else if (way===37) {
        animateText('textId','Ну вот и я не слышал! А ты сразу педик, просто по другому у нас здесь не получится', 1, ()=>buttonsGraphic('Слушай я наверно другого проводника поищу…'))
    } else if (way===38) {
        animateText('textId','Еже еже братик, но если тебе понадобиться опытный проводник, я буду ждать тебя тут', 1, ()=>buttonsGraphic('Ага...'))
        bgImage.backgroundImage = 'url("./img/ВантузВокзал.png")'
    } else if (way===39) {
        musicVan.pause()
        boardName.textContent = ''
        ChangeVideo('Бебра', true)
        animateText('textId','Фрик походу...', 1, ()=>buttonsGraphic('Ага...'))
        bgImage.backgroundImage = 'url("./img/Вокзал.png")'
    } else if (way===40) {
        boardName.textContent = ''
        animateText('textId','Хоть кто-то, но ни этот придурок', 1, ()=>buttonsGraphic('Ага...'))
    } else if (way===41) {
        animateText('textId','ИЩУ ПРОВОДНИКАА!', 1, ()=>buttonsGraphic('Ага...'))
    } else if (way===42) {
        ChangeVideo('Костер', true)
        animateText('textId','5 косарей и я в деле', 1, ()=>buttonsGraphic('Ну а зовут тебя как? И как ты в деле?'))
    } else if (way===43) {
        animateText('textId','Ты мне за ответы денег не платишь', 1, ()=>buttonsGraphic('Ну выбора у меня толком нет. Договорились!'))
        bgImage.backgroundImage = 'url("./img/Пометка1.png")'

    } else if (way===44) {

        videos.hidden = true
        pom1.play()
        animateText('textId','Пометка из местной газеты', 1, ()=>buttonsGraphic('Ну выбора у меня толком нет. Договорились!'))
    } else if (way===45) {
        pom1.pause()
        bgImage.backgroundImage = 'url("./img/Тени.png")'
        animateText('textId','4 часа спустя', 1, ()=>buttonsGraphic('...'))
    } else if (way===46) {
        ChangeVideo('БебраКостер', true)
        animateText('textId','Z… Z… Z…', 1, ()=>buttonsGraphic('...'))
    } else if (way===47) {
        videos.hidden = false
        animateText('textId','*Треск...*', 1, ()=>buttonsGraphic('...'))
        shortSound('хруст1.mp3')
    } else if (way===48) {
        videos.hidden = true
        animateText('textId','Что? А… z… z…', 1, ()=>buttonsGraphic('...'))
    } else if (way===49) {
        videos.hidden = false
        shortSound('хруст2.mp3')
        animateText('textId','*Треск...*', 1, ()=>buttonsGraphic('...'))
    } else if (way===50) {
        animateText('textId','Да Что там такое?', 1, ()=>buttonsGraphic('...'))
    } else if (way===51) {
        animateText('textId','Тихо ты', 1, ()=>buttonsGraphic('...'))
        ChangeVideo('БебраСмерть', true)
    } else if (way===52) {
        animateText('textId','Не пойму то ли бюрер, то ли брамин (Кликните для ознакомления)', 1, ()=>buttonsGraphic('...'))
    } else if (way===53) {
        ChangeVideo('Гл5б')
        setTimeout(atm = () => {
            shortSound('ТрескБашки.mp3')
        }, 1000)
        setTimeout(atm = () => {
            shortSound('Тень2Глеб.ogg')
        }, 2000)
        setTimeout(atm = () => {
            gameWay(++chooseWay)
        }, 3000)
        animateText('textId','ЧЕГО БЛЯТЬ???', 1, ()=>buttonsGraphic('...'))
    } else if (way===54) {
        videos.hidden = true
        animateText('textId','СУКА БЛЯТЬ!', 1, ()=>buttonsGraphic('...'))
        boardName=''
    } else if (way===55) {
        animateText('textId','БЕЖАТЬ СУКА, БЕЖАТЬ', 1, ()=>buttonsGraphic('...'))
    } else if (way===56) {
        animateText('textId','БЕЖАТЬ СУКА, БЕЖАТЬ', 1, ()=>buttonsGraphic('...'))
    } else if (way===57) {
        animateText('textId','падение', 1, ()=>buttonsGraphic('...'))
    } else if (way===58) {
        videos.hidden = false
        boardName='Вантуз'
        ChangeVideo('Пробакала', true)
        animateText('textId','Успокойся… Эти твари чувствуют страх и запах фикалий', 1, ()=>buttonsGraphic('Какого? Что ты тут делаешь?'))
    } else if (way===59) {
        animateText('textId','Не доверяю дилетантам', 1, ()=>buttonsGraphic('Э…'))
    } else if (way===60) {
        ChangeVideo('глебговна', true)
        animateText('textId','*Засовывает палец в говно и пробует *', 1, ()=>{})
        setTimeout(atm = () => {
            gameWay(++chooseWay)
        }, 3000)
    } else if (way===61) {
        ChangeVideo('Гл5б', true)
        animateText('textId','Кал свежий, похоже это бюрер или брамин...', 1, ()=>{})
        setTimeout(atm = () => {
            gameWay(++chooseWay)
        }, 5000)
    } else if (way===62) {
        ChangeVideo('Гл5б', true)
        animateText('textId','Да, определенно бюрер или брамин', 1, ()=>buttonsGraphic('Какой нахуй брамин, надо вернуться в лагерь?'))
    } else if (way===63) {
        animateText('textId','Ты со мной разговариваешь?', 1, ()=>buttonsGraphic('Там по лесу ходит огромная хуета, я хочу остаться живым'))
    } else if (way===64) {
        animateText('textId','Ох, расскажу тебе и историю', 1, ()=>buttonsGraphic('Какая нахуй история, выводи меня отсюда '))
    } else if (way===65) {
        animateText('textId','Так почему ты здесь?', 1, ()=>buttonsGraphic('Я искал... как его Маойра Краковяк...'))
    } else if (way===66) {
        animateText('textId','...', 1, ()=>buttonsGraphic('Че с тобой?'))
    } else if (way===67) {
        animateText('textId','Это имя... оно...', 1, ()=>buttonsGraphic('Что, блять, с ним?'))
    } else if (way===68) {
        animateText('textId','Прости друг', 1, ()=>buttonsGraphic('С хуя ли?'))
    } else if (way===69) {
        animateText('textId','шприц', 1, ()=>buttonsGraphic('С хуя ли?'))
    } else if (way===70) {
        animateText('textId','Ах ты сук…', 1, ()=>buttonsGraphic('С хуя ли?'))
        bgImage.backgroundImage = 'url("./img/Пометка2.png")'
    } else if (way===71) {
        pom2.play()
        videos.hidden = true
        boardName = ''
        animateText('textId', 'Пометка из местной газеты', 1, () => buttonsGraphic('...'))
    } }
    // } else if (way===72) {
    //     animateText('textId','4 часа спустя', 1, ()=>buttonsGraphic('...'))
    // } else if (way===73) {
    //     videos.hidden = false
    //     animateText('textId','Где я?', 1, ()=>buttonsGraphic('Где я?'))
    // } else if (way===74) {
    //     animateText('textId','Проснитесь и пойте мистер Сидорович', 1, ()=>buttonsGraphic('Кто нахуй?'))
    // } else if (way===75) {
    //     animateText('textId','Успокойся далбоеб, это я — вантуз', 1, ()=>buttonsGraphic('У меня похоже галюны начались после твоего укола сука'))
    // } else if (way===76) {
    //     animateText('textId','Не-не-не, похоже на пси излучение', 1, ()=>buttonsGraphic('Да какое блять пси… ладно похуй, где я? верни меня назад в лагерь'))
    // } else if (way===77) {
    //     animateText('textId','Поздно уже дружок заднюю давать, я перенес тебя в бар 100 БАСТУРМЕН!', 1, ()=>buttonsGraphic('Не может быть. Я не верю'))
    // } else if (way===78) {
    //     animateText('textId','Сам посмотри!', 1, ()=>buttonsGraphic('Не может быть. Я не верю'))
    // } }


//что будет происходить при нажатии на кнопку выбора 1
btn1.onclick = function() {
    gameWay(++chooseWay)
    shortSound('click3.mp3')
    btn1.hidden = true
    btn2.hidden = true
    btn3.hidden = true

}// обычный if и else который будет прибавлять путь

    // if (chooseWay === 0) {
    //     // щас chooseWay === 0 выполнится при нажатии этот блок кода
    //     // можно например поменять текст и спрятать ненужные пока кнопки
    //     btn1.textContent = 'говно' // поменял текст первой кнопки
    //
    //     btn2.hidden = true // спрятал 2 других
    //     btn3.hidden = true
    //
    //     bgImage.backgroundImage = "url('./img/test.png')" // поменял фон
    //
    //     textGame.textContent = 'Текст'// поменял текст(порядок не важен выполняется все в долю милисекунды)
    //
    //
    //
    //     chooseWay++ // прибавил путь чтобы следущее нажатие на кнопку проиграла другой блок кода

    // } else if (chooseWay === 1) {
    //     // теперь chooseWay === 1 выполняется этот блок кода
    //     puk.pause() // остановка звука
    //
    //     textGame.textContent = '!'
    //     btn1.textContent = '?'
    //
    // }


//сделать несколько путей будет слишком тяжело для начала,
// сделай одну дорожку без выбора, а потом попробуй проработать ответвления