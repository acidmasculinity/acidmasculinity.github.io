import { promises as fs } from "fs";
import grayMatter from "gray-matter";
import { mkResolve } from "../../src/utils/resolve.mjs";

const resolve = mkResolve(import.meta);

const typeDefs =  fs.readFile(resolve('./type-defs.gql'),
                              { encoding: 'utf-8' });

const frontmatter = source => {
    return grayMatter(source, {
        language: 'yaml',
        engines: {
            js: () => {
                return {}
            },
            javascript: () => {
                return {}
            },
            json: () => {
                return {}
            },
        }
    });
};


const entryNodeOfFile = async ({ node, loadNodeContent }) => {
    const name = node.name;

    const { relativeDirectory = "" } = node;

    const { content, data } = frontmatter(await loadNodeContent(node));

    const {
        title = "What no title?",
        authors = []
    } = data;
    return { relativeDirectory, title, content };
};

export const createSchemaCustomization = async ({
    actions: { createTypes }
}) => await createTypes(await typeDefs);

export const shouldOnCreateNode = ({node: {
    internal: { type },
    sourceInstanceName,
    extension
}}) =>
'File' === type && 'Anon' == sourceInstanceName && 'md' === extension;

export const onCreateNode = async props => {
    const {
        node,
        actions: { createNode, createParentChildLink },
        createContentDigest,
        createNodeId,
        getNode
    } = props;

    const id = createNodeId(`${node.id} >>> Bib`);

    const entry = await entryNodeOfFile(props);

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
