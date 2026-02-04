'use client';

import { Container, Text, Group, Stack, Anchor, Divider, Box, SimpleGrid } from '@mantine/core';

const footerLinks = {
    'Shop': [
        { label: 'iPhone', href: '#' },
        { label: 'Mac', href: '#' },
        { label: 'iPad', href: '#' },
        { label: 'Apple Watch', href: '#' },
        { label: 'Accessories', href: '#' },
    ],
    '서비스': [
        { label: 'Apple Music', href: '#' },
        { label: 'Apple TV+', href: '#' },
        { label: 'iCloud', href: '#' },
        { label: 'Apple Arcade', href: '#' },
    ],
    '지원': [
        { label: 'iPhone 지원', href: '#' },
        { label: 'AppleCare+', href: '#' },
        { label: '수리 서비스', href: '#' },
        { label: '문의하기', href: '#' },
    ],
    '쇼핑 및 계정': [
        { label: 'Apple Store', href: '#' },
        { label: '주문 상태', href: '#' },
        { label: '쇼핑 도움말', href: '#' },
    ],
};

export default function Footer() {
    return (
        <Box
            component="footer"
            py={60}
            style={{
                background: '#000000',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
        >
            <Container size="xl">
                <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="xl" mb={40}>
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <Stack key={category} gap="sm">
                            <Text size="sm" fw={600} c="gray.4">
                                {category}
                            </Text>
                            {links.map((link) => (
                                <Anchor
                                    key={link.label}
                                    href={link.href}
                                    size="xs"
                                    c="gray.6"
                                    underline="never"
                                    style={{ transition: 'color 0.2s' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f5f7')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                                >
                                    {link.label}
                                </Anchor>
                            ))}
                        </Stack>
                    ))}
                </SimpleGrid>

                <Divider color="dark.6" my={30} />

                <Stack gap="md">
                    <Text size="xs" c="gray.6" lh={1.6}>
                        1. 표시된 가격은 기본 모델 기준이며, 저장 용량 및 옵션에 따라 달라질 수 있습니다.
                        <br />
                        2. 배터리 사용 시간은 사용 환경 및 설정에 따라 다를 수 있습니다.
                        <br />
                        3. 일부 기능은 특정 지역 또는 언어에서 사용하지 못할 수 있습니다.
                    </Text>

                    <Group justify="space-between" align="center" wrap="wrap" gap="md">
                        <Group gap="xs">
                            <Text size="xs" c="gray.6">
                                Copyright © 2026 Apple Inc. All rights reserved.
                            </Text>
                        </Group>
                        <Group gap="md">
                            <Anchor href="#" size="xs" c="gray.6" underline="never">
                                개인정보 처리방침
                            </Anchor>
                            <Anchor href="#" size="xs" c="gray.6" underline="never">
                                이용 약관
                            </Anchor>
                            <Anchor href="#" size="xs" c="gray.6" underline="never">
                                사이트 맵
                            </Anchor>
                        </Group>
                    </Group>
                </Stack>
            </Container>
        </Box>
    );
}
