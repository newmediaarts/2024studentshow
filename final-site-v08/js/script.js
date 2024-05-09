// FANCY BOX INITS
Fancybox.bind('[data-fancybox]', {}); 
Fancybox.bind('[data-fancybox="gallery"]', {}); 
Fancybox.bind('[data-fancybox="gallery-eric"]', {}); 
Fancybox.bind('[data-fancybox="gallery-megan"]', {}); 
Fancybox.bind('[data-fancybox="gallery-ian"]', {}); 
Fancybox.bind('[data-fancybox="gallery-leighna"]', {}); 
Fancybox.bind('[data-fancybox="gallery-breann"]', {}); 
Fancybox.bind('[data-fancybox="gallery-sua"]', {}); 
Fancybox.bind('[data-fancybox="gallery-emily"]', {}); 
Fancybox.bind('[data-fancybox="gallery-andrew"]', {}); 
Fancybox.bind('[data-fancybox="gallery-mari"]', {}); 
Fancybox.bind('[data-fancybox="gallery-janae"]', {});
Fancybox.bind('[data-fancybox="gallery-amanda"]', {});
Fancybox.bind('[data-fancybox="video-gallery-watch"]', {});
Fancybox.bind('[data-fancybox="practicum"]', {});
Fancybox.defaults.Hash = false;
const options = {
    Hash: false,
};

// CLOSE THE OVERLAY NAV ON LINK CLICKS
const overlaynavlinks = document.querySelectorAll(".nma-overlaynav a");
const overlaynavdetails = document.querySelector(".nma-overlaynav details");
for (let i = 0; i < overlaynavlinks.length; i++) {
    overlaynavlinks[i].onclick = function () {
        overlaynavdetails.removeAttribute('open');
    };
};