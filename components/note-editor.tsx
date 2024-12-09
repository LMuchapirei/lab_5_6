"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Save, X } from "lucide-react";

interface NoteEditorProps {
  onSave: (title: string, content: string) => void;
  onCancel: () => void;
}

export function NoteEditor({ onSave, onCancel }: NoteEditorProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSave(title.trim(), content.trim());
      setTitle("");
      setContent("");
    }
  };

  return (
    <Card className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="font-semibold"
          />
        </div>
        <div>
          <Textarea
            placeholder="Write your note here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            size="sm"
          >
            <X className="h-4 w-4 mr-1" />
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={!title.trim() || !content.trim()}
            size="sm"
          >
            <Save className="h-4 w-4 mr-1" />
            Save
          </Button>
        </div>
      </form>
    </Card>
  );
}