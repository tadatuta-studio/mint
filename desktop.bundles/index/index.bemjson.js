({
    block: 'page',
    title: 'Landing page — Mint: интеллектуальный маркетинг',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: 'Landing page и контекстная реклама для вашего бизнеса с гарантией прибыли' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'meta', attrs: { property: 'og:title', content: 'Landing page — Mint: интеллектуальный маркетинг' } },
        { elem: 'meta', attrs: { property: 'og:description', content: 'Landing page и контекстная реклама для вашего бизнеса с гарантией прибыли' } },
        { elem: 'meta', attrs: { property: 'og:image', content: '../../desktop.blocks/logo/logo.png' } },
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie8.css', ie: 'IE 8' }
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
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: '#how',
                                content: 'Как мы увеличиваем продажи'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: '#about',
                                content: 'О нас'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: '#result',
                                content: 'Результаты'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: '#why-we',
                                content: 'Почему мы'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: '#services',
                                content: 'Услуги'
                            }
                        }
                    ]
                },
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
                                {
                                    elem: 'item',
                                    elemMods: { state: 'active' },
                                    // content: {
                                    //     elem: 'img',
                                    //     url: 'i/first-screen-slider_one.png'
                                    //     url: 'i/first-screen-slider.svg'
                                    // }
                                    content: [
                                        {
                                            elem: 'leftSide',
                                            content: [
                                                {
                                                    tag: 'span',
                                                    content: 'Просто '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'делайте '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'хорошую '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'рекламу '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'и деньги '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'придут.'
                                                },
                                                {
                                                    elem: 'autor',
                                                    content: 'Лео Бернетт'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'center',
                                            content:  [
                                                {
                                                    elem: 'centerInner',
                                                    content: [
                                                        {
                                                            tag: 'span',
                                                            content: 'Если говорят '
                                                        },
                                                        {
                                                            tag: 'span',
                                                            content: 'о рекламе, '
                                                        },
                                                        {
                                                            tag: 'span',
                                                            content: 'это плохая '
                                                        },
                                                        {
                                                            tag: 'span',
                                                            content: 'реклама. '
                                                        },
                                                        {
                                                            tag: 'span',
                                                            content: 'Если говорят '
                                                        },
                                                        {
                                                            tag: 'span',
                                                            content: 'о товаре, '
                                                        },
                                                        {
                                                            tag: 'span',
                                                            content: 'это хорошая '
                                                        },
                                                        {
                                                            tag: 'span',
                                                            content: 'реклама.'
                                                        }, 
                                                        {
                                                            elem: 'autor',
                                                            content: 'Девид Огилви'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'rightSide',
                                            content: [
                                                {
                                                    tag: 'span',
                                                    content: 'Без рекламы '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'произойдет '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'самое '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'ужасное — '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'не произойдет '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'ничего.'
                                                },
                                                {
                                                    elem: 'autor',
                                                    content: 'Том Бискарди'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'leftSide',
                                            content: [
                                                {
                                                    tag: 'span',
                                                    content: 'Если говорят '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'о рекламе, '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'это плохая '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'реклама. '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'Если говорят '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'о товаре, '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'это хорошая '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'реклама.'
                                                }, 
                                                {
                                                    elem: 'autor',
                                                    content: 'Девид Огилви'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'center',
                                            content:  [
                                                {
                                                    elem: 'centerInner',
                                                    content: [
                                                        {
                                                            tag: 'span',
                                                            content: 'Без рекламы '
                                                        },
                                                        {
                                                            tag: 'span',
                                                            content: 'произойдет '
                                                        },
                                                        {
                                                            tag: 'span',
                                                            content: 'самое '
                                                        },
                                                        {
                                                            tag: 'span',
                                                            content: 'ужасное — '
                                                        },
                                                        {
                                                            tag: 'span',
                                                            content: 'не произойдет '
                                                        },
                                                        {
                                                            tag: 'span',
                                                            content: 'ничего.'
                                                        },
                                                        {
                                                            elem: 'autor',
                                                            content: 'Том Бискарди'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'rightSide',
                                            content: [
                                                {
                                                    tag: 'span',
                                                    content: 'Просто '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'делайте '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'хорошую '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'рекламу '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'и деньги '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'придут.'
                                                },
                                                {
                                                    elem: 'autor',
                                                    content: 'Лео Бернетт'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'leftSide',
                                            content: [
                                                {
                                                    tag: 'span',
                                                    content: 'Без рекламы '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'произойдет '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'самое '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'ужасное — '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'не произойдет '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'ничего.'
                                                },
                                                {
                                                    elem: 'autor',
                                                    content: 'Том Бискарди'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'center',
                                            content:  [
                                                {
                                                    elem: 'centerInner',
                                                    content: [
                                                        {
                                                            tag: 'span',
                                                            content: 'Просто '
                                                        },
                                                        {
                                                            tag: 'span',
                                                            content: 'делайте '
                                                        },
                                                        {
                                                            tag: 'span',
                                                            content: 'хорошую '
                                                        },
                                                        {
                                                            tag: 'span',
                                                            content: 'рекламу '
                                                        },
                                                        {
                                                            tag: 'span',
                                                            content: 'и деньги '
                                                        },
                                                        {
                                                            tag: 'span',
                                                            content: 'придут.'
                                                        },
                                                        {
                                                            elem: 'autor',
                                                            content: 'Лео Бернетт'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'rightSide',
                                            content: [
                                                {
                                                    tag: 'span',
                                                    content: 'Если говорят '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'о рекламе, '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'это плохая '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'реклама. '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'Если говорят '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'о товаре, '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'это хорошая '
                                                },
                                                {
                                                    tag: 'span',
                                                    content: 'реклама.'
                                                }, 
                                                {
                                                    elem: 'autor',
                                                    content: 'Девид Огилви'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
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
                            content: 'Мы реально увеличиваем ваши продажи'
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
                        },
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
            mix: {
                    block: 'clearfix'
                },
            content: [
                {
                    elem: 'inner',
                    mix: { block: 'clearfix' },
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
                                    mix: { block: 'i-bem'},
                                    js: { time: (new Date('2014, 9 ,8').getTime())},
                                    content: [
                                        {
                                            elem: 'item',
                                            mix:{ block: 'timer', elem: 'days'}
                                        },
                                        ' : ',
                                        {
                                            elem: 'item',
                                            mix:{ block: 'timer', elem: 'hours'}
                                        },
                                        ' : ',
                                        {
                                            elem: 'item',
                                            mix:{ block: 'timer', elem: 'minutes'}
                                        }
                                    ]
                                },
                                {
                                    block: 'description',
                                    mods: { size: 'small', color: 'orange'},
                                    content: [
                                        'Предложение действует до ',
                                        {
                                            elem: 'item',
                                            mix: { block: 'description', elem: 'day'},
                                            content: '01'
                                        },
                                        '. ',
                                        {
                                            elem: 'item',
                                            mix: { block: 'description', elem: 'month'},
                                            content: '09'
                                        },
                                        '. ',
                                        {
                                            elem: 'item',
                                            mix: { block: 'description', elem: 'year'},
                                            content: '2014'
                                        }
                                    ]
                                }
                            ]
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
                    mix: {
                            block: 'clearfix'
                        },
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
                                    content: 'Тут некий текст'
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
                                    content: 'Анализируем рынок ваших прямых конкурентов, создаем общую стратегию проекта и формируем торговое предложение'
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
                                    content: 'Разрабатываем и утверждаем макет, создаем уникальный дизайн вашей посадочной страницы'
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
                                    content: 'Реклама'
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
                                    content: 'Запускаем landing page, анализируем результаты рекламной кампании, осуществляем оперативную поддержку.'
                                }
                            ]
                        },
                        {
                            block: 'stage',
                            mods: { type: 'order' },
                            content: [
                                {
                                    block: 'button',
                                    mods: { size: 'middle', color: 'green'},
                                    // mix: {block: 'stages', elem: 'get-brief'},
                                    content: 'Получить бриф'
                                }
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
                                            alt: 'я то что будет если не подгрузится картинка',
                                            title: 'я то что покажется по наведению мыши'
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
                                            alt: 'я то что будет если не подгрузится картинка',
                                            title: 'я то что покажется по наведению мыши'
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
                                            alt: 'я то что будет если не подгрузится картинка',
                                            title: 'я то что покажется по наведению мыши'
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
                                            alt: 'я то что будет если не подгрузится картинка',
                                            title: 'я то что покажется по наведению мыши'
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
                                            alt: 'я то что будет если не подгрузится картинка',
                                            title: 'я то что покажется по наведению мыши'
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
                            elem: 'item',
                            elemMods: { type: 'warranty' },
                            content: 'Гарантируем рост ваших продаж. Или вернем деньги'
                        },
                        {
                            elem: 'item',
                            elemMods: { type: 'geography' },
                            content: 'Работаем по всей России'
                        },
                        {
                            elem: 'item',
                            elemMods: { type: 'experience' },
                            content: 'Опыт работы — 8 лет'
                        },
                        {
                            elem: 'item',
                            elemMods: { type: 'projects' },
                            content: '50+ проектов'
                        },
                        {
                            elem: 'item',
                            elemMods: { type: 'team' },
                            content: 'Команда профессионалов'
                        },
                        {
                            elem: 'item',
                            elemMods: { type: 'approach' },
                            content: 'Индивидуальный подход. Весь спектр услуг'
                        }
                    ]
                }
            ]
        },
        {
            block: 'price',
            content: [
                {
                    elem: 'inner',
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
    ]
})
