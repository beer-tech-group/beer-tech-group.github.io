import { FC, memo } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactUsForm from "./ContactUsForm";

type ContactUsWrapperProps = {};

const ContactUsWrapper: FC<ContactUsWrapperProps> = ({}): JSX.Element => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LezKyglAAAAADkwbot5tqKAqAF-FmKYMo69ZGz_">
      <ContactUsForm />
    </GoogleReCaptchaProvider>
  );
};

export default memo(ContactUsWrapper);
