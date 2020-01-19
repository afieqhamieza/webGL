function main(){
    var canvas = document.getElementById('example');    //this is to retrieve canvas from html file so that we can draw on the canvas
    if(!canvas){
        console.log('Failed to received canvas elemeent');
        return;
    }

    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0, 0, 255, 1.0)';
    ctx.fillRect(120, 10, 150, 150);
}