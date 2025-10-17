import { sortPackageJson as _sortPackageJson } from 'sort-package-json'
import type { Linter } from 'eslint'
import type { RuleListener } from 'jsonc-eslint-parser'
import type { JsoncRules } from '../types/rules/jsonc'

export const sortPackageJson = (): Linter.Config[] => [{
  name: 'anytinz/sort/package-json',
  files: ['**/package.json'],
  plugins: {
    'package-json': {
      rules: {
        sort: {
          meta: {
            fixable: 'code',
          },
          create: (context): RuleListener => {
            const ruleListener: RuleListener = {
              JSONExpressionStatement: (node) => {
                if (!('text' in context.sourceCode)) {
                  return
                }

                const { expression: { range } } = node
                const json = context.sourceCode.text.slice(...range)
                const sorted = _sortPackageJson(json)
                if (sorted !== json) {
                  context.report({
                    message: 'Unexpected property orders.',
                    loc: node.loc,
                    fix: (fixer) => fixer.replaceTextRange(range, sorted),
                  })
                }
              },
            }
            return ruleListener
          },
        },
      },
    },
  },
  rules: {
    'package-json/sort': 'error',
  },
}]

export const sortTsconfig = (): Linter.Config[] => [{
  name: 'anytinz/sort/tsconfig-json',
  files: ['**/tsconfig.json', '**/tsconfig.*.json'],
  rules: {
    'jsonc/sort-array-values': ['error', {
      pathPattern: '.*',
      order: { type: 'asc' },
    }],
    'jsonc/sort-keys': [
      'error',
      {
        pathPattern: '^$',
        order: [
          '$schema',
          'extends',
          'references',
          'compilerOptions',
          'watchOptions',
          'typeAcquisition',
          'files',
          'include',
          'exclude',
        ],
      },
      {
        pathPattern: '^compilerOptions$',
        order: [
          /* Projects */
          'incremental',
          'composite',
          'tsBuildInfoFile',
          'disableSourceOfProjectReferenceRedirect',
          'disableSolutionSearching',
          'disableReferencedProjectLoad',
          /* Language and Environment */
          'target',
          'lib',
          'noLib',
          'jsx',
          'jsxFactory',
          'jsxFragmentFactory',
          'jsxImportSource',
          'reactNamespace',
          'emitDecoratorMetadata',
          'experimentalDecorators',
          'useDefineForClassFields',
          'moduleDetection',
          /* Modules */
          'module',
          'moduleResolution',
          'rootDir',
          'rootDirs',
          'baseUrl',
          'paths',
          'typeRoots',
          'types',
          'allowUmdGlobalAccess',
          'noResolve',
          'resolveJsonModule',
          'resolvePackageJsonExports',
          'resolvePackageJsonImports',
          'moduleSuffixes',
          'customConditions',
          'allowImportingTsExtensions',
          'allowArbitraryExtensions',
          'noUncheckedSideEffectImports',
          /* JavaScript Support */
          'allowJs',
          'checkJs',
          'maxNodeModuleJsDepth',
          /* Emit */
          'declaration',
          'declarationMap',
          'declarationDir',
          'emitDeclarationOnly',
          'sourceMap',
          'sourceRoot',
          'inlineSources',
          'inlineSourceMap',
          'mapRoot',
          'noEmit',
          'outFile',
          'outDir',
          'removeComments',
          'importHelpers',
          'noEmitHelpers',
          'downlevelIteration',
          'preserveConstEnums',
          'emitBOM',
          'newLine',
          'stripInternal',
          'noEmitOnError',
          /* Interop Constraints */
          'isolatedModules',
          'isolatedDeclarations',
          'verbatimModuleSyntax',
          'allowSyntheticDefaultImports',
          'esModuleInterop',
          'preserveSymlinks',
          'forceConsistentCasingInFileNames',
          /* Type Checking */
          'strict',
          'strictBindCallApply',
          'strictBuiltinIteratorReturn',
          'strictFunctionTypes',
          'strictNullChecks',
          'strictPropertyInitialization',
          'noImplicitAny',
          'noImplicitOverride',
          'noImplicitReturns',
          'noImplicitThis',
          'alwaysStrict',
          'noUnusedLocals',
          'noFallthroughCasesInSwitch',
          'noPropertyAccessFromIndexSignature',
          'noUncheckedIndexedAccess',
          'noUnusedParameters',
          'exactOptionalPropertyTypes',
          'useUnknownInCatchVariables',
          'allowUnusedLabels',
          'allowUnreachableCode',
          /* Completeness */
          'skipDefaultLibCheck',
          'skipLibCheck',
          /* Editor Support */
          'disableSizeLimit',
          'plugins',
          /* Compiler Diagnostics */
          'noCheck',
          'diagnostics',
          'extendedDiagnostics',
          'explainFiles',
          'generateCpuProfile',
          'generateTrace',
          'listEmittedFiles',
          'listFiles',
          'traceResolution',
          /* Output Formatting */
          'pretty',
          'noErrorTruncation',
          'preserveWatchOutput',
          /* Watch Options */
          'assumeChangesOnlyAffectDirectDependencies',
        ],
      },
      {
        pathPattern: '^watchOptions$',
        order: [
          'watchFile',
          'watchDirectory',
          'fallbackPolling',
          'synchronousWatchDirectory',
          'excludeDirectories',
          'excludeFiles',
        ],
      },
      {
        pathPattern: '^pathPattern$',
        order: [
          'enable',
          'include',
          'exclude',
          'disableFilenameBasedTypeAcquisition',
        ],
      },
    ],
  },
}]

export const sortDevcontainerJson = (): Linter.Config[] => [{
  name: 'anytinz/sort/devcontainer-json',
  files: ['**/devcontainer.json', '**/.devcontainer.json'],
  rules: {
    'jsonc/sort-array-values': [
      'error',
      {
        pathPattern: '^appPort$',
        order: { type: 'asc', natural: true },
      },
      {
        pathPattern: '^forwardPorts$',
        order: { type: 'asc', natural: true },
      },
      {
        pathPattern: '^capAdd$',
        order: { type: 'asc' },
      },
      {
        pathPattern: '^securityOpt$',
        order: { type: 'asc' },
      },
      {
        pathPattern: '^customizations.vscode.extensions$',
        order: { type: 'asc' },
      },
    ] satisfies JsoncRules['jsonc/sort-array-values'],
    'jsonc/sort-keys': [
      'error',
      {
        pathPattern: '^$',
        order: [
          '$schema',
          'name',
          'image',
          'dockerFile',
          'context',
          'build',
          'appPort',
          'runArgs',
          'dockerComposeFile',
          'service',
          'runServices',

          'workspaceFolder',
          'workspaceMount',
          'overrideCommand',
          'shutdownAction',

          'features',
          'overrideFeatureInstallOrder',

          'secrets',

          'forwardPorts',
          'portsAttributes',
          'otherPortsAttributes',

          'updateRemoteUserUID',
          'containerEnv',
          'containerUser',
          'userEnvProbe',

          'mounts',
          'init',
          'privileged',
          'capAdd',
          'securityOpt',
          'remoteEnv',
          'remoteUser',

          'initializeCommand',
          'onCreateCommand',
          'updateContentCommand',
          'postCreateCommand',
          'postStartCommand',
          'postAttachCommand',
          'waitFor',

          'hostRequirements',
          'customizations',

          { order: { type: 'asc' } },
        ],
      },
      {
        pathPattern: '^build$',
        order: [
          'dockerfile',
          'context',
          'target',
          'args',
          'cacheFrom',
          'options',
        ],
      },
      {
        pathPattern: '^build.args$',
        order: [
          'type',
          { order: { type: 'asc' } },
        ],
      },
      {
        pathPattern: '^features$',
        order: { type: 'asc' },
      },
      {
        pathPattern: '^secrets$',
        order: { type: 'asc' },
      },
      {
        pathPattern: '^secrets.*$',
        order: [
          'description',
          'documentationUrl',
        ],
      },
      {
        pathPattern: '^(portsAttributes|otherPortsAttributes)$',
        order: { type: 'asc' },
      },
      {
        pathPattern: '^(portsAttributes|otherPortsAttributes).*$',
        order: [
          'label',
          'protocol',
          'onAutoForward',
          'requireLocalPort',
          'elevateIfNeeded',
        ],
      },
      {
        pathPattern: '^mounts.*$',
        order: [
          'type',
          'source',
          'target',
        ],
      },
      {
        pathPattern: '^(containerEnv|remoteEnv)$',
        order: { type: 'asc' },
      },
      {
        pathPattern: '^(initializeCommand|onCreateCommand|updateContentCommand|postCreateCommand|postStartCommand|postAttachCommand)$',
        order: { type: 'asc' },
      },
      {
        pathPattern: '^hostRequirements$',
        order: [
          'cpus',
          'memory',
          'storage',
          'gpu',
        ],
      },
      {
        pathPattern: '^hostRequirements.gpu$',
        order: [
          'cores',
          'memory',
        ],
      },
      {
        pathPattern: '^customizations$',
        order: { type: 'asc' },
      },
      {
        pathPattern: '^customizations.vscode$',
        order: ['extensions', 'settings'],
      },
      {
        pathPattern: '^customizations.vscode.settings$',
        order: { type: 'asc' },
      },
    ] satisfies JsoncRules['jsonc/sort-keys'],
  },
}]
