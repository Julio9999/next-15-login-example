import { StateCreator, create } from 'zustand';
import { UserState } from './user.interface';



const StoreApi: StateCreator<UserState> = (set) => ({
    name: '',

    setName: (name) => set({name})
 
})

export const useUserStore = create<UserState>()(StoreApi)