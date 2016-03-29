# This be the source code for the Talk.CSS website

## v1.0.0
---

- Updated recaps for past meetups
- Updated speaker bios for each meetup
- Added styling for broken images

## v0.0.1
---

- Created initial styling
- Set current site font to [Hack](http://sourcefoundry.org/hack/)
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
