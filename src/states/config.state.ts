import { atom } from "recoil";

// 화면 리사이즈 (반응형)
export const resizeState = atom<number | null>({
    key: `resize/${Math.random()}`,
    default: null,
});
