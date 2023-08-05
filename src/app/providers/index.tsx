import compose from 'compose-function'
import {withChakraUI} from './with-chakra'
import {withPersist} from './with-persist'
import {withRouter} from './with-router'
import {withStore} from './with-store'

export const withProviders = compose(withRouter, withStore, withPersist, withChakraUI)