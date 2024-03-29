// header footer 혹은 그 외 공통 요소 관련 js 작성
// jquery 로드 요청

//header 이벤트들
$(function () {
  $("#header").load("./header.html", setHeader);
  $("#footer").load("./footer.html", setFooter);

  function setHeader() {
    let header = $("#header"),
      headerLogo = header.find(".logo img"),
      mainMenu = $(".gnb_wrap .gnb>li>a"),
      subMenu = $(".gnb_wrap .depth02"),
      subMenuHeight = 0,
      headerHeight = header.height(),
      mobileToggle = $('.mobileToggle span')
      langMenu = $(".lang_wrap a");

    // header scroll,mouseenter 이벤트 효과 함수 생성
    function headerEvent() {
      header.addClass("fixed");
      mainMenu.addClass("on");
      langMenu.addClass("on");
      mobileToggle.addClass("on");
      headerLogo.attr("src", "images/main/main_header/main_logo.png");
    }
    // --header scroll,mouseenter 이벤트 효과 함수 생성
    
    //header scroll 이벤트
    $(window).on("scroll", function () {
      var st = $(this).scrollTop();
   
      if (st > 0) {
        headerEvent();
      } else {
        header.removeClass("fixed");
        mainMenu.removeClass("on");
        langMenu.removeClass("on");
        mobileToggle.removeClass("on");
        headerLogo.attr("src", "images/main/main_header/main_logo_white.png");
      }
    
    });
    
    subMenu.each(function () {
      if (subMenuHeight < $(this).height()) {
        subMenuHeight = $(this).height();
      }
    });
    //--header scroll 이벤트
    
    //header mouseenter,leave 이벤트
    header
    .on("mouseenter", function () {
      header.stop().animate({ height: headerHeight + subMenuHeight + 75 + "px" });
      headerEvent();

    })
    .on("mouseleave", function () {
      header.stop().animate({ height: headerHeight + "px" });
      
      // if($(window).scrollTop() = 0){
        
      //   header.removeClass("fixed");
      //   mainMenu.removeClass("on");
      //   langMenu.removeClass("on");
      //   headerLogo.attr("src", "images/main/main_header/main_logo_white.png");
      // }
    });
    // --header mouseenter,leave 이벤트
    
    // scroll시 헤더 업 다운 이벤트
    var lastScrollTop = 0;
    $(window).scroll(function () {
      var st = $(this).scrollTop();
      if (st > lastScrollTop) {
        // 스크롤 다운 시 실행할 코드
        header.slideUp(); // header를 위로 사라지게 함
      } else {
        // 스크롤 업 시 실행할 코드
        header.slideDown(); // header를 아래로 나타나게 함
      }
      lastScrollTop = st;
    });
    // --scroll시 헤더 업 다운 이벤트
  }

  //header 이벤트들

  function setFooter() {
    // -----footer 이벤트들

    // -----//footer 이벤트들

    // ----backToTop
    const btt = $(".backToTop");
    const $window = $(window);
    $window.scroll(() => {
      let scrollAmt = $window.scrollTop();
      scrollAmt > 1000 ? btt.addClass("active") : btt.removeClass("active");
    });

    btt.click((e) => {
      e.preventDefault();
      // window.scrollTo(0,0)

      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    });
    // ----//backToTop
  }
});
