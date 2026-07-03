document.addEventListener("DOMContentLoaded", () => {

    const slideshows = document.querySelectorAll(".slideshow, .slideshow-1280x1000, .slideshow-1280x1080");

    slideshows.forEach(slideshow => {
        const imgs = slideshow.querySelectorAll("img");

        if (imgs.length === 0) return;

        let index = 0;

        // schovat všechny
        imgs.forEach(img => img.style.opacity = 0);

        // první viditelný
        imgs[0].style.opacity = 1;

        setInterval(() => {
            imgs[index].style.opacity = 0;

            index = (index + 1) % imgs.length;

            imgs[index].style.opacity = 1;
        }, 1000);
    });

});
