(() => {

    let engine = new Game(100, 0);

    let menu = new Menu();
    let open = new LogoOpen();
    let preload = new OpenLoadingScreen();
    let deathCene = new DeathWelcome();

    let level1 = new Level1();

    engine.loadLevels([
        // preload,
        menu,
        // deathCene,
        // level1,
    ]);

    engine.start();

})();