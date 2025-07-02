import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.mjs";

const resolve = mkResolve(import.meta);

const typeDefs =  fs.readFile(resolve('./type-defs.gql'),
                              { encoding: 'utf-8' });

export const createSchemaCustomization = async ({
    actions: { createTypes }
}) => await createTypes(await typeDefs);

export const shouldOnCreateNode = ({node: { internal: { type } }}) =>
'MarkdownRemark' === type;

export const onCreateNode = async (props, { name }) => {
    const {
        node,
        actions: { createNode, createParentChildLink },
        createContentDigest,
        createNodeId,
        getNode
    } = props;

    const file = getNode(node.parent);
    const {
        sourceInstanceName,
        relativeDirectory = ""
    } = file;
    if (name !== sourceInstanceName) {
        return;
    }

    const id = createNodeId(`${node.id} >>> Bib`);

    const dirs = relativeDirectory.split('/');
    const section = dirs[0] ?? "etc";
    const subsection = dirs[1] ?? "etc";

    const {
        title = "What no title?",
        authors = [],
        article = null,
        link = null,
        year = null,
        disabled = false
    } = node.frontmatter;
    const entry = {
        section, subsection,
        disabled,
        title, authors, article, link, year, disabled
    };

    const entryNode = {
            ...entry,
            children: [],
            parent: node.id,
            id,
            internal: {
                type: 'Bib',
                contentDigest: createContentDigest(entry)
            }
    };
    await Promise.all([createNode(entryNode),
                       createParentChildLink({ parent: node, child: entryNode })]);
};

export const pluginOptionsSchema = ({ Joi }) => Joi.object({
    name: Joi.string().required()
});
