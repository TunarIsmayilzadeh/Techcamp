document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".open-btn");
  const closeBtn = document.querySelector(".close-btn");
  const asideMenu = document.querySelector(".aside-menu");
  const body = document.querySelector("body");

  const hoverRegion = document.querySelector(".hover-region");
  const hoverText = document.querySelector(".hover-text");

  const accordionClose = document.querySelector(".close-btn-accordion");
  const accordionOpen = document.querySelector(".accordion-open");
  const accordionBack = document.querySelector(".accordion-back");
  const accordionMenu = document.querySelector(".accordion-menu");

  if (openBtn && asideMenu && closeBtn) {
    openBtn.addEventListener("click", () => {
      asideMenu.classList.add("active");
      body.style.overflowY = "hidden";
    });
    closeBtn.addEventListener("click", () => {
      asideMenu.classList.remove("active");
      body.style.overflowY = "auto";
    });
  }

  accordionOpen.addEventListener("click", () => {
    accordionMenu.classList.add("active");
    body.style.overflowY = "hidden";
  });

  accordionBack.addEventListener("click", () => {
    accordionMenu.classList.remove("active");
    body.style.overflowY = "auto";
  });

  accordionClose.addEventListener("click", () => {
    accordionMenu.classList.remove("active");
    asideMenu.classList.remove("active");
  });
  // accordionClose.addEventListener("click", () => {
  //   accordionMenu.classList.add("d-none");
  //   asideMenu.style.opacity = 0;
  // });

  hoverRegion && hoverRegion.addEventListener("mouseover", () => {
    if (!hoverText.classList.contains("active")) {
      hoverText.classList.add("active");
    }
  });

  hoverRegion && hoverRegion.addEventListener("mouseout", () => {
    hoverText.classList.remove("active");
  });
});

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);
