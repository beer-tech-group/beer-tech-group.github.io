import emailjs from "@emailjs/browser";
import { FC, useCallback, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select";
import LottieLoader, {
  LottieLoaderProps,
} from "../components/feedback/LottieLoader";
import "./ContactUsForm.scss";

type SelectOption = {
  value: string;
  label: string;
};

const options: SelectOption[] = [
  { value: "sponsor", label: "Voglio diventare sponsor" },
  { value: "other", label: "Altro" },
];

type ContactUsFormFields = {
  name: string;
  email: string;
  body: string;
  area: SelectOption;
};

type ContactUsFormProps = {};

const ContactUsForm: FC<ContactUsFormProps> = ({}): JSX.Element => {
  const [loadingIcon, setLoadingIcon] = useState<
    (LottieLoaderProps & { text: string }) | null
  >(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsFormFields>({
    mode: "onBlur",
    defaultValues: {
      area: options[0] as SelectOption,
      name: "",
      email: "",
      body: "",
    },
  });
  const onSubmit: SubmitHandler<ContactUsFormFields> = useCallback(
    async (data) => {
      setLoadingIcon({
        src: "/animations/beer.json",
        text: "Invio in corso...",
      });

      if (!executeRecaptcha) {
        setLoadingIcon({
          src: "/animations/error.json",
          loop: false,
          text: "Ooops! Sembra che il nostro server di posta non voglia lavorare oggi. Per favore riprova più tardi.",
        });
        return;
      }

      const token = await executeRecaptcha("sendEmail");

      console.log(token);

      emailjs
        .send(
          `service_w51w9ax`,
          `template_y3edn1j`,
          {
            from_name: data.name,
            from_subject: data.area.label,
            message: data.body,
            reply_to: data.email,
          },
          `YlHtx26g2pVc9hXVK`
        )
        .then(
          function () {
            setTimeout(() => {
              setLoadingIcon({
                src: "/animations/success.json",
                loop: false,
                text: "Email inviata con successo! Ti contatteremo presto ;)",
              });
            }, 3000);
          },
          function () {
            setLoadingIcon({
              src: "/animations/error.json",
              loop: false,
              text: "Ooops! Sembra che il nostro server di posta non voglia lavorare oggi. Per favore riprova più tardi.",
            });
          }
        );
    },
    [executeRecaptcha]
  );

  return (
    <>
      {loadingIcon !== null ? (
        <div className="text-center">
          <LottieLoader {...loadingIcon} />
          <h3>{loadingIcon.text}</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-area">
            <span className="hint">Cosa vuoi dirci?</span>
            <Controller
              name="area"
              control={control}
              render={({ field }) => (
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isClearable={false}
                  options={options}
                  {...field}
                />
              )}
            />
          </div>
          <div className={`form-area ${errors.name ? "error-state" : ""}`}>
            <span className="hint">Come ti chiami?</span>
            <input
              placeholder="Jane Doe"
              {...register("name", {
                required: {
                  value: true,
                  message: "Campo obbligatorio",
                },
              })}
            />
            {errors.name && <span className="hint">{errors.name.message}</span>}
          </div>

          <div className={`form-area ${errors.email ? "error-state" : ""}`}>
            <span className="hint">Dove ti possiamo contattare?</span>
            <input
              placeholder="jane.doe@email.com"
              {...register("email", {
                required: {
                  value: true,
                  message: "Campo obbligatorio",
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Inserisci un formato email valido",
                },
              })}
            />
            {errors.email && (
              <span className="hint">{errors.email.message}</span>
            )}
          </div>

          <div className="form-area">
            <textarea
              placeholder="Scrivici"
              {...register("body")}
              rows={6}
            ></textarea>
          </div>

          <div className="flex flex-row items-center justify-center">
            <input type="submit" />
          </div>
        </form>
      )}
    </>
  );
};

export default ContactUsForm;
