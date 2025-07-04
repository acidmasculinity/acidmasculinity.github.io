import { Fragment } from "react";
import rehypeReact from "rehype-react";
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
    P,
    withA,
    Hgroup,
    Section,
} from "@features/ui";
import { ViewportPage } from "@features/page";
import { SeoBasic } from "../components/seo-basic.jsx";
import { useTitle } from "../components/title.jsx";
import { useAbsolute } from "../hooks/use-absolute.js";
import { headingInner, heading } from "./bib.module.css";
import production from 'react/jsx-runtime';

const renderAst = new rehypeReact({
    ...production,
    components: {
        p: P
    }
});

const H4 = ({children, ...props}) => <h4 className={headingInner} {...props}>{children}</h4>;
const H4A = withA(H4);

const Heading = ({children, authors, article, link, year, ...props}) =>
<div className={heading}>
    {
        authors.length > 0 &&
            <>{authors.join(' ')}, </>
    }
    <H4A {...props}>{children}</H4A>
    {article && <>, {article}</>}
    {year && <>, {year}</>}
    {link && <>, <A href={link}>{link}</A></>}
</div>;

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
                                       bibs.map(({title, htmlAst, ...xs}) =>
                                           <Section
                                               heading={
                                                   <Heading
                                                       {...xs}
                                                       id={title}
                                                   >
                                                       {title}
                                                   </Heading>
                                               }>
                                               {
                                                   renderAst.compiler(htmlAst, { filePath: '' })
                                               }
                                           </Section>)
                                   }
                               </Fragment>
                           )
                       }
                   </nav>
               )}
           </ViewportPage>;
};

export default BlogPage;
