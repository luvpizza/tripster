
import theme from '@/styles/chakra/theme';
import { ChakraProvider } from '@chakra-ui/react'

export const withChakraUI = (component : () => React.ReactNode) => () => (
    <ChakraProvider theme={theme}>
        {component()}
    </ChakraProvider>
);