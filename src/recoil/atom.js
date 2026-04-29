import { atom, selector } from "recoil";

export const loggedInUserState = atom({
    key: 'loggedInUserState',
    default: 'Pallavi'
})

export const updatedUserNameState = selector({
    key: 'updatedUserNameState',
    get: ({ get }) => {
        const users = get(loggedInUserState);
        return `${users}-Rani`
    }
})