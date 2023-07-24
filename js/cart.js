var app = angular.module('myApp', ['ngRoute', 'ngAnimate'])
.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl : "./main.html",
    })
    .when("/Login", {
        templateUrl : "./Lab3_Login.html",
    })
    .when("/Cart", {
        templateUrl : "./Lab3_cart.html",
    })
    .when("/Payment", {
          templateUrl : "./Lab3_payment.html",
    })
});
app.service('cartService', function($http) {
    var cart = [];
    this.calculateTotal = function(cart) {
      return cart.reduce(function(total, product) {
        return total + product.price * product.quantity;
      }, 0);
    };

    this.addToCart = function(product) {
      var found= false;
      for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id) {
          cart[i].qty++;
          found = true;
          break;
        }
      }
      if (!found){
        cart.push(product);
      }   
    };
    this.minusItem = function(product) {
      var found= false;
      for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id) {
          cart[i].qty--;
          found = true;
          break;
        }
      }
  
    };

    this.removeFromCart = function(product) {
      var index = cart.indexOf(product);
      if (index > -1) {
        cart.splice(index, 1);
      }
    };
  
    this.getCart = function() {
      return cart;
    };
});


app.service('localStorageService', function($window) {
  var localStorage = $window.localStorage;

  this.setObject = function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  };

  this.getObject = function(key) {
    var value = localStorage.getItem(key);
    return value && JSON.parse(value);
  };

  this.removeObject = function(key) {
    localStorage.removeItem(key);
  };
});
app.controller('myCtrl', function($scope,$location ,$http, cartService, localStorageService, $window) {
    //cartService
    $scope.cart = cartService.getCart();

    $scope.checkout = function() {
      $http.post('/saveCart.json', $scope.cart)
        .then(function(response) {
          alert('Đơn hàng đã được lưu lại!');
          cartService.clearCart();
        }, function(error) {
          console.log(error);
        });
    };
    $scope.removeFromCart = function(product) {
      cartService.removeFromCart(product);
    };
    $scope.addToCart = function(product) {
      cartService.addToCart(product);
      alert('Thêm sản phẩm vào giỏ hàng thành công!');
    };
    $scope.minusItem = function(product) {
      cartService.minusItem(product);
      alert('giảm sản phẩm  thành công!');
    };
    $scope.getTotal = function() {
      total =  _.reduce($scope.cart, function(sum, product) 
      {
        return sum + product.qty * product.price;
      }, 0);
      
      return total;
    };

  $http.get('./customerInfo.json').then(function(response) {
      $scope.users = response.data.users; 
    });
  if(localStorageService.getObject('users')){
    $scope.isLogin = true;
    $scope.info = angular.fromJson(localStorageService.getObject('users'));
  }
  $scope.login = function(username, password) {
    
      $scope.isLogin = false;


      $scope.user = $scope.users.find(function() {
        
        return $scope.users.username === username && $scope.users.password === password;
      });
      if ($scope.user) {
        // Đăng nhập thành công
        // $scope.data = angular.fromJson 
        localStorageService.setObject('users', $scope.user);
        $scope.isLogin = true;

        // $scope.info = localStorageService.getObject('users');
        $scope.currentUser= localStorageService.getObject('users');;
       
        // $('#loginH').modal('hide');
        // $('#registerH').modal('hide');
        alert('Đăng nhập thành công: '+ $scope.currentUser.name);
        console.log(typeof $scope.currentUser);
        
        $location.path('/');
        
      } else {
        // Đăng nhập không thành công
        $scope.isLogin = false;
        alert('Đăng nhập không thành công', user);
        
      }
    
  };
  

  
  
   

    $http.get("./KindOfShoes.json").then(function(response) {

      $scope.kindOfShoes = response.data.kindOfShoes;
      $scope.KS1 = response.data.kindOfShoes.KS1;
      $scope.KS2 = response.data.kindOfShoes.KS2;
      $scope.KS3 = response.data.kindOfShoes.KS3;
  
      $scope.Products = response.data.Products;
      $scope.banners = response.data.banners;
      $scope.banners.b1 = response.data.banners.b1;
      $scope.banners.b2 = response.data.banners.b2;
      $scope.banners.b3 = response.data.banners.b3;
      $scope.about = response.data.about;
      $scope.discount = response.data.discount;
      $scope.discount.imageSRC = response.data.discount.imageSRC;
      $scope.instagram = response.data.instagram;
      $scope.tips = response.data.tips;
      $scope.hotNews = response.data.hotNews;
      $scope.Rights = response.data.Rights;
      $scope.Bestsellers = response.data.Bestsellers;
      $scope.forYou = response.data.forYou;
    });
  });
    // $scope.register = function() {
    //   var userData = {
    //     username: $scope.username,
    //     email: $scope.email,
    //     password: $scope.password,
    //     // gender: $scope.gender? true: false,
    //     address: $scope.address,
    //   };
    //   console.log("userData");
    //   loginService.registerUser(userData)
    //     .then(function(response) {
    //       // Xử lý khi đăng ký thành công
    //       alert('Đăng ký thành công!');
    //       console.log('Register success:', response);
    //       $window.sessionStorage.setItem('userData', JSON.stringify(userData));
    //       console.log(userData);
    //       var jsonData+- = JSON.stringify(userData);
    //       var blob = new Blob([jsonData], {type: "application/json"});
    //       var url = URL.createObjectURL(blob);
    //       var a = document.createElement('a');
    //       a.download = 'Data.json';
    //       a.href = url;
    //       a.click();
    //     }, function(error) {
    //       // Xử lý khi đăng ký thất bại
    //       console.log('Register error:', error);
    //       alert('Đăng ký không thành công!');
    //     });
    // };
    // app.service('loginService', function($http){+-
    //   this.registerUser = function(userData) {
    //     return $http.post('http://localhost:4200/api/register', userData);
    //   };
    // })