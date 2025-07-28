import { useEffect } from 'react';
import AppExtensionsSDK, { Command } from '@pipedrive/app-extensions-sdk';

export function Modal() {
  useEffect(() => {
    (async () => {
      try {
        const sdk = await new AppExtensionsSDK().initialize();
        await sdk.execute(Command.RESIZE, { height: 320 });
      } catch (e) {
        console.warn('Running outside Pipedrive iframe', e);
      }
    })();
  }, []);

  return (
    <div style={{ padding: 12, fontFamily: 'system-ui, Arial' }}>
      <div style={{ fontSize: 16, marginBottom: 8 }}>✅ Modal loaded</div>
    </div>
  );
}
