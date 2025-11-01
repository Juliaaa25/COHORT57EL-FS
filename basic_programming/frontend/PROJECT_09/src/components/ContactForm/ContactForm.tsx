import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

// Типы для данных формы
interface FormValues {
  name: string;
  email: string;
  message: string;
}

// Схема валидации Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .required("Введите имя"),
  email: Yup.string().email("Некорректный email").required("Введите email"),
  message: Yup.string()
    .min(10, "Сообщение должно быть не короче 10 символов")
    .required("Введите сообщение"),
});

function ContactForm() {
  const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = (values: FormValues) => {
    console.log("Отправленные данные:", values);
    alert(`Сообщение отправлено, ${values.name}!`);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Форма обратной связи</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {/* 👉 Здесь: */}
          {/* <Formik> управляет состоянием формы;
    <Form> автоматически подключается к Formik-контексту;
    <Field> связан с конкретным полем данных (name);
    <ErrorMessage> отображает ошибки для указанного поля. */}
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Имя</label>
              <Field
                id="name"
                name="name"
                placeholder="Введите имя"
                className={styles.input}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Введите email"
                className={styles.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Сообщение</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Введите сообщение"
                className={styles.textarea}
              />
              <ErrorMessage
                name="message"
                component="div"
                className={styles.error}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Отправить
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ContactForm;

// Ключевые моменты:

// useFormik — это хук, поэтому:

// Следует правилам хуков React

// Схема Yup передается в конфигурацию через свойство validationSchema

// Formik автоматически:

// Выполняет валидацию при изменении значений и потере фокуса

// Сохраняет ошибки в formik.errors

// Отслеживает, какие поля были "тронуты" в formik.touched
