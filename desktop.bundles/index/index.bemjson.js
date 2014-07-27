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
            mix: {
                block: 'clearfix'
            },
            content: [
                {
                    block: 'logo',
                    content: 'mint'
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
                                url: '#',
                                content: 'Как мы увеличиваем продажи'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: '#',
                                content: 'О нас'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: '#',
                                content: 'Результаты'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: '#',
                                content: 'Почему мы'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'link',
                                url: '#',
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
                    block: 'slide-show',
                    content: [
                        {
                            elem: 'paginator'
                        }
                    ]
                },
                {
                    block: 'sidebar',
                    content: [
                        {
                            block: 'slogan',
                            content: 'Landing page и контекстаня реклама для вашего бизнеса с гарантией прибыли'
                        },
                        {
                            block: 'slogan',
                            content: 'Мы реально увеличиваем ваши продажи'
                        },
                        {
                            block: 'form',
                            content: [
                                {
                                    block: 'input',
                                    name: 'name'
                                },
                                {
                                    block: 'input',
                                    name: 'phone'
                                },
                                {
                                    block: 'button',
                                    content: 'Заказать консультацию'
                                }
                            ]
                        }
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
                            content: [
                                {
                                    block: 'days',
                                    content: [
                                    ]
                                },
                                {
                                    block: 'hours',
                                    content: [
                                    ]
                                },
                                {
                                    block: 'minutes',
                                    content: [
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'timer-button',
                            content: [
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
                    elem: 'title',
                    content: 'Как мы увеличиваем продажи'
                },
                {
                    elem: 'inner',
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
                            block: 'receive-brief-button',
                            content: 'Получить бриф'
                        }
                    ]
                }
            ]
        },
        {
            block: 'portfolio',
            content: [
                {
                    elem: 'title',
                    content: 'Результат нашей работы'
                },
                {
                    block: 'slide-show',
                    content: [
                        {
                            elem: 'slide',
                            content: [
                                {
                                    elem: 'image',
                                    url: 'http://tadatuta.ru',
                                    alt: 'я то что будет если не подгрузится картинка',
                                    title: 'я то что покажется по наведению мыши'
                                },
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
            block: 'features',
            content: [
                {
                    elem: 'title',
                    content: 'Наша студия - лучший выбор для увеличения ваших продаж'
                },
                {
                    elem: 'inner',
                    content: [
                        {
                            block: 'features',
                            mods: { type: 'warranty' },
                            content: 'Гарантируем рост ваших продаж. Или вернем деньги'
                        },
                        {
                            block: 'features',
                            mods: { type: 'geography' },
                            content: 'Работаем по всей России'
                        },
                        {
                            block: 'features',
                            mods: { type: 'experience' },
                            content: 'Опыт работы — 8 лет'
                        },
                        {
                            block: 'features',
                            mods: { type: 'projects' },
                            content: '50+ проектов'
                        },
                        {
                            block: 'features',
                            mods: { type: 'team' },
                            content: 'Команда профессионалов'
                        },
                        {
                            block: 'features',
                            mods: { type: 'approach' },
                            content: 'Индивидуальный подход. Весь спектр услуг'
                        }
                    ]
                }
            ]
        },
        {
            block: 'price',
            content: {
                elem: 'title',
                content: [
                     'Профессиональные лендинги<br>',
                     'от ',
                     {
                        elem: 'old', // TODO: rename
                        content: '50 000'
                     },
                     '28 000 рублей'
                ]
            }
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
                            elem: 'phone',
                            content: '+7 (495) 664-21-15'
                        }
                    ]
                },
                {
                    block: 'form',
                    content: [
                        {
                            block: 'input',
                            name: 'name'
                        },
                        {
                            block: 'input',
                            name: 'phone'
                        },
                        {
                            elem: 'hint',
                            content: 'Гарантируем, что ваши данные не будут переданы третьим лицам'
                        },
                        {
                            block: 'button',
                            content: 'Заказать консультацию'
                        }
                    ]
                }
            ]
        }
    ]
})
