import styled from 'styled-components';
import { Sliders } from 'react-feather';
import Tile from '@/components/common/Tile';
import Typography from '@/components/common/Typography';
import { Grid, GridItem, Section, Stack, Row, Column } from '@/components/common/layout';
import getSpacing from '../../../../styles/spacing';


const SectionIntro = styled(Row)`
  margin-top: ${getSpacing(16)};
  margin-bottom: ${getSpacing(10)};
`;
const SectionHeader = styled.header`
  padding: 0 ${getSpacing(5)};
`;
const SectionFeature = styled(Stack)`
  margin-top: ${getSpacing(8)};
`;
const ImageWrap = styled.div`
  aspect-ratio: 1391/702;
  position: relative;
  margin: 0 -40px -40px -40px;
  background: url(/window-dark-cropped.png) top left no-repeat;
  background-size: 1391px 702px;
`;

const WhyUsSection = () => {
  return (
    <Section contained="lg" gutterTop gutterBottom={20} style={{ background: 'var(--fill-tertiary-alt)' }}>
      <SectionIntro>
        <Column width={7}>
          <SectionHeader>
            <Typography variant="headline-elevated">
              及其人性化的设计
            </Typography>
            <Typography variant="intro-elevated" gutterTop>
              我们的设计是为了让你的写作更加高效稳定，专注于写作本身，而不是花里胡哨的程序操作，只为稳定的写作体验。
              让你的感受到架构的优势
            </Typography>
          </SectionHeader>
        </Column>
      </SectionIntro>
      <SectionFeature gap={4} style={{ '--section-accent-color': 'var(--tomato)'}}>
        <SectionHeader>
          <Typography variant="headline" style={{ color: 'var(--section-accent-color)' }}>
          插件系统
          
          </Typography>
        </SectionHeader>
        <Grid columns={{ xs: 4, md: 6, lg: 8, xl: 12 }} gap>
          <GridItem
            as={Tile}
            width={{ xs: 4, md: 6, lg: 8, xl: 12 }}
            headline="可插拔插件"
            copy="由于有很多功能我们核心团队都非常想实现，但是大多数都非常零散，如果将它们分别独立于一个模块里，未免有点浪费，因此使用一个个插件实现是一个非常正确的选择。通过插件系统，你可以自由的扩展你的 Mog 满足你的任何需求"
            overlayCopy="使用插件可以额外实现的功能包括且不限于：

            使用 MWeb 等编辑器推送文章，
            实现核心团队并不打算实现的功能，
            集成统计系统至前端、私有文章的特殊处理、可移植到各处的功能，
            使用微信或 QQ 等工具管理后台，
            文章可以在服务端实现短代码解析，
            发生活动操作时，可以请求 webhook url
            "
            violator="Coming Soon"
          >
            <imgWrap />
          </GridItem>
          <GridItem 
            as={Tile} 
            width={6}
            headline="插件管理"
            copy="可视化的插件管理界面，可以安装、卸载、更新、禁用、启用等操作。查看所有插件的信息，可以搜索插件并安装。标准的发布审核机制，保护插件的版本安全。"
          />
          <GridItem 
            as={Tile} 
            width={6}
            headline="拓展全面"
            copy="插件可调度数据库进行数据处理与操作，通过已全局化的模块，允许插件注入其余的独立模块，对请求上下文进行操作，如设置请求头，设置响应头等，调用其他插件的方法"
          />
        </Grid>        
      </SectionFeature>
      <SectionFeature gap={4}>
        <SectionHeader>
          <Typography variant="headline" style={{ color: 'var(--section-accent-color)' }}>
            主题系统
          </Typography>
        </SectionHeader>
        <Grid columns={{ xs: 4, md: 6, lg: 8, xl: 12 }} gap>
          <GridItem
            as={Tile}
            width={{ xs: 4, md: 6, lg: 8, xl: 12 }}
            headline="多种形式的主题"
            copy="Mog 有多种形式的主题，包括独立的前端程序与依赖于后端的主题，服务端将支持 EJS 等模版引擎的解析，这意味着你可以使用 “前后端分离”、 “耦合” 和 “静态” 的方案"
            overlayCopy="你可以自由的选择你喜欢的主题，官方实现的独立主题都将最大程度支持 SSR，带来 SEO 优势"
            violator="Coming Soon"
          >
            <imgWrap />
          </GridItem>
          <GridItem 
            as={Tile} 
            width={4}
            headline="合理解析"
            copy="Mog 会在收到解析请求时解析所有模版引擎解析主题的配置信息，你可以在后台启用、禁用、卸载主题，主题的启用与禁用将会随时生效"
            // color="blue"
            gradient
          />
          <GridItem 
            as={Tile} 
            width={4}
            headline="动态静态化"
            copy="Mog 支持静态化，你可以在后台设置静态化的时间间隔，Mog 将会在指定的时间间隔内，自动将所有页面静态化，这意味着你可以在不影响用户体验的情况下，获得更好的 SEO"
          />
          <GridItem 
            as={Tile} 
            width={4}
            headline="多种渲染方案"
            copy="Mog 支持多种渲染方案，包括 EJS、Pug、Handlebars、Nunjucks 等，Mog 将会按照主题的配置信息，自动配置模版引擎。"
          />
        </Grid>        
      </SectionFeature>
      
    </Section>
  );
}

export default WhyUsSection;
