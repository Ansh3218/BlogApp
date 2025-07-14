"use client"
import BlogCard from '@/components/ui/BlogCard'
import { useBlog } from '@/context/BlogContext'
import React from 'react'
const page = () => {
    const { blogs } = useBlog();
  return (
    <div>
      <BlogCard blogs={blogs} varient="full" />
    </div>
  )
}

export default page
