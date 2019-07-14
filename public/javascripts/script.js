const mdcButtons = document.querySelectorAll(".mdc-button");
const mdcButtonsRaised = document.querySelectorAll(".mdc-button--raised");
const mdcFormField = document.querySelectorAll(".mdc-form-field");
const mdcFloatingLabel = document.querySelectorAll(".mdc-floating-label");
const mdcTextField = document.querySelectorAll(".mdc-text-field");
const mdcTextFieldHelperText = document.querySelectorAll(
  ".mdc-text-field-helper-text"
);
const mdcSelect = document.querySelectorAll(".mdc-select");

mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector(".mdc-top-app-bar"));

[...mdcButtons, ...mdcButtonsRaised].forEach(element => {
  mdc.ripple.MDCRipple.attachTo(element);
});

[...mdcFormField].forEach(element => {
  mdc.formField.MDCFormField.attachTo(element);
});

[...mdcTextField].forEach(element => {
  mdc.textField.MDCTextField.attachTo(element);
});

[...mdcFloatingLabel].forEach(element => {
  mdc.floatingLabel.MDCFloatingLabel.attachTo(element);
});

[...mdcTextFieldHelperText].forEach(element => {
  mdc.textField.MDCTextFieldHelperText.attachTo(element);
});

[...mdcSelect].forEach(element => {
  mdc.select.MDCSelect.attachTo(element);
});
