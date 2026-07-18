const AdmZip = require("adm-zip");
const fs = require("fs");
const path = require("path");

console.log("Packaging SketchUp Plugin...");

// 1. Ensure dist exists
if (!fs.existsSync("dist")) {
  console.error("Error: dist/ folder not found. Please run 'npm run build' first.");
  process.exit(1);
}

// 2. Create the ZIP archive
const zip = new AdmZip();

// Add the root rb file
zip.addLocalFile("plugin/mh_kitchen_pricing.rb");

// Add the main ruby script
zip.addLocalFile("plugin/mh_kitchen_pricing/main.rb", "mh_kitchen_pricing");

// Add the compiled UI build output
zip.addLocalFolder("dist", "mh_kitchen_pricing/ui");

// Write to file
const outputPath = "public/mh_kitchen_pricing_pro.rbz";
zip.writeZip(outputPath);

console.log("Successfully created:", outputPath);
console.log("You can now install this .rbz file in SketchUp.");
