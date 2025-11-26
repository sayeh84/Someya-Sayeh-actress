'use client'
import * as React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  children?: React.ReactNode
}

export function Card({
  title,
  description,
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={`border rounded-xl shadow-md p-6 bg-white dark:bg-gray-800 ${
        className || ''
      }`}
      {...props}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      )}
      {children}
    </div>
  )
}
