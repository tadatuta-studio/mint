OUTPUT_DIR=output

YENV=production ./node_modules/.bin/bem make
mkdir -p $OUTPUT_DIR
mkdir -p $OUTPUT_DIR/i
cp desktop.bundles/index/index.html $OUTPUT_DIR/
cp desktop.bundles/index/_index.css $OUTPUT_DIR/
cp desktop.bundles/index/_index.ie8.css $OUTPUT_DIR/
cp desktop.bundles/index/_index.js $OUTPUT_DIR/
cp -r desktop.bundles/index/i/* $OUTPUT_DIR/i/
cp -r i/* $OUTPUT_DIR/i/
cp favicon.ico $OUTPUT_DIR/
touch $OUTPUT_DIR/.nojekyll
echo "mint.msk.ru" > $OUTPUT_DIR/CNAME
