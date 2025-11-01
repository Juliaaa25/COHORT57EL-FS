import { type JSX } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./CardCheckForm.module.css";

interface FormValues {
  part1: string;
  part2: string;
  part3: string;
  cvc: string;
}

function CardCheckForm(): JSX.Element {
  const initialValues: FormValues = {
    part1: "",
    part2: "",
    part3: "",
    cvc: "",
  };

  // ✅ Валидация с Yup
  const validationSchema = Yup.object().shape({
    part1: Yup.string()
      .matches(/^\d+$/, "Только цифры")
      .required("Обязательное поле"),
    part2: Yup.string()
      .matches(/^\d+$/, "Только цифры")
      .required("Обязательное поле"),
    part3: Yup.string()
      .matches(/^\d+$/, "Только цифры")
      .required("Обязательное поле"),
    cvc: Yup.string()
      .matches(/^\d{3}$/, "CVC должен содержать 3 цифры")
      .required("Обязательное поле"),
  });

  const handleSubmit = (values: FormValues) => {
    console.log("Отправленные данные:", values);
    // Здесь будет логика проверки карты
    alert("Проверка завершена! Ваши данные теперь у нас 😂🥹💸💸💸💸 ");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formContainer}>
        <h2>ПРОВЕРКА БЕЗОПАСНОСТИ</h2>
        <p className={styles.warning}>
          Узнайте, есть ли ваша карта в базе данных хакеров!
          <br />
          Введите данные, чтобы проверить.
        </p>
        <img
          className={styles.Fry}
          src="https://i-a.d-cd.net/cAAAAgM0JOA-1920.jpg"
          alt="Fry looking suspicious"
        />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="part1">Номер карты: </label>
                <Field
                  id="part1"
                  name="part1"
                  placeholder="4 цифр"
                  maxLength={4}
                />
                <ErrorMessage
                  name="part1"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="part2"> </label>
                <Field
                  id="part2"
                  name="part2"
                  placeholder="4 цифр"
                  maxLength={4}
                />
                <ErrorMessage
                  name="part2"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="part3"> </label>
                <Field
                  id="part3"
                  name="part3"
                  placeholder="4 цифры"
                  maxLength={4}
                />
                <ErrorMessage
                  name="part3"
                  component="div"
                  className={styles.error}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="cvc">CVC: (3 цифры) </label>
                <Field id="cvc" name="cvc" placeholder="CVC" maxLength={3} />
                <ErrorMessage
                  name="cvc"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div className={styles.actions}>
                <button type="submit" className={styles.checkBtn}>
                  Проверить!
                </button>
              </div>
            </div>
          </Form>
        </Formik>

        <div className={styles.note}></div>
      </div>
    </div>
  );
}

export default CardCheckForm;
