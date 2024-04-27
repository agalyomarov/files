openmesbot(0);


function step(st, txt) {
    $(".step[data=" + st + "]").text(txt);
}




function openmesbot(id) {
    if (typeof id == 'string') {
        $(".chatcont").append('<div class="message meshide mesbot" data-mesbot="end"><div class="mesimg"></div><div class="mescont"><div class="mestext">' + id + '</div></div></div>');
        botprint('end', 300, 1500);
    }

    else if (d['mesbot'][id] !== undefined) {
        if (d['mesbot'][id]['type'] !== undefined) {

            if (d['mesbot'][id]['type'] == 'text') {
                if (d['mesbot'][id]['text'] !== undefined) {
                    var text = d['mesbot'][id]['text'];

                    if (text.indexOf('{country}') + 1) {
                        var txt = $(".step[data=country2]").text();
                        if (txt == 'Нет нужной страны') txt = 'в разные страны';
                        text = text.replace(new RegExp("{country}", 'g'), txt);
                    }

                    if (text.indexOf('{categories}') + 1) {
                        var txt = $(".step[data=auto]").text();
                        text = text.replace(new RegExp("{categories}", 'g'), txt);
                    }
                    if (text.indexOf('{profit}') + 1) {
                        var txt = $(".step[data=profit]").text();
                        text = text.replace(new RegExp("{profit}", 'g'), txt);
                    }
                    if (text.indexOf('{price}') + 1) {
                        var txt = $(".step[data=price]").text();
                        text = text.replace(new RegExp("{price}", 'g'), txt);
                    }


                    $(".chatcont").css("height", $(".chatcont").outerHeight() + "px");

                    $(".chatcont").append('<div class="message meshide mesbot" data-mesbot="' + id + '"><div class="mesimg"></div><div class="mescont"><div class="mestext">' + text + '</div></div></div>');

                    if (d['mesbot'][id]['buts'] !== undefined) {
                        for (var i = 0; d['mesbot'][id]['buts'][i]; i++) {
                            if (i == 0) $(".message[data-mesbot=" + id + "] .mescont").append('<div class="butslink butslinkhide"></div>');

                            var number = '';
                            var step = '';
                            var goal = '';
                            var usertext = '';
                            var retmes = '';
                            var margin = 10;

                            if (d['mesbot'][id]['step'] !== undefined) {
                                step = ' data-step="' + d['mesbot'][id]['step'] + '"';
                            }
                            if (d['mesbot'][id]['goal'] !== undefined) {
                                goal = ' data-goal="' + d['mesbot'][id]['goal'] + '"';
                            }

                            if (d['mesbot'][id]['buts'][i]['number'] == true) number = ' butnumber';

                            if (d['mesbot'][id]['buts'][i]['usertext'] !== undefined) usertext = ' data-usertext="' + d['mesbot'][id]['buts'][i]['usertext'] + '"';

                            if (d['mesbot'][id]['buts'][i]['retmes'] !== undefined) retmes = ' data-retmes="' + d['mesbot'][id]['buts'][i]['retmes'] + '"';

                            if (d['mesbot'][id]['margin'] !== undefined && d['mesbot'][id]['margin'] != 0) {
                                margin = d['mesbot'][id]['margin'];
                            }

                            if (d['mesbot'][id]['buts'][i]['text'] !== undefined) {
                                $(".message[data-mesbot=" + id + "] .mescont .butslink").append('<div class="butlink' + number + '" data-stepbot="' + d['mesbot'][id]['stepbot'] + '" data-mesbot="' + id + '"' + usertext + step + goal + retmes + ' style="margin-right:' + margin + 'px;">' + d['mesbot'][id]['buts'][i]['text'] + '</div>');
                            }
                        }
                    }

                    botprint(id, d['mesbot'][id]['noscroll'], d['mesbot'][id]['sleep'], d['mesbot'][id]['stepbot'], d['mesbot'][id]['buts']);
                }
            }

            if (d['mesbot'][id]['type'] == 'auto') {
                if (d['mesbot'][id]['text'] !== undefined) {
                    var text = d['mesbot'][id]['text'];

                    $(".chatcont").css("height", $(".chatcont").outerHeight() + "px");

                    $(".chatcont").append('<div class="message meshide mesbot" data-mesbot="' + id + '"><div class="mesimg"></div><div class="mescont"><div class="mestext">' + text + '</div></div></div>');

                    // if (typeof auto != "undefined") {
                    for (var i = 0; d['mesbot'][id]['categories'][i]; i++) {
                        if (i == 0) $(".message[data-mesbot=" + id + "] .mescont").append('<div class="autoslink autoslink3 butslinkhide"></div>');

                        for (var j = 0; d['mesbot'][id]['categories'][i]['items'][j]; j++) {
                            var step = '';
                            var goal = '';
                            var usertext = '';
                            var link = '';

                            if (d['mesbot'][id]['step'] !== undefined) {
                                step = ' data-step="' + d['mesbot'][id]['step'] + '"';
                            }
                            if (d['mesbot'][id]['goal'] !== undefined) {
                                goal = ' data-goal="' + d['mesbot'][id]['goal'] + '"';
                            }

                            if (d['mesbot'][id]['categories'][i]['items'][j]['link'] !== undefined) {
                                link = ' data-link="' + d['mesbot'][id]['categories'][i]['items'][j]['link'] + '"';
                            }

                            if (d['mesbot'][id]['categories'][i]['name'] !== undefined) {
                                usertext = ' data-usertext="' + d['mesbot'][id]['categories'][i]['items'][j]['fullname'] + '"';
                            }

                            if (d['mesbot'][id]['categories'][i]['items'][j]['price'] !== undefined) {
                                price = d['mesbot'][id]['categories'][i]['items'][j]['price'];
                            }

                            if (d['mesbot'][id]['categories'][i]['items'][j]['profit'] !== undefined) {
                                profit = d['mesbot'][id]['categories'][i]['items'][j]['profit'];
                            }
                            // else price = '&nbsp;';


                            if (d['mesbot'][id]['categories'][i]['items'][j]['name'] !== undefined) {
                                $(".message[data-mesbot=" + id + "] .mescont .autoslink").append(`<div class="autolink" 
                                    data-stepbot="${d['mesbot'][id]['stepbot']}" 
                                    data-mesbot="${id}" 
                                    data-price="${price}"
                                    data-profit="${profit}"
                                    ${link} 
                                    ${usertext} 
                                    ${step} 
                                    ${goal}>
                                   
                                    <div class="goodmark"></div>
                                    <div class="imgauto" style="background-image:url(${d['mesbot'][id]['categories'][i]['items'][j]['img']})"></div>
                                    <div class="autoname">${d['mesbot'][id]['categories'][i]['items'][j]['name']}</div>
                                    <div class="autoprice">${price}</div>
                                    ${d['mesbot'][id]['categories'][i]['items'][j]['profit'] ? `<div class="profit">${d['mesbot'][id]['categories'][i]['items'][j]['profit']}</div>` : ""}
                                     ${d['mesbot'][id]['categories'][i]['items'][j]['profit']
                                        ? `<span class="profit-title">АВТО В НАЛИЧИИ</span>`
                                        : ""
                                    }
                                    </div>`);
                            }
                        }
                    }

                    $(".message[data-mesbot=" + id + "] .mescont .autoslink").after('<div class="butslink" style="margin-top: 35px;"></div><div class="autoafter">Выберите автомобиль из списка выше</div>');

                    botprint(id, d['mesbot'][id]['noscroll'], d['mesbot'][id]['sleep'], d['mesbot'][id]['stepbot'], d['mesbot'][id]['buts']);
                }

            }

            if (d['mesbot'][id]['type'] == 'choose') {

                if (d['mesbot'][id]['text'] !== undefined) {
                    var text = d['mesbot'][id]['text'];

                    if (text.indexOf('{country}') + 1) {
                        var txt = $(".step[data=country2]").text();
                        if (txt == 'Нет нужной страны') txt = 'в разные страны';
                        text = text.replace(new RegExp("{country}", 'g'), txt);
                    }

                    $(".chatcont").css("height", $(".chatcont").outerHeight() + "px");

                    $(".chatcont").append('<div class="message meshide mesbot" data-mesbot="' + id + '"><div class="mesimg"></div><div class="mescont"><div class="mestext">' + text + '<div class="butslinkk"></div></div></div></div>');

                    function renderOptions() {
                        $(".message[data-mesbot=" + id + "] .mescont .butslinkk").append('<label for="autoOption' + d['mesbot'][id]['autoOptions'][i]['options'][j]['id'] + '" class="cash2" id="autoId' + d['mesbot'][id]['autoOptions'][i]['autoId'] + '" data-stepbot="' + d['mesbot'][id]['stepbot'] + '" data-mesbot="' + id + '"' + usertext + step + goal + ' style="margin-right:10px"> ' + `<input class="checkbox__choose auto_option" id='autoOption${d['mesbot'][id]['autoOptions'][i]['options'][j]['id']}' type="checkbox" value="${d['mesbot'][id]['autoOptions'][i]['options'][j]['optionName']}"> <label for="autoOption${+d['mesbot'][id]['autoOptions'][i]['options'][j]['id']}" class="agreement-label">${d['mesbot'][id]['autoOptions'][i]['options'][j]['optionName']}</label> ` + '</label>');
                    }

                    if (d['mesbot'][id]['autoOptions'] !== undefined) {

                        for (var i = 0; d['mesbot'][id]['autoOptions'][i]; i++) {

                            if (i == 0) $(".message[data-mesbot=" + id + "] .mescont").append('<div class="butslink butslinkhide butlink-for-options"></div>');

                            var number = '';
                            var step = '';
                            var goal = '';
                            var usertext = '';
                            var retmes = '';
                            var margin = 10;

                            var question1 = $(".step[data=auto]").text();
                            var autoModelName = d['mesbot'][id]['autoOptions'][i]['autoName'];


                            if (d['mesbot'][id]['step'] !== undefined) {
                                step = ' data-step="' + d['mesbot'][id]['step'] + '"';
                            }
                            if (d['mesbot'][id]['goal'] !== undefined) {
                                goal = ' data-goal="' + d['mesbot'][id]['goal'] + '"';
                            }
                            if (d['mesbot'][id]['usertext'] !== undefined) {
                                usertext = ' data-usertext="' + d['mesbot'][id]['usertext'] + '"';
                            }
                            if (d['mesbot'][id]['autoOptions'][i] !== undefined) {

                                for (var j = 0; d['mesbot'][id]['autoOptions'][i]['options'][j]; j++) {
                                    if (autoModelName == question1) {
                                        renderOptions();
                                    }
                                    // if (autoModelName == "Tiggo 4 Pro" && question1 == 'Tiggo 4 Pro') {
                                    //     renderOptions();
                                    // }

                                    // if (autoModelName == "Tiggo 7 Pro" && question1 == 'Tiggo 7 Pro') {
                                    //     renderOptions()
                                    // }
                                    // if (autoModelName == "Tiggo 8 New" && question1 == 'Tiggo 8 New') {
                                    //     renderOptions()
                                    // }

                                    // if (autoModelName == "Tiggo 8 Pro" && question1 == 'Tiggo 8 Pro') {
                                    //     renderOptions()
                                    // }
                                    // if (autoModelName == "Tiggo 8 Pro Max" && question1 == 'Tiggo 8 Pro Max') {
                                    //     renderOptions()
                                    // }
                                }
                            }
                        }
                        $(".message[data-mesbot=" + id + "] .mescont .butslink").append('<div class="butlink"' + ' data-stepbot="' + d['mesbot'][id]['stepbot'] + '" ' + goal + ' data-mesbot="' + id + '">' + 'Продолжить' + '</div>');

                    }
                    botprint(id, d['mesbot'][id]['noscroll'], d['mesbot'][id]['sleep'], d['mesbot'][id]['stepbot'], d['mesbot'][id]['autoOptions']);
                }
            }

            if (d['mesbot'][id]['type'] == 'color') {
                if (d['mesbot'][id]['text'] !== undefined) {
                    var text = d['mesbot'][id]['text'];


                    $(".chatcont").css("height", $(".chatcont").outerHeight() + "px");

                    $(".chatcont").append('<div class="message meshide mesbot" data-mesbot="' + id + '"><div class="mesimg"></div><div class="mescont"><div class="mestext">' + text + '</div></div></div>');

                    if (d['mesbot'][id]['buts'] !== undefined) {
                        for (var i = 0; d['mesbot'][id]['buts'][i]; i++) {

                            if (i == 0) $(".message[data-mesbot=" + id + "] .mescont").append('<div class="butslink butslinkhide flex-block"></div>');

                            var number = '';
                            var step = '';
                            var goal = '';
                            var usertext = '';
                            var retmes = '';
                            var margin = 10;

                            if (d['mesbot'][id]['step'] !== undefined) {
                                step = ' data-step="' + d['mesbot'][id]['step'] + '"';
                            }
                            if (d['mesbot'][id]['goal'] !== undefined) {
                                goal = ' data-goal="' + d['mesbot'][id]['goal'] + '"';
                            }

                            if (d['mesbot'][id]['buts'][i]['number'] == true) number = ' butnumber';

                            if (d['mesbot'][id]['buts'][i]['text'] !== undefined) usertext = ' data-usertext="' + d['mesbot'][id]['buts'][i]['text'] + '"';

                            if (d['mesbot'][id]['buts'][i]['retmes'] !== undefined) retmes = ' data-retmes="' + d['mesbot'][id]['buts'][i]['retmes'] + '"';

                            if (d['mesbot'][id]['margin'] !== undefined && d['mesbot'][id]['margin'] != 0) {
                                margin = d['mesbot'][id]['margin'];
                            }

                            if (d['mesbot'][id]['buts'][i]['text'] !== undefined) {
                                $(".message[data-mesbot=" + id + "] .mescont .butslink").append('<div class="butlink color-butlink' + number + '" data-stepbot="' + d['mesbot'][id]['stepbot'] + '" data-mesbot="' + id + '"' + usertext + step + goal + retmes + ' style="margin-right:' + margin + 'px;"><div class="choose-color-btn" style="background-color:' + d['mesbot'][id]['buts'][i]['hex'] + '" ></div>' + d['mesbot'][id]['buts'][i]['text'] + '</div>');
                            }
                        }
                    }
                    botprint(id, d['mesbot'][id]['noscroll'], d['mesbot'][id]['sleep'], d['mesbot'][id]['stepbot'], d['mesbot'][id]['buts']);
                }
            }


            if (d['mesbot'][id]['type'] == 'choise') {
                if (d['mesbot'][id]['text'] !== undefined) {
                    var text = d['mesbot'][id]['text'];

                    $(".chatcont").css("height", $(".chatcont").outerHeight() + "px");

                    $(".chatcont").append('<div class="message meshide mesbot" data-mesbot="' + id + '"><div class="mesimg"></div><div class="mescont"><div class="mestext">' + text + '<div class="butslinkk"></div></div></div></div>');

                    if (d['mesbot'][id]['option'] !== undefined) {

                        for (var i = 0; d['mesbot'][id]['option'][i]; i++) {

                            if (i == 0) $(".message[data-mesbot=" + id + "] .mescont").append('<div class="butslink butslinkhide options-for-cars"></div>');

                            var step = '';
                            var goal = '';
                            var usertext = '';
                            var link = '';

                            if (d['mesbot'][id]['step'] !== undefined) {
                                step = ' data-step="' + d['mesbot'][id]['step'] + '"';
                            }
                            if (d['mesbot'][id]['goal'] !== undefined) {
                                goal = ' data-goal="' + d['mesbot'][id]['goal'] + '"';
                            }

                            if (d['mesbot'][id]['option'][i]['usertext'] !== undefined) {
                                usertext = ' data-usertext="' + d['mesbot'][id]['option'][i]['usertext'] + '"';
                            }

                            else price = '&nbsp;';

                            if (d['mesbot'][id]['option'][i]['text'] !== undefined) {
                                $(".message[data-mesbot=" + id + "] .mescont .butslinkk").append('<label for="choose' + d['mesbot'][id]['option'][i]['id'] + '" class="cash2" id="' + d['mesbot'][id]['option'][i]['id'] + '" data-stepbot="' + d['mesbot'][id]['stepbot'] + '" data-mesbot="' + id + '"' + usertext + step + goal + ' style="margin-right:10px"> ' + `<input class="checkbox__choose term_option" id='choose${d['mesbot'][id]['option'][i]['id']}' type="checkbox" value="${d['mesbot'][id]['option'][i]['text']}"> <label for="choose${+d['mesbot'][id]['option'][i]['id']}" class="agreement-label2">${d['mesbot'][id]['option'][i]['text']}</label> ` + '</label>');
                            }
                        }
                        $(".message[data-mesbot=" + id + "] .mescont .butslink").append('<div class="butlink butlink4"' + ' data-stepbot="' + d['mesbot'][id]['stepbot'] + '" ' + goal + ' data-mesbot="' + id + '">' + 'Продолжить' + '</div>');
                    }
                    botprint(id, d['mesbot'][id]['noscroll'], d['mesbot'][id]['sleep'], d['mesbot'][id]['stepbot'], d['mesbot'][id]['option']);
                }
            }

            if (d['mesbot'][id]['type'] == 'country') {
                if (d['mesbot'][id]['text'] !== undefined) {
                    var text = d['mesbot'][id]['text'];

                    $(".chatcont").css("height", $(".chatcont").outerHeight() + "px");

                    $(".chatcont").append('<div class="message meshide mesbot" data-mesbot="' + id + '"><div class="mesimg"></div><div class="mescont"><div class="mestext">' + text + '</div></div></div>');

                    if (d['mesbot'][id]['buts'] !== undefined) {
                        for (var i = 0; d['mesbot'][id]['buts'][i]; i++) {
                            if (i == 0) $(".message[data-mesbot=" + id + "] .mescont").append('<div class="butslink butslinkhide butscountry"></div>');

                            var country = '';
                            var price = '';
                            var step = '';
                            var goal = '';
                            var divclass = '';
                            var usertext = '';
                            var margin = 10;

                            if (d['mesbot'][id]['step'] !== undefined) {
                                step = ' data-step="' + d['mesbot'][id]['step'] + '"';
                            }
                            if (d['mesbot'][id]['goal'] !== undefined) {
                                goal = ' data-goal="' + d['mesbot'][id]['goal'] + '"';
                            }

                            if (d['mesbot'][id]['margin'] !== undefined && d['mesbot'][id]['margin'] != 0) {
                                margin = d['mesbot'][id]['margin'];
                            }

                            if (i == 14) $(".message[data-mesbot=" + id + "] .mescont .butslink").append('<div class="butlinkshow" style="margin-right:' + margin + 'px;">Показать ещё</div>');
                            if (i > 13) var divclass = " buthide";

                            if (d['mesbot'][id]['buts'][i]['country'] !== undefined) {
                                country = '<div class="flag country' + d['mesbot'][id]['buts'][i]['country'] + '"></div>';

                                if ($(".TVMinPWrap").length > 0) {
                                    $(".TVMinPWrap").each(function () {
                                        if ($(this).find(".TVMinPCountryName").text() == d['mesbot'][id]['buts'][i]['text']) {
                                            price = 'от ' + $(this).find(".TVMinPPrice").text() + 'р.';
                                        }
                                    });


                                }
                            }

                            if (d['mesbot'][id]['buts'][i]['text'] !== undefined) {
                                if (d['mesbot'][id]['buts'][i]['text2'] !== undefined) countr2 = ' data-countr2="' + d['mesbot'][id]['buts'][i]['text2'] + '"';
                                if (d['mesbot'][id]['buts'][i]['usertext'] !== undefined) usertext = ' data-usertext="' + d['mesbot'][id]['buts'][i]['usertext'] + '"';

                                if (country == '') {
                                    $(".message[data-mesbot=" + id + "] .mescont .butslink").append('<div class="butlink' + divclass + '" data-stepuser="' + d['mesbot'][id]['buts'][i]['stepuser'] + '" data-mesbot="' + id + '"' + usertext + step + goal + ' style="margin-right:' + margin + 'px;">' + d['mesbot'][id]['buts'][i]['text'] + '</div>');
                                }
                                else {
                                    $(".message[data-mesbot=" + id + "] .mescont .butslink").append('<div class="butlink' + divclass + '" data-type="country" data-mesbot="' + id + '" data-stepbot="' + d['mesbot'][id]['stepbot'] + '"' + countr2 + usertext + step + goal + ' style="margin-right:' + margin + 'px;"><div class="butlinkcountry">' + country + '<div class="countrycont"><span class="countryname">' + d['mesbot'][id]['buts'][i]['text'] + '</span> ' + price + '</div></div></div>');
                                }
                                var stepbotno = d['mesbot'][id]['stepbot'] + 1;
                            }
                        }

                        $(".message[data-mesbot=" + id + "] .mescont .butslink").append('<div class="butlink buthide" data-type="country" data-mesbot="1" data-stepbot="' + stepbotno + '" data-step="country" data-goal="strana" data-usertext="Другая страна" data-countr2="Нет нужной страны">Нет нужной страны</div>');
                    }

                    botprint(id, d['mesbot'][id]['noscroll'], d['mesbot'][id]['sleep']);
                }
            }
            if (d['mesbot'][id]['type'] == 'calendar') {
                $(".chatcont").css("height", $(".chatcont").outerHeight() + "px");

                $(".chatcont").append('<div class="message meshide mesbot" data-mesbot="' + id + '"><div class="mesimg"></div><div class="mescont"><div class="datepicker-here"></div></div></div>');

                var tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);

                var stepbot = d['mesbot'][id]['stepbot'];

                if (d['mesbot'][id]['step'] !== undefined) {
                    step = d['mesbot'][id]['step'];
                }
                if (d['mesbot'][id]['goal'] !== undefined) {
                    goal = d['mesbot'][id]['goal'];
                }

                $('.datepicker-here').datepicker({
                    minDate: tomorrow,
                    inline: true,
                    onSelect: function onSelect(date) {
                        if (!$(".butphone").hasClass("butlinkdisable2")) {
                            openmesuser(id, date, stepbot);
                            $(".step[data=" + step + "]").text(date);
                        }
                    }
                });

                $(".butlink").addClass("butlinkdisable");

                setTimeout(function () {
                    var hmes = $(".message[data-mesbot=" + id + "]").outerHeight(true);
                    $(".meshide").removeClass("meshide");
                    setTimeout(function () {
                        $(".message[data-mesbot=" + id + "]").find(".butslinkhide").removeClass("butslinkhide");
                    }, 400);

                    var hchat = $(".chatcont").outerHeight() + hmes;
                    $(".chatcont").css("height", hchat);


                    chatscroll(d['mesbot'][id]['noscroll']);
                }, 300);
            }
            if (d['mesbot'][id]['type'] == 'phone') {
                var text = d['mesbot'][id]['text'];
                if (d['mesbot'][id]['stepbot'] !== undefined) var stepbot = d['mesbot'][id]['stepbot'];
                else var stepbot = 0;


                if (text.indexOf('{country}') + 1) {
                    var txt = $(".step[data=country2]").text();
                    if (txt == 'Нет нужной страны') txt = 'в разные страны';
                    text = text.replace(new RegExp("{country}", 'g'), txt);
                }

                $(".chatcont").css("height", $(".chatcont").outerHeight() + "px");

                $(".chatcont").append('<div class="message meshide mesbot" data-mesbot="' + id + '" data-stepbot="' + stepbot + '"><div class="mesimg"></div><div class="mescont"><div class="mestext">' + text + '</div><div class="butslink butslinkhide"><div class="descagree">Продолжая, вы соглашаетесь с <a href="https://callkeeper.ru/docs/personal_data.pdf" target="_blank">политикой конфиденциальности</a></div><input class="inptext inpname" type="text" placeholder="Ваше имя"><input class="inptext inpphone" type="text" placeholder="+7 (___) ___-__-__"><div class="recall-call__time service__inp"><div class="recall-btn btn active" data-time="now">Позвонить сейчас</div><div class="recall-btn btn" data-time="someday">По времени</div></div><div class="divbutphone"><button class="butphone">Отправить</button><div class="error errorphone"></div></div></div></div></div>');
                $(".inpphone").inputmask("+7 (999) 999-99-99");


                botprint(id, d['mesbot'][id]['noscroll'], d['mesbot'][id]['sleep']);

            }
            if (d['mesbot'][id]['type'] == 'cupon') {
                if (d['mesbot'][id]['text'] !== undefined) {
                    var text = d['mesbot'][id]['text'];

                    if (text.indexOf('{country}') + 1) {
                        var txt = $(".step[data=country2]").text();
                        if (txt == 'Нет нужной страны') txt = 'разные страны';
                        text = text.replace(new RegExp("{country}", 'g'), txt);
                    }

                    $(".chatcont").css("height", $(".chatcont").outerHeight() + "px");

                    $(".chatcont").append('<div class="message meshide mesbot" data-mesbot="' + id + '"><div class="mesimg"></div><div class="mescont"><div class="mestext">' + text + '<br><img class="cupon" src="img/cupon1000.png"></div></div></div>');



                    botprint(id, d['mesbot'][id]['noscroll'], d['mesbot'][id]['sleep'], d['mesbot'][id]['stepbot'], d['mesbot'][id]['buts']);
                }
            }
            if (d['mesbot'][id]['type'] == 'thanks') {
                if (d['mesbot'][id]['text'] !== undefined) {
                    var text = d['mesbot'][id]['text'];

                    if (text.indexOf('{country}') + 1) {
                        var txt = $(".step[data=country2]").text();
                        if (txt == 'Нет нужной страны') txt = 'разные страны';
                        text = text.replace(new RegExp("{country}", 'g'), txt);
                    }

                    $(".chatcont").css("height", $(".chatcont").outerHeight() + "px");

                    $(".chatcont").append('<div class="message meshide mesbot" data-mesbot="' + id + '"><div class="mesimg"></div><div class="mescont"><div class="mestext thanks"><div class="icosuccess"></div><div class="smshead">Спасибо!</div><div class="smsdesc">' + text + '</div><div class="descss">Подписывайтесь на нас в соцсетях</div><div class="blockss"><a href="https://vk.com/alohatour" target="_blank"><div class="ssitem ss1"></div></a><a href="tg://resolve?domain=Alohaturbot" target="_blank"><div class="ssitem ss4"></div></a><a href="https://www.instagram.com/alohatur.ru/" target="_blank"><div class="ssitem ss3"></div></a></div></div></div></div>');


                    botprint(id, d['mesbot'][id]['noscroll'], d['mesbot'][id]['sleep'], d['mesbot'][id]['stepbot'], d['mesbot'][id]['buts']);
                }
            }
        }
    }
}




function openmesuser(mesbot, text, stepbot, retmes) {
    var minusc = 0;
    var tt = 1;

    $(".chatcont").css("height", $(".chatcont").outerHeight() + "px");
    if ($(".message[data-mesbot=" + mesbot + "]").nextAll(".message").length > 0) {
        $(".message[data-mesbot=" + mesbot + "]").nextAll(".message").addClass("meshide2");
        tt = 300;
    }
    setTimeout(function () {
        if ($(".meshide2").length > 0) {
            $(".meshide2").each(function () {
                minusc += $(this).outerHeight(true);
                $(this).remove();
            });
        }

        $(".chatcont").append('<div class="message meshide mesuser" data-mesret="' + mesbot + '"><div class="mescont"><div class="mestext">' + text + '</div></div></div>');

        setTimeout(function () {
            var hmes = $(".message[data-mesret=" + mesbot + "]").outerHeight(true);
            $(".meshide").removeClass("meshide");


            var hchat = $(".chatcont").outerHeight() + hmes - minusc;
            $(".chatcont").css("height", hchat);

            setTimeout(function () {
                $(".chatcont").css("height", "auto");
                $('html, body').stop().animate({ scrollTop: document.body.scrollHeight }, 1000);

                setTimeout(function () {
                    if (stepbot !== undefined && retmes === undefined) {
                        openmesbot(stepbot);
                    }
                    if (retmes !== undefined) {
                        openmesbot(retmes);
                    }
                }, 200);

            }, 100);
        }, 10);
    }, tt);
}



function chatscroll(scrl) {
    if (scrl === undefined || scrl == 'false') {
        setTimeout(function () {
            $(".chatcont").css("height", "auto");
            $('html, body').stop().animate({ scrollTop: document.body.scrollHeight }, 1000);
            setTimeout(function () {
                $(".butlink").removeClass("butlinkdisable");
            }, 200);
        }, 100);
    }
    else if (scrl != 'true') {
        setTimeout(function () {
            $(".chatcont").css("height", "auto");
            $('html, body').stop().animate({ scrollTop: document.body.scrollHeight }, scrl);
            setTimeout(function () {
                $(".butlink").removeClass("butlinkdisable");
            }, scrl);
        }, 100);
    }
    else {
        $(".chatcont").css("height", "auto");
        $(".butlink").removeClass("butlinkdisable");
    }
}

function botprint(id, noscroll, sleep, stepbot, buts) {
    if (sleep === undefined) sleep = 2000;

    $(".butlink").addClass("butlinkdisable");
    setTimeout(function () {
        $(".message[data-mesbot=" + id + "]").before('<div class="alenaprint">Ольга печатает ...</div>');
        setTimeout(function () {
            $(".alenaprint").addClass("alenaprintshow");
            if (noscroll != 'true') $('html, body').stop().animate({ scrollTop: document.body.scrollHeight }, 300);
            setTimeout(function () {
                $(".alenaprint").addClass("hideop");
                setTimeout(function () {
                    $(".alenaprint").remove();
                }, 300);

                var hmes = $(".message[data-mesbot=" + id + "]").outerHeight(true);
                $(".meshide").removeClass("meshide");
                setTimeout(function () {
                    $(".message[data-mesbot=" + id + "]").find(".butslinkhide").removeClass("butslinkhide");
                }, 400);

                var hchat = $(".chatcont").outerHeight() + hmes;
                $(".chatcont").css("height", hchat);

                setTimeout(function () {
                    if (stepbot !== undefined && buts === undefined) {
                        openmesbot(stepbot);
                    }
                }, 400);

                chatscroll(noscroll);
            }, sleep);
        }, 10);
    }, 10);
}




$(document).on('click', '.butlink', function () {
    if (!$(this).hasClass("butlinkdisable") && !$(this).hasClass("butlinkdisable2")) {
        $(this).closest(".butslink").find(".butlink").addClass("butlinkdisable");
        var mesbot = parseInt($(this).attr("data-mesbot"));
        var stepbot = parseInt($(this).attr("data-stepbot"));
        var type = $(this).attr("data-type");
        var goal = $(this).attr("data-goal");
        var retmes = $(this).attr("data-retmes");

        if (goal !== undefined && goal != "") {
        }

        $(this).parent().find(".butlink").removeClass("butlinkact");
        $(this).addClass("butlinkact");

        var txt = $(this).attr("data-usertext");
        if (type == "country") {
            var val = $(this).attr("data-usertext");
            var country = $(this).attr("data-countr2");
        }
        else {
            var val = $(this).text();
            $(this).parent().find(".butlink").removeClass("butlinkact");
            $(this).addClass("butlinkact");
        }
        if ($(this).attr('data-mesbot') == 2 && $(this).attr('data-usertext') == 'Не знаю / Не определился') {
            $('.step[data=options]').text('Не выбраны')
        }
        if ($(this).attr('data-mesbot') == 3) {
            var autoOptionsArray = [];
            $('.auto_option:checkbox:checked').each(function () {

                autoOptionsArray.push(this.value);

                return autoOptionsArray;
            })
            if (autoOptionsArray.length > 0) {
                $('.step[data=options]').text(autoOptionsArray.join(', '));
                openmesuser(mesbot, autoOptionsArray.join(', '), stepbot);
                autoOptionsArray = [];
            } else {
                $('.step[data=options]').text('Опции не выбраны');
                openmesuser(mesbot, "Опции не выбраны", stepbot);
            }
        }
        else if ($(this).attr('data-mesbot') == 5) {
            var chooseTerm = [];
            $('.term_option:checkbox:checked').each(function () {
                chooseTerm.push(this.value);
                return chooseTerm;
            })
            if (chooseTerm.length > 0) {
                $('.step[data=cash]').text(chooseTerm.join(', '));
                openmesuser(mesbot, chooseTerm.join(', '), stepbot);
            } else {
                $(this).closest(".butslink").find(".butlink").removeClass("butlinkdisable");
                $(this).closest(".butslink").find(".butlink").removeClass("butlinkact");
            }

        } else openmesuser(mesbot, txt, stepbot);

        var st = $(this).attr("data-step");
        step(st, val);
        if (st == "country") step("country2", country);
    }
});



$(document).on("click", ".butphone", function () {
    const elem = $(this);
    $(".errorphone").hide().html('');
    $(".inpphone").removeClass("inperror");
    $(this).html("Все верно?").removeAttr("style");
    if ($(this).hasClass("butphoneshow")) {
        if (!$(this).hasClass("butlinkdisable") && !$(this).hasClass("butlinkdisable2")) {
            var phone = $(".inpphone").val();
            var phone2 = $(".inpphone").val().replace(/\D+/g, "");
            var count = phone2.length;
            if (phone != '' && count == 11) {
                if (
                    phone2.indexOf('00000') == -1 &&
                    phone2.indexOf('11111') == -1 &&
                    phone2.indexOf('22222') == -1 &&
                    phone2.indexOf('33333') == -1 &&
                    phone2.indexOf('44444') == -1 &&
                    phone2.indexOf('55555') == -1 &&
                    phone2.indexOf('66666') == -1 &&
                    phone2.indexOf('77777') == -1 &&
                    phone2.indexOf('88888') == -1 &&
                    phone2.indexOf('99999') == -1
                ) {
                    if (!elem.hasClass("disabled")) {
                        elem.css("width", $(".butphone").outerWidth()).addClass("disabled").html('<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>');
                        // var stepbot = parseInt($(this).closest(".message").attr("data-stepbot"));
                        // var mesbot = parseInt($(this).closest(".message").attr("data-mesbot"));
                        // openmesuser(mesbot, 'Да, все верно!');

                        sendorder();
                    }


                }
                else $(".inpphone").addClass("inperror");
            }
            else $(".inpphone").addClass("inperror");
        }
    }
});


$(document).on("focus", ".inpphone", function () {
    $(this).removeClass("inperror");
});



$(document).on("click", ".butcode", function () {
    $(".errorsms").hide().text("");
    if (!$(this).hasClass("butblock")) {
        $(this).addClass("butblock");

        var code = $(".inpcode").val();
        var codereal = $(this).attr("data-code");

        if (code == codereal) {
            sendorder();
            butdisable();

            $(".repeatsms").addClass("hideop");

            var el = $(this);
            var w = el.outerWidth();
            var winp = $(".inpcode").outerWidth() - 100 + w;
            var marl = 0 - $(".inpcode").outerWidth();
            el.css("width", w + "px");
            el.find("span").addClass("hideop");
            setTimeout(function () {
                el.addClass("butcodeok");

                var wbody = parseInt(window.innerWidth);
                if (wbody > 670) el.css("width", winp + "px").css("margin-left", marl + "px").css("margin-right", "50px");
                else el.css("width", (winp + 50) + "px").css("margin-left", marl + "px")

                setTimeout(function () {
                    $(".blocksms").removeClass("blockshow");
                    setTimeout(function () {
                        opensuccess();
                    }, 500);
                }, 500);

            }, 100);
        }
        else {
            $(this).removeClass("butblock");
            $(".errorsms").show().text("Неверный код");
        }
    }
});











function hchat() {
    var hbody = parseInt(window.innerHeight);
    var h1 = $("h1").outerHeight(true);
    var logo = $(".logophone").outerHeight(true);

    $(".chat").css("min-height", (hbody - h1 - logo) + "px");
}
setTimeout(function () {
    hchat();
}, 200)
hchat();
$(window).resize(function () {
    var ww = $(".widthwin").text();
    if (window.innerWidth != ww) {
        $(".widthwin").text(window.innerWidth);
        hchat();
        blockcenter($(".blocksms"));
        blockcenter($(".blocksuccess"));
    }
});




setInterval(function () {
    $(".alenaprint").each(function () {
        var txt = $(this).text();
        var lastIndex = txt.lastIndexOf(" ");
        ttt = txt.substring(0, lastIndex);
        point = txt.substring(lastIndex).trim();

        if (point == "...") $(this).text(ttt + " .");
        if (point == "..") $(this).text(ttt + " ...");
        if (point == ".") $(this).text(ttt + " ..");
    });
}, 200);



$("body").on("keyup", ".inpphone", function () {
    if ($(this).val() != "") {
        if ($(".inpphone").val().replace(/\D+/g, "").indexOf('78') == 0) {
            $(".inpphone").val($(".inpphone").val().replace(/\D+/g, "").slice(2));
        }
        if ($(this).val() != "") {
            $(".butphone").addClass("butphoneshow");
        }
    }
    else {
        $(".butphone").removeClass("butphoneshow");
    }
});




function blockcenter(el) {
    var w = el.outerWidth();
    var h = el.outerHeight();
    el.css("margin-top", "-" + Math.round(h / 2) + "px").css("margin-left", "-" + Math.round(w / 2) + "px");
}







function sendsms() {
    var sms = parseInt(getCookie('sms'));
    if (isNaN(sms)) sms = 0;
    if (sms < 5) {
        $(".repeatsms").html('<div class="repeatword">Повторная отправка через:</div><div class="repeattimer" s="21">00 : 21</div>');
    }

    sms++;



    document.cookie = "sms=" + sms + "; max-age=3600";

    var phone = $(".inpphone").val();

    if (phone == '' || phone === undefined) phone = $(".inpchangephone").val();
    $(".inpchangephone").val(phone);



    $(".chat, h1, .title_descr").css("opacity", "0");

    $(".smsdesc span").text(phone);

    setTimeout(function () {
        $(".chat, h1, .title_descr").hide();
        $(".blocksms").show();
        setTimeout(function () {
            $(".blocksms").addClass("blockshow");
            blockcenter($(".blocksms"));
        }, 100);
    }, 500);




    $.ajax({
        url: "sms.php",
        data: {
            phone: phone
        },
        type: 'POST',
        datatype: 'JSON',
        success: function (data) {
            data = JSON.parse(data);
            $(".butcode").attr("data-code", data.code);
        },
        error: function () {

        }
    });
}







function repeatsms() {
    var phone = $(".inpphone").val();

    $.ajax({
        url: "sms.php",
        data: {
            phone: phone
        },
        type: 'POST',
        datatype: 'JSON',
        success: function (data) {
            data = JSON.parse(data);
            $(".butcode").attr("data-code", data.code);
        },
        error: function () {
        }
    });
}




function sendorder() {
    var type_request = "Заявка с выбором автомобиля";
    var token = $(".step[data=token]").text();
    var name = $(".inpname").val();
    var phone = $(".inpphone").val();
    var auto = $(".step[data=auto]").text();
    var options = $(".step[data=options]").text();
    var term = $(".step[data=term]").text();
    var cash = $(".step[data=cash]").text();
    var callTime = $('input[name="call-time"]').length ? $('input[name="call-time"]').val() : "Сейчас";

    const data = {
        token,
        name,
        phone,
        auto,
        options,
        term,
        cash,
        callTime,
    }

    $('#only-data input').val(JSON.stringify(data));
    $('#only-data').submit();

    //test

    try {
        var salon = $(".step[data=dealer]").text();
        var ct_key = 'feedback';
        var ct_dc = null;

        if (!!phone) {
            var phone_ct = phone.replace(/[^0-9]/gim, '');
            if (phone_ct != '') {
                if (phone_ct[0] == '8') { phone_ct = phone_ct.substring(1); }
                if (phone_ct[0] == '7') { phone_ct = phone_ct.substring(1); }
                phone_ct = '7' + phone_ct;
            }
        }
    } catch (e) { }

}



setInterval(function () {
    if ($(".repeattimer").length > 0) {
        var s = parseInt($(".repeattimer").attr("s")) - 1;
        if (s > 0) {
            if (s < 10) var s1 = "0" + s;
            else var s1 = s;

            $(".repeattimer").attr("s", s).text("00 : " + s1);
        }
        else {
            $(".repeatsms").html('<button class="butrepeat">Отправить код повторно</button>');
        }
    }
}, 1000);




$(document).on("click", ".butrepeat", function () {
    if (!$(this).hasClass("butblock")) {
        $(this).addClass("butblock");

        repeatsms();

        var sms = parseInt(getCookie('sms'));
        if (isNaN(sms)) sms = 0;
        if (sms < 5) {
            $(".repeatsms").html('<div class="repeatword">Повторная отправка через:</div><div class="repeattimer" s="21">00 : 21</div>');
        }
        else $(".repeatsms").html('');

        sms++;

        document.cookie = "sms=" + sms + "; max-age=3600";


    }
});


$(document).on("keydown", ".inpcode", function (e) {
    if (e.keyCode === 13) {
        $(".butcode").click();
    }
});
$(document).on("keydown", ".inpphone", function (e) {
    if (e.keyCode === 13) {
        $(".butphone").click();
    }
});



function opensuccess() {
    $(".chat, h1, .title_descr").css("opacity", "0");
    $(".blocksms").removeClass("blockshow");
    setTimeout(function () {
        $(".chat, h1, .title_descr").hide();
        $(".blocksuccess").show();
        setTimeout(function () {
            $(".blocksuccess").addClass("blockshow");
            blockcenter($(".blocksuccess"));
        }, 10);
    }, 200);
}



$(".gradient").addClass("gradientshow");
$("h1, .title_descr").addClass("h1show1");
setTimeout(function () {
    $(".logophone").addClass("logophoneshow");
    $("h1, .title_descr").addClass("h1show2");
    $(".chat").addClass("chatshow");
    setTimeout(function () {
        $(".main").removeClass("mainshow");
    }, 700);
}, 500);




$(document).on("click", ".butlinkshow", function () {
    $(this).closest(".butslink").find(".buthide").removeClass("buthide");
    $(this).remove();
});



$(document).on("click", ".changenumber", function () {
    $(".blockcode").css("height", $(".blockcode").outerHeight());
    $(".contcode").addClass("conthide");
    setTimeout(function () {
        $(".contphone").show();
        setTimeout(function () {
            $(".contcode").hide();
            $(".contphone").addClass("contshow");
            $(".blockcode").removeAttr("style");
        }, 10);
    }, 200);
    $(this).addClass("linkhide");
});


$(".inpchangephone").inputmask("+7 (999) 999-99-99");

$(document).on("click", ".butchangephone", function () {
    $(".errorsms").hide().text("");
    var phone = $(".inpchangephone").val();
    if (phone != '') {
        $(".inpphone").val(phone);
        sendsms();

        $(".blockcode").css("height", $(".blockcode").outerHeight());
        $(".contphone").addClass("conthide");
        setTimeout(function () {
            $(".contcode").show();
            setTimeout(function () {
                $(".contphone").hide();
                $(".contcode").addClass("contshow");
                $(".blockcode").removeAttr("style");
            }, 10);
        }, 200);
        $(".changenumber").removeClass("linkhide");
    }
    else $(".errorsms").show().text("Введите номер телефона");
});



function butdisable() {
    $(".butlink").addClass("butlinkdisable2");
    $(".butphone").addClass("butlinkdisable2");
    $(".datepicker").addClass("datepickerdisable");
    $(".inpphone").prop("checked", true);
}



function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}






$(document).on("click", ".autobut", function () {
    var idgood = $(this).closest(".autolink").attr("id");
    $(".bg").stop().fadeIn(200);
    $(".wingood").addClass("wingoodshow");
    $(".contgood").removeClass("contgoodshow").removeClass("contgoodshowz");
    $(".contgood.cg" + idgood).addClass("contgoodshow").addClass("contgoodshowz");
});




$(document).mouseup(function (e) {
    var div = $(".wingood, .goodarr");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $(".wingood").removeClass("wingoodshow");
        $(".contgood").removeClass("contgoodshow").removeClass("contgoodshowz");
        $(".bg").stop().fadeOut(200);
    }
});


$(document).on("click", ".winclose", function () {
    $(".wingood").removeClass("wingoodshow");
    $(".contgood").removeClass("contgoodshow").removeClass("contgoodshowz");
    $(".bg").stop().fadeOut(200);
});




$(document).on("click", ".goodarr1", function () {
    var el0 = $(".contgoodshowz");
    var el = $(".contgoodshowz").prev();
    if (el.length == 0) el = $(".contgood:last-child");
    $(el0).removeClass("contgoodshowz");
    $(el).addClass("contgoodshow").addClass("contgoodshowz");
    setTimeout(function () {
        if (!el0.hasClass("contgoodshowz")) $(el0).removeClass("contgoodshow");
    }, 200);
});

$(document).on("click", ".goodarr2", function () {
    var el0 = $(".contgoodshowz");
    var el = $(".contgoodshowz").next();
    if (el.length == 0) el = $(".contgood:first-child");
    $(el0).removeClass("contgoodshowz");
    $(el).addClass("contgoodshow").addClass("contgoodshowz");
    setTimeout(function () {
        if (!el0.hasClass("contgoodshowz")) $(el0).removeClass("contgoodshow");
    }, 200);
});








$(document).on("click", ".autolink", function (e) {
    var div = $(".priceinfo");
    if (!div.is(e.target)) {
        $(".autolink").removeClass("goodchoice").addClass("goodopac");
        $(this).removeClass("goodopac").addClass("goodchoice");
        $(".wingood").removeClass("wingoodshow");
        $(".contgood").removeClass("contgoodshow").removeClass("contgoodshowz");
        $(".bg").stop().fadeOut(200);

        var step = $(this).attr("data-step");
        var usertext = $(this).attr("data-usertext");
        var goal = $(this).attr("data-goal");
        var mesbot = parseInt($(this).attr("data-mesbot"));
        var stepbot = parseInt($(this).attr("data-stepbot"));
        var profit = $(this).attr("data-profit");
        var price = $(this).attr("data-price");

        if ($(this).attr("data-link")) {
            $(".btn_redir").attr("href", $(this).attr("data-link"));
        }

        $(".step[data=" + step + "]").text(usertext);
        $(".step[data=profit]").text(profit);
        $(".step[data=price]").text(price);

        openmesuser(mesbot, usertext, stepbot);
    }
    else $(".autolink").not($(this)).removeClass("act");
});

$(document).on("click", ".priceinfo", function () {
    if ($(this).closest(".autolink").hasClass("act")) $(this).closest(".autolink").removeClass("act");
    else $(this).closest(".autolink").addClass("act");
});

$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".priceinfo"); // тут указываем ID элемента
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $(".autolink").removeClass("act");
    }
});


$(document).on("click", ".priceinfo2", function () {
    $(".priceinfo2").not($(this)).removeClass("act").find(".priceinfoblock").stop().fadeOut(200);
    if ($(this).hasClass("act")) $(this).removeClass("act");
    else $(this).addClass("act");
    $(this).find(".priceinfoblock").stop().fadeToggle(200);
});

$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".priceinfo2"); // тут указываем ID элемента
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $(".priceinfo2").removeClass("act");
        $(".priceinfo2 .priceinfoblock").stop().fadeOut(200);
    }
});













function timer() {
    var time_redir = 15;
    $('.time_redir').text(time_redir);
    let timer_redir = setInterval(function () {
        if (time_redir != 0) {
            time_redir--;
            $('.time_redir').text(time_redir);
        }
        else {
            window.location.replace($('.btn_redir').attr('href'));
            clearInterval(timer_redir);
        }
    }, 1000);
}




$(document).on('click', '.chatheader .advantage, .purchase__btn', function (e) {
    if ($(this).hasClass('purchase__btn')) {
        $('.blockpopup').attr('data-branch', 'purchase');
        $('.blockpopup__chat-msg.msgpopup').hide();
        $('.blockpopup__chat-msg.msgPurchase').show();
        $('.blockpopup').addClass('blockpopup-nocredit')
    } else {
        $('.blockpopup').attr('data-branch', 'popup');
        $('.blockpopup__chat-msg.msgpopup').show();
        $('.blockpopup__chat-msg.msgPurchase').hide();
    }

    var div = $(".priceinfo2");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.blockpopup__bg').addClass('blockpopup__bg-show');
        $('.popup_phone').val('');
        $('.butpopup').text('Отправить');
        setTimeout(function () {
            $('.blockpopup').addClass('blockpopup__show');
            $('.blockpopup__bg').addClass('blockpopup__bg-show2');
        }, 10);
        $(".popup_phone").inputmask("+7 (999) 999-99-99");
    }
});

$('.blockpopup__close').click(function () {
    $('.blockpopup-nocredit').removeClass('blockpopup-nocredit')
    $('.blockpopup').removeClass('blockpopup__show');
    $('.blockpopup__bg').removeClass('blockpopup__bg-show2');
    $('.popup__thanks').removeClass('popup__thanks-show');
    setTimeout(function () {
        $('.blockpopup__bg').removeClass('blockpopup__bg-show');
        $('.popup__thanks-bg').removeClass('popup__thanks-bg-show');
    }, 300);
});

$(document).on('mouseup', '.blockpopup__bg, .popup__thanks-bg', function (e) {
    var div = $(".blockpopup");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.blockpopup').removeClass('blockpopup__show');
        $('.blockpopup__bg').removeClass('blockpopup__bg-show2');
        $('.popup__thanks-bg').removeClass('popup__thanks-bg-show');
        setTimeout(function () {
            $('.popup__thanks').removeClass('popup__thanks-show');
            $('.blockpopup__bg').removeClass('blockpopup__bg-show');
        }, 300);
    }
});

$(document).on("click", ".butpopup", function () {
    const elem = $(this);
    $(".popup_phone").removeClass("inperror");
    $(this).html("Отправить").removeAttr("style");
    var phone = $(".popup_phone").val();
    var phone2 = $(".popup_phone").val().replace(/\D+/g, "");
    var count = phone2.length;
    if (phone != '' && count == 11) {
        if (
            phone2.indexOf('00000') == -1 &&
            phone2.indexOf('11111') == -1 &&
            phone2.indexOf('22222') == -1 &&
            phone2.indexOf('33333') == -1 &&
            phone2.indexOf('44444') == -1 &&
            phone2.indexOf('55555') == -1 &&
            phone2.indexOf('66666') == -1 &&
            phone2.indexOf('77777') == -1 &&
            phone2.indexOf('88888') == -1 &&
            phone2.indexOf('99999') == -1
        ) {
            if (!elem.hasClass("disabled")) {
                elem
                    .css("width", $(".butphone").outerWidth())
                    .addClass("disabled")
                    .html('<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>');
                sendorderform();
            }

        }
        else $(".popup_phone").addClass("inperror");
    }
    else $(".popup_phone").addClass("inperror");
});
$(".popup_phone").inputmask("+7 (999) 999-99-99");



function sendorderform() {
    var type_request;
    if ($('.blockpopup').attr('data-branch') == 'popup') {
        type_request = "Заявка с блока преимуществ";
    } else if ($('.blockpopup').attr('data-branch') == 'purchase') {
        type_request = "Покупка за наличные";
    } else {
        type_request = "Заявка с блока преимуществ";
    }
    var token = $(".step[data=token]").text();
    var phone = $(".popup_phone").val();

    $('#only-phone input').val(phone);
    $('#only-phone').submit();
    //test
    try {
        var salon = $(".step[data=dealer]").text();
        var ct_key = 'feedback';
        var ct_dc = null;

        if (!!phone) {
            var phone_ct = phone.replace(/[^0-9]/gim, '');
            if (phone_ct != '') {
                if (phone_ct[0] == '8') { phone_ct = phone_ct.substring(1); }
                if (phone_ct[0] == '7') { phone_ct = phone_ct.substring(1); }
                phone_ct = '7' + phone_ct;
            }
        }
    } catch (e) { }
}

$(document).on("focus", ".popup_phone", function () {
    $(this).removeClass("inperror");
});

$("body").on("keyup", ".popup_phone", function () {
    if ($(this).val() != "") {
        if ($(".popup_phone").val().replace(/\D+/g, "").indexOf('78') == 0) {
            $(".popup_phone").val($(".popup_phone").val().replace(/\D+/g, "").slice(2));
        }
        if ($(this).val() != "") {
            $(".butpopup").addClass("butpopupshow");
        }
    }
    else {
        $(".butpopup").removeClass("butpopupshow");
    }
});

function actionPopupSuccess() {
    $('.blockpopup').removeClass('blockpopup__show');
    $('.popup__thanks-bg').addClass('popup__thanks-bg-show');
    setTimeout(function () {
        $('.popup__thanks').addClass('popup__thanks-show');
    }, 20);
}


$(document).on("scroll", window, function () {
    if ($(window).scrollTop() > $('.message[data-mesbot="0"]').offset().top) {
        $('.fixed__bot').addClass('act')
    } else {
        $('.fixed__bot').removeClass('act')
    }
});

function timeInputFunc() {
    let timeInput = document.createElement("input");
    timeInput.className = "service__inp inpstyle call-input-time inptime inptext";
    timeInput.type = "text";
    timeInput.name = "call-time";
    timeInput.setAttribute("required", "");
    timeInput.placeholder = "Когда позвонить?";
    document.querySelector(".recall-call__time").after(timeInput);
}

$(document).on("click", ".recall-btn", function (e) {
    const actionType = $(this).attr("data-time");
    $(this).parent().find(".recall-btn").removeClass("active");
    $(this).addClass("active");
    if (actionType === "someday") {
        if (!$(".call-input-time").length) timeInputFunc();
    } else if (actionType === "now" && $(".call-input-time").length) {
        $(".call-input-time").remove();
    }
});
