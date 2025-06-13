import { useId } from "react";
import { useLocation } from "@gatsbyjs/reach-router";
import {
    useBibList
} from "@features/bibliography";
import {
    A,
    BreadcrumbList, BreadcrumbA, BreadcrumbItem,
    Card,
    H2A,
    H3A,
    Hgroup,
    Ul,
    Li
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
    const navId = useId();
    return <ViewportPage
               breadcrumbs={
                   <BreadcrumbList>
                       <BreadcrumbA href="/">Home</BreadcrumbA>
                       <BreadcrumbItem>
                           <span aria-current="page">Anon: A Bibiliography</span>
                       </BreadcrumbItem>
                   </BreadcrumbList>
               }
               heading="Anon: A Bibiliography"
           >{
            Object.entries(bibsByCat).map(([dir, bibs]) =>
                   <nav key={dir} aria-labelledby={dir}>
                       <Card>
                           <header>
                               <Hgroup>
                                   <H2A id={dir}>
                                       {dir}
                                   </H2A>
                               </Hgroup>
                           </header>
                           {
                               bibs.map(({title, content}) =>
                                   <Card key={title}>
                                       <header>
                                           <Hgroup>
                                               <H3A id={title}>
                                                   {title}
                                               </H3A>
                                           </Hgroup>
                                       </header>
                                       {content}
                                   </Card>)
                           }
                       </Card>
                   </nav>
               )}
           </ViewportPage>;
};


export default BlogPage;
