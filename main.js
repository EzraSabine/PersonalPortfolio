/*

let allLogos = document.querySelectorAll('web-icons');


allLogos.foreach(img => {
    img.addEventListener('mouseover', function() {
        document.querySelectorAll('.sub-titles').style.visibility = "visible";
        prompt("Poop Sandwhich!");
        console.log("hello!");
    });
    item.addEventListener('mouseout', function() {
        document.querySelectorAll('.sub-titles').style.visibility = "hidden";
    });
});
*/

let allIcons = document.querySelectorAll('.web-icons');

allIcons.forEach(icon => {
    let iconId = icon.id;
    let strings = icon.id.split('-');
    let key = strings[2];
    icon.addEventListener('mouseover', function () {
        document.getElementById(`web-text-${key}`).style.visibility = "visible";
    });

    icon.addEventListener('mouseout', function () {
        document.getElementById(`web-text-${key}`).style.visibility = "hidden";
    });

});








/*

document.getElementById("web-logo").addEventListener("mouseover", addTitles);
    
function addTitles() {
    document.getElementById('web1').style.visibility = "visible";
}

document.getElementById("web-logo").addEventListener("mouseout", function() {
    document.getElementById('web1').style.visibility = "hidden";
});

*/





