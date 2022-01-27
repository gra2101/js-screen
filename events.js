function displayImage(element){
    document.getElementById('screen').style.background=`url(${element.src})`;
    document.getElementById('screen').style.backgroundSize='100%';
    document.getElementById('screen').style.backgroundRepeat="no-repeat";
    document.getElementById('screen').style.backgroundPosition="center";
}
function clearImage(element){
    document.getElementById('screen').style.background="none"
}

