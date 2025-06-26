// Auth state management
let isAuthenticated = false;
let isAdmin = false;

// Get the base URL for the website
function getBaseUrl() {
  // Get the current path and remove the file name
  const path = window.location.pathname;
  const basePath = path.substring(0, path.lastIndexOf('/') + 1);
  return window.location.origin + basePath;
}

// Check authentication on every page load
async function checkAuth() {
  try {
    console.log('Starting auth check...');
    // Wait for Clerk to load
    if (!window.Clerk) {
      console.log('Waiting for Clerk to load...');
      await new Promise((resolve) => {
        window.addEventListener('load', () => {
          if (window.Clerk) resolve();
        });
      });
    }

    // Initialize Clerk if needed
    if (!Clerk.isLoaded) {
      console.log('Loading Clerk...');
      await Clerk.load();
    }

    // Get current page and path info
    const currentPath = window.location.pathname;
    const basePath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
    const currentPage = currentPath.split('/').pop();
    
    console.log('Checking user status...');
    if (!Clerk.user) {
      console.log('No user found, redirecting to auth...');
      // Only redirect to auth.html if not already on auth page
      if (currentPage !== 'auth.html') {
        window.location.href = basePath + 'auth.html';
        return false;
      }
    } else {
      console.log('User found:', Clerk.user.primaryEmailAddress?.emailAddress);
      // If user is logged in and on auth page, redirect to index
      if (currentPage === 'auth.html') {
        window.location.href = basePath + 'index.html';
        return true;
      }
    }

    // Set authentication state
    isAuthenticated = true;
    
    // Check if user is admin
    const userEmail = Clerk.user?.primaryEmailAddress?.emailAddress;
    console.log('Checking admin status for email:', userEmail);
    isAdmin = userEmail === 'ksucetsac2024@gmail.com';
    console.log('Is admin?', isAdmin);
    
    // Add admin class to body if user is admin
    if (isAdmin) {
      console.log('User is admin, updating UI...');
      document.body.classList.add('is-admin');
      
      // Show add hostel button if we're on the hostels page
      const addHostelWrapper = document.querySelector('.add-hostel-wrapper');
      if (addHostelWrapper) {
        console.log('Found add hostel wrapper, making visible');
        addHostelWrapper.style.display = 'flex';
        // Also update the button itself
        const addHostelBtn = document.querySelector('#add-hostel-btn');
        if (addHostelBtn) {
          addHostelBtn.style.display = 'flex';
        }
      } else {
        console.log('Add hostel wrapper not found');
      }
    }

    // Remove any existing user sections first
    const existingUserSections = document.querySelectorAll('.user-section, .profile-btn');
    existingUserSections.forEach(section => section.remove());

    // Add user profile button to header
    const header = document.querySelector('.site-header');
    if (header) {
      // Create profile button
      const profileBtn = document.createElement('button');
      profileBtn.className = 'profile-btn';
      profileBtn.type = 'button';
      profileBtn.innerHTML = `
        <i class="fas fa-user-circle"></i>
        <span>Profile</span>
        <div class="profile-popup">
          <div class="user-label">${isAdmin ? 'Admin' : 'User'}</div>
          <div class="user-email">${Clerk.user.primaryEmailAddress?.emailAddress || ''}</div>
          <button class="sign-out-btn"><i class="fas fa-sign-out-alt"></i> Sign Out</button>
        </div>
      `;
      // Toggle popup on click
      profileBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        profileBtn.classList.toggle('active');
      });
      // Close popup on outside click
      document.addEventListener('click', function(e) {
        if (!profileBtn.contains(e.target)) {
          profileBtn.classList.remove('active');
        }
      });
      // Close popup on Escape
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          profileBtn.classList.remove('active');
        }
      });
      // Sign out button
      profileBtn.querySelector('.sign-out-btn').onclick = async () => {
        try {
          await Clerk.signOut();
          window.location.href = basePath + 'auth.html';
        } catch (error) {
          console.error('Sign out failed:', error);
        }
      };
      // Insert profile button before nav (so it's at the far right)
      const nav = header.querySelector('.site-nav');
      if (nav) {
        header.insertBefore(profileBtn, null); // append at end
      } else {
        header.appendChild(profileBtn);
      }
    }

    // Show content
    document.documentElement.style.display = 'block';
    return true;
  } catch (error) {
    console.error('Auth check failed:', error);
    console.error('Error details:', error.message);
    const currentPath = window.location.pathname;
    const basePath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
    window.location.href = basePath + 'auth.html';
    return false;
  }
}

// Run auth check immediately
checkAuth(); 