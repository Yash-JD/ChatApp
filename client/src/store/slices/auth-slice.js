export const createAuthSlice = (set) => (
    {
        userInfo: undefined,
        setUserInfo: (userInfo) => set({ userInfo }),
    }
)

// export const createAuthSlice = (set) => ({
//     userInfo: {
//         email: "", // Default as an empty string
//         profileSetup: false, // Default as false
//         // Add other default properties here as needed
//     },
//     setUserInfo: (userInfo) => set({ userInfo }),
//     clearUserInfo: () => set({
//         userInfo: {
//             email: "",
//             profileSetup: false
//         }
//     }),
// });
