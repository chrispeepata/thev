
function openNav() {
    document.getElementById("myNav").style.height = "100%"; {
    $( ".hamburger" ).css('z-index', -1);
  }
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%"; {
    $( ".hamburger" ).css('z-index', 0);
  }
}


function openSearch() {
    document.getElementById("mobile-search").style.height = "100%";
    $( ".hamburger" ).css('z-index', -1);

}

function closeSearch() {
    document.getElementById("mobile-search").style.height = "0%";
    $( ".hamburger" ).css('z-index', 0);
}

