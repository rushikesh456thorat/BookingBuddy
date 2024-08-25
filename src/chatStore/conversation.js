import { create } from 'zustand'


const useConvertion = create((set) => ({
    chat : [],
    setChat : (chat) => set({chat})
}))

export default useConvertion