import type { PackageJson } from "type-fest";
import type { Installer } from "~/installers/index.js";
import path from "path";
import fs from "fs-extra";
import { addPackageDependency } from "~/utils/addPackageDependency.js";

export const threeInstaller: Installer = ({ projectDir }) => {
  addPackageDependency({
    projectDir,
    dependencies: [
      "three",
      "@react-three/drei",
      "@react-three/fiber",
      "@react-three/postprocessing",
      "@react-three/rapier",
    ],
    devMode: false,
  });

  // TODO: Set setup files for three.js
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
