import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { colors, typography, spacing, layout } from '../theme';

const MainScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.content}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>TWOGETHER</Text>
                        <View style={styles.headerIcons}>
                            <Text style={styles.icon}>🔔</Text>
                            <Text style={styles.icon}>🔍</Text>
                        </View>
                    </View>

                    {/* Main Content */}
                    <View style={styles.mainContent}>
                        <Text style={styles.subtitle}>
                            우리가 함께한 지 350일이 지났어요!
                        </Text>
                    </View>

                    {/* Recommendation Section */}
                    <View style={styles.recommendationSection}>
                        <Text style={styles.sectionTitle}>
                            대충 놀만한 것 추천 리스트
                        </Text>

                        {/* Recommendation Item */}
                        <View style={styles.recommendationItem}>
                            <View style={styles.recommendationIcon}>
                                <Text style={styles.iconText}>H</Text>
                            </View>
                            <View style={styles.recommendationContent}>
                                <Text style={styles.recommendationTitle}>추천 활동</Text>
                                <Text style={styles.recommendationSubtitle}>함께 즐길 수 있는 활동</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grayscale[700],
    },
    scrollView: {
        flex: 1,
    },
    content: {
        paddingHorizontal: layout.screenPadding.horizontal,
        paddingVertical: layout.screenPadding.vertical,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing[6],
    },
    headerTitle: {
        fontSize: typography.fontSize.lg,
        fontWeight: '600' as const,
        color: colors.grayscale[100],
        fontFamily: typography.fontFamily.logo,
    },
    headerIcons: {
        flexDirection: 'row',
        gap: spacing[4],
    },
    icon: {
        fontSize: typography.fontSize.lg,
    },
    mainContent: {
        marginBottom: spacing[8],
    },
    subtitle: {
        fontSize: typography.fontSize.xl,
        color: colors.grayscale[200],
        marginBottom: spacing[2],
        fontFamily: typography.fontFamily.base,
    },
    title: {
        fontSize: typography.fontSize['3xl'],
        fontWeight: '700' as const,
        color: colors.brand.primary,
        marginBottom: spacing[4],
        fontFamily: typography.fontFamily.base,
    },
    catContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: spacing[6],
    },
    cat1: {
        width: spacing[16],
        height: spacing[16],
        backgroundColor: colors.grayscale[400],
        borderRadius: layout.borderRadius.full,
        marginRight: spacing[4],
        justifyContent: 'center',
        alignItems: 'center',
    },
    cat2: {
        width: spacing[12],
        height: spacing[12],
        backgroundColor: colors.grayscale[400],
        borderRadius: layout.borderRadius.full,
        justifyContent: 'center',
        alignItems: 'center',
    },
    catEmoji: {
        fontSize: typography.fontSize['2xl'],
        fontFamily: typography.fontFamily.base,
    },
    catEmoji2: {
        fontSize: typography.fontSize.xl,
        fontFamily: typography.fontFamily.base,
    },
    recommendationSection: {
        // 추가 스타일...
    },
    sectionTitle: {
        fontSize: typography.fontSize.lg,
        fontWeight: '600' as const,
        color: colors.grayscale[100],
        marginBottom: spacing[4],
        fontFamily: typography.fontFamily.base,
    },
    recommendationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing[4],
    },
    recommendationIcon: {
        width: spacing[12],
        height: spacing[12],
        backgroundColor: colors.brand.primary,
        borderRadius: layout.borderRadius.full,
        marginRight: spacing[3],
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconText: {
        color: colors.grayscale[700],
        fontWeight: '700' as const,
        fontSize: typography.fontSize.lg,
        fontFamily: typography.fontFamily.base,
    },
    recommendationContent: {
        flex: 1,
    },
    recommendationTitle: {
        color: colors.grayscale[100],
        fontWeight: '500' as const,
        fontFamily: typography.fontFamily.base,
    },
    recommendationSubtitle: {
        color: colors.grayscale[300],
        fontSize: typography.fontSize.sm,
        fontFamily: typography.fontFamily.base,
    },
});

export default MainScreen; 