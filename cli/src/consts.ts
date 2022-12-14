import path from "path";
import { fileURLToPath } from "url";

// With the move to TSUP as a build tool, this keeps path routes in other files (installers, loaders, etc) in check more easily.
// Path is in relation to a single index.js file inside ./dist
const __filename = fileURLToPath(import.meta.url);
const distPath = path.dirname(__filename);
export const PKG_ROOT = path.join(distPath, "../");

//export const PKG_ROOT = path.dirname(require.main.filename);

export const TITLE_TEXT = `   __________  _________  ____________   ____ _____ __  ____   ________   ___    ____  ____ 
  / ____/ __ \\/ ____/   |/_  __/ ____/  / __ ) ___//  |/  / | / /_  __/  /   |  / __ \\/ __ \\
 / /   / /_/ / __/ / /| | / / / __/    / __  \\__ \\/ /|_/ /  |/ / / /    / /| | / /_/ / /_/ /
/ /___/ _, _/ /___/ ___ |/ / / /___   / /_/ /__/ / /  / / /|  / / /    / ___ |/ ____/ ____/ 
\\____/_/ |_/_____/_/  |_/_/ /_____/  /_____/____/_/  /_/_/ |_/ /_/    /_/  |_/_/   /_/      
                                                                                          
`;
export const DEFAULT_APP_NAME = "my-bsmnt-app";
export const CREATE_BSMNT_APP = "create-bsmnt-app";
