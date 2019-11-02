const core = require('@actions/core');
const github = require('@actions/github');

try {
  const version = core.getInput('tag', {required: true}).replace(/refs\/(heads|tags)\//,'');
  core.setOutput("version", version);
} catch (error) {
  core.setFailed(error.message);
}
