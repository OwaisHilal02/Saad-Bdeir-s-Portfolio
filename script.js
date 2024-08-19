// header scrolling effect
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("header").addClass("nav-show");
  } else {
    $("header").removeClass("nav-show");
  }
});

//hamburger
const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".nav-bar");
  const navLinks = document.querySelectorAll(".nav-bar li");

  hamburger.onclick = () => {
    navbar.classList.toggle("nav-active");

    //Animation links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });
    //hamburger animation
    hamburger.classList.toggle("toggle");
  };
};

window.onload = () => navSlide();

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("projectModal");
  const video = document.getElementById("projectVideo");
  const image = document.createElement("img"); // Create an image element
  image.id = "projectImage"; // Set an ID for the image
  image.style.display = "none"; // Hide by default, only show when needed
  const closeButton = document.querySelector(".close-modal");
  const openModalLinks = document.querySelectorAll(".open-modal");

  // Append the image to the modal-content div
  const modalContent = document.querySelector(".modal-content");
  modalContent.appendChild(image);

  // Function to open the modal and set the video or image source
  function openModal(event) {
    const videoPath = event.currentTarget.getAttribute("data-video-path");
    const imagePath = event.currentTarget.getAttribute("data-image-path");

    if (videoPath) {
      video.src = videoPath;
      video.style.display = "block"; // Show the video
      image.style.display = "none"; // Hide the image
      video.play();
    } else if (imagePath) {
      image.src = imagePath;
      image.style.display = "block"; // Show the image
      video.style.display = "none"; // Hide the video
    }

    modal.style.display = "block";
  }

  // Function to close the modal and stop the video
  function closeModal() {
    modal.style.display = "none";
    video.pause(); // Pause the video
    video.currentTime = 0; // Reset the video to the beginning
    video.src = ""; // Remove the video source
    image.src = ""; // Clear the image source
  }

  // Attach event listeners to all open modal links
  openModalLinks.forEach((link) => {
    link.addEventListener("click", openModal);
  });

  // Attach event listener to the close button
  closeButton.addEventListener("click", closeModal);

  // Close the modal if the user clicks outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});
