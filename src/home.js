const displayGoogleMapsCord = () => {
    const directionMaps = document.createElement('iframe');
    directionMaps.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221620.6697083089!2d-95.49056288202763!3d29.782760219507338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf6ec7ca13b3%3A0x44adbf79b7580c3!2sJINYA%20Ramen%20Bar%20-%20Houston%20Mid%20Town!5e0!3m2!1sen!2sus!4v1689801308392!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
    directionMaps.classList.add('google-maps-directions');

    return directionMaps;

}


const displayHome = () => {
    const homePage = document.createElement('div');
    homePage.classList.add('home-page');
    homePage.appendChild(displayGoogleMapsCord());

    return homePage;
}
export {displayHome};