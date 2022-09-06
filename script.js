window.onload = function() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d')
    const speed = 200
    const pic_array = ['images/Untitled.png', 'images/Untitled(1).png', 'images/Untitled(2).png']
    
    var t = Date.now()
    var timePassed = (Date.now() - t) / 1000
    var y = 5
    var x = 5
    var direction = true
    var currentindex = 0

    console.log(currentindex);

    function updateSlide() {
        const slides = document.getElementById("slides")
        slides.src = pic_array[currentindex]
        console.log("\n" + currentindex + "\n");
    }
    
    window.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'd':
                if (x < 445) {
                    x+=speed * timePassed
                } else if(currentindex == 2 && (x < 444 && x > 446)){
                    break
                } else {
                    currentindex++
                    x = 5
                    updateSlide()
                }
                break
            case 'a':
                if (x > 5) {
                    x-=speed * timePassed
                } else if(currentindex > 0) {
                    currentindex--
                    x = 445
                    updateSlide()
                }
                break
        }
        console.log(x);
    })
    
    function draw() {
        timePassed = (Date.now() - t) / 1000;
        t = Date.now();

        ctx.clearRect(0, 0, 500, 500);
    
        ctx.fillStyle="red";
        ctx.fillRect(x, y, 50, 50);
    
        window.requestAnimationFrame(draw);
    }
    draw();
}