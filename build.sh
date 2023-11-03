#!/bin/bash

cd theme
sass --no-source-map kaspa-wiki.scss publish/wiki.css
esbuild kaspa-wiki.js --bundle --minify --outfile=publish/wiki.js --format=iife
echo "<script>" > publish/wiki.html
cat publish/wiki.js >> publish/wiki.html
echo "</script>" >> publish/wiki.html
rm publish/wiki.js