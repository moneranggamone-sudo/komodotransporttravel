document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menuBtn");
    const menuWrapper = document.getElementById("menuWrapper");
    const closeMenu = document.getElementById("closeMenu");

    function bukaMenu() {
        if (menuWrapper) menuWrapper.classList.add("active");
        }
    function tutupMenu() {
        if (menuWrapper) menuWrapper.classList.remove("active");
        }
    if (menuBtn) menuBtn.addEventListener("click", bukaMenu);
    if (closeMenu) closeMenu.addEventListener("click", tutupMenu);
    
    if (menuWrapper) {
        menuWrapper.addEventListener("click", function(e) {
            if (e.target === menuWrapper) tutupMenu();
            
        });
    }

});

// Fungsi tambahan untuk tombol titik tiga / tombol bawah (jika dipanggil dari elemen HTML)
function bukaMenuTitikTiga() {
    const menuWrapper = document.getElementById("menuWrapper");
    if (menuWrapper) {
        menuWrapper.classList.add("active");
    }
}

function bukaMenuBawah() {
    const menuWrapper = document.getElementById("menuWrapper");
    if (menuWrapper) {
        menuWrapper.classList.add("active");
    }
}
