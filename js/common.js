$(document).ready(function(e){
    event.preventDefault();
    // 대메뉴 active 상태 (active-bar 클래스 추가)
    $('.dp1 > span').click(function(e){
      $(this).toggleClass('active-bar');
    });

    var $gnb = $('#gnb');
    // 1단계 메뉴 높이
    var gnb_height = '12rem';
    // 2단계 메뉴 높이
    var gnb_dp2_height = '419px';

    //베경 bg 높이 제어
    var $bg = $('.bg');
    var bg_height = '300px';
    var bg_hide = '0';

    // gnb 초기화(2단계 메뉴 숨기기)
    $gnb.css('height', gnb_height);
    $bg.css('height', bg_hide);
  
    // 마우스 hover 드롭다운 메뉴 제어
    $gnb.on({
      mouseenter: function(e){
        $(this).stop().animate({ height: gnb_dp2_height });
        $bg.stop().animate({ height: bg_height });
        $bg.css('border-top', '1px solid #E3E3E3').css('border-bottom', '1px solid #E3E3E3');
      },
      mouseleave: function(e){
        $(this).stop().animate({ height: gnb_height });
        $bg.stop().animate({ height: bg_hide });
        $bg.css('border-top', '0').css('border-bottom', '0');
      },
      // 키보드(tab키, esc키) focus 드롭다운 메뉴 제어
      keydown: function(e){
        if ( event.keyCode == 9 || event.which == 9 ) {
          $bg.stop().animate({ height: bg_height });
          $bg.css('border-top', '1px solid #E3E3E3').css('border-bottom', '1px solid #E3E3E3');
          $gnb.stop().animate({ height: gnb_dp2_height });
          $gnb.css('height', '419px');
        }
        if ( event.keyCode == 27 || event.which == 27 ) {
          $gnb.stop().animate({ height: gnb_height });  
          $bg.stop().animate({ height: bg_hide });
          $bg.css('border-top', '0').css('border-bottom', '0');
        }
      }
    });

   //헤더 검색폼 click 이벤트
   $( ".btn.search" ).on( "click", function() {
      $(this).find('.header-search').css('display', 'block');
      $('.header-search').focus();
    });
    $(".header-search").focusout(function(){
      $('.header-search').css('display', 'none');
    });

    // 헤더 모바일 메뉴 열기/닫기 버튼
    $(".btn.menu").on( "click", function() {
      $(".mobile-menu").fadeIn(100);
      $("html").css('overflow-y', 'hidden');
    });
    $(".m-menu-header > .btn.close").on( "click", function() {
      $(".mobile-menu").fadeOut(0);
      $("html").css('overflow-y', 'auto');
    });

    // 모바일 메뉴
    // icon 버튼만 open-close
    $('.btn.open').click(function(){
      if($(this).hasClass('open')){
        $(this).parent().find(".acc-cont").stop().slideDown(200);
        $(this).parent().css('padding-bottom', '0')
      }
      if($(this).hasClass('close')){
        $(this).parent().find(".acc-cont").stop().slideUp(0);
        $(this).parent().css('padding-bottom', '16px')
      }
      $(this).toggleClass('open close')
    })

    // 대메뉴 active 상태(첫번째 대메뉴 열린 상태로)
    $('.acc > li:first-child').addClass('active-open');
    $('.acc-title.active-open').find('.btn').removeClass('open');
    $('.acc-title.active-open').find('.btn').addClass('close');


    // 탭 메뉴
    $('ul.tab li').click(function() {
      var activeTab = $(this).attr('data-tab');
      $('ul.tab li').removeClass('on');
      $('.tabcont').removeClass('on');
      $(this).addClass('on');
      $('#' + activeTab).addClass('on');
    })



  });