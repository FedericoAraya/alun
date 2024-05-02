function contar() {
    var contador1 = 0;
    var contador2 = 0;
    var contador3 = 0;
    var contador4 = 0;
    var contador5 = 0;
    var intervalo1 = setInterval(function() {
      document.querySelector('.contador1').innerText =  contador1;
      contador1++;
      if (contador1 > 6) {
        clearInterval(intervalo1);
      }
    }, 200); 
    var intervalo2 = setInterval(function() {
        document.querySelector('.contador2').innerText = contador2;
        contador2++;
        if (contador2 > 15) {
          clearInterval(intervalo2);
        }
      }, 200); 
      var intervalo3 = setInterval(function() {
        document.querySelector('.contador3').innerText =  contador3;
        contador3++;
        if (contador3 > 10) {
          clearInterval(intervalo3);
        }
      }, 200);
      var intervalo4 = setInterval(function() {
        document.querySelector('.contador4').innerText = contador4
    ;
        contador4++;
        if (contador4 > 1000) {
          clearInterval(intervalo4);
        }
      }, 5);  
      var intervalo5 = setInterval(function() {
        document.querySelector('.contador5').innerText = contador5 + " AÑOS";
        contador5++;
        if (contador5 > 25) {
          clearInterval(intervalo5);
        }
      }, 200); 
  }
 
  var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };
  
  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        contar();
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  document.addEventListener('DOMContentLoaded', function() {
    var contadorElement = document.querySelector('.contador1');
    if (contadorElement) {
      observer.observe(contadorElement);
    }
  });
//contadores nosotros
function contar2() {
  var prov = 0;
  var city = 0;
  var intervalo1 = setInterval(function() {
    document.querySelector('.prov').innerText = prov;
    prov++;
    if (prov > 6) {
      clearInterval(intervalo1);
    }
  }, 200); 
  var intervalo2 = setInterval(function() {
      document.querySelector('.city').innerText = "+" + city;
      city++;
      if (city > 30) {
        clearInterval(intervalo2);
      }
    }, 100); 
}

var observer1 = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      contar2();
      observer1.unobserve(entry.target);
    }
  });
}, options);

document.addEventListener('DOMContentLoaded', function() {
  var provElement = document.querySelector('.prov');
  if (provElement) {
    observer1.observe(provElement);
  }
});

  //hover cards

  document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card1');
  
    cards.forEach(function(card) {
      var capa = card.querySelector('.capa');
      var button = card.querySelector(".button-28") 
      card.addEventListener('mouseenter', function() {
        capa.classList.add('animate__fadeOut', 'animate__animated');
       button.classList.remove("d-none")
      });
      card.addEventListener('mouseleave', function() {
        capa.classList.remove("animate__fadeOut")
        capa.classList.add('animate__fadeIn');  
        button.classList.add("d-none")
      });
    });
  });
  
  document.getElementById('ver-mas').addEventListener('click', function() {
    var parrafos = document.querySelectorAll('.parrafo2');
    parrafos.forEach(function(parrafo) {
      parrafo.classList.remove("d-none");
    });
    document.getElementById('ver-mas').classList.add('d-none');
    document.getElementById('ver-menos').classList.remove('d-none');
  });

  document.getElementById('ver-menos').addEventListener('click', function() {
    var parrafos = document.querySelectorAll('.parrafo2');
    parrafos.forEach(function(parrafo) {
      parrafo.classList.add("d-none");
    });
    document.getElementById('ver-mas').classList.remove('d-none');
    document.getElementById('ver-menos').classList.add('d-none');
  });