import { motion } from "framer-motion"
import { FiX } from "react-icons/fi"
import Button from "./reusable/Button"
import useDetectLanguage from "../hooks/useDetectLanguage";
import Send from "./api/Send";
import { Formik } from "formik";
import * as Yup from 'yup';
import FormInput from './reusable/FormInput';
import SubmitButton from "./reusable/SubmitButton";

const selectOptionsEn = [
  'Web Application',
  'Progressive Web Application (PWA)',
  'Solar Energy',
  'CCTV'
];

const selectOptionsEs = [
  'Aplicación Web',
  'Aplicación Web Progresiva (PWA)',
  'Energia Solar',
  'CCTV'
];

const HireModal = ({ onClose, onRequest }) => {
  const isSpanish = useDetectLanguage();

  const onSubmit = async (
    { name, email, subject, message },
    { setSubmitting, setErrors, resetForm }
  ) => {
    try {
      await Send({ name, email, subject, message, spanish: isSpanish });
      resetForm();
    } catch (error) {
      error.message ? setErrors({ "other": error.message }) : error;
    } finally {
      setSubmitting(false);
    }
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().min(6, isSpanish ? "Minimo 6 caracteres" : "min 6 charts").required(isSpanish ? 'El nombre es requerido' : 'The name is required'),
    subject: Yup.string().required(isSpanish ? 'Debe seleccionar un tipo de proyecto' : 'You must select a project type'),
    email: Yup.string().email(isSpanish ? 'Email invalido' : 'invalid email').required(isSpanish ? 'Debe indicar un email' : 'The email is required')
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
    >
      {/* Modal Backdrop */}
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              <h5 className=" text-primary-dark dark:text-primary-light text-xl">
                {isSpanish ? "¿Qué proyecto estás buscando?" : " What project are you looking for?"}

              </h5>
              <button
                onClick={onClose}
                className="px-4 font-bold text-primary-dark dark:text-primary-light"
              >
                <FiX className="text-3xl" />
              </button>
            </div>
            <div className="modal-body p-5 w-full h-full">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  subject: "",
                  message: ""
                }}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {({
                  values,
                  handleSubmit,
                  handleChange,
                  errors,
                  touched,
                  handleBlur,
                  isSubmitting
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="max-w-xl m-2 text-left"
                  >
                    <FormInput
                      inputLabel={isSpanish ? "Nombre completo" : "Full Name"}
                      labelFor="name"
                      inputType="text"
                      inputId="name"
                      inputName="name"
                      placeholderText={isSpanish ? "Tu nombre" : "Your Name"}
                      ariaLabelName="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {
                      errors.name && touched.name && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                          <strong className="font-bold">Error! </strong>
                          <span className="block sm:inline">{errors.name}</span>
                        </div>
                      )
                    }
                    <FormInput
                      inputLabel={isSpanish ? "Correo electrónico" : "Email"}
                      labelFor="email"
                      inputType="email"
                      inputId="email"
                      inputName="email"
                      placeholderText={isSpanish ? "Tu correo electrónico" : "Your email"}
                      ariaLabelName="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {
                      errors.email && touched.email && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                          <strong className="font-bold">Error! </strong>
                          <span className="block sm:inline">{errors.email}</span>
                        </div>
                      )
                    }
                    <div className="mt-3">
                      <label htmlFor="subject">Proyecto</label>
                      <select
                        className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                        id="subject"
                        name="subject"
                        type="text"
                        required=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-label={isSpanish ? "Categoria del proyecto" : "Project Category"}
                      >
                        <option
                              className="text-normal sm:text-md"
                              key="1"
                            >
                              {isSpanish ? 'Por favor seleccione...': 'Please choose one category'}
                            </option>

                        {isSpanish ? (
                          selectOptionsEs.map((option) => (
                            <option
                              className="text-normal sm:text-md"
                              key={option}
                              value={option}

                            >
                              {option}
                            </option>
                          ))
                        ) : (selectOptionsEn.map((option) => (
                          <option
                            className="text-normal sm:text-md"
                            key={option}
                            value={option}
                          >
                            {option}
                          </option>
                        )))}
                      </select>
                      {
                      errors.subject && touched.subject && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                          <strong className="font-bold">Error! </strong>
                          <span className="block sm:inline">{errors.subject}</span>
                        </div>
                      )
                    }
                    </div>

                    <div className="mt-3">
                      <label
                        className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                        htmlFor="message"
                      >
                        {isSpanish ? "Mensaje" : "Message"}
                      </label>
                      <textarea
                        className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                        id="message"
                        name="message"
                        cols="14"
                        rows="5"
                        aria-label="Message"
                      ></textarea>
                    </div>
                    {errors["-"] && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Error! </strong>
                        <span className="block sm:inline">{errors["other"]}</span>
                      </div>
                    )}
                    <SubmitButton isSpanish={isSpanish} isSubmitting={isSubmitting} onClick={onClose} />
                  </form>
                )}

              </Formik>
            </div>
            <div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
              <span
                onClick={onClose}
                type="button"
                className="px-4
									sm:px-6
									py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light
									rounded-md
									focus:ring-1 focus:ring-indigo-900 duration-500"
                aria-label="Close Modal"
              >
                <Button title={isSpanish ? "Cerrar" : "Close"} />
              </span>
            </div>
          </div>
        </div>
      </main>
    </motion.div >
  )
}

export default HireModal