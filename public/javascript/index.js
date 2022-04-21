const charactersAPI = new APIHandler("https://minions-api.herokuapp.com");

window.addEventListener("load", () => {
    //--------------- ALL CHARACTERS----------------//
    document
        .getElementById("fetch-all")
        .addEventListener("click", function (event) {
            let text = "";
            charactersAPI
                .getFullList()
                .then(({ data }) => {
                    data.forEach((element) => {
                        // console.log(element);
                        text += `<div class="character-info">
                         <div class="id">${element.id}</div>
                        <div class="name">Name:   ${element.name}</div>
                        <div class="occupation">Occupation:   ${element.occupation}</div>
                        <div class="cartoon">Cartoon:   ${element.cartoon}</div>
                        <div class="weapon">Weapon:   ${element.weepon}</div>
                        </div>`;
                    });

                    document.querySelector(".characters-container").innerHTML =
                        text;
                })
                .catch((err) => console.log(err));
        });

    //--------------- ONE CHARACTERS----------------//

    document
        .getElementById("fetch-one")
        .addEventListener("click", function (event) {
            let id = document.querySelector("input[name='character-id']").value;

            text = "";

            console.log(id);

            charactersAPI
                .getOneRegister(id)

                .then(({ data }) => {
                    console.log(data);

                    text += `<div class="character-info">
                         <div class="id">${data.id}</div>
                        <div class="name">Name:   ${data.name}</div>
                        <div class="occupation">Occupation:   ${data.occupation}</div>
                        <div class="cartoon">Cartoon:   ${data.cartoon}</div>
                        <div class="weapon">Weapon:   ${data.weepon}</div>
                        </div>`;

                    document.querySelector(".characters-container").innerHTML =
                        text;
                })
                .catch((err) => console.log(err));
        });

    //--------------- DELET CHARACTERS----------------//

    document
        .getElementById("delete-one")
        .addEventListener("click", function (event) {
            let id = document.querySelector(
                "input[name='character-id-delete']"
            ).value;

            console.log(id);

            charactersAPI
                .deleteOneRegister(id)
                .then(({ data }) => {})
                .catch((err) => console.log(err));
        });
    //--------------- EDIT CHARACTERS----------------//

    document
        .getElementById("edit-character-form")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            const allImputs = document.querySelectorAll(
                "#edit-character-form input"
            );
            const id = allImputs[0].value;
            const allData = {
                name: allImputs[1].value,
                occupation: allImputs[2].value,
                weapon: allImputs[3].value,
                cartoon: allImputs[4].checked,
            };

            charactersAPI
                .updateOneRegister(id, allData)
                .then(console.log("holii"))
                .catch();
        });

    //--------------- NEW CHARACTERS----------------//

    document
        .getElementById("new-character-form")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            const allImputs = document.querySelectorAll(
                "#new-character-form input"
            );

            const allData = {
                name: allImputs[0].value,
                occupation: allImputs[1].value,
                weapon: allImputs[2].value,
            };

            charactersAPI
                .createOneRegister(allData)
                .then(console.log("holii"))
                .catch();
        });
});
