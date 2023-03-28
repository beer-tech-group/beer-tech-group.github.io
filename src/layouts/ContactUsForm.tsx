import type { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select";
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
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsFormFields>({
    defaultValues: {
      area: options[0] as SelectOption,
      name: "",
      email: "",
      body: "",
    },
  });
  const onSubmit: SubmitHandler<ContactUsFormFields> = (data) =>
    console.log(data);

  return (
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
          {...register("name", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.email && <span className="hint">Campo obbligatorio</span>}
      </div>

      <div className={`form-area ${errors.email ? "error-state" : ""}`}>
        <span className="hint">Dove ti possiamo contattare?</span>
        <input
          placeholder="jane.doe@email.com"
          {...register("email", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.email && <span className="hint">Campo obbligatorio</span>}
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
  );
};

export default ContactUsForm;
