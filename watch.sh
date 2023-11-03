#!/bin/bash

cd theme
sass --no-source-map --watch kaspa-wiki.scss publish/wiki.css &
esbuild kaspa-wiki.js --watch --bundle --outfile=publish/wiki.js --format=iife
trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT