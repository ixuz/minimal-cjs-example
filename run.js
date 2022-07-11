const { ComponentsManager } = require("componentsjs");

async function main() {
  const componentsManager = await ComponentsManager.build({
    mainModulePath: __dirname, // Path to your npm package's root
  });

  await componentsManager.configRegistry.register("config/config.jsonld");

  const app = "urn:my-module:App";
  const appInstance = await componentsManager.instantiate(app);
  appInstance.say();
}

main();
