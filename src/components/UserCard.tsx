import React from 'react'

interface UserCardProps {
  name: string
  email: string
}

export function UserCard({ name, email }: UserCardProps) {
  return (
    <div className="user-card" data-testid="user-card">
      <h3 data-testid="user-name">{name}</h3>
      <p data-testid="user-email">{email}</p>
      <button data-testid="contact-button">Contact User</button>
    </div>
  )
}
