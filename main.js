(function ($) {
  "use strict";

  new WOW().init();

  //navbar cart
  $(".cart_link > a").on("click", function () {
    $(".mini_cart").addClass("active");
  });

  $(".mini_cart_close > a").on("click", function () {
    $(".mini_cart").removeClass("active");
  });

  //sticky navbar
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".sticky-header").removeClass("sticky");
    } else {
      $(".sticky-header").addClass("sticky");
    }
  });

  // background image
  function dataBackgroundImage() {
    $("[data-bgimg]").each(function () {
      var bgImgUrl = $(this).data("bgimg");
      $(this).css({
        "background-image": "url(" + bgImgUrl + ")", // concatenation
      });
    });
  }

  $(window).on("load", function () {
    dataBackgroundImage();
  });

  //for carousel slider of the slider section
  $(".slider_area").owlCarousel({
    animateOut: "fadeOut",
    autoplay: true,
    loop: true,
    nav: false,
    autoplayTimeout: 6000,
    items: 1,
    dots: true,
  });

  //product column responsive
  $(".product_column3").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 5,
    arrows: true,
    rows: 2,
    prevArrow:
      '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
    nextArrow:
      '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
    responsive: [
      {
        breakpoints: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoints: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoints: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoints: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });

  //for tooltip
  $('[data-toggle="tooltip"]').tooltip();

  //tooltip active
  $(".action_links ul li a, .quick_button a").tooltip({
    animated: "fade",
    placement: "top",
    container: "body",
  });

  //product row activation responsive
  $(".product_row1").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 5,
    arrows: true,
    prevArrow:
      '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
    nextArrow:
      '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
    responsive: [
      {
        breakpoints: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoints: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoints: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoints: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });

  // blog section
  $(".blog_column3").owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    autoplayTimeout: 5000,
    items: 3,
    dots: false,
    margin: 30,
    navText: [
      '<i class="ion-chevron-left"></i>',
      '<i class="ion-chevron-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  //navactive responsive
  $(".product_navactive").owlCarousel({
    autoplay: false,
    loop: true,
    nav: true,
    items: 4,
    dots: false,
    navText: [
      '<i class="ion-chevron-left arrow-left"></i>',
      '<i class="ion-chevron-right arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      250: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 4,
      },
    },
  });

  $(".modal").on("shown.bs.modal", function (e) {
    $(".product_navactive").resize();
  });

  $(".product_navactive a").on("click", function (e) {
    e.preventDefault();
    var $href = $(this).attr("href");
    $(".product_navactive a").removeClass("active");
    $(this).addClass("active");
    $(".product-details-large .tab-pane").removeClass("active show");
    $(".product-details-large " + $href).addClass("active show");
  });
})(jQuery);

$(document).ready(function () {
  // Function to redirect to login page
  function redirectToLogin() {
    window.location.href = "login.html";
  }

  // Check if the user is authenticated
  function isAuthenticated() {
    return sessionStorage.getItem("isAuthenticated") === "true";
  }

  // Check if the user has already been redirected once
  function hasBeenRedirected() {
    return sessionStorage.getItem("hasBeenRedirected") === "true";
  }

  // If user is not authenticated and hasn't been redirected before, set up event handlers to redirect to login
  if (!isAuthenticated() && !hasBeenRedirected()) {
    let isScrolling = false;

    // Set a timer when scrolling starts
    $(window).on("scroll", function () {
      isScrolling = true;
      setTimeout(function () {
        isScrolling = false; // Reset scrolling status after a short delay
      }, 100);
    });

    // Capture click events on all elements except scrolling
    $("body").on("click", function (event) {
      if (!isScrolling) {
        sessionStorage.setItem("hasBeenRedirected", "true");
        redirectToLogin();
      }
    });

    // Prevent redirection when interacting with scroll
    $(window).on("mousewheel DOMMouseScroll", function (event) {
      isScrolling = true;
      setTimeout(function () {
        isScrolling = false; // Reset scrolling status after a short delay
      }, 100);
    });
  }
});

// featured_newarrival_onsale

const jewellery = document.getElementById("jewellery");
const watch = document.getElementById("watch");
const shoes = document.getElementById("shoes");
const box1 = document.getElementById("1");
const box2 = document.getElementById("2");
const box3 = document.getElementById("3");
const jewellery_featured = document.getElementById("jewellery_featured");
const watch_featured = document.getElementById("watch_featured");
const shoes_featured = document.getElementById("shoes_featured");
const jewellery_arrival = document.getElementById("jewellery_arrivals");
const jewellery_onsale = document.getElementById("jewellery_onsale");
// const featured1=document.getElementById('featured1');
// const arrival1=document.getElementById('arrival1');
// const onsale1=document.getElementById('onsale1');
// const featured2=document.getElementById('featured2');
// const arrival2=document.getElementById('arrival2');
// const onsale2=document.getElementById('onsale2');
// const featured3=document.getElementById('featured3');
// const arrival3=document.getElementById('arrival3');
// const onsale3=document.getElementById('onsale3');

jewellery.addEventListener("click", function () {
  box2.style.display = "none";
  box3.style.display = "none";
  box1.style.display = "block";
  jewellery_featured.style.display = "block";
  jewellery_arrival.style.display = "block";
  jewellery_featured.style.display = "block";
  watch_featured.style.display = "none";
  shoes_featured.style.display = "none";
});
watch.addEventListener("click", function () {
  box3.style.display = "none";
  box1.style.display = "none";
  box2.style.display = "block";
  watch_featured.style.display = "block";
  jewellery_featured.style.display = "none";
  jewellery_arrival.style.display = "none";
  jewellery_featured.style.display = "none";
  shoes_featured.style.display = "none";
});

shoes.addEventListener("click", function () {
  box1.style.display = "none";
  box2.style.display = "none";
  box3.style.display = "block";
  shoes_featured.style.display = "block";
  watch_featured.style.display = "none";
  jewellery_featured.style.display = "none";
  jewellery_arrival.style.display = "none";
  jewellery_featured.style.display = "none";
});

// featured1.addEventListener('onclick',function(){
//   jewellery_featured.display="block";
//   jewellery_arrival.style.display="none";
//   jewellery_onsale.style.display="none";
//   shoes_featured.style.display="none";
//   watch_featured.style.display="none";

// })

// featured2.addEventListener('onclick',function(){
//   jewellery_featured.display="none";
//   jewellery_arrival.style.display="none";
//   jewellery_onsale.style.display="none";
//   shoes_featured.style.display="none";
//   watch_featured.style.display="block";

// })

// featured3.addEventListener('click',function(){
//   jewellery_featured.display="none";
//   jewellery_arrival.style.display="none";
//   jewellery_onsale.style.display="none";
//   shoes_featured.style.display="block";
//   watch_featured.style.display="none";

// })
// arrival1.addEventListener('click',function(){
//   jewellery_featured.display="none";
//   jewellery_arrival.style.display="block";
//   jewellery_onsale.style.display="none";
//   shoes_featured.style.display="none";
//   watch_featured.style.display="none";

// })
// onsale1.addEventListener('click',function(){
//   jewellery_featured.display="none";
//   jewellery_arrival.style.display="none";
//   jewellery_onsale.style.display="block";
//   shoes_featured.style.display="none";
//   watch_featured.style.display="none";

// })
// box2.addEventListener('click',function(){
//   jewellery_featured.style.display="none";

//   shoes_featured.style.display="none";
//   watch_featured.style.display="block";
// })
// box3.addEventListener('click',function(){
//   jewellery_featured.style.display="none";
//   watch_featured.style.display="none";
//   shoes_featured.style.display="block";
// })

// featured1.addEventListener('click',function(){
//   jewellery_featured.display="block";
//   shoes_featured.style.display="none";
//   watch_featured.style.display="none";

// })
// box2.addEventListener('click',function(){
//   jewellery_featured.style.display="none";
//   shoes_featured.style.display="none";
//   watch_featured.style.display="block";
// })
// box3.addEventListener('click',function(){
//   jewellery_featured.style.display="none";
//   watch_featured.style.display="none";
//   shoes_featured.style.display="block";
// })

document.addEventListener("DOMContentLoaded", function () {
  const cartItems = document.getElementById("cart-items");
  const cartQuantitySpan = document.querySelector(".cart_quantity");
  const cartTotalPriceSpan = document.querySelector(".cart_total_price");
  const headerCartPriceSpan = document.querySelector(".cart_text_quantity");
  let totalQuantity = 0;
  let totalPrice = 0;

  function updateCartQuantity(amount) {
    totalQuantity += amount;
    cartQuantitySpan.textContent = totalQuantity;
  }
  function updateCartTotalPrice(amount) {
    totalPrice += amount;
    cartTotalPriceSpan.textContent = "Rs. " + totalPrice;
    headerCartPriceSpan.textContent = "Rs. " + totalPrice;
  }

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const productDiv =
        this.closest(".product") || this.closest(".modal_body");

      const productName = productDiv.querySelector("h2").textContent;
      const productPrice = productDiv.querySelector('.new_price') ? parseFloat(productDiv.querySelector('.new_price').textContent.replace('Rs. ', '')) : parseFloat(productDiv.querySelector('.price').textContent.replace('Rs. ', ''));
      const quantityInput = productDiv.querySelector('input[type="number"]');
      const quantity = parseInt(quantityInput.value);
      const imageSrc = productDiv.querySelector("img").src;

      if (quantity > 0) {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart_item");
        cartItem.innerHTML = `
                  <div class="cart_img">
                      <a href="#"><img src="${imageSrc}" alt=""></a>
                  </div>
                  <div class="cart_info">
                      <a href="#">${productName}</a>
                      <span class="quantity">Qty : ${quantity}</span>
                      <span class="price_cart">${productPrice}</span>
                  </div>
                  <div class="cart_remove">
                      <a href="#" class="remove"><i class="ion-android-close"></i></a>
                  </div>
              `;

        cartItems.appendChild(cartItem);
        updateCartQuantity(quantity);
        updateCartTotalPrice(productPrice * quantity)
        // Clear the input field after adding to cart
        quantityInput.value = "";

        // Add event listener to remove item from cart
        const removeButton = cartItem.querySelector(".remove");
        removeButton.addEventListener("click", function () {
          const quantity = parseInt( cartItem.querySelector(".quantity").textContent.replace("Qty : ", ""));
          const price = parseFloat(cartItem.querySelector('.price_cart').textContent.replace('Rs. ', ''));

          cartItems.removeChild(cartItem);
          updateCartQuantity(-quantity);
          updateCartTotalPrice(-price * quantity);
        });
      } else {
        alert("Please enter a valid quantity.");
      }
    });
  });
});
