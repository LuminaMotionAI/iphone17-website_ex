'use client';

import { Container, Title, Text, Button, Group, Stack, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <Box
            id="hero"
            component="section"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
                paddingTop: '80px',
            }}
        >
            {/* Background glow effect */}
            <Box
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
                    filter: 'blur(60px)',
                    zIndex: 0,
                }}
            />

            <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
                <Stack align="center" gap="xl">
                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Title
                            order={1}
                            ta="center"
                            style={{
                                fontSize: 'clamp(48px, 10vw, 96px)',
                                fontWeight: 600,
                                letterSpacing: '-0.03em',
                                lineHeight: 1.05,
                                color: '#f5f5f7',
                            }}
                        >
                            iPhone 17
                        </Title>
                    </motion.div>

                    {/* Subheadline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Text
                            size="xl"
                            ta="center"
                            c="gray.4"
                            style={{
                                fontSize: 'clamp(21px, 3vw, 28px)',
                                fontWeight: 400,
                                maxWidth: '600px',
                            }}
                        >
                            완전히 새로운 세계.{' '}
                            <Text
                                component="span"
                                style={{
                                    background: 'linear-gradient(90deg, #fb7185, #a855f7, #3b82f6)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                상상을 초월하다.
                            </Text>
                        </Text>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Group gap="md" mt="lg">
                            <Button
                                component="a"
                                href="#pricing"
                                size="lg"
                                radius="xl"
                                style={{
                                    background: '#0071e3',
                                    padding: '12px 28px',
                                    fontSize: '17px',
                                    fontWeight: 400,
                                }}
                            >
                                구매하기
                            </Button>
                            <Button
                                component="a"
                                href="#features"
                                variant="outline"
                                size="lg"
                                radius="xl"
                                color="blue"
                                style={{
                                    padding: '12px 28px',
                                    fontSize: '17px',
                                    fontWeight: 400,
                                    borderColor: '#0071e3',
                                    color: '#0071e3',
                                }}
                            >
                                더 알아보기
                            </Button>
                        </Group>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        style={{
                            marginTop: '40px',
                            filter: 'drop-shadow(0 0 80px rgba(168, 85, 247, 0.4))',
                        }}
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <Image
                                src="/iphone17-hero.png"
                                alt="iPhone 17"
                                width={500}
                                height={500}
                                style={{
                                    objectFit: 'contain',
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                                priority
                            />
                        </motion.div>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        style={{ marginTop: '40px' }}
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <Text size="sm" c="gray.6">
                                스크롤하여 더 알아보기
                            </Text>
                        </motion.div>
                    </motion.div>
                </Stack>
            </Container>
        </Box>
    );
}
