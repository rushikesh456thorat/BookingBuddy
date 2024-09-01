import { create } from 'zustand'


const useConvertion = create((set) => ({
    index : 0,
    setIndex : (index) => set({index}),
    chat : [],
    setChat : (chat) => set({chat})
}))

export default useConvertion