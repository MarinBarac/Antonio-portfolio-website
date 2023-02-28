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
      <label for={name} className={styles.label}>
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value, ref } }) => (
          <input
            type={type}
            onChange={onChange}
            value={value}
            placeholder={placeHolder}
            inputRef={ref}
            className={styles.input}
          />
        )}
      />
      {error && <labe className={styles.error}>{error.message}</labe>}
    </div>
  );
};

export default FormInput;
