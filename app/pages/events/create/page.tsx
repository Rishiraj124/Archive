import SignOutButton from '@/app/components/SignOutButton';
import './events.scss';

export const runtime = 'edge';
const CreateEvent = () => {
  return (
    <>
      <section>
        <h3>Create Event</h3> <SignOutButton />
      </section>
    </>
  );
};
export default CreateEvent;
