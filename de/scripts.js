document.addEventListener("DOMContentLoaded", function () {
    // Detect the language based on the URL subfolder
    const path = window.location.pathname.split('/')[1];
    let lang = path || 'de'; // default to 'de' if no subfolder is specified

    // Load the appropriate translation file
    fetch(`/translations/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.title = translations.title;
            document.getElementById("welcome").innerText = translations.welcome;
            document.querySelector("section#home h2").innerText = translations.welcome;
            document.querySelector("section#home p").innerText = translations.intro1;
            document.querySelector("section#home p + p").innerText = translations.intro2;
            document.querySelector("section#customers h2").innerText = translations.customers_title;
            document.querySelector("section#customers p").innerText = translations.customers_text;
            document.querySelector("section#customers p + p").innerText = translations.customers_text2;
            document.querySelector("section#contact h2").innerText = translations.contact_title;
            document.querySelector("section#contact p").innerText = translations.contact_text;
            document.querySelector("section#contact p + p").innerHTML = `${translations.contact_email} <a href="mailto:info@example.com">info@example.com</a> ${translations.contact_phone}`;
        })
        .catch(error => console.error('Error loading translations:', error));
});
