import { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

const useBibListRaw = () => useStaticQuery(graphql`
query UseBibList {
  allMarkdownRemark(filter: {childBib: {disabled: {eq: false}}}) {
     nodes {
       htmlAst
       childBib {
         section
         subsection
         article
         title
         site
         link
         authors
         year
       }
    }
  }
}`);

const group = (x, f) =>
      Object.entries(Object.groupBy(x, f));

const bySection = x => group(x, node => node.section);
const bySubsection = x => group(x, node => node.subsection);

const flatten = raw => raw.allMarkdownRemark.nodes.map(({ htmlAst, childBib }) => ({ htmlAst, ...childBib }));

const process = raw =>
      bySection(flatten(raw))
      .map(([k, v]) => [k, bySubsection(v)]);

export const useBibList = () => {
    const raw = useBibListRaw();
    return useMemo(() => {
        const result = process(raw);
        return result;
    }, [raw]);
}
