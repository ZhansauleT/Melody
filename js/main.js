$(document).ready(function () {
  var currentFloor = 2; // переменная, где хранится текущий этаж
  var counterUp = $(".counter-up");  /* кнопка увеличения этажа */
  var counterDown = $(".counter-down");  /* кнопка уменьшения этажа */
  var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");
  
  var flatPath = $(".flats path"); // каждая отдельная квартира на схеме
  var currentFlat = 1; // переменная, где хранится текущая квартира
  var flatPathItem = $(".flat-item a"); //переменная, где хранится название квартиры

  // функция при наведении мышью на этаж
  floorPath.on('mouseover', function(){
    floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
  });

  floorPath.on("click", toggleModal); /* при клике на этаж вызвать окно */
  modalCloseButton.on("click", toggleModal); /* при клике на кнопку закрыть закырвать окно */
  viewFlatsButton.on("click", toggleModal);


  counterUp.on("click", function(){ // отслеживаем клик по кнопке вверх
    if(currentFloor < 18){ // проверяем значение этажа, оно не должно быть больше 18
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажом, чтобы было 01, а не 1
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });

// отслеживаем клик по кнопке вниз
  counterDown.on("click", function() {
    // проверяем значение этажа, оно не должно быть меньше 2
    if(currentFloor > 2){
      currentFloor--; // убавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажом, чтобы было 01, а не 1
      $(".counter").text(usCurrentFloor);  // записываем значение этажа в счетчик справа
      floorPath.removeClass('current-floor');  // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");  // подсвечиваем текущий этаж
    } 
  });

  function toggleModal(){  /* функция открыть-закрыть окно */
    modal.toggleClass("is-open");
  }


  // функция при наведении мышью на квартиру
  flatPath.on('mouseover', function(){
    currentFlat = $(this).attr("data-flat"); // получаем значение текущего этажа
    flatPath.removeClass("current-flat"); // удаляем активный класс у квартиры
    flatPathItem.removeClass("current-flats-item");
    $(`[data-flat=${currentFlat}]`).toggleClass("current-flat"); // подсвечиваем текущий этаж
    $(`[data-item=${currentFlat}]`).toggleClass("current-flats-item"); // подсвечиваем текущий этаж
  });

  // функция при наведении мышью на квартиру
  flatPathItem.on('mouseover', function(){
    currentFlat = $(this).attr("data-item"); // получаем значение текущего этажа
    flatPath.removeClass("current-flat"); // удаляем активный класс у квартиры
    flatPathItem.removeClass("current-flats-item");
    $(`[data-flat=${currentFlat}]`).toggleClass("current-flat"); // подсвечиваем текущий этаж
    $(`[data-item=${currentFlat}]`).toggleClass("current-flats-item"); // подсвечиваем текущий этаж
  });

}); 