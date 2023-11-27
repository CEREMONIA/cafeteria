$(document).ready(function() {
    // conbox를 클릭할 때의 동작 설정
    $(".conbox").on("click", function() {
      // 각 conbox에 맞는 URL을 설정
      var url = ""; // 이동하고자 하는 외부 사이트의 URL 입력
      if ($(this).hasClass("con1 1")) {
      url = "https://map.naver.com/p/search/%EA%B5%B0%EC%82%B0%20%EC%B9%AD%EB%94%B0%EC%98%A4/place/37432865?placePath=?entry=pll&from=nx&fromNxList=true&c=15.00,0,0,0,dh";
    } else if ($(this).hasClass("con1 2")) {
      url = "https://map.naver.com/p/entry/place/32238079?lng=126.68746263953896&lat=35.94501573364809&placePath=%2Fhome&entry=plt";
    } else if ($(this).hasClass("con3")) {
      url = "https://example3.com";
    }
      // 새 창에서 열기
      window.open(url, '_blank');
    });
  });