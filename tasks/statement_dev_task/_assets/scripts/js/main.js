$(document).ready(function(){
  $('.small__product').click(function(){
		$('.big__product').removeAttr('src');
		$('.big__product').attr('src',this.src);
	});
  var x, i, j, selElmnt, a, b, c;
  x = document.getElementsByClassName("size__select");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "size__selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "size__items size__hide");
    for (j = 1; j < selElmnt.length; j++) {
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          var y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          h = this.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same_as_selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same_as_selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("size__hide");
        this.classList.toggle("select_arrow_active");
      });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("size__items");
    y = document.getElementsByClassName("size__selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("size_arrow_active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("size__hide");
      }
    }
  }
  document.addEventListener("click", closeAllSelect);
  $('.minus').on('click', function(){
    if ($('qaunity__num').value <= 0){
      $('.quanity__num').value == 0;
    } else {
      $('.quanity__num').value-1;
    }
  });
  $('.plus').on('click', function(){
    $('.quanity__num').value+1;
  });
  $('.info__product').on('click', function(){
    $('.product__text').removeClass('hide');
    $('.garment__text').addClass('hide');
    $('.delivery__text').addClass('hide');
    $('.info__product').addClass('red');
    $('.info__garment').removeClass('red');
    $('.info__delivery').removeClass('red');
    $('.info__product').addClass('low__arrow');
    $('.info__garment').removeClass('low__arrow');
    $('.info__delivery').removeClass('low__arrow');
  });
  $('.info__garment').on('click', function(){
    $('.product__text').addClass('hide');
    $('.garment__text').removeClass('hide');
    $('.delivery__text').addClass('hide');
    $('.info__product').removeClass('red');
    $('.info__garment').addClass('red');
    $('.info__delivery').removeClass('red');
    $('.info__product').removeClass('low__arrow');
    $('.info__garment').addClass('low__arrow');
    $('.info__delivery').removeClass('low__arrow');
  });
  $('.info__delivery').on('click', function(){
    $('.product__text').addClass('hide');
    $('.garment__text').addClass('hide');
    $('.delivery__text').removeClass('hide');
    $('.info__product').removeClass('red');
    $('.info__garment').removeClass('red');
    $('.info__delivery').addClass('red');
    $('.info__product').removeClass('low__arrow');
    $('.info__garment').removeClass('low__arrow');
    $('.info__delivery').addClass('low__arrow');
  });
});
