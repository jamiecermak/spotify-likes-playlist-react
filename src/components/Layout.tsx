import { Center } from '@chakra-ui/layout'
import { Outlet } from 'react-router'

export default function Layout() {
    return (
        <Center w="100%" h="100%" bgColor="ui.background">
            <Outlet />
        </Center>
    )
}
