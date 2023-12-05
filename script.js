let currentImageIndex = 1;
const totalImages = 5;

function featuredImages() {
    const container = document.getElementById('image-container');
    const featuredImage = document.getElementById('featured-Images');
    const nextImageIndex = (currentImageIndex % totalImages) + 1;

   
    const nextImage = new Image();
    nextImage.src = `/Styles/Images/Featured${nextImageIndex}.png`;

    
    container.style.position = 'relative';

    
    container.appendChild(nextImage);

   
    nextImage.onload = function () {
        nextImage.style.position = 'absolute';
        nextImage.style.top = '0';
        nextImage.style.left = '0';
        nextImage.style.transition = 'opacity 1s ease-in';
        nextImage.style.opacity = 1;

        
        featuredImage.src = nextImage.src;

        
        setTimeout(() => {
            container.removeChild(nextImage);

            
            currentImageIndex = nextImageIndex;
        }, 6000);
    };
}

setInterval(featuredImages, 3000);





function openVideo(videoSource) {
    
    const videoElement = document.createElement('video');
    videoElement.controls = true;
    videoElement.src = videoSource;

   
    videoElement.play();

   
    document.body.appendChild(videoElement);

    
    if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) { 
        videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) { 
        videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) { 
        videoElement.msRequestFullscreen();
    }

   
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    function handleFullscreenChange() {
        if (!document.fullscreenElement &&
            !document.webkitFullscreenElement &&
            !document.mozFullScreenElement &&
            !document.msFullscreenElement) {
            document.body.removeChild(videoElement);

            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
        }
    }
}


function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
}

