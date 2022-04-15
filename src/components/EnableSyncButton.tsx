import { Button } from '@chakra-ui/button'
import { ComponentProps } from 'react'

export default function EnableSyncButton({
    ...props
}: ComponentProps<typeof Button>) {
    return <Button {...props}>Create Playlist &amp; Start Syncing</Button>
}
