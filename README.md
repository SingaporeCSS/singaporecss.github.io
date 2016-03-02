# This be the Talk.CSS website

*Note: This site is currently very much work-in-progress. It will be progressively be worked on, because life. When this message disappears, it means the site has reached v1.0 status.*

## v0.0.1
---

- Created initial styling
- Set current site font to
- Added pages for first 3 meet-ups
- Added About page
- Wrote copy for site footer

## If you want to clone the site...
---

You'll need to have the following installed:

1. [NodeJS](http://nodejs.org) - You can use the installer, but I personally like using [Homebrew](http://blog.teamtreehouse.com/install-node-js-npm-mac)
2. [Bower](http://bower.io) - `npm install -g bower`
3. [GulpJS](http://gulpjs.com) - `npm install -g gulp`
4. [Jekyll](http://jekyllrb.com/) - `gem install jekyll`

- Clone this repository into your working directory.
- Navigate to the directory and run `npm install`. This will install the required node modules for the project.
- Also run `bower install`. This will install Susy for this project.

- Run `gulp`. This will run the Gulp tasks needed for:
    -  compiling Sass, 
    -  serving the Jekyll site, 
    -  watch for changes to relevant folders and reload the browser accordingly.
