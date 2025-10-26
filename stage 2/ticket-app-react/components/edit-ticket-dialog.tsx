"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Ticket } from "@/app/dashboard/page"

interface EditTicketDialogProps {
  ticket: Ticket
  onClose: () => void
  onUpdate: (ticket: Ticket) => void
}

export function EditTicketDialog({ ticket, onClose, onUpdate }: EditTicketDialogProps) {
  const [title, setTitle] = useState(ticket.title)
  const [description, setDescription] = useState(ticket.description)
  const [status, setStatus] = useState<"open" | "in-progress" | "closed">(ticket.status)
  const [priority, setPriority] = useState<"low" | "medium" | "high">(ticket.priority)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      if (!title.trim()) {
        setError("Title is required")
        setLoading(false)
        return
      }

      if (!description.trim()) {
        setError("Description is required")
        setLoading(false)
        return
      }

      const updatedTicket: Ticket = {
        ...ticket,
        title: title.trim(),
        description: description.trim(),
        status,
        priority,
        updatedAt: new Date().toISOString(),
      }

      onUpdate(updatedTicket)
      onClose()
    } catch (err) {
      setError("Failed to update ticket")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit Ticket</DialogTitle>
          <DialogDescription>Update ticket details</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-foreground">
              Title
            </label>
            <Input
              id="title"
              placeholder="Enter ticket title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium text-foreground">
              Description
            </label>
            <Textarea
              id="description"
              placeholder="Enter ticket description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={loading}
              rows={4}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="status" className="text-sm font-medium text-foreground">
                Status
              </label>
              <Select value={status} onValueChange={(value: any) => setStatus(value)} disabled={loading}>
                <SelectTrigger id="status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="priority" className="text-sm font-medium text-foreground">
                Priority
              </label>
              <Select value={priority} onValueChange={(value: any) => setPriority(value)} disabled={loading}>
                <SelectTrigger id="priority">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update Ticket"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
