import { Birth, Transfer } from '../generated/CryptoKitties/CryptoKitties'
import { KittyOwner } from '../generated/schema'

export function handleBirth(event: Birth): void {
    let kitty = new KittyOwner()
    kitty.owner = event.params.owner
    kitty.save()
}

export function handleTransfer(event: Transfer): void {
    let kitty = new KittyOwner()
    kitty.owner = event.params.to
    kitty.save()
}