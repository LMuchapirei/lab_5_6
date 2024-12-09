import { NoteList } from '@/components/note-list';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Quick Notes</h1>
      <NoteList />
    </main>
  );
}