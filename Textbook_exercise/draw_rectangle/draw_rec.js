function main(){
    var canvas = document.getElementById('example');
    if (!canvas){
        console.log("<canvas> tag is not supported in the browser");
        return;
    }

    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0, 0, 255, 1)';
    ctx.fillRect(130, 20, 500, 150);

}

