module.exports = async ({ github, context, options: { repoId, base, head, title, templateFile } }) => {
  const fs = require('fs').promises
  const { resolve } = require('path')

  const query = await fs.readFile(resolve(__dirname, 'create-pr.gql'), { encoding: "utf-8" })
  const templateFileName = 'pull_request_template.md'
  const template = await fs.readFile(templateFile, { encoding: "utf-8" })
    .catch((err) => fs.readFile(resolve(__dirname, templateFileName), { encoding: "utf-8" }))
    .catch((err) => fs.readFile(resolve(__dirname, templateFileName.toUpperCase()), { encoding: "utf-8" }))

  const variables = {
    repoId: repoId || context.payload.repository.node_id,
    base: base,
    head: head,
    title: title,
    body: template
  }

  return await github.graphql(query, variables)
}