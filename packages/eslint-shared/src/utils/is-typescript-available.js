import { isPackageExists } from 'local-pkg'

export const isTypescriptAvailable = () => isPackageExists('typescript')
