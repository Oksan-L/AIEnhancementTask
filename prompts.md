1. Act as a Senior QA Automation Engineer. Based on my .cursorrules, generate a Playwright test for this case: TC-01: Navigation to "QA Outsourcing Services" Page (Menu Bar)
@TestCases.md (5-15) 
Create a page in /pages/homePage.js and a test file in /tests/navigation.spec.js. Base URL: https://luxequality.com/.

2. Act as a Senior QA Automation Engineer. Based on my .cursorrules, generate a Playwright test for this case: TC-02: Contact Form Validation (Negative Test)
@TestCases.md (19-29) 

3. The contactFormValidation.spec.js and navigation.spec.js tests are working with errors:
@powershell (88-155) 
Fixes using page structure:
@homePage.html (1-664) 

4. To fix the second test(@powershell (155-182) ), I'm adding the view of the fields after failed authorization:
<div class="Form_flex__aJciJ"><div class="Input_input_wrapper__K6y0g"><label for="name" class="Input_label__uipB5"><span class="Input_label_name__WdcO8">Full name<span> *</span></span></label><input id="name" maxlength="25" class="Input_input__kscN1 Input_error__rqGso" value="" name="name"><span class="Input_error_message__pxv16">This is a required field</span></div><div class="Input_input_wrapper__K6y0g"><label for="email" class="Input_label__uipB5"><span class="Input_label_name__WdcO8">Email<span> *</span></span></label><input id="email" maxlength="68" class="Input_input__kscN1 Input_error__rqGso" value="" name="email"><span class="Input_error_message__pxv16">This is a required field</span></div></div>
and page`s html 
@contacts.html (1-206) 