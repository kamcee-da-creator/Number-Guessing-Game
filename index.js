// import createKindeClient from './node_modules/@kinde-oss/kinde-auth-pkce-js/';
import createKindeClient from '@kinde-oss/kinde-auth-pkce-js';
// import createKindeClient from "/node_modules/@kinde-oss/kinde-auth-pkce-js/dist/kinde-auth-pkce-js.esm.js";

async function setupKinde() {
  const kinde = await createKindeClient({
    client_id: "7b1d7ef005a64c3e8469a6f61d303a38",
    domain: "https://kamcee.kinde.com",
    redirect_uri: window.location.origin + "/callback",
  });

  document.getElementById("login").addEventListener("click", async () => {
    await kinde.login();
  });

  document.getElementById("register").addEventListener("click", async () => {
    await kinde.register();
  });

  document.getElementById("logout").addEventListener("click", async () => {
    await kinde.logout();
    toggleView();
  });

  try {
    const token = await kinde.getToken();
    if (token) {
      const userDetails = await kinde.getUser(); // Correct method to fetch user details
      displayUserDetails(userDetails); // Display user details function
      toggleView(true);
    }
  } catch (error) {
    console.error("Authentication error:", error);
  }
}

function displayUserDetails(userDetails) {
  document.getElementById("user-name").textContent = userDetails.given_name + " " + userDetails.family_name; // Assuming the user object has these properties
  document.getElementById("user-email").textContent = userDetails.email;
  if (userDetails.picture) {
    document.getElementById("user-img").src = userDetails.picture;
  }
}

function toggleView(isLoggedIn = false) {
  const loggedOutView = document.getElementById("logged_out_view");
  const loggedInView = document.getElementById("logged_in_view");
  if (isLoggedIn) {
    loggedOutView.style.display = "none";
    loggedInView.style.display = "block";
  } else {
    loggedOutView.style.display = "block";
    loggedInView.style.display = "none";
  }
}

setupKinde();
