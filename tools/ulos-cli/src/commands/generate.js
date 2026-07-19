const { SUPPORTED_DOMAINS, isSupportedDomain, isSupportedProfile } = require("../lib/domains");
const { generateCompactPack } = require("../lib/compact-generator");
const { generateStandardPack } = require("../lib/standard-generator");

function generate(repoRoot, options) {
  const { domain, profile } = options;

  if (!isSupportedDomain(domain)) {
    console.error(`Unsupported domain: ${domain || "<missing>"}`);
    console.error(`Supported domains: ${SUPPORTED_DOMAINS.join(", ")}`);
    return 1;
  }

  if (!isSupportedProfile(profile)) {
    console.error(`Unsupported profile: ${profile || "<missing>"}`);
    console.error("Supported profiles: standard, compact");
    return 1;
  }

  try {
    const result = profile === "compact"
      ? generateCompactPack(repoRoot, domain, { dryRun: options.dryRun })
      : generateStandardPack(repoRoot, domain, { dryRun: options.dryRun, outDir: options.outDir });

    const profileLabel = profile === "compact" ? "compact" : "standard";
    console.log(options.dryRun ? `${profileLabel[0].toUpperCase()}${profileLabel.slice(1)} pack generation dry run` : `Generated ${profileLabel} pack`);
    console.log("");
    console.log(`Domain: ${domain}`);
    console.log(`Profile: ${profile}`);
    console.log(`Output: ${result.outputDir}`);
    console.log(`Files ${options.dryRun ? "planned" : "written"}: ${result.filesWritten}`);
    console.log("");
    console.log("Files:");
    for (const fileName of result.files) {
      console.log(`- ${fileName}`);
    }
    if (options.dryRun && result.sources) {
      console.log("");
      console.log("Sources:");
      for (const source of result.sources) {
        console.log(`- ${source}`);
      }
    }
    console.log("");
    console.log("Next:");
    console.log("- run: node tools/ulos-cli/src/index.js validate");
    return 0;
  } catch (error) {
    console.error(`Generation failed: ${error.message}`);
    return 1;
  }
}

module.exports = {
  generate,
};
