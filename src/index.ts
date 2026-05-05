// noDoubleEquals is in biome's recommended rules — flags `==` instead of `===`.
// .qlty/configs/biome.json sets noDoubleEquals: off.
// If the config IS applied → no issue here.
// If the config is NOT applied (bug) → biome flags this line.
const x: unknown = null;
if (x == null) {
  console.log("x is null or undefined");
}
