"use client";

import { formatDistanceToNow } from "date-fns";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import type { Note } from "./note-list";

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
}

export function NoteCard({ note, onDelete }: NoteCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-start gap-2">
          <span className="line-clamp-2">{note.title}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-destructive"
            onClick={() => onDelete(note.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground whitespace-pre-wrap line-clamp-3">
          {note.content}
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Created {formatDistanceToNow(note.createdAt)} ago
        </p>
      </CardFooter>
    </Card>
  );
}