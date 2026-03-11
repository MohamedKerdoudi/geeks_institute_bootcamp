(function welcomeUser(userName) {
    const navbar = document.getElementById('navbar');

    // create a wrapper div
    const userDiv = document.createElement('div');
    userDiv.style.display = 'flex';
    userDiv.style.alignItems = 'center';
    userDiv.style.gap = '0.5rem';
    userDiv.style.marginLeft = 'auto'; 

    // profile picture (placeholder image)
    const img = document.createElement('img');
    img.src = 'https://via.placeholder.com/40';
    img.alt = `${userName}'s profile picture`;
    img.style.borderRadius = '50%';

    // name text
    const nameSpan = document.createElement('span');
    nameSpan.textContent = `Welcome, ${userName}!`;
    nameSpan.style.fontWeight = 'bold';

    // assemble
    userDiv.appendChild(img);
    userDiv.appendChild(nameSpan);
    navbar.appendChild(userDiv);
})('John');