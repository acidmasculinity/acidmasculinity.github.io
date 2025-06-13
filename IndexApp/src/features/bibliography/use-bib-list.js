import { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

const useBibListRaw = () => useStaticQuery(graphql`
query UseBibList
{
  allBib {
    group(field: {relativeDirectory: SELECT}) {
      fieldValue
      nodes {
        title
        content
      }
    }
  }
}`);

export const useBibList = () => {
    const raw = useBibListRaw();
    return useMemo(() =>
        Object.fromEntries(
            raw.allBib.group
                .map(({ fieldValue, nodes }) =>
                    [fieldValue, nodes])),
        [raw]);
}
