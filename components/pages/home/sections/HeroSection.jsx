

import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import Typography from '@/components/common/Typography';
import { Row, Column, Section, Stack } from '@/components/common/layout';
import HeroImage from '../HeroImage';
import Button from '../../../common/Button';
import Image from 'next/image';

const ProductIconWrap = styled.div`
  width: 128px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroSection = () => {
  return (
    <Parallax
      style={{ overflow: 'visible' }}
      renderLayer={(percentage) => {
        return (
          <Section contained gutterTop>
            <Row align="center" style={{ position: 'relative', zIndex: 1 }}>
              <Column width={{ md: 12, lg: 12 }}>
                <Stack gap={2} align="center">
                  <ProductIconWrap>
                    <Image
                      width={128}
                      height={128}
                      src="/logo.svg"
                      alt="Mog product icon"
                    />
                  </ProductIconWrap>
                  <Typography variant="eyebrow-elevated" as="h1">
                  Mog - /mɑːɡ/
                  </Typography>
                  <Typography variant="headline-elevated">
                  A flexible, modular Blog System.
                  Open source. Free forever.
                  </Typography>
                  <Typography variant="intro-elevated" color="tertiary" gutterBottom>
                  Mog 是一个易于扩展的现代博客系统。它突破地采用了微服务架构，在结构设计是模块化、灵活的。
您可以轻松地将其自定义以满足您的需求。 更可以通过接口来开发自己的前/中后台，也可以通过插件来开发自己的功能。
                  </Typography>
                  <Button disabled>Release Coming Soon</Button>
                  <Typography variant="body-reduced" color="tertiary">v2.0.0 | Node.js 16+</Typography>
                </Stack>
              </Column>
            </Row>
            <Row align="center">
              <Column>
                <HeroImage percentage={percentage} />
              </Column>
            </Row>
          </Section>
        )
      }}
    />
  );
}

export default HeroSection;
