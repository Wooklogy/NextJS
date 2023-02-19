import { message } from "antd";

export function clipBoard(text: string) {
    if (!navigator.clipboard) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.top = "0";
        textarea.style.left = "0";
        textarea.style.position = "fixed";

        document.body.appendChild(textarea);
        // focus() -> 사파리 브라우저 서포팅
        textarea.focus();
        // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
        textarea.select();
        // 흐름 5.
        document.execCommand("copy");
        // 흐름 6.
        document.body.removeChild(textarea);
        message.success("복사가 완료 되었습니다.");
    } else {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                message.success("클립보드에 저장이 완료 되었습니다.");
            })
            .catch(() => {
                message.error("클립보드를 지원하지 않는 브라우저입니다.");
            });
    }
}
