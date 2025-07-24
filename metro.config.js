const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = mergeConfig(getDefaultConfig(__dirname), {
    resolver: {
        alias: {
            invariant: 'invariant',
        },
        sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx'],
        platforms: ['ios', 'android', 'native', 'web'],
    },
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
    },
});

module.exports = withNativeWind(config, { input: "./global.css" });
