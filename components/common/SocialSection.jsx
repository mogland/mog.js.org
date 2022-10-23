import styled from 'styled-components';
import { Heart } from 'react-feather';
import Typography from '@/components/common/Typography';
import { Grid, GridItem, Section, Stack } from '@/components/common/layout';
import QQSvg from '@/assets/qq-icon.svg'
import DiscordSvg from '@/assets/discord-icon.svg'
import GitHubSvg from '@/assets/github-icon.svg'
import links from '@/data/links';

const QQIcon = styled(QQSvg)`
  width: 48px;
  height: 48px;
`
const GitHubIcon = styled(GitHubSvg)`
  width: 48px;
  height: 48px;
`

const SocialSection = () => {
  return (
    <Section contained gutterY>
      {/* <Grid columns={{ xs: 1, md: 2, lg: 4}} gap> */}
      <Grid columns={{ xs: 1, md: 2, lg: 2}} gap>
        <GridItem>
          <Stack gap={1} align="center" style={{ textAlign: 'center' }}>
            <QQIcon />
            <Typography variant="headline-body">Join the conversation</Typography>
            <Typography variant="body-reduced">
              Some of the best ideas come from our community. Join us to influence Mog.
            </Typography>
            <Typography variant="body-reduced"><a href={links.qq}>Start a conversation</a></Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack gap={1} align="center" style={{ textAlign: 'center' }}>
            <GitHubIcon />
            <Typography variant="headline-body">Start Contributing</Typography>
            <Typography variant="body-reduced">
              Help shape the future of Mog. Submit an issue or become a contributor today.
            </Typography>
            <Typography variant="body-reduced"><a href={links.githubRepo}>Check it out</a></Typography>
          </Stack>
        </GridItem>
      </Grid>
    </Section>
  );
}

export default SocialSection;
