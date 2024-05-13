
import { Formik, Form, Field } from "formik"
import css from './SearchBar.module.css'
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({onSearch}) {
  return (<header className={css.header}>
    <Formik initialValues={{ query: '' }}
      onSubmit={(values, actions) => {
        if (values.query === '') {
  toast.error('Please enter your search query!')
}
      onSearch(values.query);
      actions.resetForm()
    }}>
      <Form className={css.form}>
        <Field className={css.field} type='text' name='query' autoComplete="off"
      autoFocus
       placeholder="Search images and photos"/>
        <button className={css.btn} type="submit">Search</button>
        <Toaster/>
      </Form>
</Formik>
</header>
)
}