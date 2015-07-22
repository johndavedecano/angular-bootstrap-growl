(function($) {

    /**
     * Angular Bootstrap Growl
     */
    angular.module('angular-bootstrap-growl').factory('Growl', function() {

        var factory = {
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
                element  : "content-inner",
                template : '<div data-growl="container" class="alert" role="alert"> <button type="button" class="close" data-growl="dismiss"> <span aria-hidden="true">×</span> </button> <span data-growl="message"></span> <a href="#" data-growl="url"></a> </div>'
            },
            make   : make
        }

        return factory;

        // ///////////////////////////////////

        /**
         * @param message
         * @param options
         * @param settings
         */
        function make(message, options, settings) {

            $.extend(factory.settings, settings);

            $.extend(factory.options, options);

            factory.options.message = m(message);

            $.growl(factory.options, factory.settings);
        }

        /**
         * @param message
         * @returns {*}
         */
        function m(message) {

            if ($.isArray(message)) {
                return message.join("<br>");
            }

            return message;
        }
    });

})(jQuery);
