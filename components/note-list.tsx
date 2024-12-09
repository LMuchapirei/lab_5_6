"use client";

import { useState } from "react";
import { NoteEditor } from "./note-editor";
import { NoteCard } from "./note-card";
import { PlusCircle } from "lucide-react";
import { Button } from "./ui/button";

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
};

export function NoteList() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isCreating, setIsCreating] = useState(false);

  const addNote = (title: string, content: string) => {
    const newNote: Note = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date(),
    };
    setNotes((prev) => [newNote, ...prev]);
    setIsCreating(false);
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="space-y-6">
      {!isCreating && (
        <Button
          onClick={() => setIsCreating(true)}
          className="w-full"
          variant="outline"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Note
        </Button>
      )}
      
      {isCreating && (
        <div className="mb-6">
          <NoteEditor
            onSave={addNote}
            onCancel={() => setIsCreating(false)}
          />
        </div>
      )}

      {notes.length === 0 && !isCreating ? (
        <div className="text-center text-muted-foreground py-12">
          No notes yet. Create your first note!
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={deleteNote}
            />
          ))}
        </div>
      )}
    </div>
  );
}