var quill = new Quill("#quill-container", {
    modules: {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"],
        ],
    },
    scrollingContainer: "#scrolling-container",
    placeholder: "Start writing...",
    theme: "bubble",
});

quill.on("text-change", function (delta, oldDelta, source) {
    if (source === "user") {
        window.localStorage.setItem(
            "quill-content",
            JSON.stringify(quill.editor?.delta?.ops)
        );
    }
});

window.addEventListener("load", () => {
    try {
        const savedContent = JSON.parse(
            window.localStorage.getItem("quill-content")
        );
        quill.setContents(savedContent);
    } catch (err) {
        alert("Error loading content");
    }
});
