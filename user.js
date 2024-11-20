document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");
  let gobackBtn = document.querySelector(".goback");

  gobackBtn.addEventListener("click", () => {
    location.replace("/index.html");
  });

  let userId = location.search.slice(1);

  let datas = JSON.parse(localStorage.getItem("cards"));

  let user = datas.find((val) => val.id == userId);

  function displayUser(user) {
    if (user) {
      let card = document.createElement("div");
      card.classList.add("card", "p-3", "bg-info");
      card.style.width = "300px";

      let name = document.createElement("h2");
      let username = document.createElement("h3");
      let email = document.createElement("p");
      let street = document.createElement("h4");
      let suite = document.createElement("h4");
      let city = document.createElement("h4");
      let zipcode = document.createElement("h4");
      let company = document.createElement("h5");
      let catchPhrase = document.createElement("p");
      let bs = document.createElement("p");
      let phone = document.createElement("p");
      let website = document.createElement("a");

      name.textContent = `Name: ${user.name}`;

      username.textContent = `Username: ${user.username}`;

      email.textContent = `Email: ${user.email}`;

      street.textContent = `Street: ${user.address.street}`;

      suite.textContent = `Suite: ${user.address.suite}`;

      city.textContent = `City: ${user.address.city}`;

      zipcode.textContent = `Zipcode: ${user.address.zipcode}`;

      company.textContent = `Company: ${user.company.name}`;

      catchPhrase.textContent = `Catch Phrase: ${user.company.catchPhrase}`;
      bs.textContent = `BS: ${user.company.bs}`;

      phone.textContent = `Phone: ${user.phone}`;

      website.href = `http://${user.website}`;
      website.textContent = `Website: ${user.website}`;
      website.target = "_blank";

      card.append(
        name,
        username,
        email,
        street,
        suite,
        zipcode,
        city,
        company,
        phone,
        website
      );
      container.append(card);
    } else {
      container.textContent = "User not found!";
    }
  }

  displayUser(user);
});
