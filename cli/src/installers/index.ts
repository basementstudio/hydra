import type { PackageManager } from "~/utils/getUserPkgManager.js";
import { envVariablesInstaller } from "~/installers/envVars.js";
import { nextAuthInstaller } from "~/installers/nextAuth.js";
import { threeInstaller } from "~/installers/three.js";
import { tailwindInstaller } from "~/installers/tailwind.js";
import { trpcInstaller } from "~/installers/trpc.js";
import { sassInstaller } from "./sass.js";

// Turning this into a const allows the list to be iterated over for programatically creating prompt options
// Should increase extendability in the future
export const availablePackages = [
  "nextAuth",
  "three",
  "tailwind",
  "trpc",
  "envVariables",
  "sass",
] as const;
export type AvailablePackages = typeof availablePackages[number];

/*
 * This maps the necessary packages to a version.
 * This improves performance significantly over fetching it from the npm registry.
 */
export const dependencyVersionMap = {
  // NextAuth.js
  "next-auth": "^4.18.3",
  "@next-auth/prisma-adapter": "^1.0.5",

  // Three JS
  three: "^0.146.0",
  "@react-three/drei": "^9.45.0",
  "@react-three/fiber": "^8.9.1",
  "@react-three/postprocessing": "^2.7.0",
  "@react-three/rapier": "^0.10.0",

  // SASS
  sass: "1.49.9",
  "stylelint-config-standard-scss": "^2.0.1",

  // TailwindCSS
  tailwindcss: "^3.2.0",
  autoprefixer: "^10.4.7",
  postcss: "^8.4.14",
  prettier: "^2.7.1",
  "prettier-plugin-tailwindcss": "^0.1.13",

  // tRPC
  "@trpc/client": "^10.0.0",
  "@trpc/server": "^10.0.0",
  "@trpc/react-query": "^10.0.0",
  "@trpc/next": "^10.0.0",
  "@tanstack/react-query": "^4.16.0",
  superjson: "1.9.1",
} as const;
export type AvailableDependencies = keyof typeof dependencyVersionMap;

export interface InstallerOptions {
  projectDir: string;
  pkgManager: PackageManager;
  noInstall: boolean;
  packages?: PkgInstallerMap;
  projectName?: string;
}

export type Installer = (opts: InstallerOptions) => void;

export type PkgInstallerMap = {
  [pkg in AvailablePackages]: {
    inUse: boolean;
    installer: Installer;
  };
};

export const buildPkgInstallerMap = (
  packages: AvailablePackages[],
): PkgInstallerMap => ({
  nextAuth: {
    inUse: packages.includes("nextAuth"),
    installer: nextAuthInstaller,
  },
  three: {
    inUse: packages.includes("three"),
    installer: threeInstaller,
  },
  sass: {
    inUse: packages.includes("sass"),
    installer: sassInstaller,
  },
  tailwind: {
    inUse: packages.includes("tailwind"),
    installer: tailwindInstaller,
  },
  trpc: {
    inUse: packages.includes("trpc"),
    installer: trpcInstaller,
  },
  envVariables: {
    inUse: true,
    installer: envVariablesInstaller,
  },
});
