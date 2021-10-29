# QEWD-Up demo server

This repo is a basic example how to start using QEWD-Up as Node.js back-end server.

## Starting this demo server

To start it, you have two options:
- open this repo in Visual Studio Code (VSC) and start it from the Debug tab
- open a command window and start it from the repo's root dir:
  ```
  node node_modules/qewd/up/run_native
  ```
  alternatively, if you also want to debug it from VSC by attaching to the server, use the `--inspect` option:
  ```
  node --inspect node_modules/qewd/up/run_native
  ```
