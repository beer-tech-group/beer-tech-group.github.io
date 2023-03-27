import type { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select";

type ContactUsFormFields = {
  example: string;
  exampleRequired: string;
  area: string;
};

type ContactUsFormProps = {};

const options = [
  { value: "sponsor", label: "Voglio diventare sponsor" },
  { value: "speech", label: "Voglio proporre uno speech" },
  { value: "other", label: "Altro" },
];

const ContactUsForm: FC<ContactUsFormProps> = ({}): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactUsFormFields>();
  const onSubmit: SubmitHandler<ContactUsFormFields> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-area">
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={options[0]}
          isClearable={false}
          options={options}
        />
      </div>
      <div className="form-area">
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />
        <span className="hint">You should type someting</span>
      </div>

      <div
        className={`form-area ${errors.exampleRequired ? "error-state" : ""}`}
      >
        {/* include validation with required or other standard HTML validation rules */}
        <input
          placeholder="Test me"
          {...register("exampleRequired", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && (
          <span className="hint">This field is required</span>
        )}
      </div>

      <div className="form-area">
        <textarea placeholder="write" {...register("area")}></textarea>
      </div>

      <input type="submit" />
    </form>
  );
};

export default ContactUsForm;
