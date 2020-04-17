    document.getElementById("menuButton").onclick = function() {showMenu()};

    function showMenu() {
        document.getElementById("menu").classList.toggle("show");
        document.getElementById("icon").classList.toggle("hide");
        console.log("EXECUTED");
    }
