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
                    content: 'mint'
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
                }
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
            block: 'increase-sales',
            content: [
                {
                    block: 'header-increase-sales',
                    content: 'Как мы увеличиваем продажи'
                },
                {
                    block: 'work-stages',
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
            ]
        },
        {
            block: 'about',
            content: [
            ]
        },
        {
            block: 'action2',
            content: [
            ]
        },
        {
            block: 'contacts',
            content: [
            ]
        }
    ]
})
