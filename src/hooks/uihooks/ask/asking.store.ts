import { create } from 'zustand'

export interface IAskingStore {
	open: boolean
	onOpen: (open: boolean) => void
}

export const useAsking = create<IAskingStore>((set, get) => ({
	open: false,
	onOpen: (open: boolean) => {
		set({ open })
	},
}))
