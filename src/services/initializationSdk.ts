import AppExtensionsSDK, {Command} from "@pipedrive/app-extensions-sdk";

export async function initializeSdk() {
  try {
    const sdk = await new AppExtensionsSDK().initialize();
    await sdk.execute(Command.RESIZE, { height: 600, width: 800 });

    return sdk;
  } catch (error) {
    console.warn("SDK initialization failed:", error);
  }
}