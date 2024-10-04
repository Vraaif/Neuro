document.getElementById('musicForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = {
        twitchNickname: formData.get('twitchNickname'),
        songTitle: formData.get('songTitle'),
        extraInfo: formData.get('extraInfo'),
        coverImage: formData.get('coverImage') ? formData.get('coverImage') : null,
        videoFile: formData.get('videoFile')
    };

    // Converti i file in un formato leggibile
    if (data.coverImage) {
        const reader = new FileReader();
        reader.onload = function () {
            const base64data = reader.result.split(',')[1];
            data.coverImage = {
                data: base64data,
                mimeType: data.coverImage.type,
                name: data.coverImage.name
            };
            sendData(data);
        };
        reader.readAsDataURL(data.coverImage);
    } else {
        sendData(data);
    }
});

function sendData(data) {
    google.script.run.withSuccessHandler(function (response) {
        alert(response);
    }).submitData(data);
}
