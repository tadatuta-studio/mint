(function() {

var date = new Date('2014, 12, 1'),
    time = date.getTime(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear();

day < 10 && (day = '0' + day);
month < 10 && (month = '0' + month);

var dateStr = [day, month, year].join('.');

function getQuote(quoteObj) {
    return [
        quoteObj.text.map(function(item) {
            return {
                elem: 'text',
                content: item
            };
        }),
        {
            elem: 'author',
            content: quoteObj.author
        }
    ];
}

var quotes = [
    {
        text: [
            'Просто',
            'делайте',
            'хорошую',
            'рекламу',
            'и деньги',
            'придут.'
        ],
        author: 'Лео Бернетт'
    },
    {
        text: [
            'Если говорят',
            'о рекламе,',
            'это плохая',
            'реклама.',
            'Если говорят',
            'о товаре,',
            'это хорошая',
            'реклама.'
        ],
        author: 'Девид Огилви'
    },
    {
        text: [
            'Без рекламы',
            'произойдет',
            'самое',
            'ужасное —',
            'не произойдет',
            'ничего.'
        ],
        author: 'Том Бискарди'
    }
].map(getQuote);

return {
    block: 'page',
    title: 'Landing page — Mint: интеллектуальный маркетинг',
    favicon: 'favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: 'Landing page и контекстная реклама для вашего бизнеса с гарантией прибыли' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'meta', attrs: { property: 'og:title', content: 'Landing page — Mint: интеллектуальный маркетинг' } },
        { elem: 'meta', attrs: { property: 'og:description', content: 'Landing page и контекстная реклама для вашего бизнеса с гарантией прибыли' } },
        { elem: 'meta', attrs: { property: 'og:image', content: '/i/JXZn-2ztyioi1LF9OOJ7NWv2LiA.png' } },
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.css', ie: 'gte IE 9' },
        { elem: 'css', url: '_index.ie8.css', ie: 'lte IE 8' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }],
    mods: { theme: 'normal' },
    content: [
        {
            block: 'header',
            content: [
                {
                    block: 'logo',
                    content: [
                        {
                            elem: 'title',
                            content: 'Mint'
                        },
                        {
                            elem: 'slogan',
                            content: 'интеллектуальный маркетинг'
                        }
                    ]
                },
                {
                    block: 'call-us',
                    content: [
                        {
                            elem: 'phone',
                            content: '+7 (495) 664-21-15'
                        },
                        {
                            elem: 'schedule',
                            content: 'Круглосуточно, без выходных'
                        },
                        {
                            block: 'button',
                            url: '#order',
                            mods: { size: 'small', color: 'orange', type: 'link'},
                            mix: { block: 'call-us', elem: 'button' },
                            content: 'Заказать звонок'
                        }
                    ]
                },
                {
                    block: 'nav',
                    content: [
                        {
                            url: '#how',
                            content: 'Как мы увеличиваем продажи'
                        },
                        {
                            url: '#about',
                            content: 'О нас'
                        },
                        {
                            url: '#result',
                            content: 'Результаты'
                        },
                        {
                            url: '#why-we',
                            content: 'Почему мы'
                        },
                        {
                            url: '#services',
                            content: 'Услуги'
                        }
                    ].map(function(item) {
                        return {
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: item.url,
                                content: item.content
                            }
                        };
                    })
                }
            ]
        },
        {
            block: 'first-screen',
            content: [
                {
                    block: 'carousel',
                    mix: { block: 'first-screen', elem: 'carousel' },
                    mods: { animate: 'yes' },
                    content: [
                        {
                            elem: 'inner',
                            content: [
                                [0, 1, 2], [1, 2, 0], [2, 0, 1]
                            ].map(function(item, idx) {
                                return {
                                    elem: 'item',
                                    elemMods: idx ? undefined : { state: 'active' },
                                    content: [
                                        {
                                            elem: 'left-side',
                                            content: quotes[item[0]]
                                        },
                                        {
                                            elem: 'center',
                                            content:  {
                                                elem: 'center-inner',
                                                content: quotes[item[1]]
                                            }
                                        },
                                        {
                                            elem: 'right-side',
                                            content: quotes[item[2]]
                                        }
                                    ]
                                };
                            })
                        },
                        {
                            elem: 'paginator'
                        }
                    ]
                },
                {
                    block: 'sidebar',
                    content: [
                        {
                            block: 'link',
                            attrs: { name: 'order' }
                        },
                        {
                            block: 'slogan',
                            mods: { level: 'one' },
                            content: [
                                {
                                    block: 'link',
                                    attrs: { name: 'about' }
                                },
                                'Landing page и контекстаня реклама для вашего бизнеса с гарантией прибыли'
                            ]
                        },
                        {
                            block: 'slogan',
                            mods: { level: 'two' },
                            content: 'Мы реально увеличим ваши продажи'
                        },
                        {
                            block : 'form',
                            js : { name : 'feedback', model : 'sendmailForm-consult' },
                            mods : { saveable : true, type : 'sendmail' },
                            content : [
                                {
                                    elem : 'inner',
                                    content : [
                                        {
                                            block : 'paranja',
                                            mods : { local : true },
                                            mix : { block : 'form', elem : 'paranja' },
                                            content : {
                                                block : 'spin',
                                                mods : { visible : true, size : 'xl', theme : 'islands' }
                                            }
                                        },
                                        {
                                            tag : 'input',
                                            attrs : {
                                                name : 'subject',
                                                type : 'hidden',
                                                value : 'Mint заказ консультации'
                                            }
                                        },
                                        {
                                            block : 'input',
                                            name : 'name',
                                            mods : { theme : 'islands', size : 'm', 'has-clear' : true },
                                            placeholder : 'Ваше имя',
                                            mix : [
                                                {
                                                    block : 'form',
                                                    elem : 'control',
                                                    elemMods : {
                                                        type : 'input'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'input',
                                            name : 'phone',
                                            mods : { theme : 'islands', size : 'm', 'has-clear' : true },
                                            placeholder : 'Номер телефона',
                                            mix : [
                                                {
                                                    block : 'form',
                                                    elem : 'control',
                                                    elemMods : {
                                                        type : 'input'
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block : 'form',
                                    elem : 'submit-status'
                                },
                                {
                                    block : 'button',
                                    type : 'submit',
                                    mods : {
                                        size : 'm',
                                        theme : 'islands',
                                        type : 'submit'
                                    },
                                    mix : [{
                                        block : 'form',
                                        elem : 'control',
                                        elemMods : { type : 'submit' }
                                    }],
                                    icon : [{
                                        block : 'spin-icon',
                                        content : {
                                            block : 'icon',
                                            content : {
                                                block : 'spin',
                                                mods : {
                                                    visible : true,
                                                    size : 'xs',
                                                    theme : 'islands'
                                                }
                                            }
                                        }
                                    }],
                                    text : 'Заказать консультацию'
                                }
                            ]
                        },
                        {
                            block: 'form',
                            content: [
                                {
                                    block: 'input',
                                    name: 'name',
                                    placeholder: 'Имя'
                                },
                                {
                                    block: 'input',
                                    name: 'phone',
                                    placeholder: 'Телефон'
                                },
                                {
                                    block: 'button',
                                    mods: { size: 'big', color: 'green'},
                                    content: 'Заказать консультацию'
                                }
                            ]
                        }
                        // {
                        //     tag: 'script',
                        //     attrs: { src: 'http://form.jotformeu.com/jsform/42164141627348' }
                        // }
                    ]
                }
            ]
        },
        {
            block: 'action',
            content: [
                {
                    elem: 'text',
                    content: [
                        {
                            tag: 'p',
                            content: [
                                'Исследование вашего товара и услуги.<br>',
                                'Настройка рекламной кампании.<br>',
                                'Создание посадочной страницы'
                            ]
                        },
                        {
                            tag: 'p',
                            content: [
                                'Всего от ',
                                {
                                    elem: 'old', // TODO: rename
                                    content: '50 000'
                                },
                                '28 000 рублей!'
                            ]
                        }
                    ]
                },
                {
                    block: 'duration',
                    content: [
                        {
                            block: 'timer',
                            js: { time: time },
                            content: ['days', 'hours', 'minutes'].map(function(item, idx) {
                                return [
                                    {
                                        elem: 'item',
                                        mix: { elem: item }
                                    },
                                    idx < 2 ? ' : ' : ''
                                ];
                            })
                        },
                        {
                            block: 'description',
                            mods: { size: 'small', color: 'orange' },
                            content: 'Предложение действует до ' + dateStr
                        }
                    ]
                }
            ]
        },
        {
            block: 'stages',
            content: [
                {
                    block: 'heading',
                    mods: { level: '3', color: 'green' },
                    content: [
                        {
                            block: 'link',
                            attrs: { name: 'how' }
                        },
                        'Как мы увеличиваем продажи'
                    ]
                },
                {
                    elem: 'inner',
                    mix: { block: 'clearfix' },
                    content: [
                        {
                            block: 'stage',
                            mods: { type: 'brief' },
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Бриф'
                                },
                                {
                                    elem: 'description',
                                    content: 'Вы заполняете бриф, в котором описываете ваши цели'
                                }
                            ]
                        },
                        {
                            block: 'stage',
                            mods: { type: 'analysis' },
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Анализ'
                                },
                                {
                                    elem: 'description',
                                    content: 'Мы анализируем ваших прямых конкурентов, создаем общую стратегию проекта и формулируем предложение'
                                }
                            ]
                        },
                        {
                            block: 'stage',
                            mods: { type: 'copywriting' },
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Копирайтинг'
                                },
                                {
                                    elem: 'description',
                                    content: 'На основе анализа пишем продающие тексты для внедрения их содержания в систему продаж'
                                }
                            ]
                        },
                        {
                            block: 'stage',
                            mods: { type: 'design' },
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Дизайн'
                                },
                                {
                                    elem: 'description',
                                    content: 'Разрабатываем и вместе с вами утверждаем уникальный дизай вашей посадочной страницы'
                                }
                            ]
                        },
                        {
                            block: 'stage',
                            mods: { type: 'ads' },
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Реклама'
                                },
                                {
                                    elem: 'description',
                                    content: 'Готовим рекламные материалы, настраиваем контекстную рекламу'
                                }
                            ]
                        },
                        {
                            block: 'stage',
                            mods: { type: 'analytics' },
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Аналитика'
                                },
                                {
                                    elem: 'description',
                                    content: 'Устанавливаем средства статистики и аналитики, фиксирование целевых действий пользователя'
                                }
                            ]
                        },
                        {
                            block: 'stage',
                            mods: { type: 'start' },
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Запуск'
                                },
                                {
                                    elem: 'description',
                                    content: 'Запускаем ваш лендинг'
                                }
                            ]
                        },
                        {
                            block: 'stage',
                            mods: { type: 'order' },
                            content: [
                                {
                                    block : 'button',
                                    mods : { size : 'm', theme : 'islands', togglable : 'check' },
                                    mix : [{
                                        block : 'action-button',
                                        js : {
                                            id : 'action-button_action_sendmail-1',
                                            subject : 'Заказ брифа'
                                        },
                                        mods : { action : 'sendmail' }
                                    }],
                                    icon : {
                                        block : 'spin-icon',
                                        content : {
                                            block : 'icon',
                                            content : {
                                                block : 'spin',
                                                mods : {
                                                    visible : true,
                                                    size : 'xs',
                                                    theme : 'islands'
                                                }
                                            }
                                        }
                                    },
                                    text : 'Получить бриф'
                                }/*,
                                {
                                    block: 'button',
                                    mods: { size: 'middle', color: 'green'},
                                    // mix: {block: 'stages', elem: 'get-brief'},
                                    content: 'Получить бриф'
                                }*/
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'portfolio',
            mix: { block: 'clearfix' },
            content: [
                {
                    block: 'heading',
                    mods: { level: '3', color: 'orange' },
                    content: [
                        {
                            block: 'link',
                            attrs: { name: 'result' }
                        },
                        'Результат нашей работы'
                    ]
                },
                {
                    block: 'carousel',
                    mods: { animate: 'yes' },
                    content: [
                        {
                            elem: 'inner',
                            content: [
                                {
                                    elem: 'item',
                                    mix: { block: 'clearfix' },
                                    elemMods: { state: 'active' },
                                    content: [
                                        {
                                            elem: 'img',
                                            url: 'i/slide_image_one.png',
                                            alt: '',
                                            title: ''
                                        },
                                        {
                                            elem: 'summary',
                                            content: [
                                                {
                                                    elem: 'description',
                                                    content: 'Решая задачу по созданию и увеличению продаж для этого агенства конверсия была увеличена до 20%, а продажи выросли на 150%. Бюджет на рекламу остался прежний.'
                                                },
                                                {
                                                    elem: 'price',
                                                    content: 'От 28 000 рублей'
                                                },
                                                {
                                                    elem: 'result',
                                                    content: 'Проект окупился через 10 дней после запуска'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'img',
                                            url: 'i/slide_image_two.png',
                                            alt: '',
                                            title: ''
                                        },
                                        {
                                            elem: 'summary',
                                            content: [
                                                {
                                                    elem: 'description',
                                                    content: 'Решая задачу по созданию и увеличению продаж для этого агенства конверсия была увеличена до 20%, а продажи выросли на 150%. Бюджет на рекламу остался прежний.'
                                                },
                                                {
                                                    elem: 'price',
                                                    content: 'От 28 000 рублей'
                                                },
                                                {
                                                    elem: 'result',
                                                    content: 'Проект окупился через 10 дней после запуска'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'img',
                                            url: 'i/slide_image_three.png',
                                            alt: '',
                                            title: ''
                                        },
                                        {
                                            elem: 'summary',
                                            content: [
                                                {
                                                    elem: 'description',
                                                    content: 'Решая задачу по созданию и увеличению продаж для этого агенства конверсия была увеличена до 20%, а продажи выросли на 150%. Бюджет на рекламу остался прежний.'
                                                },
                                                {
                                                    elem: 'price',
                                                    content: 'От 28 000 рублей'
                                                },
                                                {
                                                    elem: 'result',
                                                    content: 'Проект окупился через 10 дней после запуска'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'img',
                                            url: 'i/slide_image_four.png',
                                            alt: '',
                                            title: ''
                                        },
                                        {
                                            elem: 'summary',
                                            content: [
                                                {
                                                    elem: 'description',
                                                    content: 'Решая задачу по созданию и увеличению продаж для этого агенства конверсия была увеличена до 20%, а продажи выросли на 150%. Бюджет на рекламу остался прежний.'
                                                },
                                                {
                                                    elem: 'price',
                                                    content: 'От 28 000 рублей'
                                                },
                                                {
                                                    elem: 'result',
                                                    content: 'Проект окупился через 10 дней после запуска'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'img',
                                            url: 'i/slide_image_five.png',
                                            alt: '',
                                            title: ''
                                        },
                                        {
                                            elem: 'summary',
                                            content: [
                                                {
                                                    elem: 'description',
                                                    content: 'Решая задачу по созданию и увеличению продаж для этого агенства конверсия была увеличена до 20%, а продажи выросли на 150%. Бюджет на рекламу остался прежний.'
                                                },
                                                {
                                                    elem: 'price',
                                                    content: 'От 28 000 рублей'
                                                },
                                                {
                                                    elem: 'result',
                                                    content: 'Проект окупился через 10 дней после запуска'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'control',
                            elemMods: { type: 'left', theme: 'mini' }
                        },
                        {
                            elem: 'control',
                            elemMods: { type: 'right', theme: 'mini' }
                        }
                    ]
                }
            ]
        },
        {
            block: 'features',
            content: [
                {
                    block: 'heading',
                    mods: { level: '4', color: 'green' },
                    content: [
                        {
                            block: 'link',
                            attrs: { name: 'why-we' }
                        },
                        'Наша студия — лучший выбор для увеличения ваших продаж'
                    ]
                },
                {
                    elem: 'inner',
                    content: [
                        {
                            elemMods: { type: 'warranty' },
                            content: 'Гарантируем рост ваших продаж. Или вернем деньги'
                        },
                        {
                            elemMods: { type: 'geography' },
                            content: 'Работаем по всей России'
                        },
                        {
                            elemMods: { type: 'experience' },
                            content: 'Опыт работы — 8 лет'
                        },
                        {
                            elemMods: { type: 'projects' },
                            content: '50+ проектов'
                        },
                        {
                            elemMods: { type: 'team' },
                            content: 'Команда профессионалов'
                        },
                        {
                            elemMods: { type: 'approach' },
                            content: 'Индивидуальный подход. Весь спектр услуг'
                        }
                    ].map(function(item) {
                        item.elem = 'item';
                        return item;
                    })
                }
            ]
        },
        {
            block: 'price',
            content: [
                {
                    elem: 'title',
                    content: [
                        {
                            block: 'link',
                            attrs: { name: 'services' }
                        },
                        'Профессиональные лендинги<br>',
                        'от ',
                        {
                           elem: 'old', // TODO: rename
                           content: '50 000'
                        },
                        '28 000 рублей'
                    ]
                }
            ]
        },
        {
            block: 'contacts',
            content: [
                {
                    block: 'order',
                    content: [
                        {
                            elem: 'description',
                            content: 'Оставьте заявку на бесплатный маркетинговый анализ вашего рынка. Наш менеджер свяжется с вами в течении рабочего дня.'
                        },
                        {
                            elem: 'or',
                            content: 'Или позвоните нам'
                        },
                        {
                            block: 'description',
                            mods: { size: 'medium', color: 'pink'},
                            content: '+7 (495) 664-21-15'
                        }
                    ]
                },
                {
                    block: 'form',
                    mix: { block: 'contacts', elem: 'form' },
                    content: [
                        {
                            block: 'input',
                            name: 'name',
                            mods: { styled: 'yes' },
                            placeholder: 'Имя'
                        },
                        {
                            block: 'input',
                            name: 'phone',
                            mods: { styled: 'yes' },
                            placeholder: 'Телефон'
                        },
                        {
                            elem: 'hint',
                            content: 'Гарантируем, что ваши данные не будут переданы третьим лицам'
                        },
                        {
                            block: 'button',
                            mods: { size: 'big', color: 'pink'},
                            content: 'Бесплатная консультация'
                        }
                        // {
                        //     tag: 'script',
                        //     attrs: { src: 'http://form.jotformeu.com/jsform/42181924476358' }
                        // }
                    ]
                }
            ]
        }
        // ,
        // { elem : 'js', content: "function createCORSRequest(method, url) {    var xhr = new XMLHttpRequest();    if ('withCredentials' in xhr) {        xhr.open(method, url, true);    } else if (typeof XDomainRequest != 'undefined') {        xhr = new XDomainRequest();        xhr.open(method, url);    } else {        xhr = null;    }    return xhr;}var xhr = createCORSRequest('POST', 'http://smtp.mandrillapp.com/api/1.0/messages/send.json');if (!xhr) {    throw new Error('CORS not supported');}xhr.send(JSON.stringify({    message : {        to : [{ email : 'abc.ua@yandex.ru' }],        from_email : 'abc.ua@yandex.ru',        from_name : 'test',        subject : 'test subkect',        html : 'bla vla'    },    key : '4pMSX3h0RCsa-Vo7Znce8g'}));" }
    ]
};

})();
