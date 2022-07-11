const { ComponentsManager } = require("componentsjs");

async function main() {
  const componentsManager = await ComponentsManager.build({
    mainModulePath: __dirname, // Path to your npm package's root
  });

  await componentsManager.configRegistry.register("config/config.jsonld");

  const myInstance = await componentsManager.instantiate("urn:my-module:myInstance");
  myInstance.say();
}

main();
