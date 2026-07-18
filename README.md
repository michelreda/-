# MH Kitchen Pricing Pro - SketchUp Plugin

## Overview
MH Kitchen Pricing Pro is a professional SketchUp 2026 extension for kitchen design pricing, quotation generation, and materials calculation. It completely replaces your previous Excel-based workflow with an integrated, modern HTML5/React UI directly inside SketchUp.

## Features
- **Modern Interface:** Dark/Light mode, Responsive UI, Sidebar Navigation.
- **Bilingual:** Full English and Arabic (RTL) language support.
- **Project Details:** Customer info, dates, and notes.
- **Measurements Engine:** Automatic sizing based on straight, L-shape, U-shape, G-shape, and Island layouts.
- **Materials Selection:** Configurable wood types, board thicknesses, back panels, and hardware/accessories.
- **Pricing Calculation:** Real-time calculation of material cost, manufacturing, installation, transportation, waste percentage, profit, and VAT.
- **Reports:** Professional quotation and printable cost summaries.
- **Internal JSON Database:** Easily edit `src/data/database.json` to change default prices without touching code or Excel files.

## Installation into SketchUp

1. Download the source files.
2. Build the plugin UI if making changes (requires Node.js):
   ```bash
   npm install
   npm run build
   ```
3. Copy the compiled UI files:
   - Move the contents of `dist/` into `plugin/mh_kitchen_pricing/ui/`.
4. Create the RBZ:
   - Select the `plugin/mh_kitchen_pricing.rb` file and the `plugin/mh_kitchen_pricing/` folder.
   - Compress them into a ZIP archive.
   - Rename the `.zip` extension to `.rbz`.
5. Install in SketchUp:
   - Open SketchUp 2026.
   - Go to **Extensions** > **Extension Manager**.
   - Click **Install Extension** and select the `.rbz` file.
   - The plugin will appear in the Plugins menu as **MH Kitchen Pricing Pro**.

## Extending the Database
All material pricing and settings are managed in `src/data/database.json`. You can modify this JSON file to update rates for wood types, hardware, profit margins, and tax rates.

## Future Roadmap (OpenCutList)
The data structure has been designed to easily bridge with OpenCutList via the Ruby API for automatic board optimization in future updates.
