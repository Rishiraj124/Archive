import { Button } from '@/components/Button';

export default function SignOutButton() {
  return (
    <form action="/auth/signout" method="post">
      <Button type="submit">Sign Out</Button>
    </form>
  );
}
