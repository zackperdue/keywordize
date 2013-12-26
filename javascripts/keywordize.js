/**
* @author Zack Perdue / Ziggidy Creative
*
* http://zackperdue.com
* http://ziggidycreative.com
*
* Version 1.0
* Copyright (c) 2014 Zack Perdue
*
* Licensed under the MIT license:
* http://www.opensource.org/licenses/mit-license.php
*/

(function($){

  $.fn.keywordize = function(config, callback)
  {

    var options = {
      dictionary: []
    }

    $.extend(options, config, true);

    return this.each(function(){

      var
        scope       = $(this),
        text        = scope.html()
      ;

      $(options.dictionary).each(function(){

        var
          keyword         = this.keyword,
          definition      = this.definition
        ;

        text = text.replace(
          new RegExp("("+this.keyword+")", ["ig"]),
          '<a href="#" class="tooltip" title="'+definition+'">$1</a>'
        );

      });

      scope.html(text);

      callback.call();
    });
  };

}(jQuery));