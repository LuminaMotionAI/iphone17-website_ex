'use client';

import { Container, Title, Text, SimpleGrid, Card, Stack, Box, Badge, Button, Group, Divider } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconCheck, IconShoppingCart } from '@tabler/icons-react';

const models = [
    {
        name: 'iPhone 17',
        tagline: '완벽한 시작',
        price: '₩1,350,000',
        priceNote: '부터',
        color: '#3b82f6',
        features: [
            '6.3인치 Super Retina XDR',
            'A19 칩',
            '48MP 듀얼 카메라',
            '최대 28시간 배터리',
            '128GB / 256GB / 512GB',
        ],
        popular: false,
    },
    {
        name: 'iPhone 17 Pro',
        tagline: '프로를 위한 프로',
        price: '₩1,750,000',
        priceNote: '부터',
        color: '#a855f7',
        features: [
            '6.3인치 ProMotion 디스플레이',
            'A19 Pro 칩',
            '48MP 트리플 프로 카메라',
            '최대 32시간 배터리',
            '256GB / 512GB / 1TB',
            '티타늄 디자인',
        ],
        popular: true,
    },
    {
        name: 'iPhone 17 Pro Max',
        tagline: '궁극의 아이폰',
        price: '₩2,150,000',
        priceNote: '부터',
        color: '#f59e0b',
        features: [
            '6.9인치 ProMotion 디스플레이',
            'A19 Pro 칩',
            '48MP 트리플 프로 카메라',
            '최대 36시간 배터리',
            '256GB / 512GB / 1TB',
            '티타늄 디자인',
            '5배 광학 줌',
        ],
        popular: false,
    },
];

export default function Pricing() {
    return (
        <Box
            id="pricing"
            component="section"
            py={120}
            style={{
                background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
                position: 'relative',
            }}
        >
            <Container size="xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
                            Pricing
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
                            당신에게 맞는 iPhone
                        </Title>
                        <Text
                            size="lg"
                            ta="center"
                            c="gray.5"
                            maw={600}
                        >
                            모든 모델은 Apple의 완벽한 생태계와 함께합니다.
                        </Text>
                    </Stack>
                </motion.div>

                <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
                    {models.map((model, index) => (
                        <motion.div
                            key={model.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card
                                padding="xl"
                                radius="xl"
                                style={{
                                    background: model.popular
                                        ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
                                        : 'rgba(255, 255, 255, 0.03)',
                                    border: model.popular
                                        ? '2px solid rgba(168, 85, 247, 0.5)'
                                        : '1px solid rgba(255, 255, 255, 0.1)',
                                    position: 'relative',
                                    overflow: 'visible',
                                    height: '100%',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {model.popular && (
                                    <Badge
                                        color="grape"
                                        size="lg"
                                        radius="xl"
                                        style={{
                                            position: 'absolute',
                                            top: -12,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                        }}
                                    >
                                        인기
                                    </Badge>
                                )}

                                <Stack gap="lg">
                                    <Box>
                                        <Text size="sm" c="gray.5" mb={4}>
                                            {model.tagline}
                                        </Text>
                                        <Title
                                            order={3}
                                            style={{
                                                fontSize: '28px',
                                                fontWeight: 600,
                                                color: '#f5f5f7',
                                            }}
                                        >
                                            {model.name}
                                        </Title>
                                    </Box>

                                    <Divider color="dark.6" />

                                    <Box>
                                        <Text
                                            style={{
                                                fontSize: '40px',
                                                fontWeight: 600,
                                                color: model.color,
                                                lineHeight: 1,
                                            }}
                                        >
                                            {model.price}
                                        </Text>
                                        <Text size="sm" c="gray.5">
                                            {model.priceNote}
                                        </Text>
                                    </Box>

                                    <Stack gap="sm">
                                        {model.features.map((feature) => (
                                            <Group key={feature} gap="xs" wrap="nowrap">
                                                <IconCheck size={18} color="#22c55e" />
                                                <Text size="sm" c="gray.4">
                                                    {feature}
                                                </Text>
                                            </Group>
                                        ))}
                                    </Stack>

                                    <Button
                                        fullWidth
                                        size="lg"
                                        radius="xl"
                                        leftSection={<IconShoppingCart size={20} />}
                                        style={{
                                            background: model.popular ? model.color : '#0071e3',
                                            marginTop: 'auto',
                                        }}
                                    >
                                        구매하기
                                    </Button>
                                </Stack>
                            </Card>
                        </motion.div>
                    ))}
                </SimpleGrid>

                {/* Additional info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <Text ta="center" c="gray.6" size="sm" mt={60}>
                        모든 가격은 할부 구매 시 변동될 수 있습니다. Apple Trade In으로 보상 판매 가능.
                    </Text>
                </motion.div>
            </Container>
        </Box>
    );
}
