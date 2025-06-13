import { useLocation } from "@gatsbyjs/reach-router";
import {
    useWebsite
} from "@features/index";
import Index from "@content/meta/index"
import { theme } from "@features/mdx";
import {
    BreadcrumbList, BreadcrumbItem,
    Card,
    H2A,
    Header,
    Hgroup,
    Subheading,
} from "@features/ui";
import { ScreenOnly, useSubmit } from "@features/util";
import { ViewportPage } from "@features/page";
import { JsonLd } from "../components/json-ld.jsx";
import { SeoBasic } from "../components/seo-basic.jsx";
import { useTitle } from "../components/title.jsx";
import { useAbsolute } from "../hooks/use-absolute.js";
import { useSiteMetadata } from "../hooks/use-site-metadata.js";

const title = "Home";

const Seo = () => {
    const { pathname } = useLocation();
    const url = useAbsolute(pathname);
    return <SeoBasic title={title} url={url} />;
};

export const Head = () => {
    const json = useWebsite();
    const fulltitle = useTitle(title);
    return <>
               <title>{fulltitle}</title>
               <link type="application/atom+xml" rel="alternate" href="/feed.xml" />
               <Seo />
               <JsonLd srcdoc={json} />
           </>;
};

const IndexPage = () => {
    const { title, description } = useSiteMetadata();
    const onSubmit = useSubmit();
    return <ViewportPage
               navigation={
                   <ScreenOnly>
                   </ScreenOnly>
               }
               breadcrumbs={
                   <BreadcrumbList>
                       <BreadcrumbItem>
                           <span aria-current="page">Home</span>
                       </BreadcrumbItem>
                   </BreadcrumbList>
               }
               heading={title}
               subheading={<Subheading>{description}</Subheading>}
           >
               <Index components={theme} />
           </ViewportPage>;
};


export default IndexPage;
