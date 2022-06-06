window.onload = function(){
    const opacityNext = document.querySelectorAll('.next');

    function opacityQ1() {
        document.getElementById("q1").style.opacity = "20%";
    }
    function opacityQ2() {
        document.getElementById("q2").style.opacity = "20%";
    }
    function opacityQ3() {
        document.getElementById("q3").style.opacity = "20%";
    }
    function opacityQ4() {
        document.getElementById("q4").style.opacity = "20%";
    }
    function opacityQ5() {
        document.getElementById("q5").style.opacity = "20%";
    }

    function clearQ2() {
        document.getElementById("q2").style.opacity = "100%";
    }
    function clearQ3() {
        document.getElementById("q3").style.opacity = "100%";
    }
    function clearQ4() {
        document.getElementById("q4").style.opacity = "100%";
    }
    function clearQ5() {
        document.getElementById("q5").style.opacity = "100%";
    }
    function clearQ6() {
        document.getElementById("q6").style.opacity = "100%";
    }

    document.getElementById('nextQ2a').onclick = function() { clearQ2(); opacityQ1();}
    document.getElementById('nextQ2b').onclick = function() { clearQ2(); opacityQ1();}
    document.getElementById('nextQ2c').onclick = function() { clearQ2(); opacityQ1();}
    document.getElementById('nextQ2d').onclick = function() { clearQ2(); opacityQ1();}
    document.getElementById('nextQ2e').onclick = function() { clearQ2(); opacityQ1();}

    document.getElementById('nextQ3a').onclick = function() { clearQ3(); opacityQ2();}
    document.getElementById('nextQ3b').onclick = function() { clearQ3(); opacityQ2();}
    document.getElementById('nextQ3c').onclick = function() { clearQ3(); opacityQ2();}
    document.getElementById('nextQ3d').onclick = function() { clearQ3(); opacityQ2();}
    document.getElementById('nextQ3e').onclick = function() { clearQ3(); opacityQ2();}

    document.getElementById('nextQ4a').onclick = function() { clearQ4(); opacityQ3();}
    document.getElementById('nextQ4b').onclick = function() { clearQ4(); opacityQ3();}
    document.getElementById('nextQ4c').onclick = function() { clearQ4(); opacityQ3();}
    document.getElementById('nextQ4d').onclick = function() { clearQ4(); opacityQ3();}
    document.getElementById('nextQ4e').onclick = function() { clearQ4(); opacityQ3();}

    document.getElementById('nextQ5a').onclick = function() { clearQ5(); opacityQ4();}
    document.getElementById('nextQ5b').onclick = function() { clearQ5(); opacityQ4();}
    document.getElementById('nextQ5c').onclick = function() { clearQ5(); opacityQ4();}
    document.getElementById('nextQ5d').onclick = function() { clearQ5(); opacityQ4();}
    document.getElementById('nextQ5e').onclick = function() { clearQ5(); opacityQ4();}

    document.getElementById('nextQ6a').onclick = function() { clearQ6(); opacityQ5();}
    document.getElementById('nextQ6b').onclick = function() { clearQ6(); opacityQ5();}
    document.getElementById('nextQ6c').onclick = function() { clearQ6(); opacityQ5();}
    document.getElementById('nextQ6d').onclick = function() { clearQ6(); opacityQ5();}
    document.getElementById('nextQ6e').onclick = function() { clearQ6(); opacityQ5();}
}