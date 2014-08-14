({
    block: 'page',
    title: 'Landing page — Mint: интеллектуальный маркетинг',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: 'Landing page и контекстная реклама для вашего бизнеса с гарантией прибыли' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '_index.css' }
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
                            mix: { block: 'call-us', elem: 'button' },
                            mods: { size: 'small', color: 'orange'},
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
                    block: 'sidebar',
                    content: [
                        {
                            block: 'slogan',
                            mods: { level: 'one' },
                            content: [
                                {
                                    block: 'link',
                                    attrs: { name: 'about' },
                                    content: ''
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
                                    content: 'Бесплатная консультация'
                                }
                            ]
                        },
                        // {
                        //     tag: 'script',
                        //     attrs: { src: 'http://form.jotformeu.com/jsform/42164141627348' }
                        // }
                    ]
                }
                // {
                //     block: 'carousel',
                //     mix: { block: 'first-screen', elem: 'carousel' },
                //     mods: { animate: 'yes' },
                //     content: [
                //         {
                //             elem: 'inner',
                //             content: [
                //                 {
                //                     elem: 'item',
                //                     elemMods: { state: 'active' },
                //                     content: {
                //                         elem: 'img',
                //                         url: 'https://lh5.ggpht.com/sxYdNHOqblPwcd3fCR1sj5gzlib4sy2sl1btHdwA28WVPDxyj6hpXoOT-a4fz4nzKwnX'
                //                     }
                //                 },
                //                 {
                //                     elem: 'item',
                //                     content: {
                //                         elem: 'img',
                //                         url: 'https://lh5.ggpht.com/s7830ZGWwOtA2CTApJk0ZvWny7zIbuXaOe5GlqPkknGktUmh9LBM0ojT-tjy-0dp1gM'
                //                     }
                //                 },
                //                 {
                //                     elem: 'item',
                //                     content: {
                //                         elem: 'img',
                //                         url: 'https://lh6.ggpht.com/Ar_0ImGRpXy7F1QlXWQmsT6IjKPzqC8uQ9n8JgefpZzZsUK_Xpz2sL8SyFGwVJR37YTH'
                //                     }
                //                 }
                //             ]
                //         },
                //         {
                //             elem: 'control',
                //             elemMods: { type: 'left', theme: 'default' },
                //             content: '&lsaquo;'
                //         },
                //         {
                //             elem: 'control',
                //             elemMods: { type: 'right', theme: 'default' },
                //             content: '&rsaquo;'
                //         }
                //     ]
                // }
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
                                    content: [
                                        {
                                            elem: 'item',
                                            mix:{ block: 'days'},
                                            content: '00'
                                        },
                                        ' : ',
                                        {
                                            elem: 'item',
                                            mix:{ block: 'hours'},
                                            content: '00'
                                        },
                                        ' : ',
                                        {
                                            elem: 'item',
                                            mix:{ block: 'minutes'},
                                            content: '00'
                                        }
                                    ]
                                },
                                {
                                    block: 'description',
                                    mods: { size: 'small', color: 'orange'},
                                    content: 'Предложение действует до 01. 07. 2014'
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
                            attrs: { name: 'how' },
                            content: ''
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
                            attrs: { name: 'result' },
                            content: ''
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
                                            url: '/i/slide_image_one.png',
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
                                            url: '/i/slide_image_two.png',
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
                                            url: '/i/slide_image_three.png',
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
                                            url: '/i/slide_image_four.png',
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
                                            url: '/i/slide_image_five.png',
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
                            elemMods: { type: 'left', theme: 'mini' },
                            content: ''
                        },
                        {
                            elem: 'control',
                            elemMods: { type: 'right', theme: 'mini' },
                            content: ''
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
                    mods: { level: '3', color: 'green' },
                    content: [
                        {
                            block: 'link',
                            attrs: { name: 'why-we' },
                            content: ''
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
                                    attrs: { name: 'services' },
                                    content: ''
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
