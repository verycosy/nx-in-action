'use client';
import { Button } from 'shared-ui';

export default function Home() {
  return (
    <main>
      <Button onClick={() => alert('wow')}>Alert</Button>
    </main>
  );
}
