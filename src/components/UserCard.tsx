import React from 'react'

interface UserCardProps {
  name: string
  email: string
}

export function UserCard({ name, email }: UserCardProps) {
  return (
    <div className="user-card">
      <h4>{name}</h4>
      <p>{email}</p>
      <button>Contact User</button>
    </div>
  )
}
