import AppExtensionsSDK, { Command } from '@pipedrive/app-extensions-sdk';

async function initializeSdk() {
  const sdk = await new AppExtensionsSDK().initialize();
  await sdk.execute(Command.RESIZE, { height: 600, width: 800 });
  return sdk;
}

export default initializeSdk;
