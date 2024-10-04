function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("https://script.google.com/macros/s/AKfycbyWp0RkVpBXudj4vWWuu-fMvQEIr-hCavbaYto-PnzOTfA9iSECn4vmd2mxyqBl9qpTJQ/exec", {
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
