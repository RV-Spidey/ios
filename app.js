const isIphone = /iPhone/i.test(navigator.userAgent);
    
    if (!isIphone) {
      alert('This website is only accessible on iPhones.');
      window.location.href = 'https://your-other-url.com'; // Redirect to another page
    } else {
      console.log('Welcome, iPhone user!');
    }


let ip; // Variable to store the IP address

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    ip = data.ip; // Store the IP address in the variable
    console.log("Visitor's IP:", ip); // Log it for testing
    sendEmail(); // Call sendEmail after the IP is fetched
  })
  .catch(error => {
    console.error('Error fetching IP address:', error);
  });

function sendEmail() {
  const user1 = localStorage.getItem('userName') || 'Guest';
  Email.send({
      SecureToken: "2cb791fa-2538-4ce4-a6ba-1380e89fdce3", // Make sure this token is valid
      To: 'killerkingmega10@gmail.com',
      From: "killerkingmega10@gmail.com",
      Subject: "Someone visited your website",
      Body: `${user1} visited your page. Visitor's IP: ${ip}`
  })
  .then(function (message) {
      console.log("Email sent successfully: " + message);
  })
  .catch(function (error) {
      console.log("Error sending email: " + error);
  });
}

// Sidebar toggle functions (unchanged)
function toggleSidebar() {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
    closeAllSubMenus();
}

function toggleSubMenu(button) {
    if (!button.nextElementSibling.classList.contains('show')) {
        closeAllSubMenus();
    }

    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');

    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close');
        toggleButton.classList.toggle('rotate');
    }
}

document.addEventListener("DOMContentLoaded", function() {
  // Select all submenu links
  const submenuLinks = document.querySelectorAll("#sidebar .sub-menu a");

  // Add click event to each submenu link
  submenuLinks.forEach(link => {
    link.addEventListener("click", function() {
      // Remove 'active' class from all submenu links
      submenuLinks.forEach(item => item.classList.remove("active"));

      // Add 'active' class to the clicked link
      this.classList.add("active");
    });
  });
});



function showVideo(videoId) {
  console.log('Showing video with ID:', videoId);

  const videos = document.querySelectorAll('#video-container .video');

  videos.forEach(video => {
    video.style.display = 'none';
  });

  const selectedVideo = document.getElementById(videoId);
  if (selectedVideo) {
    selectedVideo.style.display = 'block';
    const iframe = selectedVideo.querySelector('iframe');
    if (iframe) {
      iframe.src = iframe.dataset.src; // Set src directly from data-src attribute
      console.log('Setting iframe src to:', iframe.src);
    }
  }
}

function closeAllSubMenus() {
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate');
    });
}


document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
