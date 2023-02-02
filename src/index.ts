import * as Zeebe from 'zeebe-node'
import * as Optimize from 'optimize-api-client'
import * as Operate from 'operate-api-client'

export const C8 = { 
    ZBClient: Zeebe.ZBClient, 
    OptimizeApiClient: Optimize.OptimizeApiClient, 
    OperateApiClient: Operate.OperateApiClient }

export { Zeebe, Optimize, Operate }