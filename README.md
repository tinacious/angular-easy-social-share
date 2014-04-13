# AngularJS Easy Social Share

An easy way way to share the current page on an AngularJS app with Twitter, Facebook and LinkedIn.

This directive uses URL links to share your page's content on each of the social media networks and therefore doesn't require the use of an app ID.

View a demo [here](http://tinacious.github.io/angular-easy-social-share/).

## Usage

This repository can be installed using Bower:

```bash
bower install angular-easy-social-share --save
grunt bower-install
```

### Dependencies

This directive requires [Font Awesome](https://github.com/components/font-awesome). Installing using Bower should download the required dependency but Font Awesome may need to be referenced manually.

1. Make sure `easy-social-share.js` is included. 
2. Add `td.easySocialShare` as an app dependency.
3. Use the `share-links` directive in your view's HTML as follows:

```html
<div share-square="true" share-links="Facebook, Twitter, LinkedIn" share-title="Article Title"></div>
```

### Options

If you would like to use the square version of Font Awesome, be sure to include the attribute `share-square="true"` otherwise it will use the version without the square.