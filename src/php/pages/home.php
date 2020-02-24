<!-- WELCOME -->
<div class="container-fluid mt-3">
    <div class="trophy-content row pt-3 text-center mt-3" id="top">
        <!-- CONTACT FORM -->
        <div class="col-md-5 offset-md-2 col-xs-12 text-center">
            <form name="register" id="registerForm" method="POST" class="p-3" action="/php/register.php">
                <h2 class="text-center text-uppercase mt-2 mb-3 tl-red"><?php echo TITLE_REGISTER; ?></h2>
                <hr class="star-dark tl-red mb-5">
                <div class="control-group">
                    <?php
                    if (isset($_GET['register']) && $_GET['register'] === 'failure') {
                        echo '<div class="alert alert-danger m-0 p-0 border-0" role="alert" id="confirm">Hubo un error en tu registro.</div>';
                    } elseif (isset($_GET['register']) && $_GET['register'] === 'success') {
                        echo '<div class="alert alert-success m-0 p-0 border-0" role="alert" id="confirm">' . FORM_CONFIRM . '</div>';
                    }
                    ?>
                    <div class="form-group floating-label-form-group controls p-0 m-0">
                        <input class="form-control" name="name" id="name" type="text" placeholder="<?php echo NAME; ?>"
                               required="required" data-validation-required-message="No ingresaste tu nombre.">
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <div class="control-group">
                    <div class="form-group floating-label-form-group controls mb-0">
                        <input class="form-control" name="email" id="email" type="email"
                               placeholder="<?php echo EMAIL; ?>" required="required"
                               data-validation-required-message="No ingresaste tu email.">
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <div class="control-group country">
                    <label for="selectCountry"></label>
                    <select class="form-control" id="selectCountry" name="country" required>
                        <option value="" disabled selected><?php echo COUNTRY; ?></option>
                        <option value="catalonia">Catalunya</option>
                        <?php
                        $query  = "SELECT * from country ORDER BY country ASC;";
                        $result = mysqli_query($mysqli, $query);
                        while ($row = mysqli_fetch_array($result)) {
                            echo '<option>' . $row['country'] . '</option>';
                        }
                        ?>
                    </select>
                </div>
                <div class="custom-control custom-checkbox mb-1">
                    <input type="checkbox" class="check-terms m-1" id="terms" required>
                    <label class="terms-label" for="terms"><?php echo FORM_TERMS; ?></label>
                    <div class="invalid-feedback"></div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-lg btn-primary btn-block"
                            id="registerButton"><?php echo SEND; ?></button>
                </div>
                <br>
            </form>
        </div>
        <div class="hidden-sm-down col-md-5 text-left">
            <img src="/img/betasign.gif" class="mt-1 w-50"/>
        </div>
    </div>
</div>

<!-- Curvas SVG y ABOUT -->
<div class="trophy-about">
    <!--[if IE]>
    <style type="text/css">
        div#svgWrapper {
            display: none !important;
        }
    </style>
    <![endif]-->
    <div class="hidden-sm-down svgWrapper">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 1280 310.6"
             style="enable-background:new 0 0 1280 310.6;" xml:space="preserve">
  <style type="text/css">
      .st0 {
          fill: url(#SVGID_1_);
      }

      .st1 {
          fill: url(#SVGID_2_);
      }
  </style>
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="1269.7673" y1="78.7231" x2="213.8242"
                            y2="127.0869">
                <stop offset="0" style="stop-color:#015B96"/>
                <stop offset="1" style="stop-color:#004A7A"/>
            </linearGradient>
            <path class="st0"
                  d="M652.5,234.9c325.1,13.6,595-46,627.1-57.3l-0.1-109c0,0-92.3,35.5-138.7,50.7c-49.3,16.1-99.2,30.1-149.7,41.9  c-0.6,0.1-1.3,0.3-1.9,0.4c-209.3,48.6-420.1,55.9-630.2,6.7C227.5,137.4,101.6,88.8,0,0c0,6.9,0,17.8,0,17.8v-0.7  C114.2,125.6,326.3,221.2,652.5,234.9z"/>
            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="1235.983" y1="277.1135" x2="117.1407"
                            y2="117.6649">
                <stop offset="0" style="stop-color:#39B2CE"/>
                <stop offset="1" style="stop-color:#2E8395"/>
            </linearGradient>
            <path class="st1"
                  d="M1279.7,177.5c-32.1,11.3-302,70.9-627.1,57.3C326.3,221.2,114.2,125.6,0,17.2v0.7v47.5  c50,53.9,117.5,93.6,185.4,123.3c197.3,86.2,416.1,110.8,631.3,116.1c154.7,3.8,308.2-1.8,463.2,0.5V177.4  C1279.9,177.5,1279.8,177.5,1279.7,177.5z"/>
    </svg>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 mr-auto mt-5">
                <img src="/img/img-about.png" width="100%" class="hidden-sm-down"/>
            </div>
            <div class="col-lg-6 text-center ml-auto tl-black" id="about">
                <h2 class="text-center text-uppercase tl-gray-2 mt-5"><?php echo TITLE_ABOUT; ?></h2>
                <hr class="star-dark tl-red">
                <p class="lead"><?php echo ABOUT_DESCRIPTION; ?></p>
            </div>
        </div>
        <div class="text-center mt-4 p-2">
            <p class="tl-gray-2"><b>
                    <?php echo ABOUT_ACTION; ?></b></p>
            </a>
        </div>
    </div>
</div>
</div>
</div>

<!-- FIN Curvas SVG y ABOUT -->

<!-- NEWS -->
<div class="trophy-news" id="news">
    <div class="container text-center">
        <h2 class="text-uppercase tl-gray-2 pt-5"><?php echo TITLE_NEWS; ?></h2>
        <hr class="star-dark tl-red"/>
        <h4 class="text-uppercase tl-blue"><p><?php echo NEWS_DESCRIPTION; ?></p></h4>
        <form action="https://trophyleagues.us19.list-manage.com/subscribe/post?u=20540866651dfc3768f7586c9&amp;id=5bac0d8753"
              method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
              target="_blank" novalidate>
            <div class="form-group row pt-lg-5 pb-lg-5 pt-5">
                <div class="col-sm-12 col-md-5 offset-md-2">
                    <input type="email" value="" name="EMAIL" class="required email form-control mb-4" id="mce-EMAIL"
                           aria-describedby="emailHelp" placeholder="<?php echo MAILING_TEXT; ?>">
                </div>
                <div class="col-sm-12 col-md-3">
                    <button type="submit" class="btn btn-danger btn-block text-uppercase bg-danger mt-0"
                            value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
                            onclick="confirm()"><?php echo SUBSCRIBE; ?></button>
                    <div class="alert alert-success m-0 p-0 border-0" role="alert" id="confirm"></div>
                </div>
            </div>
        </form>
    </div>
</div>

<!-- FIN NEWS -->
<!-- Iconos venta para web -->
<div class="trophy-block hidden-sm-down">
    <div class="container">
        <div class="row">
            <div class="col-md-4 text-center tl-red">
                <i class="fa fa-gamepad fa-4x tl-red"></i>
                <p><?php echo PROMO_PLAY; ?></p>
            </div>
            <div class="col-md-4 text-center tl-red">
                <i class="fa fa-sitemap fa-4x"></i>
                <p><?php echo PROMO_RACE; ?></p>
            </div>
            <div class="col-md-4 text-center tl-red">
                <i class="fa fa-line-chart fa-4x tl-red"></i>
                <p><?php echo PROMO_GROW; ?></p>
            </div>
        </div>
    </div>
</div>
<!-- Iconos venta Mobile -->
<div class="carousel slide trophy-block hidden-md-up m-5" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active text-left tl-red">
            <i class="fa fa-gamepad fa-4x m-4 fa-4x tl-red"></i>
            <p class="mt-3"><?php echo PROMO_PLAY_2; ?></p>
        </div>
        <div class="carousel-item text-left tl-red">
            <i class="fa fa-sitemap fa-4x m-4 fa-4x tl-red"></i>
            <p class="mt-4"><?php echo PROMO_RACE; ?></p>
        </div>
        <div class="carousel-item text-left tl-red">
            <i class="fa fa-line-chart m-4 fa-4x tl-red"></i><br/>
            <p class="mt-3"><?php echo PROMO_GROW_2; ?></p>
        </div>
    </div>
</div>

<!-- FORUM -->
<div class="trophy-forum" id="forum">
    <div class="container text-center">
        <h2 class="text-center text-uppercase tl-white"><?php echo TITLE_FORUM; ?></h2>
        <hr class="star-dark tl-red">
        <p><?php echo FORUM_DESCRIPTION; ?></p>
        <button type="submit" class="btn bg-inverse text-white"
                onclick="location.href='http://forum.trophyleagues.com'"><?php echo FORUM_JOIN; ?></button>
    </div>
</div>
