export function stripHtml(html) {
    if (typeof window !== 'undefined')
    {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || "";
    }
    return html;
}
