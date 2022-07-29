let quizMain = document.querySelector('.quiz__main'),
    quizBtnBack = document.querySelector('.quiz__back'),
    quizBtnNext = document.querySelector('.quiz__next'),
    quizCounter = document.querySelector('.quiz__number__page'),
    quizScaleFull = document.querySelector('.quiz__scale'),
    quizScale = document.querySelector('.quiz__scale__procent'),
    quizSubmit = document.querySelector('.quiz__submit');

const quizQuestionsArr = [{
        id: 1,
        question: 'Куда подбираете видеонаблюдение?',
        answer: [
            'Подъезд',
            'Квартира',
            'Частный дом',
            'Офис',
            'Магазин',
            'Торговый центр',
            'Склад',
            'Автомойка',
            'Гостиница',
            'Производство',
            'Другое'
        ],
        img: [
            'image/question_one/1.jpeg',
            'image/question_one/2.jpg',
            'image/question_one/3.jpg',
            'image/question_one/4.jpeg',
            'image/question_one/5.jpg',
            'image/question_one/6.jpg',
            'image/question_one/7.jpg',
            'image/question_one/8.jpg',
            'image/question_one/9.jpg',
            'image/question_one/10.jpg',
            'image/question_one/11.jpg'
        ],
        type: 'img'

    },
    {
        id: 2,
        question: 'Где нужно установить видеонаблюдение?',
        answer: [
            'Внутри помещения',
            'Внутри помещения + периметр',
            'Только периметр',
            'Другое'
        ],
        type: 'radio'
    }, {
        id: 3,
        question: 'Какой бюджет планируете выделить на видеонаблюдение?',
        answer: [
            'от 15.000₽ до 25.000₽',
            'от 25.000₽ до 35.000₽',
            'от 35.000₽ до 50.000₽',
            'от 50.000₽ до 70.000₽',
            'от 70.000₽ и выше',
        ],
        type: 'radio'

    }, {
        id: 4,
        question: 'Что для вас важно при записи видео?',
        answer: [
            'Общий план',
            'Лица',
            'Звук',
            'Номера машин',
        ],
        type: 'checkbox'
    }, {
        id: 5,
        question: 'Как будите просматривать видеонаблюдение?',
        answer: [
            'Смартфон',
            'Ноутбук',
            'Компьютер',
            'На посту охраны',
            'Телевизор',
            'Монитор',
        ],
        img: [
            'image/where-stream/1.jpg',
            'image/where-stream/2.jpg',
            'image/where-stream/3.jpg',
            'image/where-stream/4.jpg',
            'image/where-stream/5.jpg',
            'image/where-stream/6.jpg',
        ],
        type: 'img'
    }, {
        id: 6,
        question: 'Укажите желаемое количество камер (хотя бы приблизительно)',
        answer: [
            '1-2 камер',
            '3-5 камер',
            '6 и более',
            'Нужен выезд специалиста',
        ],
        type: 'radio'

    }, {
        id: 7,
        question: 'Какой нужен архив записи видеонаблюдения?',
        answer: [
            '7 дней',
            '14 дней',
            '21 день',
            'Более месяца'
        ],
        type: 'radio'

    }, {
        id: 8,
        question: 'Куда вам лучше отправить расчет?',
        answer: [
            'Telegram',
            'WhatsApp',
            'Viber',
        ],
        type: 'checkbox'

    }
]

const btnStart = document.getElementById('qiuz-start');
const quizPrewie = document.querySelector('.quiz__prewie');
const quizQuestions = document.querySelector('.quiz-questions');
const formQuiz = document.querySelector('.quiz__content__main');
const btnQuizNext = document.querySelector('.quiz-btn_next');
const btnQuizBack = document.querySelector('.quiz-btn_back');


// let quizIteration = 0;
// let quizInputIdCounter = 1;
// let quizLabelIdCounter = 1;
// let counterQuestions = 1;
// let counterAnswers = 1;
// let counterIF = 0;


// btnStart.addEventListener('click', (e) => {
//     quizPrewie.classList.add('quiz-dispaly-none');

//     btnQuizNext.classList.remove('quiz-dispaly-none');
//     btnQuizBack.classList.remove('quiz-dispaly-none');

//     const renderQuestion = (index) => {

//         quizQuestionsArr[index].img.length

//         btnQuizNext.value = 0;
//         if (btnQuizNext.value == 0) {
//             btnQuizBack.setAttribute('disabled', true);
//         } else if (btnQuizNext.value > 0) {
//             btnQuizBack.removeAttribute('disabled')
//         }
//         const renderAnswer = () =>
//             quizQuestionsArr[index].answer.map((item) => `
//                 <div class="quiz__content__one">
//                     <input type="radio" name="${quizQuestionsArr[0].question}" value="${item}" id="quiz_where_${quizInputIdCounter++}" class="input__quiz__flex">
//                     <label class="quiz__label quiz__label_${quizQuestionsArr[index].type}" for="quiz_where_${quizLabelIdCounter++}">
//                         <div class="quiz__content__image"><img src="${quizQuestionsArr[index].img[quizIteration++]}" alt="image" class='image__answers'></div>
//                         <div class="quiz__content__subtext">${item}</div>
//                     </label>
//                 </div>         
//             `).join('')


//         formQuiz.innerHTML = `
//         <div class="quiz-questions">
//             <div class="quiz__prev">
//             <div class="quiz__title">${quizQuestionsArr[0].question}</div>
//             <div class="quiz__number__page">${counterQuestions}/${quizQuestionsArr.length}</div>
//         </div>
//         <div class="quiz__scale">
//             <div class="quiz__scale__procent" style='width: ${(counterQuestions * 100) / quizQuestionsArr.length}%'>
//             </div>
//         </div>
//         <div class="quiz__content__all">
//             <div class="quiz__show">
//                 <div class="quiz__content quiz__main">
//                     <div class="quiz__select__flex">${renderAnswer()}</div>
//                 </div>
//             </div>   
//         </div>

//         </div>`

//         nextQuestions()

//     }
//     renderQuestion(0)
// })

// function nextQuestions() {

//     btnQuizNext.addEventListener('click', (e) => {
//         let quizQuestionsCounter = 1 + e.target.value++;

//         if (btnQuizNext.value > 0) {
//             btnQuizBack.removeAttribute('disabled');
//         }

//         formQuiz.innerHTML = `
//         <div class="quiz-questions">
//             <div class="quiz__prev">
//                 <div class="quiz__title">${quizQuestionsArr[counterQuestions].question}</div>
//                 <div class="quiz__number__page">${++counterQuestions}/${quizQuestionsArr.length}</div>
//             </div>
//             <div class="quiz__scale">
//                 <div class="quiz__scale__procent" style='width: ${(counterQuestions * 100) / quizQuestionsArr.length}%'></div>
//         </div>
//         <div class="quiz__content__all">
//                 <div class="quiz__show">
//                     <div class="quiz__content quiz__main">
//                         <div class="quiz__select__flex quiz-select__${quizQuestionsArr[quizQuestionsCounter].type}">${renderAnswerNext()}</div>
//                     </div>
//                 </div>   
//             </div>
//         </div>
//             `

//         function renderAnswerNext() {
//             counterIF++;
//             quizQuestionsCounter;

//             if (quizQuestionsArr[counterIF].type == 'img') {
//                 let quizInputIdCounter = 1;
//                 let quizLabelIdCounter = 1;

//                 let quizImgCounter = 0;

//                 return quizQuestionsArr[counterAnswers++].answer.map((item) => `                        
//                         <div class="quiz__content__one quiz-class__${quizQuestionsArr[quizQuestionsCounter].type}">
//                                 <input type="radio" name="${quizQuestionsArr[quizQuestionsCounter].question}" value="${item}" id="quiz_where_${quizInputIdCounter++}" class="input__quiz__flex quiz_checker_${quizQuestionsCounter}">
//                              <label class="quiz__label quiz__label_${quizQuestionsArr[quizQuestionsCounter].type}" for="quiz_where_${quizLabelIdCounter++}">
//                                 <div class="quiz__content__image"><img src="${quizQuestionsArr[quizQuestionsCounter].img[quizImgCounter++]}" alt="image" class='image__answers'></div>
//                                 <div class="quiz__content__subtext">${item}</div>
//                             </label>
//                         </div>
//                      `).join('')
//             } else if (quizQuestionsArr[counterIF].type == 'radio') {
//                 let quizInputIdCounter = 1;
//                 let quizLabelIdCounter = 1;

//                 return quizQuestionsArr[counterAnswers++].answer.map((item) => `
//                     <div class="quiz__content__one quiz-class__${quizQuestionsArr[quizQuestionsCounter].type}">
//                             <input type="radio" name="${quizQuestionsArr[quizQuestionsCounter].question}" value="${item}" id="quiz_where_${quizInputIdCounter++}" class="input__quiz__flex">
//                          <label class="quiz__label quiz__label_${quizQuestionsArr[quizQuestionsCounter].type}" for="quiz_where_${quizLabelIdCounter++}">
//                             <div class="quiz__content__subtext">${item}</div>
//                         </label>
//                     </div>
//                  `).join('')
//             } else if (quizQuestionsArr[counterIF].type == 'checkbox') {
//                 let quizInputIdCounter = 1;
//                 let quizLabelIdCounter = 1;

//                 return quizQuestionsArr[counterAnswers++].answer.map((item) => `
//                     <div class="quiz__content__one quiz-class__${quizQuestionsArr[quizQuestionsCounter].type}">
//                             <input type="checkbox" name="${quizQuestionsArr[quizQuestionsCounter].question}" value="${item}" id="quiz_where_${quizInputIdCounter++}" class="input__quiz__flex">
//                          <label class="quiz__label quiz__label_${quizQuestionsArr[quizQuestionsCounter].type}" for="quiz_where_${quizLabelIdCounter++}">
//                             <div class="quiz__content__subtext">${item}</div>
//                         </label>
//                     </div>
//                  `).join('')
//             }
//         }
//     })
// }

console.log(quizQuestionsArr
    )