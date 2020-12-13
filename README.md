# github-release-workflow

GitHub workflow files for automation.

## Automated

- **Create pull request**

  Create pull request when you `git push` (create a new topic branch).
  [workflows/create-pr.yml](.github/workflows/create-pr.yml)

- **Validation pull requests**

  Validate the pull request title or at least one commit message.
  Install [Semantic Pull Requests](https://github.com/apps/semantic-pull-requests) in GitHub Apps.

- **Merge automatically**

  Automatically merge pull requests with a specific label (`automerge` and `autosquash`).
  [workflows/automerge.yml](.github/workflows/automerge.yml)

- **CI**

  CI workflow.
  [workflows/ci.yml](.github/workflows/ci.yml)

- **Linter with Reviewdog**

  Find and fix problem in your code.
  And report them in pull request comments.
  [workflows/reviewdog.yml](.github/workflows/reviewdog.yml)
