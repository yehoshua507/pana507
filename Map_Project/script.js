const mapPoints = [
    { top: '55%', left: '39.5%',  image: 'img/pumpkin.jpg' },           // pumpkin
    { top: '74.625%', left: '56.25%', image: 'img/PileOfRocks.jpg' },   // pile of rocks
    { top: '58.5%', left: '88.75%', image: 'img/FIreHydrant.JPG' },     // fire hydrant
    { top: '53.5%', left: '94.25%', image: 'img/Boat.JPG' },            // boat
    { top: '35.25%', left: '92.625%', image: 'img/Sub.jpg' },           // sub
    { top: '30.5%', left: '60.625%', image: 'img/Toilet.jpg' },         // toilet
    { top: '48.375%', left: '68.75%', image: 'img/Tank.jpg' },          // tank
    { top: '55.5%', left: '78.25%', image: 'img/MonkeyRack.jpg' },      // monkey bar
    { top: '55.5%', left: '63.375%', image: 'img/SnowMan.JPG' },        // snowman
    { top: '55.5%', left: '53.375%', image: 'img/Claus.jpg' },          // Claus
    { top: '57%', left: '24.375%', image: 'img/Statue.JPG' },           // Statue
    { top: '65%', left: '16.625%', image: 'img/TrainingP.jpg' },        // training ramp
    { top: '68%', left: '27.25%', image: 'img/PileOfRocks_2.jpg' },     // Pile of rocks -  motor
    { top: '77.625%', left: '27.25%', image: 'img/BEachChair.JPG' },    // beach chair
    { top: '86.25%', left: '36.875%', image: 'img/Car1.jpg' },          // car1            
    { top: '14%', left: '91%', image: 'img/Car4.jpg' },                 // car4
    { top: '10%', left: '63.75%', image: 'img/Car3_1.jpg' },            // car3
    { top: '10%', left: '44.25%', image: 'img/Car3.jpg' },              // car2
];

mapPoints.forEach((point, index) => {
    const mapImage = document.getElementById('map-image');
    const pointElement = document.createElement('div');
    pointElement.className = 'map-point';
    pointElement.style.top = point.top;
    pointElement.style.left = point.left;

    // Add event listeners for tooltip
    pointElement.addEventListener('mouseover', () => {
        const tooltip = document.getElementById('tooltip');
        const tooltipImage = tooltip.querySelector('img');
        tooltipImage.src = point.image;
        tooltip.style.display = 'block';
        tooltip.style.top = pointElement.style.top;
        tooltip.style.left = pointElement.style.left;
    });

    pointElement.addEventListener('mouseout', () => {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.display = 'none';
    });

    mapImage.parentNode.appendChild(pointElement);
});

function changeBackground(imageSrc, button) {
    const mapImage = document.getElementById('map-image');
    mapImage.src = imageSrc;

    // Update selected button
    const buttons = document.querySelectorAll('.button-container button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}
