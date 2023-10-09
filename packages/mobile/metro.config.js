const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

// Copied from https://docs.expo.dev/guides/monorepos/#modify-the-metro-config
//
// This needs to be .js, not .ts, otherwise weird errors with expo-router will appear.

// Find the project and workspace directories
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
config.resolver.disableHierarchicalLookup = false;

// Makes pnpm workspace imports work, like @pickleheads/common/lib/foo
config.resolver.unstable_enableSymlinks = true;

module.exports = config;
