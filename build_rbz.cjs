const AdmZip = require("adm-zip");
const zip = new AdmZip();

// Add the root rb file
zip.addLocalFile("plugin_build/mh_kitchen_pricing.rb");

// Add the folder
zip.addLocalFolder("plugin_build/mh_kitchen_pricing", "mh_kitchen_pricing");

// Write to file
zip.writeZip("dist/mh_kitchen_pricing.rbz");
console.log("Created dist/mh_kitchen_pricing.rbz");
