import { Box } from '@chakra-ui/layout'

type CardProps = {
    children: React.ReactNode
}

export default function Card({ children, ...props }: CardProps) {
    return (
        <Box
            p="6"
            boxShadow="md"
            bgColor="white"
            rounded="md"
            w="md"
            {...props}
        >
            {children}
        </Box>
    )
}
