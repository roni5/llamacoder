'use client'

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <h2 className="text-2xl font-bold">{title}</h2>;
}
