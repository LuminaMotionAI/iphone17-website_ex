'use client';

import { Container, Group, Text, Button, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { useWindowScroll } from '@mantine/hooks';

const navItems = [
    { label: 'iPhone 17', href: '#hero' },
    { label: '특징', href: '#features' },
    { label: '디자인', href: '#design' },
    { label: '구매하기', href: '#pricing' },
];

export default function Navigation() {
    const [scroll] = useWindowScroll();
    const isScrolled = scroll.y > 50;

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                transition: 'all 0.3s ease',
            }}
        >
            <Container size="xl" py="md">
                <Group justify="space-between" align="center">
                    {/* Logo */}
                    <Text
                        component="a"
                        href="#"
                        size="xl"
                        fw={600}
                        style={{
                            color: '#f5f5f7',
                            textDecoration: 'none',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        <svg width="20" height="24" viewBox="0 0 17 21" fill="currentColor" style={{ marginRight: 8 }}>
                            <path d="M15.769 7.515c-.1.08-1.94 1.113-1.94 3.408 0 2.667 2.344 3.62 2.413 3.642-.008.058-.374 1.283-1.237 2.531-.775 1.115-1.586 2.226-2.814 2.226-1.228 0-1.539-.712-2.959-.712-1.38 0-1.87.735-2.99.735-1.12 0-1.9-1.033-2.814-2.303C2.394 15.536 1.5 12.965 1.5 10.515c0-3.956 2.575-6.054 5.109-6.054 1.348 0 2.47.883 3.317.883.806 0 2.066-.936 3.606-.936.584 0 2.68.053 4.06 2.018-.105.06-2.42 1.417-2.42 4.22 0 3.352 2.943 4.508 3.002 4.53-.01.03-.468 1.612-1.544 3.187-.983 1.445-2.002 2.889-3.556 2.889-1.554 0-1.945-.928-3.733-.928-1.788 0-2.35.928-3.81.928-1.46 0-2.449-1.312-3.622-2.92C.667 14.3 0 11.378 0 8.613c0-5.066 3.293-7.754 6.538-7.754 1.724 0 3.157 1.134 4.239 1.134 1.041 0 2.658-1.197 4.604-1.197.743 0 3.419.064 5.188 2.577l-.8.142z" />
                        </svg>
                    </Text>

                    {/* Nav Links */}
                    <Group gap="xl" visibleFrom="sm">
                        {navItems.map((item) => (
                            <Text
                                key={item.label}
                                component="a"
                                href={item.href}
                                size="sm"
                                c="gray.3"
                                style={{
                                    textDecoration: 'none',
                                    transition: 'color 0.2s',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f5f7')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                            >
                                {item.label}
                            </Text>
                        ))}
                    </Group>

                    {/* CTA Button */}
                    <Button
                        component="a"
                        href="#pricing"
                        variant="filled"
                        color="blue"
                        radius="xl"
                        size="sm"
                        style={{
                            background: '#0071e3',
                            fontWeight: 400,
                        }}
                    >
                        구매하기
                    </Button>
                </Group>
            </Container>
        </motion.header>
    );
}
