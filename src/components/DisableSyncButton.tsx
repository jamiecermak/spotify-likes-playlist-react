import { Button } from '@chakra-ui/button'
import { ComponentProps } from 'react'

export default function DisableSyncButton({
    ...props
}: ComponentProps<typeof Button>) {
    return <Button {...props}>Disable Syncing</Button>
}
