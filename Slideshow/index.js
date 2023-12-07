let slideIndex = 0;
let slideshowInterval;
let slideshowRunning = false;

const images = [
    "https://th.bing.com/th/id/R.90747403936eff0115e8d59a90ac3088?rik=3gKU%2bbs7JR%2bosA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f04%2fFree-download-minimalist-wallpapers-HD.jpg&ehk=xws84ZNsQgxxMVNVRB7tpaPweVmKeS3X0iIMx1asDj8%3d&risl=&pid=ImgRaw&r=0",
    "https://wallpaperaccess.com/full/568191.png",
    "https://wallpapers.com/images/featured/7xpryajznty61ra3.jpg",
    "https://th.bing.com/th/id/OIP.Uz7uyVE1DQ2WxlOOpjaH7QHaEo?rs=1&pid=ImgDetMain",
    "https://images5.alphacoders.com/438/438463.png",
    "https://th.bing.com/th/id/R.cd9aa762dcd26f7cc62082346f768754?rik=yrmz3Sb%2bMNcwEg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fMinimalist-Wallpaper-Download-Free.jpg&ehk=oLv%2fOnuXPs4yw2AE0OO66aqCxiQyD%2bwoXkZx2hZ%2fmQE%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.N2mID3mF6uRvo5yxYo5QlwHaEK?rs=1&pid=ImgDetMain",
    "https://wallpapercave.com/wp/wp7008640.jpg",
    "https://th.bing.com/th/id/OIP.I5CooRaYihGPSQ4vfnnZtgHaEK?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.Es6_4gk8_-PCtPyJodS52QHaEK?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/R.a19b36b3dedd8674821b1df3235555d2?rik=arDGDCzuE9aPsw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f04%2fMinimalism-sky-clouds-sun-mountains-lake-landscape-wallpapers-1920x1080.jpg&ehk=XkyaBC27D4IYZba8kzgc8N1i7FS4XC6szV7das2RyEs%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.g1mNtLIg8sAkIVke1_KTSAHaEo?pid=ImgDet&w=474&h=296&rs=1",
    "https://th.bing.com/th/id/R.42391161050c05654b15be0ad76c582a?rik=fC9XEIn7CjH4lQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f04%2fMinimalist-wallpapers-HD.png&ehk=XJ5VyolUv7x67X2XwM9%2f1wFumPAMHWIFtMQ57wycdxg%3d&risl=&pid=ImgRaw&r=0",
    "https://images.wallpapersden.com/image/download/batman-flat-design-minimal-4k_bGxsbWiUmZqaraWkpJRoZmdlrWZpaWU.jpg",
    "https://th.bing.com/th/id/OIP.LIL2eEANqdLbanOnv1kEqgHaEK?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/R.b63838fde6a7fc5b1df6d2834ebf60eb?rik=%2bvMjABsP5j787g&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f04%2fMinimalism-circles-reflections-light-dark-intuition-wallpapers-1920x1080.jpg&ehk=TZ89V7SLNn8FXnoV5ovbm9YvcUUISWo3kj%2bxzTVAXrk%3d&risl=&pid=ImgRaw&r=0",
    "https://wallpaper.dog/large/20492384.jpg",
    "https://th.bing.com/th/id/OIP.wdpRY_zQazjm5GUJ0Lk1JgHaEK?pid=ImgDet&w=174&h=108.74999999999999&c=7&dpr=1.3",
    "https://www.wallpapertip.com/wmimgs/104-1043054_minimalist-desktop-wallpaper-hd.jpg",
    "https://th.bing.com/th/id/OIP.ygJ4ZxskaQcXd-BPCk8bZAHaEK?rs=1&pid=ImgDetMain",
    "https://images6.alphacoders.com/400/400643.png",
];

function createSlides() {
    const slideshowContainer = document.getElementById('slideshow-container');

    images.forEach(imageUrl => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Slide';
        slide.appendChild(img);
        slideshowContainer.appendChild(slide);
    });
}

function startSlideshow() {
    slideshowRunning = true;
    showSlide(slideIndex);
    slideshowInterval = setInterval(() => {
        slideIndex = (slideIndex + 1) % images.length;
        showSlide(slideIndex);
    }, 2000);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function toggleSlideshow() {
    if (slideshowRunning) {
        slideshowRunning = false;
        clearInterval(slideshowInterval);
        document.getElementById('startStopBtn').innerText = 'Start Slideshow';
    } else {
        startSlideshow();
        document.getElementById('startStopBtn').innerText = 'Stop Slideshow';
    }
}

function prevSlide() {
    slideshowRunning = false;
    clearInterval(slideshowInterval);
    slideIndex = (slideIndex - 1 + images.length) % images.length;
    showSlide(slideIndex);
}

function nextSlide() {
    slideshowRunning = false;
    clearInterval(slideshowInterval);
    slideIndex = (slideIndex + 1) % images.length;
    showSlide(slideIndex);
}

createSlides();
startSlideshow(); 