import type { PackageJson } from "type-fest";
import type { Installer } from "~/installers/index.js";
import path from "path";
import fs from "fs-extra";
import { addPackageDependency } from "~/utils/addPackageDependency.js";

export const sassInstaller: Installer = ({ projectDir }) => {
  addPackageDependency({
    projectDir,
    dependencies: ["sass", "stylelint-config-standard-scss"],
    devMode: true,
  });

  // TODO: Set setup files for SASS modules
  /* const threeAssetDir = path.join(PKG_ROOT, "template/addons/prisma");

  const clientSrc = path.join(threeAssetDir, "client.ts");
  const clientDest = path.join(projectDir, "src/server/db/client.ts");

  const sampleApiRouteSrc = path.join(threeAssetDir, "sample-api.ts");
  const sampleApiRouteDest = path.join(projectDir, "src/pages/api/examples.ts");

  // add postinstall script to package.json */
  const packageJsonPath = path.join(projectDir, "package.json");

  const packageJsonContent = fs.readJSONSync(packageJsonPath) as PackageJson;

  // fs.copySync(clientSrc, clientDest);
  // fs.copySync(sampleApiRouteSrc, sampleApiRouteDest);
  fs.writeJSONSync(packageJsonPath, packageJsonContent, {
    spaces: 2,
  });
};
