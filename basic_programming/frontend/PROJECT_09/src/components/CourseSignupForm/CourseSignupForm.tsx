import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./CourseSignupForm.module.css";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  course: string;
  comment: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  course: "",
  comment: "",
};

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Минимум 2 символа").required("Введите имя"),
  email: Yup.string().email("Некорректный email").required("Введите email"),
  phone: Yup.string()
    .matches(/^\+?[0-9\s-]{7,15}$/, "Некорректный номер телефона")
    .required("Введите телефон"),
  course: Yup.string().required("Выберите курс"),
  comment: Yup.string().max(200, "Не более 200 символов"),
});

const CourseSignupForm = () => {
  const handleSubmit = (values: FormValues) => {
    console.log("Форма отправлена:", values);
    alert(`Спасибо за регистрацию, ${values.name}!`);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Регистрация на курс</h2>
        <p className={styles.description}>
          Заполните форму, чтобы записаться на выбранный курс.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={styles.form}>
            {/* Имя */}
            <div className={styles.formGroup}>
              <label htmlFor="name">Имя</label>
              <Field id="name" name="name" placeholder="Введите имя" />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>

            {/* Email */}
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Введите email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            {/* Телефон */}
            <div className={styles.formGroup}>
              <label htmlFor="phone">Телефон</label>
              <Field
                id="phone"
                name="phone"
                placeholder="+49 123 456789"
                type="tel"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className={styles.error}
              />
            </div>

            {/* Курс */}
            <div className={styles.formGroup}>
              <label htmlFor="course">Выберите курс</label>
              <Field as="select" id="course" name="course">
                <option value="">-- выберите курс --</option>
                <option value="frontend">Frontend разработка</option>
                <option value="backend">Backend разработка</option>
                <option value="fullstack">Fullstack разработка</option>
                <option value="design">UI/UX Дизайн</option>
              </Field>
              <ErrorMessage
                name="course"
                component="div"
                className={styles.error}
              />
            </div>

            {/* Комментарий */}
            <div className={styles.formGroup}>
              <label htmlFor="comment">Комментарий (необязательно)</label>
              <Field
                as="textarea"
                id="comment"
                name="comment"
                placeholder="Ваши пожелания..."
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={styles.error}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Отправить заявку
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CourseSignupForm;
