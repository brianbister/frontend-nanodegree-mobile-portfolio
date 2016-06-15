## Instructions

This project runs on NodeJS.  Make sure Node is installed and do run the
following commands.

`npm install`  
`gulp minify`
`gulp minify-inline`
`node server.js`

After this the server should run on localhost:8080.

## Optimizations

### Compress Images

Compressed pizzeria.jpg and profilepic.jpg.

### Eliminate Render Blocking JS and CSS

Allowed Google Analytics to load async.  
Added media query to conditionally load print.css.  
Removed externally download font for one found on the browser.  
Inline style.css.

### Minify

Minified index.html to save space while downloading.

### Pizzas

Removed several query selectors out of for loops.  
Only call document.body.scrollTop once on each update.
