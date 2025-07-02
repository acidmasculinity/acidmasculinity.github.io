import { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

// FIXME debug sectioning error
const useBibListRaw = () => useStaticQuery(graphql`
query UseBibList
{
  allMarkdownRemark {
    group(field: {childBib: {section: SELECT}}) {
      fieldValue
      group(field: {childBib: {section: SELECT}}) {
        fieldValue
        nodes {
          html
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
                            nodes.map(({ html, childBib }) => ({ ...childBib, html }))
                        ])])),
        [raw]);
}
