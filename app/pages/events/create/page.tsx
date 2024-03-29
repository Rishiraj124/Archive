import SignOutButton from '@/app/components/SignOutButton';
import './events.scss';
const CreateEvent = () => {
  return (
    <>
      <section>
        <h3>Create Event</h3> <SignOutButton />
      </section>
    </>
  );
};
export const runtime = 'edge';
export default CreateEvent;
