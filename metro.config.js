const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");

const defaultConfig = getDefaultConfig(__dirname);

const config = mergeConfig(defaultConfig, {
    resolver: {
        alias: {
            invariant: "invariant",
        },
        assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== "svg"),
        sourceExts: [...defaultConfig.resolver.sourceExts, "svg"],
        platforms: ['ios', 'android', 'native', 'web'],
    },
    transformer: {
        babelTransformerPath: require.resolve("react-native-svg-transformer"),
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
    },
});

const finalConfig = withNativeWind(config, { input: "./global.css" });

module.exports = finalConfig;
