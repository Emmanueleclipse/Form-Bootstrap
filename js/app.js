$(document).ready(function () {
    $(".copy-link-btn").click(function () {
        var tempInput = $("<input>");
        $("body").append(tempInput);
        tempInput.val($(this).text()).select();
        document.execCommand("copy");
        tempInput.remove();
    })
});
