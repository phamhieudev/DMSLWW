var app = angular.module('listcustomerSUPApp', []);
// app.factory("checkAuth", function ($location, $rootScope) {
//   return {
//     getuserInfo: function () {
//       if ($rootScope.isLoggedIlogin === undefined || $rootScope.isLoggedIlogin === null) {
//         //$location.path('/login');
//         location.href = "http://127.0.0.1:5501";
//       }

//     }
//   };
// });

app.controller('listcustomerSUPCtrl', function ($scope, $http, $rootScope) {


  // $rootScope.idperson = window.localStorage.getItem("idpersonlogin");
  // $rootScope.namelogin = window.localStorage.getItem("namelogin");
  // $rootScope.emaillogin = window.localStorage.getItem("emaillogin");
  // $rootScope.isLoggedIlogin = window.localStorage.getItem("isLogged");
  // $scope.check = checkAuth.getuserInfo();

  // $scope.logout = function () {
  //   window.localStorage.clear();
  //   $rootScope.isLoggedIlogin = false;
  //   location.href = "http://127.0.0.1:5501";

  // };

  // $scope.doimatkhau = function(){
  //   window.location.assign('http://127.0.0.1:5501/view/changepassword.html?id=' + $rootScope.idperson)
  // }

  // alert("asdasdsa");
});

