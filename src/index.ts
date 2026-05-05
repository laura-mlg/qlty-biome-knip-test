// This file uses `var` intentionally.
// biome's noVar rule would flag this — UNLESS biome.json with noVar: off is applied.
// Test: if qlty check flags this, it means .qlty/configs/biome.json is NOT being used.
var message = "hello world";
console.log(message);
