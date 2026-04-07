const slideshows = document.querySelectorAll(".slideshow, .slideshow-1280x1000");
slideshows.forEach(slideshow => {
    const imgs = slideshow.querySelectorAll("img");
    let index = 0;

    // první obrázek viditelný
    imgs[0].style.opacity = 1;

    setInterval(() => {
        imgs[index].style.opacity = 0;

        index = (index + 1) % imgs.length;

        imgs[index].style.opacity = 1;
    }, 1000);
});