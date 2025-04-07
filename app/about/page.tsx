import path from 'path';
import { Fragment } from 'react';
import { readMDXFile } from '../blog/utils';
import { CustomMDX } from '../components/mdx';
// import WakaStats from '../components/wakatime/wakastats';
import Occupation from './occupation';

const contentPath = path.join(process.cwd(), 'app', 'about', 'content.mdx');
const { content } = readMDXFile(contentPath);

export const metadata = {
  title: 'About',
  description: 'About Pierre Le',
};

export default function Page() {
  return (
    <Fragment>
      <Occupation />
      <CustomMDX source={content} />
      {/* <GithubContributions /> */}
      {/* <Suspense
        fallback={
          <Fragment>
            <WakatimeSkeleton />
            <SpotifySkeleton />
          </Fragment>
        }
      >
        <WakaStats />
        <TopTracks />
      </Suspense> */}
    </Fragment>
  );
}
