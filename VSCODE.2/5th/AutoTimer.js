        var timer = 10;
        var cnt = 0;
        var frontnum = parseInt((Math.random() * 100) + 1);
        var backnum = parseInt((Math.random() * 100) + 1);
        var modrand = parseInt((Math.random() * 4) + 1);
        var mod = ["+", "-", "*", "/"];

        var ten = document.getElementById("time");
        var prob = document.getElementsByTagName("label");
        var ans = document.getElementsByTagName("input");

        for (var i = 0; i < prob.length; i++) {
            var frontnum = parseInt((Math.random() * 100) + 1);
            var backnum = parseInt((Math.random() * 100) + 1);
            prob[i].innerHTML = frontnum + mod[i] + backnum;
        }

        var cnttimer = setInterval(function () {
            if (timer <= 0) {
                for (var i = 0; i < prob.length; i++) {
                    if (eval(prob[i].innerText) == ans[i].value) {
                        cnt++;
                    }
                    else {
                        ans[i].style.textDecoration = "line-through";
                    }
                }
                document.getElementById("cnt").innerHTML = cnt;
                clearInterval(cnttimer);
            }
            else {
                ten.innerHTML = timer;
                timer--;
            }
        }, 1000);

        function re() {
            timer = 10;

            for (var i = 0; i < prob.length; i++) {
                var frontnum = parseInt((Math.random() * 100) + 1);
                var backnum = parseInt((Math.random() * 100) + 1);
                prob[i].innerHTML = frontnum + mod[i] + backnum;
            }
        }