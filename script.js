window.onload = function() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d')
    const speed = 400
    const pic_array = ['images/Untitled.png', 'images/Untitled(1).png', 'images/Untitled(2).png']
    
    var t = Date.now()
    var timePassed = (Date.now() - t) / 1000
    var y = 5
    var x = 5
    var currentindex = 0

    console.log(currentindex);

    function updateSlide(direction) {
        if (direction == "right") {
            const slides = document.getElementById("slides")
            console.log("\n" + currentindex + "\n");
            slides.classList.toggle("slide-right")
            setTimeout(() => {
                slides.src = pic_array[currentindex]
                slides.classList.toggle("slide-right")
            }, 1000)

        } else {
            const slides = document.getElementById("slides")    
            console.log("\n" + currentindex + "\n");
            slides.classList.toggle("slide-left")
            setTimeout(() => {
                slides.src = pic_array[currentindex]
                slides.classList.toggle("slide-left")
            }, 1000)
        }
    }
    
    window.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'd':
                if (x < canvas.offsetWidth - 55) {
                    x+=speed * timePassed
                } else if(currentindex < 2) {
                    currentindex++
                    x = 5
                    updateSlide("right")
                }
                break
            case 'a':
                if (x > 5) {
                    x-=speed * timePassed
                } else if(currentindex > 0) {
                    currentindex--
                    x = canvas.offsetWidth - 55
                    updateSlide("left")
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