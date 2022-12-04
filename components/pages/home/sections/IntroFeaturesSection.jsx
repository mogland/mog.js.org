import { useMemo } from 'react';
import { Feather, GitHub, Info, Layout, Sliders, Tool, Zap } from 'react-feather';
import Tile from '@/components/common/Tile';
import Typography from '@/components/common/Typography';
import { Grid, GridItem, Section, Stack } from '@/components/common/layout';
import { useSite } from '@/components/common/Site';
import Image from 'next/image';

const IntroFeaturesSection = () => {
  const { breakpoint } = useSite();

  const gap = useMemo(() => breakpoint === 'xs' ? 24 : 40, [breakpoint])
  
  return (
    <Section contained gutterBottom={20} variant="secondary">
      <Grid columns={{ xs: 1, lg: 2 }} gap={{ xs: 6, lg: 12 }}>
        <GridItem as={Tile} width={{ xs: 1, lg: 2 }}>
          <Stack direction={breakpoint === 'xs' ? "vertical" : "horizontal"} gap={3.5} >
            <div>
              <Info size={28} /> 
            </div>
            <Typography variant="intro">
            Mog v2 目前还在开发中，我们还没有提供可用的使用文档。当我们有一个 Alpha 版本准备测试时，我们将在这里发布一个文档链接。在此之前，我们欢迎贡献者帮助实现这个项目。
            </Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <Zap size={gap} />
            <Typography variant="intro" gutterTop>弹性服务</Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
            你可以按需装载你需要的服务，而不需要担心其他的影响。这项技术得益于 Mog 采用了微服务架构。
            </Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <img width={"100%"} src={'/docker_deploy-macos_demo.png'} />
          </Stack>
        </GridItem>
        {/* <GridItem>
          <Stack>
            <Feather size={gap} />
            <Typography variant="intro" gutterTop>
              Lightweight Yet Powerful
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              Designed to be lean with limitless potential. 
            </Typography>
          </Stack>
        </GridItem> */}
        <GridItem>
          <Stack>
            <GitHub size={gap} />
            <Typography variant="intro" gutterTop>
            自由软件
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
            Mog 是一个自由软件项目，在遵守 AGPL-3.0 许可证的情况下，你可以自由地分发，使用，二次修改等。
            </Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <Sliders size={gap} />
            <Typography variant="intro" gutterTop>
            可扩展 & 可自定义
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
            Mog 的服务都是可插拔的，你可以按需添加或者删除服务，而不需要担心其他服务的影响。
            </Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <Layout size={gap} />
            <Typography variant="intro" gutterTop>
            直观 & 可视化的配置
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
            我们对用户界面的设计将会朝着易于使用和提高效率的方向发展。
            </Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <img width={"100%"} src={'/mog-admin-window-light.png'} />
          </Stack>
        </GridItem>
        {/* <GridItem>
          <Stack>
            <Tool size={gap} />
            <Typography variant="intro" gutterTop>
              Better tools to get the job done
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              Feel connected to the code you are writing with tools to keep you on track. 
            </Typography>
          </Stack>
        </GridItem> */}
      </Grid>
    </Section>
  );
}

export default IntroFeaturesSection;
