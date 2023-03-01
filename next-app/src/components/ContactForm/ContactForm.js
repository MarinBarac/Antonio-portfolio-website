import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import styles from "./ContactForm.module.scss";
import FormInput from "./FormInput/FormInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import sendEmail from "@/services/mail/sendEmail";

const defaultValues = {
  fullName: "",
  email: "",
};

const formSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required!" }),
  email: z
    .string()
    .min(1, { message: "Email is required!" })
    .email({ message: "Please enter valid email!" }),
});

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { ...defaultValues },
    resolver: zodResolver(formSchema),
  });
  const [notificationMessage, setNotificationMessage] = useState("");

  const onSubmit = async (data) => {
    const response = await sendEmail({
      url: "/api/contact",
      mailData: { ...data },
    });

    setNotificationMessage(
      !!response
        ? "Your message was sent succesfully!"
        : "Ooops! Something went wrong, please try again later."
    );
  };
  console.log(notificationMessage);
  return (
    <section className={styles.section}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FormInput
          control={control}
          name="fullName"
          type="text"
          placeHolder="Chuck Norris"
          label="Full name"
          error={errors.fullName}
        />
        <FormInput
          control={control}
          name="email"
          type="text"
          placeHolder="you@company.com"
          label="Email"
          error={errors.email}
        />
        <FormInput
          type="textarea"
          name="message"
          placeHolder="Leave funny message or not..."
          label="Message"
          control={control}
        />
        <Button
          type="submit"
          styleClass="purple"
          style={{ width: "100%", justifyContent: "center" }}
        >
          Send message
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
