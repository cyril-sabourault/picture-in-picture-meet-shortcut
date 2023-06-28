const MORE_OPTIONS_XPATH = "//i[normalize-space(@class) = 'google-material-icons' and contains(., 'more_vert')]";
const PICTURE_IN_PICTURE_XPATH = "//span[contains(., 'picture-in-picture')]";

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'p') {
        let moreOptions = document.evaluate(MORE_OPTIONS_XPATH, document).iterateNext();
        moreOptions.click();

        setTimeout(function () {
            document.evaluate(PICTURE_IN_PICTURE_XPATH, document)
                .iterateNext().click();
        }, 100);
    }
});