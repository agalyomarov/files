let d =
{
  "mesbot": [
    {
      "type": "text",
      "text": "Здравствуйте!<br>Меня зовут Ольга. Я онлайн-консультант официального автосалона HYUNDAI",
      "stepbot": 1,
      "noscroll": "true",
      "sleep": "2200"
    },
    {
      "type": "text",
      "text": "Пожалуйста, ответьте на пару вопросов, чтобы я могла составить для вас предложение с вариантами комплектации и стоимостью.",
      "stepbot": 2,
      "noscroll": "true",
    },
    {
      "type": "auto",
      "text": "Какую модель автомобиля вы рассматриваете?<br><strong>Выберите модель из списка, нажав на нее:</strong>",
      "stepbot": 3,
      "step": "auto",
      "goal": "auto",
      "noscroll": "true",
      "categories": [
        {
          "name": "",
          "items": [
            {
              "name": "Solaris",
              "fullname": "Solaris",
              "price": "В кредит от 470 300 руб.",
              "img": "/img/solaris-photo.png",
              "profit": "Выгода до 907 700 ₽",
            },
            {
              "name": "Creta New",
              "fullname": "Creta New",
              "price": "В кредит от 677 000 руб.",
              "img": "/img/creta-photo.png",
              "profit": "Выгода до 1 112 000 ₽",
            },
            {
              "name": "Elantra New",
              "fullname": "Elantra New",
              "price": "В кредит от 869 000 руб.",
              "img": "/img/elantra-photo.png",
              "profit": "выгода до 1 134 000  ₽",
            },
            {
              "name": "Sonata",
              "fullname": "Sonata",
              "price": "В кредит от 1 224 000 руб.",
              "img": "/img/sonata-photo.png",
              "profit": "выгода до 1 894 000 ₽",
            },
            {
              "name": "New Tucson",
              "fullname": "New Tucson",
              "price": "В кредит от 1 479 000 руб.",
              "img": "/img/tucson-photo.png",
              "profit": "выгода до 1 230 000 ₽",
            },
            {
              "name": "New Santa Fe",
              "fullname": "New Santa Fe",
              "price": "В кредит от 1 929 000 руб.",
              "img": "/img/santafe-photo.png",
              "profit": "выгода до 2 040 000 ₽",
            },
          ]
        }
      ],
      "buts": [
        {
          "text": "Не знаю / Не определился",
          "usertext": "Не знаю / Не определился",
          "id": 1
        },
      ],
    },
    {
      "type": "choose",
      "text": "Выберите подарки:",
      "stepbot": 4,
      "step": "options",
      "goal": "options",
      "autoOptions": [
        {
          "autoName": "Solaris",
          "autoId": 1,
          "options": [
            {
              "optionName": "Страховка КАСКО в подарок",
              "id": 1,
            },
            {
              "optionName": "Первые 3 платежа по кредиту за наш счет",
              "id": 2,
            },
            {
              "optionName": "Зимняя резина",
              "id": 6,
            },
            {
              "optionName": "Доп. скидка 150 000 р. по Trade In",
              "id": 7,
            },
          ]
        },
        {
          "autoName": "Creta New",
          "autoId": 2,
          "options": [
            {
              "optionName": "Страховка КАСКО в подарок",
              "id": 1,
            },
            {
              "optionName": "Первые 3 платежа по кредиту за наш счет",
              "id": 2,
            },
            {
              "optionName": "Зимняя резина",
              "id": 6,
            },
            {
              "optionName": "Доп. скидка 150 000 р. по Trade In",
              "id": 7,
            },
          ]
        },
        {
          "autoName": "Elantra",
          "autoId": 3,
          "options": [
            {
              "optionName": "Страховка КАСКО в подарок",
              "id": 1,
            },
            {
              "optionName": "Первые 3 платежа по кредиту за наш счет",
              "id": 2,
            },
            {
              "optionName": "Зимняя резина",
              "id": 6,
            },
            {
              "optionName": "Доп. скидка 150 000 р. по Trade In",
              "id": 7,
            },
          ]
        },
        {
          "autoName": "Elantra New",
          "autoId": 4,
          "options": [
            {
              "optionName": "Страховка КАСКО в подарок",
              "id": 1,
            },
            {
              "optionName": "Первые 3 платежа по кредиту за наш счет",
              "id": 2,
            },
            {
              "optionName": "Зимняя резина",
              "id": 6,
            },
            {
              "optionName": "Доп. скидка 150 000 р. по Trade In",
              "id": 7,
            },
          ]
        },
        {
          "autoName": "Sonata",
          "autoId": 5,
          "options": [
            {
              "optionName": "Страховка КАСКО в подарок",
              "id": 1,
            },
            {
              "optionName": "Первые 3 платежа по кредиту за наш счет",
              "id": 2,
            },
            {
              "optionName": "Зимняя резина",
              "id": 6,
            },
            {
              "optionName": "Доп. скидка 150 000 р. по Trade In",
              "id": 7,
            },
          ]
        },
        {
          "autoName": "New Tucson",
          "autoId": 6,
          "options": [
            {
              "optionName": "Страховка КАСКО в подарок",
              "id": 1,
            },
            {
              "optionName": "Первые 3 платежа по кредиту за наш счет",
              "id": 2,
            },
            {
              "optionName": "Зимняя резина",
              "id": 6,
            },
            {
              "optionName": "Доп. скидка 150 000 р. по Trade In",
              "id": 7,
            },
          ]
        },
        {
          "autoName": "Tucson",
          "autoId": 7,
          "options": [
            {
              "optionName": "Страховка КАСКО в подарок",
              "id": 1,
            },
            {
              "optionName": "Первые 3 платежа по кредиту за наш счет",
              "id": 2,
            },
            {
              "optionName": "Зимняя резина",
              "id": 6,
            },
            {
              "optionName": "Доп. скидка 150 000 р. по Trade In",
              "id": 7,
            },
          ]
        },
        {
          "autoName": "New Santa Fe",
          "autoId": 8,
          "options": [
            {
              "optionName": "Страховка КАСКО в подарок",
              "id": 1,
            },
            {
              "optionName": "Первые 3 платежа по кредиту за наш счет",
              "id": 2,
            },
            {
              "optionName": "Зимняя резина",
              "id": 6,
            },
            {
              "optionName": "Доп. скидка 150 000 р. по Trade In",
              "id": 7,
            },
          ]
        },
      ],
    },
    {
      "type": "color",
      "text": "Выберите цвет автомобиля",
      "stepbot": 5,
      "step": "term",
      "goal": "term",
      "buts": [
        {
          "hex": "#090909",
          "text": "Черный",
          "id": 1
        },
        {
          "hex": "#dc1111",
          "text": "Красный",
          "id": 2
        },

        {
          "hex": "#f3f3f3",
          "text": "Белый",
          "id": 3
        },
        {
          "hex": "#d06b1a",
          "text": "Оранжевый",
          "id": 4
        },
        {
          "hex": "#666",
          "text": "Серый",
          "id": 5
        },
        {
          "hex": "#aaaaaa",
          "text": "Серебристый",
          "id": 6
        },
        {
          "hex": "#0b58cc",
          "text": "Синий",
          "id": 7
        },
        {
          "hex": "",
          "text": "Другой",
          "id": 8
        }
      ],
    },
    {
      "type": "choise",
      "text": "Как планируете приобретать автомобиль?",
      "stepbot": 6,
      "step": "cash",
      "goal": "cash",
      "option": [
        {
          "text": "Автокредит от 3,5%",
          "usertext": "Автокредит от 3,5%",
          "id": 1
        },
        {
          "text": "Госпрограмма - Семейный автомобиль или Первый автомобиль",
          "usertext": "Госпрограмма - Семейный автомобиль или Первый автомобиль",
          "id": 2
        },
        {
          "text": "Трейд-Ин",
          "usertext": "Трейд-Ин",
          "id": 3
        },
        {
          "text": "Льготный автокредит",
          "usertext": "Льготный автокредит",
          "id": 4
        },
      ],
    },
    {
      "type": "text",
      "text": "Стоимость на автомобиль {categories} - зафиксирована",
      "stepbot": 7
    },
    {
      "type": "text",
      "text": "Оставьте заявку для записи к нам в автоцентр. Мы перезвоним Вам через 2-3 минуты.",
      "stepbot": 8
    },
    {
      "type": "phone",
      "text": "Оставьте Ваш номер телефона",
      "stepbot": 9,
      "noscroll": "2500"
    }
  ]
}
