import clsx from "clsx";
import { Controller } from "react-hook-form";
import styles from "./FormInput.module.scss";

const FormInput = ({
  control,
  name,
  rules,
  type,
  placeHolder,
  label,
  error,
}) => {

  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        <label className={clsx({ [styles.error]: true, [styles.show]: error })}>
          {error?.message}
        </label>
      </div>
      <Controller
        control={control}
        name={name}
        rules={{ ...rules }}
        render={({ field: { onChange, value, ref } }) => {
          return type === "textarea" ? (
            <textarea
              rows="5"
              onChange={onChange}
              value={value}
              placeholder={placeHolder}
              ref={ref}
              className={clsx(styles.input, styles.textarea)}
              style={{ height: "128px" }}
            ></textarea>
          ) : (
            <input
              type={type}
              onChange={onChange}
              value={value}
              placeholder={placeHolder}
              ref={ref}
              className={styles.input}
            />
          );
        }}
      />
    </div>
  );
};

export default FormInput;
