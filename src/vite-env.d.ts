/// <reference types="vite/client" />

/// <reference types="../node_modules/phaser/types/SpineFile.d.ts" />
/// <reference types="../node_modules/phaser/types/SpineGameObject.d.ts" />
/// <reference types="../node_modules/phaser/types/SpinePlugin.d.ts" />

// https://www.typescriptlang.org/docs/handbook/declaration-merging.html
declare interface Window {
  SpinePlugin: any;
}
