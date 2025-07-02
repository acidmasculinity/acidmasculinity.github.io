import { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

const useBibListRaw = () => useStaticQuery(graphql`
query UseBibList
{
  allBib {
    group(field: {section: SELECT}) {
      fieldValue
      group(field: {subsection: SELECT}) {
        fieldValue
        nodes {
          disabled
          title
          content

          authors
          article
          link
          year
        }
      }
    }
  }
}
`);

export const useBibList = () => {
    const raw = useBibListRaw();
    return useMemo(() =>
        Object.fromEntries(
            raw.allBib.group
                .map(({ fieldValue, group }) =>
                    [
                        fieldValue,
                        group.map(({ fieldValue, nodes }) => [ fieldValue, nodes ])])),
        [raw]);
}
