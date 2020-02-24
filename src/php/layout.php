<?php

require_once(__DIR__ . '/lang.php');
require_once(__DIR__ . '/config.php');

?>
<!DOCTYPE html>
<html>
<head>
    <title><?php echo TITLE_INDEX; ?></title>
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="<?php echo DESCRIPTION_INDEX; ?>">
    <meta name="keywords" content="<?php echo KEYWORDS_INDEX; ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:400,800">
    <link rel='stylesheet' href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/css/bootstrap.css">
    <link rel="stylesheet" href="/css/style.css">
    <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
    <style type="text/css">
        #mc_embed_signup {
            background: #fff;
            clear: left;
            font: 14px Helvetica, Arial, sans-serif;
        }

        div#svgWrapper {
            display: block;
        }
    </style>
    <script>
        function confirm() {
            document.getElementById("confirm").innerHTML = "<?php echo FORM_CONFIRM; ?>";
        }
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-134811124-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-134811124-1');
    </script>

</head>
<body>
<div id="trophy">
    <?php
    require_once(__DIR__ . '/includes/header.php');

    /** Content (It must exist in the /pages folder!) */
    require_once(__DIR__ . '/pages/' . (isset($content) && $content !== '' ? $content : 'home') . '.php');

    require_once(__DIR__ . '/includes/footer.php');
    ?>

    <!-- Base JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="/js/tether.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>

    <!-- Contact Form JavaScript -->
    <script src="/js/jqBootstrapValidation.js"></script>
    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>

    <!-- Cookies -->
    <script src="/js/cookies-message.min.js"></script>

    <script type='text/javascript'>
        (
            function ($) {
                window.fnames = new Array();
                window.ftypes = new Array();
                fnames[0]     = 'EMAIL';
                ftypes[0]     = 'email';
                fnames[1]     = 'FNAME';
                ftypes[1]     = 'text';
                fnames[2]     = 'LNAME';
                ftypes[2]     = 'text';
                fnames[3]     = 'ADDRESS';
                ftypes[3]     = 'address';
                fnames[4]     = 'PHONE';
                ftypes[4]     = 'phone';
                fnames[5]     = 'BIRTHDAY';
                ftypes[5]     = 'birthday';

                $.CookiesMessage(
                    {
                        messageText: "<?php echo COOKIES_TEXT; ?>",
                        messageBg: "#151515",
                        messageColor: "#FFFFFF",
                        messageLinkColor: "#F0FFAA",
                        closeEnable: true,
                        closeColor: "#444444",
                        closeBgColor: "#000000",
                        acceptEnable: true,
                        acceptText: "<?php echo COOKIES_OK; ?>",
                        infoEnable: true,
                        infoText: "<?php echo COOKIES_INFO; ?>",
                        infoUrl: "http://trophyleagues.com/es/politica-de-cookies/",
                        cookieExpire: 180
                    }
                );
            }(jQuery));
        var $mcj = jQuery.noConflict(true);
    </script>
</body>
</html>
