

sed -e '/The main JavaScript file for Casper/a \
<script src="/inject.js"> </script>' ./content/themes/casper/default.hbs > ./content/themes/casper/tmp-file && mv ./content/themes/casper/tmp-file ./content/themes/casper/default.hbs
