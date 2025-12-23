// Toggle popup visibility
document.getElementById("uploadImage").addEventListener("click", function (event) {
    event.stopPropagation();
    document.getElementById("popupMenu").classList.toggle("hidden");
    document.getElementById("buttonPopup").classList.add("hidden"); // Hide camera popup if visible
});

document.getElementById("cameraImage").addEventListener("click", function (event) {
    event.stopPropagation();
    const buttonPopup = document.getElementById("buttonPopup");

    buttonPopup.classList.toggle("hidden");
    document.getElementById("popupMenu").classList.add("hidden"); // Hide file upload popup if visible

    if (!buttonPopup.classList.contains("hidden")) {
        startCamera(); // Start the camera when the popup opens
    } else {
        stopCamera(); // Stop the camera if the popup is hidden
    }
});

// Close popups when clicking outside
window.addEventListener("click", function (event) {
    const popupMenu = document.getElementById("popupMenu");
    const buttonPopup = document.getElementById("buttonPopup");

    if (!popupMenu.contains(event.target) && !buttonPopup.contains(event.target) && event.target !== document.getElementById("uploadImage") && event.target !== document.getElementById("cameraImage")) {
        popupMenu.classList.add("hidden");
        buttonPopup.classList.add("hidden");
        stopCamera();
    }
});

// Close popup when clicking on the close button
document.querySelectorAll(".close").forEach(function (element) {
    element.addEventListener("click", function () {
        this.closest(".fixed").classList.add("hidden");
        stopCamera();
    });
});

function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            const video = document.getElementById("video");
            video.srcObject = stream;
            video.play();
        })
        .catch(function (err) {
            console.error("Error accessing the camera: " + err);
        });
}

function stopCamera() {
    const video = document.getElementById("video");
    if (video.srcObject) {
        let stream = video.srcObject;
        let tracks = stream.getTracks();
        tracks.forEach(function (track) {
            track.stop();
        });
        video.srcObject = null;
    }
}

// Parallax effect on scroll
document.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    document.querySelector('.slider').style.backgroundPosition = `center ${scrollPosition * 0.5}px`; // Adjust the multiplier for the parallax effect
});
document.getElementById("snap").addEventListener("click", function () {
    // Capture the image from the video stream
    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    // Draw the video frame onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get the image data from the canvas
    const imageData = canvas.toDataURL("image/png");

    // Set the captured image in the uploadPopup
    const capturedImage = document.getElementById("capturedImage");
    capturedImage.src = imageData;

    // Show the uploadPopup
    document.getElementById("uploadPopup").classList.remove("hidden");
    document.getElementById("uploadPopup").classList.add("fixed"); // Ensure it's displayed as a fixed popup
});

// Close the upload popup when clicking on the close button
document.querySelector("#uploadPopup .close").addEventListener("click", function () {
    document.getElementById("uploadPopup").classList.add("hidden");
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector("[data-collapse-toggle='navbar-sticky']");
    const navbarMenu = document.getElementById("navbar-sticky");

    toggleButton.addEventListener("click", function () {
        const isExpanded = navbarMenu.style.display === "block";
        navbarMenu.style.display = isExpanded ? "none" : "block";
    });
});
