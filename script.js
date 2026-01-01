async function fetchUserData(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: userId, name: "Alba", age: 11 });
        }, 2000);
    });
}

async function displayUserProfile(userId) {
    try {
        const user = await fetchUserData(userId);
        document.body.innerHTML += `<p>Queen: ${user.name}, Age: ${user.age}</p>`;
    } catch (error) {
        document.body.innerHTML += `<p>Error fetching data: ${error}</p>`;
    }
}

displayUserProfile(101);