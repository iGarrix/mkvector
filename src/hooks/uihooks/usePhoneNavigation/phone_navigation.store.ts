import { create } from 'zustand'

export interface IPhoneNavigationStore {
	open: boolean
	onOpen: (open: boolean) => void
}

export const usePhoneNavigation = create<IPhoneNavigationStore>((set, get) => ({
	open: false,
	onOpen: (open: boolean) => {
		set({ open })
	},
}))
