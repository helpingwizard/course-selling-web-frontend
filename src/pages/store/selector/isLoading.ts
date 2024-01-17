import {selector} from "recoil";
import {userState} from "../atom/user.js";

export const isUserLoading = selector({
    key: 'userLoadingState',
    get: ({get}) => {
        const state = get(userState);

        return state.isLoading;
    },
});