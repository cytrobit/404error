let x1, y1;
        let xv1, yv1;

        const bug = document.getElementById("bug");

        window.onload = function() {
            winHeight = window.innerHeight;
            winWidth = window.innerWidth;

            bug.style.left = x1;
            bug.style.top = y1;

            x1 = Math.random() * winWidth;
            y1 = Math.random() * winHeight;

            xv1 = Math.random() * 3;
            yv1 = Math.random() * 3;

            setInterval(update, 50);
        };

        function update() {
            x1 += xv1;
            y1 += yv1;

            if (x1 < 0 || x1 > winWidth - bug.width) {
                xv1 *= -1;
            }
            if (y1 < 0 || y1 > winHeight - bug.height) {
                yv1 *= -1;
            }

            bug.style.left = x1 + "px";
            bug.style.top = y1 + "px";
        }