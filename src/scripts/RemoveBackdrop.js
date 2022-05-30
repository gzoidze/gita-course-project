export const backDrop = $(".backdrop");
const okButton = $(".backdrop input");

backDrop.click(function() {
  $(this).removeClass("visible");
})

okButton.click(function() {
  backDrop.removeClass("visible");
})