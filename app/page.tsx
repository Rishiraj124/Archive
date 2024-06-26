export const runtime = 'edge';
import AuthForm from './components/AuthForm';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
      <h1 className="alert-text">Welcome to Fathers Club</h1>
      <ol className="breadcrumb" aria-label="breadcrumbs">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Library</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <a href="#">Data</a>
        </li>
      </ol>
      <AuthForm />
    </div>
  );
}
