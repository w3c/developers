
document.getElementById('toggle-menu').style.display='none';
var hidden = true;
function toggle() {
    console.log('hey');
    if(hidden) {
        hidden = false;
        document.getElementById('toggle-menu').style.display='';
    
    }
    else {
        hidden = true;
        document.getElementById('toggle-menu').style.display='none';
    }
}