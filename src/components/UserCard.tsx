import React from 'react'

interface UserCardProps {
  name: string
  email: string
}

export function UserCard({ name, email }: UserCardProps) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>{email}</p>
      <button>Contact User</button>
    </div>
  )
}
