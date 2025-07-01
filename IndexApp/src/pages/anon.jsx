import { Fragment } from "react";
import { useLocation } from "@gatsbyjs/reach-router";
import {
    useBibList
} from "@features/bibliography";
import {
    BreadcrumbList, BreadcrumbA, BreadcrumbItem,
    Card,
    A,
    H2A,
    H3A,
    H4A,
    Hgroup
} from "@features/ui";
import { ViewportPage } from "@features/page";
import { SeoBasic } from "../components/seo-basic.jsx";
import { useTitle } from "../components/title.jsx";
import { useAbsolute } from "../hooks/use-absolute.js";

const title = "Anon: A Bibliography";

const Seo = () => {
    const { pathname } = useLocation();
    const url = useAbsolute(pathname);
    return <SeoBasic title={title} url={url} />;
};

export const Head = () => {
    const fulltitle = useTitle(title);
    return <>
               <title>{fulltitle}</title>
               <Seo />
           </>;
};

const BlogPage = () => {
    const bibsByCat = useBibList();
    return <ViewportPage
               breadcrumbs={
                   <BreadcrumbList>
                       <BreadcrumbA href="/">Home</BreadcrumbA>
                       <BreadcrumbItem>
                           <span aria-current="page">Anon: A Bibliography</span>
                       </BreadcrumbItem>
                   </BreadcrumbList>
               }
               heading="Anon: A Bibliography"
           >{
               Object.entries(bibsByCat).map(([dir, sec]) =>
                   <nav key={dir} aria-labelledby={dir}>
                       <Card>
                           <header>
                               <Hgroup>
                                   <H2A id={dir}>
                                       {dir}
                                   </H2A>
                               </Hgroup>
                           </header>
                       </Card>
                       {
                           sec.map(([subsec, bibs]) =>
                               <Fragment key={subsec}>
                                   <Card>
                                       <header>
                                           <Hgroup>
                                               <H3A id={subsec}>
                                                   {subsec}
                                               </H3A>
                                           </Hgroup>
                                       </header>
                                   </Card>
                                   {
                                       bibs.map(({title, content, article, link}) =>
                                           <Card key={title}>
                                               <header>
                                                   <Hgroup>
                                                       <H4A id={title}>
                                                           {title}
                                                       </H4A>
                                                       {article}
                                                       {link &&
                                                        <A href={link}>{link}</A>}
                                                   </Hgroup>
                                               </header>
                                               {content}
                                           </Card>)
                                   }
                               </Fragment>
                           )
                       }
                   </nav>
               )}
           </ViewportPage>;
};


export default BlogPage;
