const { isSupportedDomain, isSupportedProfile } = require("../lib/domains");
const { generateCompactPack } = require("../lib/compact-generator");

function generate(repoRoot, options) {
  const { domain, profile } = options;

  if (!isSupportedDomain(domain)) {
    console.error(`Unsupported domain: ${domain || "<missing>"}`);
    console.error("Supported domains: sql-postgresql, english, javascript, typescript");
    return 1;
  }

  if (!isSupportedProfile(profile)) {
    console.error(`Unsupported profile: ${profile || "<missing>"}`);
    console.error("Supported profiles: standard, compact");
    return 1;
  }

  if (profile !== "compact") {
    console.log("Standard pack generation is planned for Stage 16.1.");
    console.log("");
    console.log("For this repository, the standard pack output contract is documented at:");
    console.log("exports/project-pack-spec/STANDARD_GENERATION_PLAN.md");
    console.log("");
    console.log("Templates are available at:");
    console.log("tools/ulos-cli/templates/standard-pack/");
    console.log("");
    console.log("Current behavior:");
    console.log("- compact generation is implemented");
    console.log("- standard generation is planning-only");
    console.log("");
    console.log(`Requested pack: ${domain}-${profile}`);
    return 1;
  }

  try {
    const result = generateCompactPack(repoRoot, domain, { dryRun: options.dryRun });

    console.log(options.dryRun ? "Compact pack generation dry run" : "Generated compact pack");
    console.log("");
    console.log(`Domain: ${domain}`);
    console.log("Profile: compact");
    console.log(`Output: ${result.outputDir}`);
    console.log(`Files ${options.dryRun ? "planned" : "written"}: ${result.filesWritten}`);
    console.log("");
    console.log("Files:");
    for (const fileName of result.files) {
      console.log(`- ${fileName}`);
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
