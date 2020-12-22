import { Typography } from "@material-ui/core";
import Link from "components/Link";
import MainFeature from "components/MainFeature";
import PageContentContainer from "components/PageContentContainer";
import StickyFooterLayout from "layouts/StickFooter";

export default function IndexPage() {
  return (
    <StickyFooterLayout>
      <MainFeature image="/images/space/mars-explore.svg" imageText="Mars!">
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          Maffs Made Easy!
        </Typography>
        <Typography variant="h5" color="inherit" paragraph>
          Help yourself to everything. It's free!
        </Typography>
        <Typography>
          We don't even collect data, it's all stored just in your browser
        </Typography>
      </MainFeature>
      <PageContentContainer>
        <Typography>
          Hello World. <Link href="/about">About</Link>
        </Typography>
      </PageContentContainer>
    </StickyFooterLayout>
  );
}
