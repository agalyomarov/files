<?php
session_start();
$metric = file_get_contents('metric.html');
$content = file_get_contents('content.json');
$content = json_decode($content, true);
$chat = file_get_contents('chat.json');
$chat = json_decode($chat, true);
$mesbot = $chat['mesbot'];
$models = $mesbot[2]['categories'][0]['items'];
$g_model_object = [];
$g_model = isset($_GET['model']) ? $_GET['model'] : null;
$operatorPrint = $content['operator_print'];
?>
<!DOCTYPE html>
<html lang="ru">

<head>


    <link rel="icon" type="image/x-icon" href="/img/favicon.png">
    <?= $metric ?>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link rel="icon" href="#" type="image/x-icon">
    <title><?= $content['title_meta'] ?></title>
    <script src="/assets/jquery.min.js"></script>
    <script src="/assets/jquery.inputmask.bundle.min.js"></script>
    <link href="/assets/style.css" rel="stylesheet" type="text/css">
    <link href="/assets/stylemobile.css" rel="stylesheet" type="text/css">
    <style>
        .modal-success {
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1000;
        }

        .modal-success-bg {
            width: 100%;
            height: auto;
            background: #000;
            opacity: 0.4;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1000
        }

        .modal-success .modal-body {
            width: 320px;
            height: 100px;
            position: relative;
            top: calc(50% - 50px);
            left: calc(50% - 160px);
            background: #212121;
            opacity: 1;
            z-index: 1001;
            border-radius: 5px;
            padding: 15px;
            font-family: "Open Sans", sans-serif;
            font-size: 16px;
            font-weight: 400;
        }

        .modal-body .modal-close {
            position: absolute;
            top: -15px;
            right: -15px;
            background-color: #000;
            width: 27px;
            height: 27px;
            border-radius: 30px;
            background-image: url(/img/close.svg);
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
            z-index: 1002;
        }

        .salon__address {
            color: #494949;
        }
    </style>
    <script>
        const operatorPrint = "<?= $operatorPrint ?>";
        const d = <?= json_encode($chat, JSON_UNESCAPED_UNICODE) ?>;
        const g_model = "<?= $g_model ?>";
        if (g_model) {
            setTimeout(() => {
                window.scrollTo(0, document.body.scrollHeight - 800);
            }, 1000)
        }
    </script>
</head>

<body>
    <?php
    if (isset($_SESSION['modal'])) :
        unset($_SESSION['modal']);
    ?>
        <div class="modal-success">
            <div class="modal-success-bg"></div>
            <div class="modal-body">
                <div class="modal-close"></div>
                <div class="text">
                    <?= $content['thanks_modal_text'] ?>
                </div>
            </div>
        </div>
    <?php
    endif;
    ?>

    <div class="fixed-crossbrowser-background"></div>
    <div class="header logophone">
        <div class="main mainshow">
            <div class="logogrid">
                <a target="_blank">
                    <div class="logo logochery"></div>
                    <div class="logo" style="background-image:url(<?= $content['logo'] ?>)!important"></div>
                </a>
                <div class=" logotext"><?= $content['header_address'] ?></div>
            </div>
            <div class="phone phone_mw"><a href="tel:<?= $content['phone'] ?>"><?= $content['phone'] ?></a></div>
        </div>
    </div>
    <div class="main mainshow">
        <h1><?= $content['title_h1'] ?></h1>
        <div class="title_descr"><?= $content['subtitle'] ?></div>
        <div class="chat">
            <div class="chatheader">
                <div class="advantages">
                    <div class="advantage">
                        <div class="advantageimg ai1"></div>
                        <div class="advantagetext">
                            <span><?= $content['bullet_1'] ?></span>
                        </div>
                    </div>
                    <div class="advantage">
                        <div class="advantageimg ai2"></div>
                        <div class="advantagetext">
                            <span><?= $content['bullet_2'] ?></span>
                        </div>
                    </div>
                    <div class="advantage">
                        <div class="advantageimg ai3"></div>
                        <div class="advantagetext"><?= $content['bullet_3'] ?></div>
                    </div>
                </div>
            </div>
            <div class="purchase">
                <div class="purchase__btn"><?= $content['subbullet'] ?></div>
            </div>

            <div class="chatcont">
                <?php if ($g_model) : ?>
                    <div class="message mesbot" data-mesbot="0">
                        <div class="mesimg"></div>
                        <div class="mescont">
                            <div class="mestext"><?= $mesbot[0]['text'] ?></div>
                        </div>
                    </div>
                    <div class="message mesbot" data-mesbot="1">
                        <div class="mesimg"></div>
                        <div class="mescont">
                            <div class="mestext"><?= $mesbot[1]['text'] ?></div>
                        </div>
                    </div>
                    <div class="message mesbot" data-mesbot="2">
                        <div class="mesimg"></div>
                        <div class="mescont">
                            <div class="mestext"><?= $mesbot[2]['text'] ?></strong></div>
                            <div class="autoslink autoslink3">
                                <?php foreach ($models as $model) : ?>
                                    <?php if ($g_model == $model['name']) $g_model_object = $model ?>
                                    <div class="autolink goodopac" data-stepbot="3" data-mesbot="2" data-price="<?= $model['price'] ?>" data-profit="<?= $model['profit'] ?>" data-usertext="<?= $model['name'] ?>" data-step="auto" data-goal="auto">
                                        <div class="goodmark"></div>
                                        <div class="imgauto" style="background-image:url(<?= $model['img'] ?>)"></div>
                                        <div class="autoname"><?= $model['name'] ?></div>
                                        <div class="autoprice" style="display:block"><?= $model['price'] ?></div>
                                        <div class="profit"><?= $model['profit'] ?></div>
                                        <span class="profit-title">Акция</span>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                            <div class="butslink" style="margin-top: 35px;"></div>
                            <div class="autoafter">Выберите автомобиль из списка выше</div>
                        </div>
                    </div>

                    <div class="message mesuser" data-mesret="2">
                        <div class="mescont">
                            <div class="mestext"><?= $g_model ?></div>
                        </div>
                    </div>

                    <div class="message mesbot" data-mesbot="3">
                        <div class="mesimg"></div>
                        <div class="mescont">
                            <div class="autoslink autoslink3" style="margin-bottom: 30px;">
                                <div class="" data-stepbot="3" data-mesbot="2" data-price="<?= $g_model_object['price'] ?>" data-profit="<?= $g_model_object['profit'] ?>" data-usertext="<?= $g_model_object['name'] ?>" data-step="auto" data-goal="auto">
                                    <div class="goodmark"></div>
                                    <div class="imgauto" style="background-image:url(<?= $g_model_object['img'] ?>)"></div>
                                    <div class="autoname"><?= $g_model_object['name'] ?></div>
                                    <div class="autoprice" style="display:block"><?= $g_model_object['price'] ?></div>
                                    <div class="profit"><?= $g_model_object['profit'] ?></div>
                                    <span class="profit-title">Акция</span>
                                </div>
                            </div>
                            <div class="mestext">
                                <?= $mesbot[3]['text'] ?>
                                <?php
                                $all_options = $mesbot[3]['autoOptions'];
                                $options = [];
                                foreach ($all_options as $option) {
                                    if ($option['autoName'] == $g_model_object['name']) {
                                        $options = $option;
                                    }
                                }

                                ?>
                                <div class="butslinkk">
                                    <?php
                                    $option_number = 1;
                                    foreach ($options['options'] as $option) {
                                    ?>
                                        <label for="autoOption<?= $option_number ?>" class="cash2" id="<?= $options['autoId'] ?>" data-stepbot="4" data-mesbot="3" data-step="options" data-goal="options" style="margin-right:10px">
                                            <input class="checkbox__choose auto_option" id="autoOption<?= $option_number ?>" type="checkbox" value="<?= $option['optionName'] ?>">
                                            <label for="autoOption<?= $option_number ?>" class="agreement-label"><?= $option['optionName'] ?></label>
                                        </label>
                                    <?php
                                        $option_number++;
                                    };
                                    ?>
                                </div>
                            </div>
                            <div class="butslink butlink-for-options">
                                <div class="butlink" data-stepbot="4" data-goal="options" data-mesbot="3">Продолжить</div>
                            </div>
                        </div>
                    </div>

                <?php endif; ?>

            </div>

        </div>
        <div class="fixed__bot">
            <div class="fixed__botitem">
                <div class="mesimg"></div>
                <div class="bot__stats">
                    <div class="bot__name">Ольга</div>
                    <div class="bot__post"><?= $content['operator_description'] ?></div>
                </div>
                <a class="fixed__phone" href="tel:<?= $content['phone'] ?>">
                    <div class="fixed__btn">
                        <span class="fixed__text">Позвонить:<?= $content['phone'] ?></span>
                        <span class="fixed__ph phone_mw"></span>
                    </div>
                </a>
            </div>
        </div>
        <div class="blocksuccess">
            <div class="icosuccess"></div>
            <div class="smshead">Ваша заявка принята!<br> Мы скоро свяжемся с Вами</div>
            <div class="smsdesc">Через <span class="time_redir">15</span> секунд Вы автоматически перейдете на основной
                сайт. Для прямого перехода нажмите на кнопку "Перейти на основной сайт"</div>
            <div class="blockbutton">
                <a href="#" class="btn_redir">Перейти на основной сайт</a>
            </div>
        </div>
    </div>
    <div class="blockpopup__bg">
        <div class="blockpopup">
            <div class="blockpopup__close"></div>
            <div class="blockpopup__add chatheader">
                <div class="blockpopup__add-img"></div>
                <div class="blockpopup__add-text">
                    <div class="konsul__name">Ольга</div>
                    <div class="konsul_pos"><?= $content['operator_description'] ?></div>
                </div>
            </div>
            <div class="blockpopup__chat">
                <div class="msgpopup"></div>
                <div class="blockpopup__chat-msg msgpopup mestext">Здравствуйте!<br>
                    Напишите свой номер и я подробно расскажу обо всех доступных преимуществах от BAIC и нашего салона.</div>
                <div class="blockpopup__chat-msg mestext msgPurchase">Здравствуйте!<br> Напишите свой номер и я подробно расскажу обо всех доступных преимуществах от BAIC и нашего салона.</div>
                <div class="msgpopup butslink">
                    <input class="inptext popup_phone" type="text" placeholder="+7 (___) ___-__-__">
                    <div class="divbutphone"><button class="butpopup">Отправить</button>
                        <div class="error errorphone"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup__thanks-bg">
        <div class="popup__thanks">
            <div class="blockpopup__close"></div>
            <div class="popup__thanks-img icosuccess"></div>
            <div class="popup__thanks-title smshead">Спасибо!</div>
            <div class="popup__thanks-desc smsdesc">Ваша заявка принята <br> Мы скоро свяжемся с Вами.</div>
        </div>
    </div>
    <div class="salon__address">
        <?= $content['ooo'] ?><br>
        <?= $content['address'] ?><br>
        <a target="_blank" href="/img/privacy-policy.pdf" class="kik">Соглашение на обработку персональных данных</a>
    </div>
    <div class="widthwin"></div>
    <div class="step" data="token"></div>
    <div class="step" data="auto"><?= isset($g_model_object['name']) ? $g_model_object['name'] : "" ?></div>
    <div class="step" data="profit"><?= isset($g_model_object['profit']) ? $g_model_object['profit'] : "" ?></div>
    <div class="step" data="price"><?= isset($g_model_object['price']) ? $g_model_object['price'] : "" ?></div>
    <div class="step" data="options"></div>
    <div class="step" data="term"></div>
    <div class="step" data="cash"></div>
    <form style="display:none;" id="only-phone" action="./order.php" method="post">
        <input type="text" name="phone">
    </form>
    <form style="display:none;" id="only-data" action="./order.php" method="post">
        <input type="text" name="data">
    </form>
    <script type="text/javascript" src="/assets/script1.js"> </script>
    <!-- <script>
        setInterval(() => {
            $('.modal-success').attr('style', `height:${$(document).height() }px`)
        }, 500)
    </script> -->
    <script>
        $('.modal-success-bg,.modal-close').click(() => {
            $('.modal-success').hide();
        })
    </script>
</body>

</html>