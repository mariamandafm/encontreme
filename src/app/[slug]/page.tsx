"use client";

import BasicTemplate from '@/components/basic-template/BasicTemplate'
import React from 'react'

export default function Page({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  return (
    <div>
      <BasicTemplate />
    </div>
  )
}