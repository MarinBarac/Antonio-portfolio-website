import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import styles from "./ContactForm.module.scss";
import FormInput from "./FormInput/FormInput";

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    handleSubmit();
  };

  return (
    <section className={styles.section}>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.fullName}>
          <FormInput
            control={control}
            name="firstName"
            rules={{ required: true }}
            type="text"
            placeHolder="First name"
            label="First name"
            error={errors.firstName}
          />
          <FormInput
            control={control}
            name="lastName"
            rules={{ required: true }}
            type="text"
            placeHolder="Last name"
            label="Last name"
            error={errors.lastName}
          />
        </div>
        <FormInput
          control={control}
          name="email"
          rules={{ required: true }}
          type="text"
          placeHolder="you@company.com"
          label="Email"
          error={errors.email}
        />
        <Button type="submit" styleClass="purple">
          Send message
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
