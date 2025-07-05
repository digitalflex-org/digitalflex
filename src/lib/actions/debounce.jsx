const { useRef } = require("react");

export function useDebouncedCallback(callback, delay = 300) {
    const timeOutRef = useRef(null);

    return (...args) => {
        if (timeOutRef.current) return;
        callback(...args);
        timeOutRef.current = setTimeout(() => {
            timeOutRef.current = null;
        }, delay);
    };
}