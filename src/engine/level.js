class Level {
    static preload = (images) => new Promise((resolve) => {
        let loaded = true;

        const checkPreload = (imageKey) => {
            if (!images[imageKey].loaded) loaded = false;
        }

        Object.keys(images).forEach(checkPreload);

        if (loaded) resolve(true);
    });
}