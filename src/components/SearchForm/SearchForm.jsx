
import { formToJSON } from "axios";
import { Formik, Field, Form } from "formik";

export default function SearchForm({ onSearch }) {
  return (
    <Formik initialValues={{ query: '' }}
      onSubmit={(values, actions) => {
        onSearch(values.query);
        actions.resetForm()
    }}
    >
      <Form>
        <Field type='text' name='query' />
        <button type="submit">Search</button>
      </Form>
</Formik>
  )
 }