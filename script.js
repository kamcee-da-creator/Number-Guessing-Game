// const kinde = await createKindeClient({
//     client_id: "7b1d7ef005a64c3e8469a6f61d303a38",
//     domain: "https://kamcee.kinde.com",
//     redirect_uri: "http://localhost:3000"
//     });
// import createKindeClient from "@kinde-oss/kinde-auth-pkce-js";

import createKindeClient from './@kinde-oss/kinde-auth-pkce-js/';

async function setupKinde() {
    const kinde = await createKindeClient({
        client_id: "7b1d7ef005a64c3e8469a6f61d303a38",
        domain: "https://kamcee.kinde.com",
        redirect_uri: "http://localhost:5501"
    });

    document.getElementById('login').addEventListener('click', async () => {
        await kinde.login();
    });

    document.getElementById('register').addEventListener('click', async () => {
        await kinde.register();
    });

    document.getElementById('logout').addEventListener('click', async () => {
        await kinde.logout();
        toggleView();
    });

    try {
        const token = await kinde.getToken();
        if (token) {
            toggleView(true);
        }
    } catch (error) {
        console.error('Authentication error:', error);
    }
}

function toggleView(isLoggedIn = false) {
    const loggedOutView = document.getElementById('logged_out_view');
    const loggedInView = document.getElementById('logged_in_view');
    if (isLoggedIn) {
        loggedOutView.style.display = 'none';
        loggedInView.style.display = 'block';
    } else {
        loggedOutView.style.display = 'block';
        loggedInView.style.display = 'none';
    }
}

setupKinde();
