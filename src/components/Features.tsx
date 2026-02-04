'use client';

import { Container, Title, Text, SimpleGrid, Card, Stack, Box, ThemeIcon } from '@mantine/core';
import { motion } from 'framer-motion';
import {
    IconCpu,
    IconCamera,
    IconBattery4,
    IconDeviceMobile,
    IconWifi,
    IconShieldCheck
} from '@tabler/icons-react';

const features = [
    {
        icon: IconCpu,
        title: 'A19 Pro 칩',
        description: '역대 가장 강력한 칩. 데스크탑급 퍼포먼스를 손 안에서.',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
        icon: IconCamera,
        title: '48MP 프로 카메라',
        description: '혁신적인 픽셀 융합 기술. 어둠 속에서도 완벽한 촬영.',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
        icon: IconBattery4,
        title: '최대 36시간 배터리',
        description: '하루 종일, 그리고 그 다음 날까지. 걱정 없이 사용하세요.',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
        icon: IconDeviceMobile,
        title: 'ProMotion 디스플레이',
        description: '120Hz 적응형 주사율. 눈부시게 선명한 Super Retina XDR.',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
        icon: IconWifi,
        title: 'Wi-Fi 7 & 5G Advanced',
        description: '초고속 연결. 어디서든 막힘없는 스트리밍과 다운로드.',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
        icon: IconShieldCheck,
        title: '보안 및 프라이버시',
        description: 'Face ID 3.0. 온디바이스 AI로 안전하게 보호.',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1] as const, // easeOut cubic bezier
        },
    },
};

export default function Features() {
    return (
        <Box
            id="features"
            component="section"
            py={120}
            style={{
                background: '#000000',
                position: 'relative',
            }}
        >
            <Container size="xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                >
                    <Stack align="center" mb={80}>
                        <Text
                            size="sm"
                            tt="uppercase"
                            fw={500}
                            c="blue"
                            style={{ letterSpacing: '0.1em' }}
                        >
                            Features
                        </Text>
                        <Title
                            order={2}
                            ta="center"
                            style={{
                                fontSize: 'clamp(32px, 6vw, 56px)',
                                fontWeight: 600,
                                letterSpacing: '-0.02em',
                                color: '#f5f5f7',
                            }}
                        >
                            왜 iPhone 17인가
                        </Title>
                        <Text
                            size="lg"
                            ta="center"
                            c="gray.5"
                            maw={600}
                            style={{ lineHeight: 1.6 }}
                        >
                            모든 것이 새롭게 설계되었습니다. 더 강력하고, 더 아름답고, 더 직관적인 경험.
                        </Text>
                    </Stack>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
                        {features.map((feature, index) => (
                            <motion.div key={feature.title} variants={itemVariants}>
                                <Card
                                    padding="xl"
                                    radius="lg"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        backdropFilter: 'blur(10px)',
                                        height: '100%',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    <Stack gap="md">
                                        <ThemeIcon
                                            size={56}
                                            radius="md"
                                            style={{
                                                background: feature.gradient,
                                            }}
                                        >
                                            <feature.icon size={28} stroke={1.5} />
                                        </ThemeIcon>
                                        <Title
                                            order={3}
                                            size="h4"
                                            style={{
                                                color: '#f5f5f7',
                                                fontWeight: 600,
                                            }}
                                        >
                                            {feature.title}
                                        </Title>
                                        <Text c="gray.5" size="sm" style={{ lineHeight: 1.6 }}>
                                            {feature.description}
                                        </Text>
                                    </Stack>
                                </Card>
                            </motion.div>
                        ))}
                    </SimpleGrid>
                </motion.div>
            </Container>
        </Box>
    );
}
