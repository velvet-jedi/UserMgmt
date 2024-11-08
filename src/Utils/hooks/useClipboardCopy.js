import { useState } from "react";

const useClipboardCopy = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return { copied, copyToClipboard };
};

export default useClipboardCopy;