# angular-bootstrap-growl
Angular Bootstrap Growl for Your Application

## Install
```
<script src="angular.min.js"></script>
<script src="angular-bootstrap-growl.js"></script>
```
## Inject
```
var module = angular.module('app', ['angular-bootstrap-growl']);

module.controller('somecontroller', ['$scope', 'Growl', function() {
    Growl.make("Agent cannot be empty", {}, { type : "error"});
}]);
```
## Types
info, danger, error, warning, success
## Defaults
```
{
  options  : {},
  settings : {
      placement : {
          from  : "top",
          align : "right"
      },
      z_index  : 3000,
      animate  : {
          enter: 'animated bounceIn',
          exit : 'animated zoomOutUp'
      },
      dalay    : 10000,
      element  : "body",
      template : '<div data-growl="container" class="alert" role="alert"> <button type="button" class="close" data-growl="dismiss"> <span aria-hidden="true">×</span> </button> <span data-growl="message"></span> <a href="#" data-growl="url"></a> </div>'
  },
  make   : make
}
```
## Original Fork

http://bootstrap-growl.remabledesigns.com/



