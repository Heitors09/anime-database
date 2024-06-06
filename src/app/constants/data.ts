import { CircleAlert, Flame, List, Newspaper, Play } from "lucide-react";

export const headerItems = [
    {
      text: 'Animes',
      href: '/animes',
      icon: Play
    },
    {
      text: 'Top watch',
      href: '/top-watch',
      icon: Flame
    },
    {
      text: 'Genres',
      href: '/genres',
      icon : List
    },
    {
      text: 'News',
      href: '/news',
      icon: Newspaper
    },
    {
      text: 'Recent',
      href: '/recent',
      icon: CircleAlert
    }
]