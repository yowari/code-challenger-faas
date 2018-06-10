# CodeChallenger FaaS - Severless Functions

This repository holds OpenFaaS functions used in [CodeChallenger][cc] Web App.

- [jasmine-faas][jf] : Jasmine test framework on OpenFaaS

[cc]: https://github.com/yowari/code-challenger
[jf]: jasmine-faas

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

### Prerequisites

- [OpenFaaS][of]
- [faas-cli][fc]

[of]: https://www.openfaas.com/
[fc]: https://github.com/openfaas/faas-cli

### Build and deploy

```
faas-cli build
faas-cli deploy
```