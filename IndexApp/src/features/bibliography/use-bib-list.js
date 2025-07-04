import { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

const useBibListRaw = () => useStaticQuery(graphql`
query UseBibList {
  allMarkdownRemark(filter: {childBib: {disabled: {eq: false}}}) {
    group(field: {childBib: {section: SELECT}}) {
      fieldValue
      group(field: {childBib: {subsection: SELECT}}) {
        fieldValue
        nodes {
          htmlAst
          childBib {
            title
            link
            authors
            year
          }
        }
      }
    }
  }
}`);

export const useBibList = () => {
    const raw = useBibListRaw();
    return useMemo(() =>
        Object.fromEntries(
            raw.allMarkdownRemark.group
                .map(({ fieldValue, group }) =>
                    [
                        fieldValue,
                        group.map(({ fieldValue, nodes }) => [
                            fieldValue,
                            nodes.map(({ htmlAst, childBib }) => ({ ...childBib, htmlAst }))
                        ])])),
        [raw]);
}
