'use client'

import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

interface SocialMediaProps {
  className?: string
}

export function SocialMedia({ className }: SocialMediaProps) {
  const socials = [
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/someya_sayeh_boukris/',
      color: 'text-pink-500',
    },
    {
      name: 'YouTube',
      icon: <FaYoutube />,
      url: 'https://www.youtube.com/@someya9862',
      color: 'text-red-600',
    },
    {
      name: 'TikTok',
      icon: <SiTiktok />,
      url: 'https://www.tiktok.com/@someyasayeh',
      color: 'text-black',
    },
  ]

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl hover:scale-110 transition-transform ${social.color}`}
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}
