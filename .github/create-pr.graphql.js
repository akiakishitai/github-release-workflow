module.exports = async ({ github, context, options: { repoId, base, head, title, body, query } }) => {
  const variables = {
    repoId: repoId || context.payload.repository.node_id,
    base: base,
    head: head,
    title: title,
    body: body
  }

  return await github.graphql(query, variables)
}