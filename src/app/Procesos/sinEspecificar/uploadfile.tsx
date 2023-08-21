export default function UploadFile() {
  async function handleSubmit() {
    'use server';
    // ...
  }

  async function submitImage() {
    'use server';
  }

  return (
    <form action={handleSubmit}>
      <input
        type='text'
        name='name'
      />
      <input
        type='file'
        multiple={true}
        formAction={submitImage}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}
