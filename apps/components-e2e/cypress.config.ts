import { defineConfig } from "cypress";
import { nxE2EStorybookPreset } from "@nx/storybook/presets/cypress";

export default defineConfig({
  e2e: nxE2EStorybookPreset(__dirname),
});
