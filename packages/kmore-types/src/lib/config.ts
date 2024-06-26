import {
  BuildSrcOpts,
  CacheMap,
  CallerFuncNameSet,
  GenTbListFromTypeOpts,
  Options,
} from './model'


export const globalCallerFuncNameSet: CallerFuncNameSet = new Set(['genTbListFromType', 'kmore'])

export const initGenTbListFromTypeOpts: GenTbListFromTypeOpts = {
  callerDistance: 0,
}

export const initOptions: Options = {
  ...initGenTbListFromTypeOpts,
  exportVarPrefix: 'tbs_',
  forceLoadTbListJs: false,
  forceLoadTbListJsPathReplaceRules: null,
  outputBanner: '/* eslint-disable */',
  outputFileNameSuffix: '__built-tables',
  refTablesPrefix: 'reftb_',
}

export const initBuildSrcOpts: Required<BuildSrcOpts> = {
  ...initOptions,
  path: [],
  concurrent: 5,
  excludePathKeys: ['node_modules'],
  maxScanLines: 128,
}

export const reservedTbListKeys: string[] = [
  'constructor',
  '__proto__',
]
export enum DbPropKeys {
  'dbh' = 'dbh',
  'tables' = 'tables',
  'columns' = 'columns',
  'scopedColumns' = 'scopedColumns',
  'aliasColumns' = 'aliasColumns',
  'refTables' = 'rb',
}

export const defaultPropDescriptor: PropertyDescriptor = {
  configurable: true,
  enumerable: true,
  writable: false,
} as const


export const cacheMap: CacheMap = {
  /** CallerId -> TbListParam */
  tbListMap: new Map(),
  tbColListMap: new Map(),
  /** CallerId -> LocalTypeId */
  callerIdToLocalTypeIdMap: new Map(),
  /** LocalTypeId -> TableListTagMap */
  localTypeMap: new Map(),
}
