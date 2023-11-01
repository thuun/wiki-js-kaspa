#!/bin/bash

sass --style=nested --sourcemap=none kaspa-wiki.scss:publish/wiki.css
esbuild kaspa-wiki.js --bundle --outdir=publish --format=iife
