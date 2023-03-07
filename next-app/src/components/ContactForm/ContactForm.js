import { useState } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import sendEmail from "@/services/mail/sendEmail";

import Button from "../Button/Button";
import FormInput from "./FormInput/FormInput";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import styles from "./ContactForm.module.scss";

const defaultValues = {
  fullName: "",
  email: "",
  message: "",
};

const formSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required!" }),
  email: z
    .string()
    .min(1, { message: "Email is required!" })
    .email({ message: "Please enter valid email!" }),
  message: z.string(),
});

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { ...defaultValues },
    resolver: zodResolver(formSchema),
  });
  const [isSending, setIsSending] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const displayMessage = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  }

  const onSubmit = async (data) => {
    setIsSending(true);
    const response = await sendEmail({
      url: "/api/contact",
      mailData: { ...data },
    });
    setIsSending(false);

    setNotificationMessage(
      !!response
        ? "Your message was sent succesfully!"
        : "Ooops! Something went wrong, please try again later."
    );
    reset();
    displayMessage();
  };

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
        <div className={styles.submitContainer}>
          <Button
            type="submit"
            styleClass="purple"
            style={{ width: "100%", justifyContent: "center" }}
          >
            {isSending ? <LoadingSpinner /> : "Send message"}
          </Button>
          <p className={clsx({[styles.message]: true, [styles.show]: showMessage})}>{notificationMessage}</p>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
