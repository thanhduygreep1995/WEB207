var app = angular.module('myApp', []);

app.controller("myCtrl", function ($scope, $http){


  
  $http.get("./KindOfShoes.json").then(function(response) {

    $scope.kindOfShoes = response.data.kindOfShoes;
    $scope.kindOfShoes.ks1 = response.data.kindOfShoes.KS1;
    $scope.kindOfShoes.ks2 = response.data.kindOfShoes.KS2;
    $scope.kindOfShoes.ks3 = response.data.kindOfShoes.KS3;


    $scope.banners = response.data.banners;
    $scope.banners.b1 = response.data.banners.b1;
    $scope.banners.b2 = response.data.banners.b2;
    $scope.banners.b3 = response.data.banners.b3;


    $scope.about = response.data.about;
    $scope.about.title = response.data.about.title;
    $scope.about.description = response.data.about.description;
    $scope.about.imagesrc = response.data.about.imagesrc;


    $scope.discount = response.data.discount;
    $scope.discount.imagesrc = response.data.discount.imagesrc;


    $scope.instagram = response.data.instagram;
    $scope.instagram.img1 = response.data.instagram.img1;
    $scope.instagram.img2 = response.data.instagram.img2;
    $scope.instagram.img3 = response.data.instagram.img3;


    $scope.tips = response.data.tips;
    $scope.tips.T1 = response.data.tips.T1;
    $scope.tips.T1.imagesrc = response.data.tips.T1.imagesrc;
    $scope.tips.T1.title = response.data.tips.T1.title;
    $scope.tips.T1.description = response.data.tips.T1.description;

    $scope.tips.T2 = response.data.tips.T2;
    $scope.tips.T2.imagesrc = response.data.tips.T2.imagesrc;
    $scope.tips.T2.title = response.data.tips.T2.title;
    $scope.tips.T2.description = response.data.tips.T2.description;

    $scope.tips.T3 = response.data.tips.T3;
    $scope.tips.T3.imagesrc = response.data.tips.T3.imagesrc;
    $scope.tips.T3.title = response.data.tips.T3.title;
    $scope.tips.T3.description = response.data.tips.T3.description;


    $scope.hotNews = response.data.hotNews;
    
    $scope.hotNews.HN1 = response.data.hotNews.HN1;
    $scope.hotNews.HN1.imagesrc = response.data.hotNews.HN1.imagesrc;
    $scope.hotNews.HN1.title = response.data.hotNews.HN1.title;
    $scope.hotNews.HN1.description = response.data.hotNews.HN1.description;

    $scope.hotNews.HN2 = response.data.hotNews.HN2;
    $scope.hotNews.HN2.imagesrc = response.data.hotNews.HN2.imagesrc;
    $scope.hotNews.HN2.title = response.data.hotNews.HN2.title;
    $scope.hotNews.HN2.description = response.data.hotNews.HN2.description;

    $scope.hotNews.HN3 = response.data.hotNews.HN3;
    $scope.hotNews.HN3.imagesrc = response.data.hotNews.HN3.imagesrc;
    $scope.hotNews.HN3.title = response.data.hotNews.HN3.title;
    $scope.hotNews.HN3.description = response.data.hotNews.HN3.description;


    $scope.Rights = response.data.Rights;
    $scope.Rights.R1 = response.data.Rights.R1;
    $scope.Rights.R2 = response.data.Rights.R2;
    $scope.Rights.R3 = response.data.Rights.R3;
  });
    
    this.tab = 1;
  
    this.selectTab = function (setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };


  });
  app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl : "./main.html"
    })
    .when("/Login", {
        templateUrl : "./Lab3_Login.html"
    })
  });