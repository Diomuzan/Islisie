const container = document.querySelector('.container');

let contentCards = '<div class=content>';

for (let i = 0; i < SandboxGames.length; i++) {
    const object = SandboxGames[i];

    contentCards+= '<div class="card">';
    contentCards+= '<a href="'+object.buy+'">';
    contentCards+= '<img src="../'+object.thumb+'" alt="profile-image">';
    contentCards+= '</a>';
    contentCards+= '<h4>'+object.name+'</h4>';
    contentCards+= '</div>';
};
contentCards + '</div>';

container.innerHTML += contentCards;