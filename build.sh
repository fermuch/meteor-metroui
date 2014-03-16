#!/usr/bin/env sh

if [ -d assets ]; then
	rm -rf assets
	mkdir assets
fi

cp metroui/min/metro{.min.js,-bootstrap.min.css} assets/
