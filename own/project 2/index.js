const url = "https://api.github.com/users/";
const serchinputEl = document.getElementById("searchInput");
const serchButtonEl = document.getElementById("search-btn");
const profileContainerEl = document.getElementById("profileContainer");
const loadingEl = document.getElementById("loading");

const generateProfile = (profile) => {
    return `        <div class="profile-box">
    <div class="top-section">
        <div class="left">
            <div class="avatar">
                <img alt="avatar" src="${profile.avatar_url}" />
            </div>
            <div class="self">
                <h1>${profile.name}</h1>
                <h1>${profile.login}</h1>
            </div>
        </div>
        <a herf="${profile.repos_url}">
        <button class="primary-btn" id="search-btn">check profile</button>
    </div>
    <div class="about">
        <h2>About</h2>
        <p>${profile.bio}</p>
    </div>
    <div class="status">
        <div class="status-item">
            <h3>followers</h3>
            <p>${profile.followers}</p>
        </div>
        <div class="status-item">
            <h3>followings</h3>
            <p>${profile.following}</p>
        </div>
        <div class="status-item">
            <h3>Repose</h3>
            <p>${profile.public_repos}</p>
        </div>
    </div>
</div>`
}


const fetchProfile = async () => {

    const username = serchinputEl.value;
    loadingEl.innerText = "Loading. . . .";
    loadingEl.style.color = "yellow";

    try {
        const res = await fetch(`${url}/${username}`);
        const data = await res.json();

        if (data.bio) {
            loadingEl.innerText = "";
            profileContainerEl.innerHTML = generateProfile(data)
        } else {
            loadingEl.innerHTML = data.message;
            loadingEl.style.color = "red";
        }
        console.log("data", data);
    }
    catch (error) {
        console.log({ error });
        loadingEl.innerText = "";
    }


};

serchButtonEl.addEventListener("click", fetchProfile);