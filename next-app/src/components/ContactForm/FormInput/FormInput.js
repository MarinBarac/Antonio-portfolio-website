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
  const containerClass = clsx({
    [styles.container]: true,
    [styles.showError]: error
  });
  
  return (
    <div className={containerClass}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
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
            />
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
      <label className={styles.error}>
        {error?.message}
      </label>
    </div>
  );
};

export default FormInput;
