const TextGenerator = require("../Helper/TextGenerator.page");
const MainPage = require("../pages/MainPage.page");
const CoockiesPage = require("../pages/Coockies.page");
const NumbersPricingPage = require("../pages/NumbersPricingPage.page");
const ContactUsPage = require("../pages/ContactUsPage.page");
const G2ComparePage = require("../pages/G2ComparePage.page");
const GlobalNumbersPage = require("../pages/GlobalNumbersPage.page");
const MissionControlPage = require("../pages/MissionControlPage.page");
const PartnershipPage = require("../pages/PartnershipPage.page");
const PricingPage = require("../pages/PricingPage.page");
const SignInPage = require("../pages/SignInPage.page");
const SignUpPage = require("../pages/SignUpPage.page");
const SMSAPIPage = require("../pages/SMSAPIPage.page");
const SolutionsPage = require("../pages/SolutionsPage.page");

let Name 
let Email
let Number
let Website
let Text
let Password

beforeEach(async () => {
    await browser.setWindowSize(1920, 1080)
    Name = TextGenerator.randomName()
    Email = TextGenerator.randomEmail()
    Number = TextGenerator.randomNumber()
    Website = TextGenerator.randomWebsite()
    Text = TextGenerator.randomLongText()
    Password = TextGenerator.randomPassword()
    await browser.url('/')
    await CoockiesPage.acceptCookie()
})

describe('Testing telnyx with webdriverIO', function() {
    it('TX_001 Check "Number pricing" form changes depending on selected option in "Pay as you go" dropdown on "Numbers pricing" page', async () => {
        await MainPage.clickPricingDropdown()
        await MainPage.clickGlobalNumbersPricingOption()
        await NumbersPricingPage.scrollDownPayAsYouGoText()
        await NumbersPricingPage.selectCanadaOptionInPayAsYouGoDropdown()
        await NumbersPricingPage.checkUsingAnExistingNumberTextVisibility()
        await NumbersPricingPage.selectUkraineOptionInPayAsYouGoDropdown()
        await NumbersPricingPage.checkUsingAnExistingNumberTextNotVisible()
    })
    it('TX_002 Test the Sign up form with positive scenario, form opened via link from the "Global Numbers" page', async () =>{
        await MainPage.clickProductsDropdown()
        await MainPage.clickGlobalNumbersProductsOption()
        await GlobalNumbersPage.clickSearchNumbersButton()
        await SignUpPage.enterEmailFieldValue(Email)
        await SignUpPage.enterFirstNameFieldValue(Name)
        await SignUpPage.enterLastNameFieldValue(Name)
        await SignUpPage.enterPasswordFieldValue(Password)
        await SignUpPage.clickAgreeButton()
        await SignUpPage.checkSubmitMessageVisibility()
    })
    it('TX_003 Test the "Contact Us" form with positive scenario, form opened via link from the Global Numbers page', async () =>{
        await MainPage.clickProductsDropdown()
        await MainPage.clickGlobalNumbersProductsOption()
        await GlobalNumbersPage.clickAskOurExpertsButton()
        await ContactUsPage.selectSupportOptionInReasonForContactDropdown()
        await ContactUsPage.enterFirstNameFieldValue(Name)
        await ContactUsPage.enterLastNameFieldValue(Name)
        await ContactUsPage.enterEmailFieldValue(Email)
        await ContactUsPage.selectCanadaOptionInCountryDropdown()
        await ContactUsPage.enterPhoneNumberFieldValue(Number)
        await ContactUsPage.enterCompanyWebsiteFieldValue(Website)
        await ContactUsPage.enterDescribeYourRequestField(Text)
        await ContactUsPage.enterHowDidYouHearAboutTelnyxFieldValue(Text)
        await ContactUsPage.clickSubmitButton()
        let text = 'Thank you.'
        await ContactUsPage.checkSubmitMessageText(text)
    })
    it('TX_004 Chech that "See pricing" button navigate to "Pricing" page from the "Global Numbers" page', async () => {
        await MainPage.clickProductsDropdown()
        await MainPage.clickGlobalNumbersProductsOption()
        await GlobalNumbersPage.clickSeePricingButton()
        await PricingPage.checkPayAsYouGoWindowVisibility()
        await PricingPage.checkVolumeBasedPrisingVisibility()
    })
    it('TX_005 Test the "Become a Telnyx Partner" form with positive scenario, form opened via link from the Partnerships page', async () =>{
        await MainPage.clickWhyTelnyxDropdown()
        await MainPage.clickPartnersOption()
        await PartnershipPage.clickBecomeAPartnerButton()
        await PartnershipPage.enterFirstNameFieldValue(Name)
        await PartnershipPage.enterLastNameFieldValue(Name)
        await PartnershipPage.enterCompanyFieldValue(Name)
        await PartnershipPage.enterEmailFieldValue(Email)
        await PartnershipPage.selectCanadaOptionInCountryDropdown()
        await PartnershipPage.enterPhoneNumberFieldValue(Number)
        await PartnershipPage.selectResellerOptionInPartnerTypeDropdown()
        await PartnershipPage.enterTellUsFieldValue(Text)
        await PartnershipPage.clickApplyNowButton()
        let text = 'Thank you.'
        await PartnershipPage.checkSubmitMessageVisibility(text)
    })
    it('TX_006 Test "See use cases" and "See industries" buttons functionality on "Solutions" page', async () =>{
        await MainPage.clickSolutionsButton()
        await SolutionsPage.clickSeeIndustriesButton()
        await SolutionsPage.checkHealthcareButtonVisibility()
        await SolutionsPage.clickSeeUseCasesButton()
        await SolutionsPage.checkAccountNotificationWindowVisibility()
    })
    it('TX_007 Check that "Confirm email" page is loading after clicking "Submit" button on Sign Up page with filling the correct data ​​in the required fields, form opened via link from the "SMS API" page', async () =>{
        await MainPage.clickProductsDropdown()
        await MainPage.clickSmsApiOption()
        await SMSAPIPage.clickPortalButton()
        await SignUpPage.enterEmailFieldValue(Email)
        await SignUpPage.enterFirstNameFieldValue(Name)
        await SignUpPage.enterLastNameFieldValue(Name)
        await SignUpPage.enterPasswordFieldValue(Password)
        await SignUpPage.clickAgreeButton()
        await SignUpPage.checkSubmitMessageVisibility()
    })
    it('TX_008 Chech that "Mission Control" link navigate to "Mission Control" page from the "Why Telnyx" dropdown', async () =>{
        await MainPage.clickWhyTelnyxDropdown()
        await MainPage.clickMissionControlOption()
        let text = 'Mission Control Portal'
        await MissionControlPage.checkTopicTextMaching(text)
        await MissionControlPage.checkIndustryLeadingLincButtonVisibility()
    })
    it('TX_009 Test the "Contact Us" form with positive scenario, form opened via "Talk to an expert" link button from the "g2-compare" page', async () =>{
        await MainPage.clickWhyTelnyxDropdown()
        await MainPage.clickMissionControlOption()
        await MissionControlPage.scrollToIndustryLeadingLincButton()
        await MissionControlPage.clickIndustryLeadingLincButton()
        await G2ComparePage.clickTalkToAnExpertButton()
        await ContactUsPage.selectSupportOptionInReasonForContactDropdown()
        await ContactUsPage.enterFirstNameFieldValue(Name)
        await ContactUsPage.enterLastNameFieldValue(Name)
        await ContactUsPage.enterEmailFieldValue(Email)
        await ContactUsPage.selectCanadaOptionInCountryDropdown()
        await ContactUsPage.enterPhoneNumberFieldValue(Number)
        await ContactUsPage.enterCompanyWebsiteFieldValue(Website)
        await ContactUsPage.enterDescribeYourRequestField(Text)
        await ContactUsPage.enterHowDidYouHearAboutTelnyxFieldValue(Text)
        await ContactUsPage.clickSubmitButton()
        let text = 'Thank you.'
        await ContactUsPage.checkSubmitMessageText(text)
    })
    it('TX_010 Check that "Telnyx`s Terms & Conditions" link navigate to "Telnyx`s Terms & Conditions" page from the Sign up page', async () =>{
        await MainPage.clickSignUpButton()
        await SignUpPage.scrollToTelnyxsTermsLinkButton()
        await SignUpPage.clickTelnyxsTermsLinkButton()
        await SignUpPage.checkTitleTextVisibility()
    })
    it('TX_011 Check that "Privacy Policy" link navigate to "Privacy Policy" page from the Sign up page', async () =>{
        await MainPage.clickSignUpButton()
        await SignUpPage.scrollToTelnyxsTermsLinkButton()
        await SignUpPage.clickPrivacyPolicyLinkButton()
        await SignUpPage.checkTitleTextVisibility()
    })
    it('TX_012 Test "Become a Telnyx Partner" form with negative scenario where all fields are filled with incorrect data', async () =>{
        await MainPage.clickWhyTelnyxDropdown()
        await MainPage.clickPartnersOption()
        await PartnershipPage.clickBecomeAPartnerButton()
        await PartnershipPage.clickApplyNowButton()
        await PartnershipPage.checkErrorMessageVisibility()
    })
    it('TX_013 Test Sign up form from Contact Us page with negative scenario where all fields are filled with incorrect credentials', async () =>{
        await MainPage.clickProductsDropdown()
        await MainPage.clickSmsApiOption()
        await SMSAPIPage.clickPortalButton()
        await SignUpPage.clickSubmitButton()
        await SignUpPage.checkSubmitMessageVisibility()
    })
    it('TX_014 Test Sign In form from Sign Up page with negative scenario where all fields are filled with incorrect credentials', async () =>{
        await MainPage.clickSignUpButton()
        await SignUpPage.scrollToLogInLinkButton()
        await SignUpPage.clickLogInLinkButton()
        await SignInPage.enterEmailFieldValue(Email)
        await SignInPage.enterPasswordFieldValue(Password)
        await SignInPage.clickLogInButton()
        let text = 'That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.'
        await SignInPage.checkErrorMesageVisibility(text)
    })
    it('TX_015 Test Sign In form from Sign Up page with negative scenario when all fields are left empty', async () =>{
        await MainPage.clickSignUpButton()
        await SignUpPage.scrollToLogInLinkButton()
        await SignUpPage.clickLogInLinkButton()
        await SignInPage.clickLogInButton()
        let text = 'Required'
        await SignInPage.checkEmptyFieldErrorMesageVisibility(text)
    })
    it('TX_016 Test Sign In form from Contact Us page with negative scenario where all fields are filled with incorrect credentials', async () =>{
        await MainPage.clickContactUsButton()
        await ContactUsPage.scrollToLogInLinkButton()
        await ContactUsPage.clickLogInLinkButton()
        await SignInPage.enterEmailFieldValue(Email)
        await SignInPage.enterPasswordFieldValue(Password)
        await SignInPage.clickRememberMyEmailAddressButton()
        await SignInPage.clickLogInButton()
        let text = 'That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.'
        await SignInPage.checkErrorMesageVisibility(text)
    })
    it('TX_017 Chech that "Support Center" link navigate to "Support Center" page from the "Contact us" page', async () =>{
        await MainPage.clickContactUsButton()
        await ContactUsPage.scrollToSupporCenerLinkButton()
        await ContactUsPage.clickSupportCenerLinkButton()
        await ContactUsPage.checkSupportCenerText()
    })
    it('TX_018 Check that "Confirm email" page is loading after clicking "Submit" button on Sign Up page with filling the correct data in the required fields', async () =>{
        await MainPage.clickSignUpButton()
        await SignUpPage.enterEmailFieldValue(Email)
        await SignUpPage.enterFirstNameFieldValue(Name)
        await SignUpPage.enterLastNameFieldValue(Name)
        await SignUpPage.enterPasswordFieldValue(Password)
        await SignUpPage.clickAgreeButton()
        await SignUpPage.checkSubmitMessageVisibility()
    })
    it('TX_019 Check that "Confirm email" page is loading after clicking "Submit" button on Sign Up page with filling in the correct data in the required fields and "Promo Code" field', async () =>{
        await MainPage.clickSignUpButton()
        await SignUpPage.enterEmailFieldValue(Email)
        await SignUpPage.enterFirstNameFieldValue(Name)
        await SignUpPage.enterLastNameFieldValue(Name)
        await SignUpPage.enterPasswordFieldValue(Password)
        await SignUpPage.clickPromoCodeButton()
        await SignUpPage.enterPromoCodeFieldValue(Number)
        await SignUpPage.clickAgreeButton()
        await SignUpPage.checkSubmitMessageVisibility()
    })
    it('TX_020 Test the "Contact Us" form with negative scenario when all fields are left empty', async () =>{
        await MainPage.clickContactUsButton()
        await ContactUsPage.clickSubmitButton()
        let text = 'This field is required.'
        await ContactUsPage.checkErrorMessageText(text)
    })
})