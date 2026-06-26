// Tunggu sampai seluruh dokumen selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    
    // Ambil elemen tombol dan menu wrapper
    const menuBtn = document.getElementById("menuBtn");
    const menuWrapper = document.getElementById("menuWrapper");
    const closeMenu = document.getElementById("closeMenu");

    // Fungsi untuk membuka menu samping
    function bukaMenu() {
        if (menuWrapper) {
            menuWrapper.classList.add("active");
        }
    }

    // Fungsi untuk menutup menu samping
    function tutupMenu() {
        if (menuWrapper) {
            menuWrapper.classList.remove("active");
        }
    }

    // 1. Event listener untuk tombol hamburger (garis 3)
    if (menuBtn) {
        menuBtn.addEventListener("click", bukaMenu);
    }

    // 2. Event listener untuk tombol 'X' (tutup menu) di dalam sidebar
    if (closeMenu) {
        closeMenu.addEventListener("click", tutupMenu);
    }

    // 3. Menutup menu jika klien mengklik area gelap di luar sidebar
    if (menuWrapper) {
        menuWrapper.addEventListener("click", function(e) {
            if (e.target === menuWrapper) {
                tutupMenu();
            }
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
