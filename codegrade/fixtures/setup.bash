#!/bin/bash
set -euo pipefail
shopt -s extglob

rm -rf "$STUDENT/src/codegrade" || true
mkdir "$STUDENT/src/codegrade"
mv "$FIXTURES/setupTests.js" "$STUDENT/src";
mv "$FIXTURES/*.test.js" "$STUDENT/src/codegrade/tests"
mv "$FIXTURES/jest.config.js" "$STUDENT"