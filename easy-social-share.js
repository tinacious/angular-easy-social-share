'use strict';

angular.module('td.easySocialShare', [])
  .directive('shareLinks', function ($location) {
    return {
      link: function (scope, elem, attrs) {
        var i,
            theLink,
            links = attrs.shareLinks.toLowerCase().split(','),
            pageLink = encodeURIComponent($location.absUrl()),
            pageTitle = attrs.shareTitle,
            pageTitleUri = encodeURIComponent(pageTitle),
            shareLinks = [],
            square = '';

        // check if square icon specified
        square = (attrs.shareSquare && attrs.shareSquare.toString() === 'true') ? '-square' : '';

        // assign share link for each network
        angular.forEach(links, function (key) {
          key = key.trim();

          switch (key) {
            case 'twitter':
              theLink = 'http://twitter.com/intent/tweet?text=' + pageTitleUri + '%20' + pageLink;
              break;
            case 'facebook':
              theLink = 'http://facebook.com/sharer.php?u=' + pageLink;
              break;
            case 'linkedin':
              theLink = 'http://www.linkedin.com/shareArticle?mini=true&url=' + pageLink + '&title=' + pageTitleUri;
              break;
          }
 
          if (key === 'twitter' || key === 'facebook' || key === 'linkedin') {
            shareLinks.push({network: key, url: theLink});
          }
        });
 
        for (i = 0; i < shareLinks.length; i++) {
          elem.append('<a href="'+ shareLinks[i].url +'" class="fa fa-'+shareLinks[i].network + square + '" target="_blank"></a> ');
        }

      }
    };
  });
