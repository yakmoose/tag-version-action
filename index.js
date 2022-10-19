import * as core from '@actions/core'
import * as github from '@actions/github'

try {
  const version = core.getInput('tag', {required: true}).replace(/refs\/(heads|tags)\//,'');
  core.setOutput("version", version);
} catch (error) {
  core.setFailed(error.message);
}
