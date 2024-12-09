export const createAuthSlice = (set) => (
    {
        userInfo: undefined,
        // "userInfo": {
        //     "id": "67545fa0114a066828dd6246",
        //     "password": "$2b$10$toajXyTSd1B3F/BMfaCrVOGYWUWfWQGooeQU6zmNBlRZ.PetYsdp.",
        //     "firstName": "yash",
        //     "lastName": "j",
        //     "email": "y@gmail.com",
        //     "profileSetup": false
        // },
        setUserInfo: (userInfo) => set({ userInfo }),
    }
)
