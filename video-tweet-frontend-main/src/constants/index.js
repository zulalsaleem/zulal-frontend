//export const API_BASE_URL = "https://video-tweet.onrender.com/api/v1";

fetch("http://localhost:8000/api/v1/user/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    credentials: "include", // VERY IMPORTANT
    body: JSON.stringify({
        email,
        password
    })
})