const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const phone = "56935025298";

    const text = `Hola Benjamin, mi nombre es ${name}.

Mi correo: ${email}

Asunto: ${subject}

Mensaje:
${message}`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
});