#!/usr/bin/env bun
// Patch neo-blessed tput.js to not crash on uncompilable terminfo caps
// (e.g. foot terminal's plab_norm generates invalid JS from the terminfo compiler)
import { readFileSync, writeFileSync } from "fs"
import { join } from "path"

const tputPath = join(import.meta.dir, "..", "node_modules", "neo-blessed", "lib", "tput.js")

const old = `  } catch (e) {
    console.error('');
    console.error('Error on %s:', tkey);
    console.error(JSON.stringify(str));
    console.error('');
    console.error(code.replace(/(,|;)/g, '$1\\n'));
    e.stack = e.stack.replace(/\\x1b/g, '\\\\x1b');
    throw e;
  }`

const patched = `  } catch (e) {
    // Gracefully skip uncompilable terminfo caps (foot plab_norm, etc.)
    return noop;
  }`

const src = readFileSync(tputPath, "utf-8")
if (src.includes("throw e;") && src.includes("Error on %s:")) {
  writeFileSync(tputPath, src.replace(old, patched))
}
