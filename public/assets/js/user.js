function getUserInfo {
    $.get("/api/user/profile").then((user) => {
        console.log(user)

        $("#user-image").append(`<img src="${user.image}" alt="${user.first_name}" >`);
        $("#user-name").append(`${user.first_name} ${user.last_name}`);
        $("#user-contact-info").append(`Email: ${user.email}
        								Phone: ${user.phone}`);
        

    })
}
