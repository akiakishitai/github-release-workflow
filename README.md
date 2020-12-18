# github-release-workflow

GitHub workflow files for automation.

## Automated

- **Create pull request**

  Create pull request when you `git push` (create a new topic branch).
  [workflows/create-pr.yml](.github/workflows/create-pr.yml)

- **Validation pull requests**

  Validate the pull request title or at least one commit message.
  Install [Semantic Pull Requests](https://github.com/apps/semantic-pull-requests) in GitHub Apps.

- **CI**

  CI workflow.
  [workflows/ci.yml](.github/workflows/ci.yml)

- **Linter with Reviewdog**

  Find and fix problem in your code.
  And report them in pull request comments.
  [workflows/reviewdog.yml](.github/workflows/reviewdog.yml)

- **Release**

  Create the next release note when the pull request is merged into the main.
  [workflows/release.yml](.github/workflows/release.yml)

## Usage

Download the release assets, and extract them to the `.github` directory in your repository.

```bash
$ curl -sSLO https://github.com/akiakishitai/github-release-workflow/releases/latest/download/dot-github-files.zip
$ unzip -d .github dot-github-files.zip
$ rm dot-github-files.zip
```

Then, customize each workflow file.
