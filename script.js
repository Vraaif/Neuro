function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("https://script.google.com/macros/s/AKfycbz67C1UfAeMpVcprAeF4ji0I6lf66rTlCLBpcOUO_I4z_Sg70Qalaujy7t0mMywH6_Gjw/exec", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert("Dati inviati con successo!");
        event.target.reset(); // Reset del modulo
    })
    .catch(error => {
        console.error("Errore:", error);
        alert("Si è verificato un errore durante l'invio dei dati.");
    });
}
