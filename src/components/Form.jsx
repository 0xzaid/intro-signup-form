import { useForm } from 'react-hook-form';
import styles from '../styles/Form.module.css'
import { ErrorMessage } from "@hookform/error-message";

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.wrapper}>
            <input type="text" placeholder="First Name"
              {...register("First Name", {
                required: "First name cannot be empty.",
                maxLength: 80
              })}
              className={errors["First Name"] ? styles.inputError : ''}
            />
            <ErrorMessage className={styles.error} errors={errors} name="First Name" as="p" />
          </div>

          <div className={styles.wrapper}>
            <input type="text" placeholder="Last Name"
              {...register("Last Name", {
                required: "Last Name cannot be empty",
                maxLength: 100
              })}
              className={errors["Last Name"] ? styles.inputError : ''}
            />
            <ErrorMessage className={styles.error} errors={errors} name="Last Name" as="p" />

          </div>
          <div className={styles.wrapper}>
            <input type="text" placeholder="Email Address"
              {...register("Email Address", {
                required: "Looks like this is not an email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Looks like this is not an email"
                }
              })}
              className={errors["Email Address"] ? styles.inputError : ''}
            />
            <ErrorMessage className={styles.error} errors={errors} name="Email Address" as="p" />
          </div>
          <div className={styles.wrapper}>
            <input type="password" placeholder="Password"
              {...register("Password", {
                required: "Password cannot be empty",
                min: 6,
                maxLength: 20
              })}
              className={errors["Password"] ? styles.inputError : ''}
            />
            <ErrorMessage className={styles.error} errors={errors} name="Password" as="p" />
          </div>
          <input className={styles.submit} type="submit" value="CLAIM YOUR FREE TRIAL" />
        </form>
        <footer>By clicking the button, you are agreeing to our <a>Terms and Services</a></footer>
      </div>
    </>



  );

}

export default Form;