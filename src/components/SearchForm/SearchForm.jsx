
import toast, { Toaster } from 'react-hot-toast';
import { Formik, Field, Form } from "formik";
import css from './SearchForm'


export default function SearchForm({ onSearch }) {
  return (
    <header className={css.header}>
          <Formik initialValues={{ query: '' }}
      onSubmit={(values, actions) => {
        if (values.query === '') {
           toast.error('Please enter your search query!')
        }
        onSearch(values.query);
        actions.resetForm()
      }}
    >
      <Form className={css.form}>
        <Field className={css.field} type='text' name='query' />
        <button type="submit">Search</button>
        <Toaster/>
      </Form>
    </Formik>
</header>
  )
}