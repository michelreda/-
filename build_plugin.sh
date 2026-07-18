#!/bin/bash
echo "Building MH Kitchen Pricing Pro SketchUp Plugin..."

# Build React UI
npm run build

# Create plugin structure
mkdir -p plugin_build/mh_kitchen_pricing/ui

# Copy React build to plugin UI folder
cp -r dist/* plugin_build/mh_kitchen_pricing/ui/

# Copy Ruby files
cp plugin/mh_kitchen_pricing.rb plugin_build/
cp -r plugin/mh_kitchen_pricing/* plugin_build/mh_kitchen_pricing/

# Create RBZ package
cd plugin_build
zip -r ../mh_kitchen_pricing_pro.rbz *
cd ..

# Cleanup
rm -rf plugin_build

echo "Plugin packaged as mh_kitchen_pricing_pro.rbz"
