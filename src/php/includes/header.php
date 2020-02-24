<nav class="navbar navbar-toggleable-md">
    <div class="row">
        <button class="navbar-toggler hamburguesa" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
            <i class="fa fa-bars fa-2x tl-red"></i>
        </button>
        <h2 class="hidden-sm-up mt-3">TrophyLeagues</h2>
    </div>
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav">
            <!-- <li class="nav-item">
                <a class="nav-link" href="http://forum.trophyleagues.com"><?php echo MENU_FORUM; ?></a>
            </li> -->
            <li class="nav-item mr-5">
                <a class="nav-link" href="<?php echo isset($_GET['lang']) ? '/' . $_GET['lang'] : ''; ?>/#about"><?php echo MENU_ABOUT; ?></a>
            </li>
            <li class="hidden-sm-down nav-item logo-place">
                <a href="/"><img src="/img/isologo.png" id="shield"/></a>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link" href="#"><?php echo MENU_COOP; ?></a>
            </li> -->
            <li class="nav-item">
                <a class="nav-link" href="<?php echo isset($_GET['lang']) ? '/' . $_GET['lang'] : ''; ?>/#news"><?php echo MENU_NEWS; ?> </a>
            </li>
        </ul>
    </div>
</nav>
<div id="lang-switcher">
    <ul>
        <li class="<?php echo isset($_GET['lang']) && $_GET['lang'] === 'en' ? 'active' : ''; ?>">
            <a href="http://trophyleagues.com/" title="English">English</a>
        </li>
        <li <?php echo isset($_GET['lang']) && $_GET['lang'] === 'es' ? 'class="active"' : ''; ?>>
            <a href="http://trophyleagues.com/es/" title="Español">Español</a>
        </li>
        <li <?php echo isset($_GET['lang']) && $_GET['lang'] === 'it' ? 'class="active"' : ''; ?>>
            <a href="http://trophyleagues.com/it/" title="Italiano">Italiano</a>
        </li>
        <li class="last <?php echo isset($_GET['lang']) && $_GET['lang'] === 'cat' ? 'active' : ''; ?>">
            <a href="http://trophyleagues.com/cat/" title="Català">Català</a>
        </li>
    </ul>
</div>
