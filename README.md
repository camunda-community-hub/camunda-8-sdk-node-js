# Camunda 8 Node.js SDK

This SDK provides a high-level Node.js API for Camunda Platform 8. 

The full API documentation is hosted [here](https://camunda-community-hub.github.io/camunda-8-sdk-node-js/). 

## API Coverage

| Component   | Tested Environment  |
|---|---|
| Zeebe  | SaaS, Self-hosted  |
| Operate  | SaaS  | 
| Optimize  | SaaS  | 
| Tasklist  |  Not Implemented  |
| Console   |  Not Implemented  |

## Installation

```bash
npm i camunda-8-sdk
```

## Usage

Set your Camunda SaaS credentials in the environment (at the moment, only Camunda SaaS is fully supported).

```typescript
import { C8 } from 'camunda-8-sdk'

const zbc = new C8.ZBClient()
const operate = new C8.OperateApiClient()
const optimize = new C8.OptimizeApiClient()
```

Refer to the API docs [here](https://camunda-community-hub.github.io/camunda-8-sdk-node-js/) for full documentation of each component.