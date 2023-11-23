import { Formik } from 'formik';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import useDetectLanguage from '../../hooks/useDetectLanguage';
import * as Yup from 'yup';


const ContactForm = () => {
	const isSpanish = useDetectLanguage();
	const onSubmit = async (values) => {
		console.log(values)
	}

	const validationSchema = Yup.object().shape({
		name: Yup.string().trim().min(6, isSpanish ? "Minimo 6 caracteres" : "min 6 charts").required(isSpanish ? 'El nombre es requerido' : 'The name is required'),
		subject: Yup.string().required(isSpanish ? 'Debe indicar un asunto' : 'The subject is required'),
		email: Yup.string().email(isSpanish ? 'Email invalido' : 'invalid email').required(isSpanish ? 'Debe indicar un email' : 'The email is required'),
		message: Yup.string().trim().min(6, isSpanish ? "Minimo 6 caracteres" : "min 6 charts").required(isSpanish ? 'Mensaje es requerido' : 'message is required')
	});
	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<Formik
					initialValues={{ name: "", email: "", subject: "", message: "", }}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				>
					{({values, handleSubmit, handleChange, errors, touched, handleBlur}) => (
						<form
							onSubmit={handleSubmit}
							className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
						>
							<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
								{isSpanish ? "Formulario de Contacto":"Contact Form"}
							</p>
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
							<FormInput
								inputLabel={isSpanish ? "Asunto" : "Subject"}
								labelFor="subject"
								inputType="text"
								inputId="subject"
								inputName="subject"
								placeholderText={isSpanish ? "Asunto" : "Subject"}
								ariaLabelName="Subject"
								value={values.subject}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{
								errors.subject && touched.subject && (
									<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
										<strong className="font-bold">Error! </strong>
										<span className="block sm:inline">{errors.subject}</span>
									</div>
								)
							}
							<div className="mt-6">
								<label
									className="block text-lg text-primary-dark dark:text-primary-light mb-2"
									htmlFor="message"
								>
									{isSpanish ? "Mensaje" :"Message"}
								</label>
								<textarea
									className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
									id="message"
									name="message"
									cols="14"
									rows="6"
									aria-label="Message"
								></textarea>
								{
									errors.message && touched.message && (
										<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
											<strong className="font-bold">Error! </strong>
											<span className="block sm:inline">{errors.message}</span>
										</div>
									)
								}
							</div>

							<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
								<Button
									title={isSpanish ? "Enviar mensaje":"Send Message"}
									type="submit"
									aria-label={isSpanish ? "Enviar mensaje":"Send Message"}
								/>
							</div>
						</form>
					)}

				</Formik>

			</div>
		</div>
	);
};

export default ContactForm;
